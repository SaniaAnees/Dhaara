"""DHAARA API scaffold. Geospatial processing is deliberately kept separate from UI/demo data."""
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="DHAARA Geospatial Decision Support API", version="0.1.0")

class FieldObservation(BaseModel):
    spring_id: str
    observed_discharge_lpm: float | None = None
    condition: str
    notes: str | None = None

@app.get("/health")
def health():
    return {"status": "ok", "message": "DHAARA geospatial API scaffold"}

@app.get("/api/springs")
def springs():
    return {"data_class": "demonstration", "items": []}

@app.post("/api/validation")
def create_validation(observation: FieldObservation):
    """Repository persistence will be added behind this endpoint; no database is required yet."""
    return {"status": "accepted", "data_class": "user-submitted", "observation": observation}
