from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

data = [
    {"x": 10, "y": 20},
    {"x": 30, "y": 40},
    {"x": 50, "y": 60},
]

@app.route('/data', methods=['GET'])
def get_data():
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
