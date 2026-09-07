from pydantic import BaseModel


# ---------------- USER ----------------

class UserCreate(BaseModel):
    username: str
    email: str
    password: str


class UserLogin(BaseModel):
    email: str
    password: str


# ---------------- FOOD ----------------

class FoodCreate(BaseModel):
    food_name: str
    quantity: str
    location: str
    expiry_time: str
    donor_name: str


# ---------------- NGO ----------------

class NGOCreate(BaseModel):
    ngo_name: str
    email: str
    phone: str
    address: str