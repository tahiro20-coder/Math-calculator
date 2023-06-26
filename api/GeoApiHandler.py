from flask_restful import Api, Resource, reqparse
from flask import Flask, send_from_directory,current_app,jsonify,request
import numpy as np

class scp(Resource):
    # def get(self):
    #     return {
    #     'message': "scp get"
    #     }

    def post(self):
        print(self)
        parser = reqparse.RequestParser()
        parser.add_argument('data', type=str)

        args = parser.parse_args()

        data = args['data']

        final_ret = {"status": "Success", "message": data}

        return final_ret


class mat(Resource):
    def get(self):
        return {
        'message': "scp get"
        }

    def post(self):
        print(self)
        matrix = request.json["matrix"]
        print(np.array(matrix))

        return {'final_ret':"nannnni"}
