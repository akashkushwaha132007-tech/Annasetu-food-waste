from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(
    prefix="/ai",
    tags=["AI Prediction"]
)


class PredictionInput(BaseModel):
    quantity: int
    expiry_hours: int


@router.post("/predict")
def predict(data: PredictionInput):

    if data.quantity >= 20 or data.expiry_hours <= 3:
        prediction = "High Waste Risk"
    elif data.quantity >= 10:
        prediction = "Medium Waste Risk"
    else:
        prediction = "Low Waste Risk"

    return {
        "prediction": prediction
    }