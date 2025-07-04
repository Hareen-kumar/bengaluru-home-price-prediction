# server.py

from flask import Flask, request, jsonify
from flask_cors import CORS
import util as util  

app = Flask(__name__)
CORS(app)

@app.route('/get_location_name')
def get_location_name():
    response = jsonify({
        'locations': util.get_location_name()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/predict_home_price', methods=['POST'])
def predict_home_price():
    if request.is_json:
        data = request.get_json()
    else:
        data = request.form  # ✅ to handle form-data

    try:
        total_sqft = float(data['total_sqft'])
        location = data['location']
        bhk = int(data['bhk'])
        bath = int(data['bath'])
    except Exception as e:
        return jsonify({'error': f'Invalid or missing data: {e}'}), 400

    estimated_price = util.get_estimated_price(location, total_sqft, bhk, bath)

    response = jsonify({
        'estimated_price': estimated_price
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == "__main__":
    print("Starting Python Flask Server for Home Price Prediction...")
    util.load_saved_artifacts()
    app.run()

