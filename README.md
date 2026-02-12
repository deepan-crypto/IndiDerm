# Idemdrem — AI-Powered Skin Disease Detection

A full-stack AI-powered web application for skin disease diagnosis using deep learning and FastAPI. Built by **LogiDevs**.

---

## Features

- Upload skin images for disease prediction.
- Enter your location to get nearby hospital recommendations.
- Interactive symptom questions for improved accuracy.
- AI-generated disease info and care instructions.
- Downloadable PDF report.
- Modern React frontend and FastAPI backend.

---

## Dataset

- [Skin Disease Dataset (Kaggle)](https://www.kaggle.com/datasets/subirbiswas19/skin-disease-dataset?resource=download)

---

## Getting Started

### Prerequisites

- Python 3.8+
- Node.js & npm
- pip

### Backend Setup

1. Install dependencies:
    ```
    pip install -r requirements.txt
    ```
2. Run the FastAPI server:
    ```
    uvicorn ml.app:app --host 0.0.0.0 --port 7860
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```
    cd frontend
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Start the React app:
    ```
    npm start
    ```

---

## API Endpoints

### `GET /`
- Health check endpoint.

### `POST /`
- Accepts image file (JPEG/PNG).
- Returns top 3 disease predictions.

---

## Project Structure

```
idemdrem/
├── frontend/         # React frontend
├── backend/          # FastAPI backend & API routes
├── ml/               # ML model & classification code
│   ├── app.py
│   └── classify.py
├── requirements.txt
└── README.md
```

---

## License

For demonstration and educational purposes only. Not for real medical use.
