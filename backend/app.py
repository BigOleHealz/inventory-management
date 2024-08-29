from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)

# Example route to test the backend
@app.route('/api/test', methods=['GET'])
def test():
    return jsonify({"message": "Backend is working!"})

if __name__ == '__main__':
    app.run(debug=True)