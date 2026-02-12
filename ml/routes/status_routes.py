from fastapi import APIRouter, Request
from fastapi.responses import JSONResponse
from datetime import datetime
import logging
import pytz

router = APIRouter()

# Configure loggers
logging.basicConfig(level=logging.INFO)
user_logger = logging.getLogger("user_pings")
cron_logger = logging.getLogger("cron_pings")

# Set your local timezone
local_timezone = pytz.timezone("Asia/Kolkata")

# Deployment timestamp (frozen once at startup)
DEPLOYED_AT = datetime.now(local_timezone).strftime("%d-%m-%Y %I:%M %p")

@router.get("/status")
async def status(request: Request):
    current_time = datetime.now(local_timezone).strftime("%d-%m-%Y %I:%M %p")
    heartbeat = request.headers.get("X-Heartbeat", "false").lower() == "true"
    
    if heartbeat:
        cron_logger.info(f"Cronjob heartbeat ping at {current_time}")
    else:
        user_logger.info(f"User accessed /status at {current_time}")
    
    return JSONResponse(
        content={
            "status": "online",
            "deployed_at": DEPLOYED_AT,
            "checked_at": current_time
        },
        status_code=200
    )

