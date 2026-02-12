import logging
from logging.handlers import RotatingFileHandler
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from datetime import datetime
import os
import pytz

from routes.status_routes import router as status_router
from routes.diagnosis_routes import router as diagnosis_router
from routes.info_routes import router as info_router

# Configure logging
os.makedirs("logs", exist_ok=True)
logging.basicConfig(level=logging.INFO)
startup_logger = logging.getLogger("startup_events")

# Timezone
local_timezone = pytz.timezone("Asia/Kolkata")
DEPLOYED_AT = datetime.now(local_timezone).strftime("%d-%m-%Y %I:%M %p")

# Lifespan event handler
@asynccontextmanager
async def lifespan(app: FastAPI):
    startup_logger.info(f"Idemdrem API deployed at {DEPLOYED_AT}")
    yield

# Create FastAPI app
app = FastAPI(
    title="Idemdrem API",
    description="AI-Powered Skin Disease Detection by LogiDevs",
    lifespan=lifespan
)

# CORS — update allow_origins with your frontend deployment URL
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for deployment; restrict in production if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register all routes under /api prefix
app.include_router(status_router, prefix="/api")
app.include_router(diagnosis_router, prefix="/api")
app.include_router(info_router, prefix="/api")

@app.get("/")
async def root():
    return {
        "app": "Idemdrem",
        "status": "online",
        "deployed_at": DEPLOYED_AT,
        "by": "LogiDevs"
    }

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 7860))
    uvicorn.run(app, host="0.0.0.0", port=port)
