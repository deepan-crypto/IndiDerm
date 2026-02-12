from fastapi import APIRouter, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Dict
import numpy as np
import cv2
from PIL import Image
import logging

from classify import ensemble_classify
from services.symptoms import confirm_disease_with_symptoms, process_user_responses
from services.out_of_class import detect_unknown_disease

router = APIRouter()
logger = logging.getLogger("diagnosis")

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    if not file:
        raise HTTPException(status_code=400, detail="No file uploaded")
    if file.filename == "":
        raise HTTPException(status_code=400, detail="No selected file")

    # Validate file type
    if file.content_type not in ["image/jpeg", "image/png"]:
        raise HTTPException(status_code=400, detail="Invalid file type. Please upload a JPEG or PNG image.")

    try:
        image_bytes = await file.read()

        # Convert bytes to PIL Image (same as original ml/app.py logic)
        img = Image.fromarray(
            cv2.cvtColor(
                cv2.imdecode(np.frombuffer(image_bytes, np.uint8), cv2.IMREAD_COLOR),
                cv2.COLOR_BGR2RGB
            )
        )

        # Run model prediction directly (no HTTP call needed!)
        top_3_predictions = ensemble_classify(img)

        logger.info(f"Top 3 Predictions: {top_3_predictions}")

        if detect_unknown_disease(top_3_predictions):
            return JSONResponse(content={"message": "Unknown disease detected."})

        questions = confirm_disease_with_symptoms(top_3_predictions)
        return JSONResponse(content={"questions": questions})

    except Exception as e:
        logger.exception("Prediction failed.")
        raise HTTPException(status_code=500, detail=str(e))


class SymptomResponse(BaseModel):
    answers: Dict[str, str]  # symptom name -> '1' or '0'

@router.post("/confirm_symptoms")
async def confirm_symptoms(data: SymptomResponse):
    logger.info(f"Received symptom data: {data}")

    confirmed_disease, severity = process_user_responses(data.answers)

    logger.info(f"Confirmed Disease: {confirmed_disease}, Severity: {severity}")

    return {
        "disease": confirmed_disease,
        "severity": severity,
        "message": f"Disease: {confirmed_disease}, Severity: {severity}"
    }
