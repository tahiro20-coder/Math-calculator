from flask_restful import Api, Resource, reqparse
from flask import Flask, send_from_directory,current_app,jsonify,request
import numpy as np
import math as mt


def bmatrix(a):
    """Returns a LaTeX bmatrix

    :a: numpy array
    :returns: LaTeX bmatrix as a string
    """
    if len(a.shape) > 2:
        raise ValueError('bmatrix can at most display two dimensions')
    lines = str(a).replace('[', '').replace(']', '').splitlines()
    rv = [r'\begin{bmatrix}']
    rv += ['  ' + ' & '.join(l.split()) + r'\\' for l in lines]
    rv +=  [r'\end{bmatrix}']
    return '\n'.join(rv)
def bvector(a):
    """Returns a LaTeX bmatrix

    :a: numpy array
    :returns: LaTeX bmatrix as a string
    """
    if len(a.shape) > 2:
        raise ValueError('bmatrix can at most display two dimensions')
    lines = str(a).replace('[', '').replace(']', '').splitlines()
    rv = [r'\begin{bmatrix}']
    rv += ['  ' + r'\\'.join(l.split())  for l in lines]
    rv +=  [r'\end{bmatrix}']
    return '\n'.join(rv)

def pvector(a):
    """Returns a LaTeX bmatrix

    :a: numpy array
    :returns: LaTeX bmatrix as a string
    """
    if len(a.shape) > 2:
        raise ValueError('bmatrix can at most display two dimensions')
    lines = str(a).replace('[', '').replace(']', '').splitlines()
    rv = [r'\begin{pmatrix}']
    rv += ['  ' + r'\\'.join(l.split())  for l in lines]
    rv +=  [r'\end{pmatrix}']
    return '\n'.join(rv)

def diag(a):
    b = np.diag(a)
    if len(b.shape) > 2:
        raise ValueError('bmatrix can at most display two dimensions')
    lines = str(b).replace('[', '').replace(']', '').splitlines()
    rv = [r'\begin{bmatrix}']
    rv += ['  ' + ' & '.join(l.split()) + r'\\' for l in lines]
    rv +=  [r'\end{bmatrix}']
    return '\n'.join(rv)
    
def vmatrix(a):
    """Returns a LaTeX bmatrix

    :a: numpy array
    :returns: LaTeX bmatrix as a string
    """
    if len(a.shape) > 2:
        raise ValueError('bmatrix can at most display two dimensions')
    lines = str(a).replace('[', '').replace(']', '').splitlines()
    rv = [r'\begin{vmatrix}']
    rv += ['  ' + ' & '.join(l.split()) + r'\\' for l in lines]
    rv +=  [r'\end{vmatrix}']
    return '\n'.join(rv)
def Format_EigenSpace(eigenvalues,eigenvectors):
    Lprint(emph("The EigenVectors of the matrix A are : "))
    for i in range(eigenvalues.size):
        Lprint(f"\\circ \ v_{i} = "+pvector(eigenvectors[i])+f", \\lambda_{i} = {eigenvalues[i]}")
def Format_EigenValues(eigenvalues):
    Lprint(emph("The EigenValues of the matrix A are : "))
    for i in range(eigenvalues.size):
        Lprint(f"\\circ  \\lambda_{i} = {eigenvalues[i]}")
    
def bold(a):
    return f'<b>{a}</b>'
def big(a,n=3):
    return f'<h{n}>{a}</h{n}>'
def blue_box(a):
    Mprint(f'<div class="alert alert-block alert-info">{a}</div>')
def yellow_box(a):
    Mprint(f'<div class="alert alert-block alert-warning">{a}</div>')
def green_box(a):
    Mprint(f'<div class="alert alert-block alert-success">{a}</div>')
def red_box(a):
    Mprint(f'<div class="alert alert-block alert-danger">{a}</div>')
def cursive(a,color="black"):
    Mprint(f'# <span style="font-weight:300;color:{color};font-family:cursive">{a}</span>')
def monospace(a,color="black"):
    Mprint(f'# <center><span style="font-weight:300;color:{color};font-family:monospace">{a}</span></center>')
def emph(a):
    return f"\ \\textit{{{a}}} \ "
def Container(a):
    return f"\\\\ \  \\\\ {a} \\\\ \  \\\\"
def Mprint(a):
    display(Markdown(f'{a}'))
def Nprint(a):
    display(Latex(f'{a}'))
def Lprint(a):
    display(Latex(f'${a}$'))



