from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import json

pipe=[]
with open('pipe.json') as f:
    pipe=json.load(f)
app = Flask(__name__)
app.debug = True
CORS(app)

@app.route('/api/Pipe', methods=["GET", "OPTIONS"])
def Pipe():
    response=jsonify(pipe)
    return response

@app.route("/")
def helloWorld():
  return "Hello, cross-origin-world!"

if __name__ == '__main__':
    app.run()