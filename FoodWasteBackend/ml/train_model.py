import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import joblib

df = pd.read_csv("ml/food_data.csv")

X = df[["quantity", "expiry_hours", "distance"]]
y = df["waste"]

model = DecisionTreeClassifier(random_state=42)
model.fit(X, y)

joblib.dump(model, "ml/model.pkl")

print("✅ AI Model Trained Successfully")