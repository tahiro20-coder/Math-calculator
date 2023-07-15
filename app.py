from flask import Flask, send_from_directory,current_app,jsonify,request,render_template
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.HelloApiHandler import HelloApiHandler
from api.GeoApiHandler import scp,mat
from api.StandardApiHandler import addMatricies,SubMatrcies,MulMatrcies,Dot_Product,MulScalarMatrix,DivScalarMatrix
from api.Norms import Euclidean_Norm,Inifinity_norm,one_norm,Manhattan_Norm,Euclidean_VNorm,Inifinity_VNorm,Lp_Norm
from api.Distance import Manhattan_Distance,Euclidean_Distance,Infinity_Distance,Manhattan_VDistance,Euclidean_VDistance,Infinity_VDistance
from api.MatrixFund import Transpose,Inverse_matrix,Trace,Determinant,Angle,Projection_C,Affine_Projection
from api.Matrix_Decomposition import Eigen_Decomposition,LU,Cholosky_Decomposition,QR_Decomposition,SVD
from api.Echelon import Gaussian_Elmination,Basis,Gram_Shmidt,Kernel,Rank,Particular_Solution_C,General_solution,LU_Solv_C,Eigenvalues_and_Eigenvectors_C
from api.Testing_Methods import Diagonizable,Convexity,Invertibility,Orthogonality,Independency
from api.Gradients import Gradient_Descent_C,Steepest_Gradient_Descent_C,Conjugate_Gradient_Descent_C
from scripts.scp import functo
import sys

app = Flask(__name__, static_url_path='', static_folder='fronted/build')
CORS(app, origins=['https://easy-algebra.onrender.com'], methods=['GET', 'POST'], allow_headers=['Content-Type']) #comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})

@app.errorhandler(404)
def catch_all(e):
    send_from_directory(app.static_folder,'index.html')
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

api.add_resource(Transpose, '/Transpose')
api.add_resource(Inverse_matrix, '/Inverse_matrix')
api.add_resource(Trace, '/Trace')
api.add_resource(Determinant, '/Determinant')


api.add_resource(Eigen_Decomposition, '/Eigen_Decomposition')
api.add_resource(LU, '/LU')
api.add_resource(Cholosky_Decomposition, '/Cholosky_Decomposition')
api.add_resource(QR_Decomposition, '/QR_Decomposition')
api.add_resource(SVD, '/SVD')

api.add_resource(Gaussian_Elmination, '/Gaussian_Elm')
api.add_resource(Basis, '/Basis')
api.add_resource(Kernel, '/Kernel')
api.add_resource(Gram_Shmidt, '/Gram_Shmidt')
api.add_resource(Rank, '/Rank')

api.add_resource(Particular_Solution_C, '/Particular_Solution')
api.add_resource(General_solution, '/General_solution')
api.add_resource(LU_Solv_C, '/LU_Solv')
api.add_resource(Eigenvalues_and_Eigenvectors_C, '/Eigenvalues_and_Eigenvectors')

api.add_resource(Diagonizable, '/Diagonizable')
api.add_resource(Convexity, '/Convexity')
api.add_resource(Invertibility, '/Invertibility')
api.add_resource(Orthogonality, '/Orthogonality')
api.add_resource(Independency, '/Independency')

api.add_resource(Angle, '/Angle')
api.add_resource(Projection_C, '/Projection')
api.add_resource(Affine_Projection, '/Affine_Projection')

api.add_resource(Gradient_Descent_C, '/Gradient_Descent')
api.add_resource(Steepest_Gradient_Descent_C, '/Steepest_Gradient_Descent')
api.add_resource(Conjugate_Gradient_Descent_C, '/Conjugate_Gradient_Descent')


api.add_resource(mat, '/mat')
api.add_resource(scp, '/add')
api.add_resource(HelloApiHandler, '/flask/hello')