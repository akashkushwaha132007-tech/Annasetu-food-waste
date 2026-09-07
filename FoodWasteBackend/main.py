from fastapi import FastAPI

from database import engine, Base

import models

from routes.user import router as user_router
from routes.food import router as food_router
from routes.ngo import router as ngo_router
from routes.dashboard import router as dashboard_router
from routes.ai import router as ai_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Food Waste Reduction API",
    version="1.0.0"
)

app.include_router(user_router)
app.include_router(food_router)
app.include_router(ngo_router)
app.include_router(dashboard_router)
app.include_router(ai_router)


@app.get("/")
def home():
    return {
        "message": "Food Waste Backend Running Successfully 🚀"
    }

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # Development ke liye
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
