from sqlalchemy import Column, Integer, String
from database import Base


# ---------------- USER ----------------

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)


# ---------------- FOOD ----------------

class Food(Base):
    __tablename__ = "foods"

    id = Column(Integer, primary_key=True, index=True)
    food_name = Column(String, nullable=False)
    quantity = Column(String, nullable=False)
    location = Column(String, nullable=False)
    expiry_time = Column(String, nullable=False)
    donor_name = Column(String, nullable=False)

    status = Column(String, default="Available")


# ---------------- NGO ----------------

class NGO(Base):
    __tablename__ = "ngos"

    id = Column(Integer, primary_key=True, index=True)
    ngo_name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    phone = Column(String, nullable=False)
    address = Column(String, nullable=False)