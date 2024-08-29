from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1:3000/"}})

# Example route to test the backend
@app.route('/api/test', methods=['GET'])
@cross_origin()
def test():
    return jsonify({"message": "Backend is working!"})

if __name__ == '__main__':
    app.run(debug=True)