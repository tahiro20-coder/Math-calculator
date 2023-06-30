from flask import Flask, send_from_directory,current_app,jsonify,request
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.HelloApiHandler import HelloApiHandler
from api.GeoApiHandler import scp,mat
from api.StandardApiHandler import addMatricies,SubMatrcies,MulMatrcies,Dot_Product,MulScalarMatrix,DivScalarMatrix
from api.Norms import Euclidean_Norm,Inifinity_norm,one_norm,Manhattan_Norm,Euclidean_VNorm,Inifinity_VNorm,Lp_Norm
from api.Distance import Manhattan_Distance,Euclidean_Distance,Infinity_Distance,Manhattan_VDistance,Euclidean_VDistance,Infinity_VDistance
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


api.add_resource(DivScalarMatrix, '/DivScalarMatrix')
api.add_resource(addMatricies, '/addMatricies')
api.add_resource(Dot_Product, '/Dot_Product')
api.add_resource(MulMatrcies, '/MulMatrcies')
api.add_resource(MulScalarMatrix, '/MulScalarMatrix')
api.add_resource(SubMatrcies, '/SubMatrcies')

api.add_resource(Euclidean_Norm, '/Euclidean_Norm')
api.add_resource(Inifinity_norm, '/Inifinity_norm')
api.add_resource(one_norm, '/one_norm')

api.add_resource(Manhattan_Norm, '/Manhattan_Norm')
api.add_resource(Euclidean_VNorm, '/Euclidean_VNorm')
api.add_resource(Inifinity_VNorm, '/Inifinity_VNorm')
api.add_resource(Lp_Norm, '/Lp_Norm')

api.add_resource(Manhattan_Distance, '/Manhattan_Distance')
api.add_resource(Euclidean_Distance, '/Euclidean_Distance')
api.add_resource(Infinity_Distance, '/Infinity_Distance')

api.add_resource(Manhattan_VDistance, '/Manhattan_VDistance')
api.add_resource(Euclidean_VDistance, '/Euclidean_VDistance')
api.add_resource(Infinity_VDistance, '/Infinity_VDistance')


api.add_resource(mat, '/mat')
api.add_resource(scp, '/add')
api.add_resource(HelloApiHandler, '/flask/hello')