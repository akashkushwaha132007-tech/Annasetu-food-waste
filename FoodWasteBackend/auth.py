from datetime import datetime, timedelta
from jose import jwt

SECRET_KEY = "foodwaste_secret_key"
ALGORITHM = "HS256"

def create_access_token(data: dict):

    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(hours=24)

    to_encode.update({"exp": expire})

    token = jwt.encode(
        to_encode,
        SECRET_KEY,
        algorithm=ALGORITHM
    )

    return token

# Password Hashing

# from passlib.context import CryptContext

# pwd_context = CryptContext(
#     schemes=["bcrypt"],
#     deprecated="auto"
# )

# def hash_password(password):

#     return pwd_context.hash(password)

# def verify_password(
#     plain_password,
#     hashed_password
# ):
#     return pwd_context.verify(
#         plain_password,
#         hashed_password
#     )