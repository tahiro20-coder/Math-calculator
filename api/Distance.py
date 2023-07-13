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



def vmatrix(a):
    """Returns a LaTeX vmatrix

    :a: numpy array
    :returns: LaTeX vmatrix as a string
    """
    if len(a.shape) > 2:
        raise ValueError('vmatrix can at most display two dimensions')
    lines = str(a).replace('[', '').replace(']', '').splitlines()

    rv = [r'\begin{vmatrix}']

    rv += [' ' + ' & '.join(l.split()) + r'\\' for l in lines]

    rv +=  [r'\end{vmatrix} ']

    return '\n'.join(rv)

def bvector(a):
    """Returns a LaTeX bmatrix

    :a: numpy array
    :returns: LaTeX bmatrix as a string
    """
    if len(a.shape) > 2:
        raise ValueError('bmatrix can at most display two dimensions')
    lines = str(a).replace('[', '').replace(']', '').replace("'", '').splitlines()
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
    LatexText = Container(emph("The EigenVectors of the matrix A are : "))
    for i in range(eigenvalues.size):
        LatexText += Container(f"\\circ \ v_{i} = "+pvector(eigenvectors[i])+f", \\lambda_{i} = {eigenvalues[i]}")
    return LatexText

def Format_EigenSpect(eigenvalues,eigenvectors):
    LatexText = Container(emph("The EigenValues and EigenVectors of the matrix A are : "))
    k = 1
    for i in range(len(eigenvalues)):
      LatexText += Container(f"\\circ \  \\lambda_{str(i+1)} = {eigenvalues[i]} , multiplicity = "+str(len(eigenvectors[i])))
      for j in range(len(eigenvectors[i])):
        LatexText += Container(f"\ \ \ v_{str(k)} = "+pvector(eigenvectors[i][j]))
        k += 1
    return LatexText

def Format_EigenValues(eigenvalues):
    LatexText = emph("The EigenValues of the matrix A are : ")
    for i in range(eigenvalues.size):
        LatexText += Container(f"\\circ  \\lambda_{i} = {eigenvalues[i]}")
    return LatexText
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

