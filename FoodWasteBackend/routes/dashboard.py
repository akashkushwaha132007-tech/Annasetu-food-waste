from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import User, Food, NGO

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/")
def get_dashboard(db: Session = Depends(get_db)):

    total_users = db.query(User).count()
    total_food = db.query(Food).count()
    total_ngos = db.query(NGO).count()

    available_food = db.query(Food).filter(
        Food.status == "Available"
    ).count()

    accepted_food = db.query(Food).filter(
        Food.status == "Accepted"
    ).count()

    delivered_food = db.query(Food).filter(
        Food.status == "Delivered"
    ).count()

    return {
        "total_users": total_users,
        "total_food": total_food,
        "total_ngos": total_ngos,
        "available_food": available_food,
        "accepted_food": accepted_food,
        "delivered_food": delivered_food
    }