class addMatricies(Resource):
    def get(self):
        return {
        'message': "addMatricies Get"
        }

    def post(self):
        print(self)
        LatexText = ""
        matrix1 = np.array(request.json["matrix1"])
        matrix2 = np.array(request.json["matrix2"])
        
        LatexText +=emph("The Input Matrcices Are : ")+Container("A = "+bmatrix(matrix1) +" , B = "+bmatrix(matrix2))

        result = matrix1 + matrix2
        LatexText += "\\\\" + emph(" The Result of Adding Both of them is : ")+Container(bmatrix(matrix1)+" + "+bmatrix(matrix2)+" = "+bmatrix(result) )
        return {'output':LatexText,"result":result.tolist()}

class SubMatrcies(Resource):
    def get(self):
        return {
        'message': "SubMatrcies Get"
        }

    def post(self):
        print(self)
        LatexText = ""
        matrix1 = np.array(request.json["matrix1"])
        matrix2 = np.array(request.json["matrix2"])
        
        LatexText +=emph("The Input Matrcices Are : ")+Container("A = "+bmatrix(matrix1) +" , B = "+bmatrix(matrix2))

        result = matrix1 - matrix2
        LatexText += "\\\\" + emph(" The Result of Subtracting Both of them is : ")+Container(bmatrix(matrix1)+" - "+bmatrix(matrix2)+" = "+bmatrix(result) )
        return {'output':LatexText,"result":result.tolist()}

class MulMatrcies(Resource):
    def get(self):
        return {
        'message': "MulMatrcies Get"
        }

    def post(self):
        print(self)
        LatexText = ""
        matrix1 = np.array(request.json["matrix1"])
        matrix2 = np.array(request.json["matrix2"])
        
        LatexText +=emph("The Input Matrcices Are : ")+Container("A = "+bmatrix(matrix1) +" , B = "+bmatrix(matrix2))

        result = matrix1 * matrix2
        LatexText += "\\\\" + emph(" The Result of Multiplying Both of them side by side is : ")+Container(bmatrix(matrix1)+" * "+bmatrix(matrix2)+" = "+bmatrix(result) )
        return {'output':LatexText,"result":result.tolist()}


class MulScalarMatrix(Resource):
    def get(self):
        return {
        'message': "MulScalarMatrix Get"
        }

    def post(self):
        print(self)
        LatexText = ""
        matrix1 = np.array(request.json["matrix1"])
        scalar = np.array(request.json["scalar"])

        LatexText =emph("The Input Matrcices Are : ")+Container("A = "+bmatrix(matrix1) +" , α = "+str(scalar))
        result = matrix1*scalar
        LatexText += "\\\\" + emph(" The Result of Multiplying "+str(scalar)+ " with A : ")+Container("A*α = "+bmatrix(matrix1)+"*"+str(scalar))+ Container("="+bmatrix(result) )
        
        return {'output':LatexText,"result":result.tolist()}

class DivScalarMatrix(Resource):
    def get(self):
        return {
        'message': "DivScalarMatrix Get"
        }

    def post(self):
        print(self)
        LatexText = ""
        matrix1 = np.array(request.json["matrix1"])
        scalar = np.array(request.json["scalar"])

        LatexText =emph("The Input Matrcices Are : ")+Container("A = "+bmatrix(matrix1) +" , α = "+str(scalar))
        result = matrix1/scalar
        LatexText += "\\\\" + emph(" The Result of Dividing "+str(scalar)+ " with A : ")+Container("A/α = "+bmatrix(matrix1)+"/"+str(scalar)) + Container("="+bmatrix(result) )
        
        return {'output':LatexText,"result":result.tolist()}

class Dot_Product(Resource):
    def get(self):
        return {
        'message': "Dot_Product Get"
        }

    def post(self):
        print(self)
        A = np.array(request.json["matrix1"])
        B = np.array(request.json["matrix2"])
        print(A)
        print(B)
        LatexText = emph(" Your Input is ") +", A = "+ bmatrix(A) +", B = "+bmatrix(B)+"\\\\ \ \\\\"
        if(A.shape[0]!=B.shape[0]):
            LatexText += Container(emph(" You Cant apply dot product on this inputs since there shapes are not compatible with each other"))
            return {'output':LatexText,"result":[]}
        result = A.T@B
        LatexText += Container("A^T.B = "+bmatrix(A.T)+"."+bmatrix(B)+" = "+bmatrix(result))
        
        return {'output':LatexText,"result":result.tolist()}
    