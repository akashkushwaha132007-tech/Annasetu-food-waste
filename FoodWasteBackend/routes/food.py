from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models import Food
from schemas import FoodCreate

router = APIRouter(
    prefix="/food",
    tags=["Food"]
)


# Add Food
@router.post("/add")
def add_food(food: FoodCreate, db: Session = Depends(get_db)):

    new_food = Food(
        food_name=food.food_name,
        quantity=food.quantity,
        location=food.location,
        expiry_time=food.expiry_time,
        donor_name=food.donor_name,
        status="Available"
    )

    db.add(new_food)
    db.commit()
    db.refresh(new_food)

    return {
        "message": "Food Added Successfully",
        "food_id": new_food.id
    }


# Get All Food
@router.get("/")
def get_food(db: Session = Depends(get_db)):
    return db.query(Food).all()


# Get Food By ID
@router.get("/{food_id}")
def get_food_by_id(food_id: int, db: Session = Depends(get_db)):

    food = db.query(Food).filter(Food.id == food_id).first()

    if not food:
        raise HTTPException(status_code=404, detail="Food Not Found")

    return food


# Accept Food
@router.put("/accept/{food_id}")
def accept_food(food_id: int, db: Session = Depends(get_db)):

    food = db.query(Food).filter(Food.id == food_id).first()

    if not food:
        raise HTTPException(status_code=404, detail="Food Not Found")

    food.status = "Accepted"

    db.commit()

    return {
        "message": "Food Accepted Successfully"
    }


# Deliver Food
@router.put("/deliver/{food_id}")
def deliver_food(food_id: int, db: Session = Depends(get_db)):

    food = db.query(Food).filter(Food.id == food_id).first()

    if not food:
        raise HTTPException(status_code=404, detail="Food Not Found")

    food.status = "Delivered"

    db.commit()

    return {
        "message": "Food Delivered Successfully"
    }


# Delete Food
@router.delete("/delete/{food_id}")
def delete_food(food_id: int, db: Session = Depends(get_db)):

    food = db.query(Food).filter(Food.id == food_id).first()

    if not food:
        raise HTTPException(status_code=404, detail="Food Not Found")

    db.delete(food)
    db.commit()

    return {
        "message": "Food Deleted Successfully"
    }