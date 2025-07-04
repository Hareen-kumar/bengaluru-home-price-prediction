# 🏠 Bengaluru Home Price Prediction App

This is a Machine Learning-powered web application that predicts home prices in Bengaluru based on user inputs like area (in sqft), BHK, number of bathrooms, and location. It uses a trained regression model to give an estimated price instantly.

## 🌐 Live Demo

👉 [Click here to try it!](https://bengaluru-home-price-prediction-qe70.onrender.com)

---
## 📊 Dataset Information

- Source: Kaggle - [Bangalore House Price Data](https://www.kaggle.com/datasets/amitabhajoy/bengaluru-house-price-data)
- Features include: location, total_sqft, bath, bhk, price
---
## 🧹 Data Cleaning & Preprocessing

- Removed rows with missing/ambiguous values
- Converted sqft ranges like "2100-2850" to average float
- Removed extreme outliers based on standard deviation
- One-hot encoded location column
- Final cleaned dataset used for model training

---


## 🤖 Machine Learning Model

- Used: *Linear Regression*
- Tuned & validated for accuracy
- Model serialized using Pickle
- Integrated into Flask backend

---

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| /get_location_name | GET | Returns all available location names |
| /predict_home_price | POST | Returns predicted price based on input |

---

## 🛠 Tech Stack Used

| Category        | Tools/Technologies |
|----------------|--------------------|
| Programming    | Python             |
| Data Handling  | Pandas, NumPy      |
| Data Cleaning  | *Jupyter Notebook* |
| Visualization  | Matplotlib, Seaborn |
| ML Framework   | Scikit-learn       |
| Web Framework  | Flask              |
| Deployment     | Render             |
| Frontend       | HTML, CSS, JavaScript (jQuery) |
| Version Control| Git & GitHub       |

---

## ✨ Screenshots
![image](https://github.com/user-attachments/assets/bff7651c-f16f-4f1e-9ab5-7e05598f2fae)


## 📁 Project Structure

| Path/Folder               | File Name                         | Description                                |
|---------------------------|-----------------------------------|--------------------------------------------|
| /client                 | index.html                      | Main HTML page for the frontend            |
|                           | app.js                          | Handles user input and AJAX requests       |
|                           | app.css                         | CSS styling for the UI                     |
| /Server                 | server.py                       | Flask backend app with API routes          |
|                           | util.py                         | Handles model loading and predictions      |
| /Server/artifacts       | bangalore_home_prices_model.pkl | Trained machine learning model             |
|                           | columns.json                    | Location and feature info used in model    |
| (root)                  | requirements.txt                | Python dependencies list                   |
| (root)                  | Procfile                        | Instruction for deployment on Render       |
| (root)                  | README.md                       | Documentation file (this file)             |

## How to run locally
## 🏃‍♂ How to Run This Project Locally

To run the *Bangalore Home Price Prediction App* locally, follow these steps:

---

### ✅ Prerequisites

Make sure the following are installed on your system:

- Python 3.8 or higher
- pip (Python package manager)
- Git (optional)
- Jupyter Notebook (optional, for data cleaning notebook)
- Any modern browser (Chrome, Firefox, Edge)

---

### 🔽 Step 1: Clone the Repository

```bash
git clone https://github.com/Hareen-kumar/bengaluru-home-price-prediction.git
cd bengaluru-home-price-prediction
```
---
### 📦 Step 2: Create Virtual Environment & Install Dependencies
```
# Create a virtual environment (optional but recommended)
python -m venv venv

# Activate it
# On Windows
venv\Scripts\activate

# On Mac/Linux
source venv/bin/activate

# Install required packages
pip install -r requirements.txt
```

---

⚙ Step 3: Run the Flask Backend Server
```
python server.py
```
### ✅ Once it's running, the backend will be live at:
```
http://127.0.0.1:5000
```

---

### 💻 Step 4: Open the Frontend

You can access the frontend in two ways:

Option 1: Open directly from file

Go to the client/ folder

Double-click index.html to open in your browser


Option 2: Flask serves frontend

Flask is configured to serve static files from the client folder

So after running server.py, visit:

```
http://127.0.0.1:5000
```
✅ You’ll see the full working UI with location dropdown and price prediction!


---

📓 (Optional) View Data Cleaning in Jupyter Notebook

If you want to explore the data preprocessing part:

# Inside project root
jupyter notebook

Then open the notebook file used for cleaning (if present).


---

🛑 To Stop

Just press CTRL + C in the terminal to stop the Flask server.

---
### 🔗 Deployment Process (Render)

1. Pushed all code to GitHub
2. Created a new Web Service in Render
3. Used gunicorn server:application in Procfile
4. Ensured model and column files are inside artifacts/
5. Renamed app.html to index.html inside client/
6. Set correct static folder in Flask:
app = Flask(_name_, static_folder='client', static_url_path='')

---
### ✨ What I Learned

- Data cleaning and preprocessing for ML

- How to train and tune regression models

- Building Flask APIs for ML prediction

- Connecting backend and frontend using jQuery + AJAX

- Deploying real-world ML apps using Render

---
### 🙏 Credits

- Inspired by [Codebasics!](https://www.youtube.com/@codebasics)

- UI and debugging improvements by Hareen Kumar G

### 👨‍💻 Author

Hareen Kumar G

🎓 MBA in Data Science & Business Analytics

🏫 University of Mysore

📧 hareenkumar@gmail.com


  