class Manhattan_Distance(Resource):
    def get(self):
        return {
        'message': "Manhattan_Distance Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        matrix_1 = np.array(request.json["matrix1"])
        matrix_2 = np.array(request.json["matrix2"])
        
        LatexText = emph(" Your Input is ") +", A = "+ bmatrix(matrix_1) + "  \  , and \  B = "+ bmatrix(matrix_2) +"\\\\ \ \\\\"
        if (matrix_1.shape==matrix_2.shape):
            d= np.subtract(matrix_1,matrix_2)
            LatexText += emph("\\textbf{1) We subtract the matrix A from the matrix B }")
            LatexText += Container(" d = \\vert A - B \\vert = "+bmatrix(matrix_1)+" - "+bmatrix(matrix_2)+" = \\left \\vert "+bmatrix(d)+"\\right \\vert = "+bmatrix(abs(d)))
            d = abs(d)
            LatexText += emph("\\textbf{2) Then we calculate the sum of the distance matrix d }")
            LatexText += Container("d_1(A,B) = \sum_{i=1}^n\sum_{j=1}^m d_{ij} = "+str(sum(sum(d))))
            d = sum(sum(d))
            LatexText += Container(emph("\\textbf{Therefor the Manhattan Distance between the matrcies A and B is }")+"\\textbf{"+str(d)+"}")
            return {'output':LatexText,"result":d.tolist()}
        else:
            LatexText += emph("The input Matricies has different Sizes So its impossible to calculate the distance between them")
            return {'output':LatexText,"result":[-1]}
        
class Euclidean_Distance(Resource):
    def get(self):
        return {
        'message': "Euclidean_Distance Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        matrix_1 = np.array(request.json["matrix1"])
        matrix_2 = np.array(request.json["matrix2"])
        
        LatexText = emph(" Your Input is ") +", A = "+ bmatrix(matrix_1) + "  \  , and \  B = "+ bmatrix(matrix_2) +"\\\\ \ \\\\"
        if (matrix_1.shape==matrix_2.shape):
            d= np.subtract(matrix_1,matrix_2)
            LatexText += emph("\\textbf{1) We subtract the matrix A from the matrix B} ")
            LatexText += Container(" d = \\vert A - B \\vert = "+bmatrix(matrix_1)+" - "+bmatrix(matrix_2)+" = \\left ( "+bmatrix(d)+"\\right )^2 = "+bmatrix(d**2))
            d = d**2
            LatexText += emph("\\textbf{2) Then we calculate the sum of the distance matrix d }")
            LatexText += Container("d_2(A,B) =\sqrt{ \sum_{i=1}^n\sum_{j=1}^m d_{ij} } = \sqrt{ "+str(sum(sum(d)))+"} = "+str(np.sqrt(sum(sum(d)))))
            d = np.sqrt(sum(sum(d)))
            LatexText += Container(emph("\\textbf{Therefor the Euclidean Distance between the matrcies A and B is }")+"\\textbf{"+str(d)+"}")
            return {'output':LatexText,"result":d.tolist()}   
        else:
            LatexText += emph("\\textbf{The input Matricies has different Sizes So its impossible to calculate the distance between them}")
            return {'output':LatexText,"result":[-1]}   

class Infinity_Distance(Resource):
    def get(self):
        return {
        'message': "Infinity_Distance Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        matrix_1 = np.array(request.json["matrix1"])
        matrix_2 = np.array(request.json["matrix2"])
        
        LatexText = emph(" Your Input is ") +", A = "+ bmatrix(matrix_1) + "  \  , and \  B = "+ bmatrix(matrix_2) +"\\\\ \ \\\\"
        if (matrix_1.shape==matrix_2.shape):
            d= np.subtract(matrix_1,matrix_2)
            LatexText += emph("\\textbf{1) We subtract the matrix A from the matrix B} ")
            LatexText += Container(" d = \\vert A - B \\vert = "+bmatrix(matrix_1)+" - "+bmatrix(matrix_2)+" = \\left \\vert "+bmatrix(d)+"\\right \\vert = "+bmatrix(d**2))
            d = d**2
            LatexText += emph("\\textbf{2) Then we calculate the sum of the distance matrix d }")
            LatexText += Container("d_\\infty(A,B) = \max_{1\leq i \leq n}\max_{1\leq j \leq m} d_{ij} = "+str(d.max()))
            d = d.max()
            LatexText += Container(emph("\\textbf{Therefor the infinity Distance between the matrcies A and B is} ")+"\\textbf{"+str(d)+"}")
            return {'output':LatexText,"result":d.tolist()}   
        else:
            LatexText += emph("\\textbf{The input Matricies has different Sizes So its impossible to calculate the distance between them}")
            return {'output':LatexText,"result":[-1]}   


class Manhattan_VDistance(Resource):
    def get(self):
        return {
        'message': "Manhattan_VDistance Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        vector1 = np.array(request.json["matrix1"])[0]
        vector2 = np.array(request.json["matrix2"])[0]
        
        LatexText = ""
        LatexText = emph(" Your Input is ") +", A = "+ bvector(vector1) + "  \  , and \  B = "+ bvector(vector2) +"\\\\ \ \\\\"
        if (vector1.shape==vector2.shape):
            d= np.subtract(vector1,vector2)
            LatexText += emph("\\textbf{1) We subtract the vector A from the vector B}")
            LatexText += Container(" d = \\vert A - B \\vert = "+bvector(vector1)+" - "+bvector(vector2)+" = \\left \\vert "+bvector(d)+"\\right \\vert = "+bvector(abs(d)))
            d = abs(d)
            LatexText += emph("\\textbf{2) Then we calculate the sum of the distance vector d}")
            LatexText += Container("d_1(A,B) = \sum_{i=1}^n d_{i} = "+str(sum(d)))
            d = sum(d)
            LatexText += Container(emph("\\textbf{Therefor the Manhattan Distance between the vectors A and B is} ")+"\\textbf{"+str(d)+"}")
            return {'output':LatexText,"result":d.tolist()}  
        else:
            LatexText += emph("\\textbf{The input Vectors has different Sizes So its impossible to calculate the distance between them}")
            return {'output':LatexText,"result":[-1]}   
         
class Euclidean_VDistance(Resource):
    def get(self):
        return {
        'message': "Euclidean_VDistance Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        vector_1 = np.array(request.json["matrix1"])[0]
        vector_2 = np.array(request.json["matrix2"])[0]
        
        LatexText = emph(" Your Input is ") +", A = "+ bvector(vector_1) + "  \  , and \  B = "+ bvector(vector_2) +"\\\\ \ \\\\"
        if (vector_1.shape==vector_2.shape):
            d= np.subtract(vector_1,vector_2)
            LatexText += emph("\\textbf{1) We subtract the vector A from the vector B }")
            LatexText += Container(" d = \\vert A - B \\vert = "+bvector(vector_1)+" - "+bvector(vector_2)+" = \\left ( "+bvector(d)+"\\right )^2 = "+bvector(d**2))
            d = d**2
            LatexText += emph("\\textbf{2) Then we calculate the sum of the distance vector d} ")
            LatexText += Container("d_2(A,B) =\sqrt{ \sum_{i=1}^n d_{i} } = \sqrt{ "+str(sum(d))+"} = "+str(np.sqrt(sum(d))))
            d = np.sqrt(sum(d))
            LatexText += Container(emph("\\textbf{Therefor the Euclidean Distance between the matrcies A and B is }")+"\\textbf{"+str(d)+"}")
            return {'output':LatexText,"result":d.tolist()}  
        else:
            LatexText += emph("\\textbf{The input Vectors has different Sizes So its impossible to calculate the distance between them}")
            return {'output':LatexText,"result":[-1]} 
          
       
class Infinity_VDistance(Resource):
    def get(self):
        return {
        'message': "Infinity_VDistance Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        vector_1 = np.array(request.json["matrix1"])[0]
        vector_2 = np.array(request.json["matrix2"])[0]
        
        LatexText = emph(" Your Input is ") +", A = "+ bvector(vector_1) + "  \  , and \  B = "+ bvector(vector_2) +"\\\\ \ \\\\"
        if (vector_1.shape==vector_2.shape):
            d= np.subtract(vector_1,vector_2)
            LatexText += emph("\\textbf{1) We subtract the vector A from the vector B}")
            LatexText += Container(" d = \\vert A - B \\vert = "+bvector(vector_1)+" - "+bvector(vector_2)+" = \\left \\vert "+bvector(d)+"\\right \\vert = "+bvector(d**2))
            d = d**2
            LatexText += emph("\\textbf{2) Then we calculate the sum of the distance vector d }")
            LatexText += Container("d_\\infty(A,B) = \max_{1\leq i \leq n} d_{i} = "+str(d.max()))
            d = d.max()
            LatexText += Container(emph("\\textbf{Therefor the infinity Distance between the matrcies A and B is} ")+"\\textbf{"+str(d)+"}")
            return {'output':LatexText,"result":d.tolist()}  
        else:
            LatexText += emph("\\textbf{The input Matricies has different Sizes So its impossible to calculate the distance between them}")
            return {'output':LatexText,"result":[-1]}  
        
  
