from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models import NGO
from schemas import NGOCreate

router = APIRouter(
    prefix="/ngo",
    tags=["NGO"]
)


# Register NGO
@router.post("/register")
def register_ngo(ngo: NGOCreate, db: Session = Depends(get_db)):

    existing = db.query(NGO).filter(
        NGO.email == ngo.email
    ).first()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="NGO already exists"
        )

    new_ngo = NGO(
        ngo_name=ngo.ngo_name,
        email=ngo.email,
        phone=ngo.phone,
        address=ngo.address
    )

    db.add(new_ngo)
    db.commit()
    db.refresh(new_ngo)

    return {
        "message": "NGO Registered Successfully",
        "ngo_id": new_ngo.id
    }


# Get All NGOs
@router.get("/")
def get_ngos(db: Session = Depends(get_db)):
    return db.query(NGO).all()


# Get NGO By ID
@router.get("/{ngo_id}")
def get_ngo(ngo_id: int, db: Session = Depends(get_db)):

    ngo = db.query(NGO).filter(
        NGO.id == ngo_id
    ).first()

    if not ngo:
        raise HTTPException(
            status_code=404,
            detail="NGO Not Found"
        )

    return ngo


# Update NGO
@router.put("/update/{ngo_id}")
def update_ngo(
    ngo_id: int,
    ngo_data: NGOCreate,
    db: Session = Depends(get_db)
):

    ngo = db.query(NGO).filter(
        NGO.id == ngo_id
    ).first()

    if not ngo:
        raise HTTPException(
            status_code=404,
            detail="NGO Not Found"
        )

    ngo.ngo_name = ngo_data.ngo_name
    ngo.email = ngo_data.email
    ngo.phone = ngo_data.phone
    ngo.address = ngo_data.address

    db.commit()

    return {
        "message": "NGO Updated Successfully"
    }


# Delete NGO
@router.delete("/delete/{ngo_id}")
def delete_ngo(
    ngo_id: int,
    db: Session = Depends(get_db)
):

    ngo = db.query(NGO).filter(
        NGO.id == ngo_id
    ).first()

    if not ngo:
        raise HTTPException(
            status_code=404,
            detail="NGO Not Found"
        )

    db.delete(ngo)
    db.commit()

    return {
        "message": "NGO Deleted Successfully"
    }