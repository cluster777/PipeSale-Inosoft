from flask import Flask, request, jsonify, make_response

import json

pipe=[]
with open('pipe.json') as f:
    pipe=json.load(f)
app = Flask(__name__)

@app.route('/api/Pipe', methods=["GET", "OPTIONS"])
def Pipe():
    response=jsonify(pipe)
    return response

@app.after_request
def add_header(response):
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:8080'
    return response

if __name__ == '__main__':
    app.run()