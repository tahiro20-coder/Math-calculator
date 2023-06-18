from flask_restful import Api, Resource, reqparse
from flask import Flask, send_from_directory,current_app,jsonify,request
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
        parser = reqparse.RequestParser()
        # parser.add_argument('matrix', type=str)
        print(request.form.getlist('matrix'))
        print(request.base_url)
        print(request.json["matrix"], file=sys.stderr)
        parser.add_argument('matrix',type=list)
        print("jakjak")
        args = parser.parse_args()
        print("jakjak")
        matrix = args['matrix']
        # array = request.form.getlist('matrix')
        # print("jakjak",array)
        final_ret = {"status": "Success", "message": matrix}
        # print("jakjak")
        print(matrix)

        return final_ret