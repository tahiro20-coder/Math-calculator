from flask import Flask, send_from_directory,current_app,jsonify,request
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.HelloApiHandler import HelloApiHandler
from api.GeoApiHandler import scp,mat
from scripts.scp import functo
import sys

app = Flask(__name__, static_url_path='', static_folder='fronted/build')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

# @app.route("/add", methods=['GET', 'POST'], strict_slashes=False)
# def add_articles():
#     data = request
#     print(data.json["data"], file=sys.stderr)
#     print('Hello world!', file=sys.stderr)
#     return "jaksolina"

# @app.route("/mat", methods=['GET', 'POST'], strict_slashes=False)
# def jk():
#     data = request.json['matrix']
#     # print(data.json["data"], file=sys.stderr)
#     # print('Hello world!', file=sys.stderr)
#     print(data, file=sys.stderr)
#     return "jaksolina"

api.add_resource(mat, '/mat')
api.add_resource(scp, '/add')
api.add_resource(HelloApiHandler, '/flask/hello')