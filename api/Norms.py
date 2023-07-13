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

class Euclidean_Norm(Resource):
    def get(self):
        return {
        'message': "Euclidean_Norm Get"
        }

    def post(self):
        print(self)
        LatexText = ""
        arr = np.array(request.json["matrix1"])
        
        LatexText = emph(" Your Input is ") +", A = "+ bmatrix(arr) +"\\\\ \ \\\\"
        # Flatten the matrix into a 1D array
        flattened_matrix = arr.flatten()
        LatexText += "\Vert A \Vert_E = \\\\ \ \\\\ \sqrt{"
        for i,item in enumerate(flattened_matrix):
            if(i == len(flattened_matrix)-1):
                LatexText += f"({str(item)})^2"
            else:
                LatexText += f"({str(item)})^2 +"
        LatexText += "}"
        sqinside = flattened_matrix.T@flattened_matrix
        LatexText += Container(" = \sqrt{"+str(sqinside)+"}")
        # Apply the formula of norm
        norm = np.sqrt(sqinside)
        LatexText += " = "+str(norm)
        LatexText += Container(emph("The norm of the matrix is : ")+"\\textbf{"+str(norm.astype(float)))+"}"
        
        
        return {'output':LatexText,"result":norm.tolist()}


class Inifinity_norm(Resource):
    def get(self):
        return {
        'message': "Inifinity_norm Get"
        }

    def post(self):
        print(self)
        LatexText = ""
        arr = np.array(request.json["matrix1"])
        
        LatexText = emph(" Your Input is ") +", A = "+ bmatrix(arr) +"\\\\ \ \\\\"
        LatexText += emph("The absolute row sums of A are")
        sols = []
        for i in range(arr.shape[0]):
            temp = 0
            for j in range(arr.shape[1]):
                if(j == arr.shape[1]-1):
                    if(arr[i,j]<0):
                        LatexText+= f"\\vert{str(arr[i,j])}\\vert"
                    else:
                        LatexText+= str(arr[i,j])
                else:
                    if(arr[i,j]<0):
                        LatexText+= f"\\vert{str(arr[i,j])}\\vert +"
                    else:
                        LatexText+= str(arr[i,j]) +" + "
                temp += abs(arr[i,j])
            if(i == arr.shape[0]-1):
                LatexText += " = " + str(temp)  + "."
            else:
                LatexText += " = " + str(temp)+emph(" and ")
            sols.append(temp)
        maxi = max(sols)
        LatexText += Container(emph("The larger of these is ")+str(maxi)+emph(" and therefore ")+"\Vert A \Vert_\infty = "+"\\textbf{"+str(maxi)+"}")

        return {'output':LatexText,"result":maxi.tolist()}

class one_norm(Resource):
    def get(self):
        return {
        'message': "one_norm Get"
        }

    def post(self):
        print(self)
        LatexText = ""
        arr = np.array(request.json["matrix1"])
        
        LatexText = emph(" Your Input is ") +", A = "+ bmatrix(arr) +"\\\\ \ \\\\"
        LatexText += emph("The absolute column sums of A are")
        sols = []
        for j in range(arr.shape[1]):
            temp = 0
            for i in range(arr.shape[0]):
                if(i == arr.shape[0]-1):
                    if(arr[i,j]<0):
                        LatexText+= f"\\vert{str(arr[i,j])}\\vert"
                    else:
                        LatexText+= str(arr[i,j])
                else:
                    if(arr[i,j]<0):
                        LatexText+= f"\\vert{str(arr[i,j])}\\vert +"
                    else:
                        LatexText+= str(arr[i,j]) +" + "
                temp += abs(arr[i,j])
            if(j == arr.shape[1]-1):
                LatexText += " = " + str(temp)  + "."
            else:
                LatexText += " = " + str(temp)+emph(" and ")
            sols.append(temp)
        maxi = max(sols)
        LatexText += Container(emph("The larger of these is ")+str(maxi)+emph(" and therefore ")+"\Vert A \Vert_1 = "+"\\textbf{"+str(maxi)+"}")

        return {'output':LatexText,"result":maxi.tolist()}



class Manhattan_Norm(Resource):
    def get(self):
        return {
        'message': "Manhattan_Norm Get"
        }

    def post(self):
        print(self)
        LatexText = ""
        vect = np.array(request.json["matrix1"])[0]
        
        LatexText = emph(" Your Input is ") +", A = "+ bvector(vect) +"\\\\ \ \\\\"
        LatexText += emph("The sum of the absolute values of the vector A is ")
        result = 0
        for i in range(vect.shape[0]):
            if(i == vect.shape[0]-1):
                if(vect[i]<0):
                    LatexText += " \\vert "+str(vect[i])+" \\vert "
                else:
                    LatexText += str(vect[i])
            else:
                if(vect[i]<0):
                    LatexText += " \\vert "+str(vect[i])+" \\vert + "
                else:
                    LatexText += str(vect[i]) + " + "
            result += abs(vect[i])
        LatexText += " = "+ str(result) + "."
        LatexText += Container(emph("Therfore the Manhattan Norm of the Vector A is ")+"\\textbf{"+str(result)+"}"  )

        return {'output':LatexText,"result":result.tolist()}

class Euclidean_VNorm(Resource):
    def get(self):
        return {
        'message': "Euclidean_VNorm Get"
        }

    def post(self):
        print(self)
        LatexText = ""
        vect = np.array(request.json["matrix1"])[0]
        
        LatexText = emph(" Your Input is ") +", A = "+ bvector(vect) +"\\\\ \ \\\\"
        LatexText += emph("The root sum of the squre absolute values of the vector A is ")
        LatexText += "\\\\ \ \\\\ \Vert A \Vert_2 = \sqrt{"
        result = 0
        for i in range(vect.shape[0]):
            if(i == vect.shape[0]-1):
                if(vect[i]<0):
                    LatexText += " \\vert "+str(vect[i])+" \\vert^2"
                else:
                    LatexText += str(vect[i])+"^2"
            else:
                if(vect[i]<0):
                    LatexText += " \\vert "+str(vect[i])+" \\vert^2 + "
                else:
                    LatexText += str(vect[i]) + "^2 + "
            result += abs(vect[i])**2
        LatexText += "} = \sqrt{"+ str(result) + "}."
        LatexText += Container(emph("Therfore the Euclidean Norm of the Vector A is ")+ "\sqrt{"+str(result)+"} = "+"\\textbf{"+str(np.sqrt(result))+"}" )
        result = np.sqrt(result)

        return {'output':LatexText,"result":result.tolist()}

class Inifinity_VNorm(Resource):
    def get(self):
        return {
        'message': "Inifinity_VNorm Get"
        }

    def post(self):
        print(self)
        LatexText = ""
        vect = np.array(request.json["matrix1"])[0]
        
        LatexText = emph(" Your Input is ") +", A = "+ bvector(vect) +"\\\\ \ \\\\"
        LatexText += emph("The maximum value of the  values of the vector A is ")
        vect = abs(vect)
        result = max(vect)
        LatexText += str(result)
        LatexText += Container(emph("Therfore the inifinity max norm of the Vector A is ")+"\\textbf{"+str(result)+"}"  )


        return {'output':LatexText,"result":result.tolist()}

class Lp_Norm(Resource):
    def get(self):
        return {
        'message': "Lp_Norm Get"
        }

    def post(self):
        print(self)
        LatexText = ""
        vect = np.array(request.json["matrix1"])[0]
        p = np.array(request.json["p"])
        
        LatexText = emph(" Your Input is ") +", A = "+ bvector(vect) +" , P = "+str(p) +" \\\\ \ \\\\"
        if(p<0):
            LatexText += Container( "  P = "+str(p) + emph(" \\textbf{the P value should always be larger than 0 , Therefor you Cant Precede on The Calculation}") )
            return {'output':LatexText,"result":[0]}
        LatexText += emph(" \\textbf{The P Variable is Larger than 0 than you can continue the calculation} ") + " \\\\ \ \\\\"
        LatexText += "\\\\ \ \\\\ \Vert A \Vert_p = ( "
        result = 0
        for i in range(vect.shape[0]):
            if(i == vect.shape[0]-1):
                if(vect[i]<0):
                    LatexText += " \\vert "+str(vect[i])+" \\vert^{"+str(p)+"}"
                else:
                    LatexText += str(vect[i])+"^{"+str(p)+"}"
            else:
                if(vect[i]<0):
                    LatexText += " \\vert "+str(vect[i])+" \\vert^{"+str(p)+"} + "
                else:
                    LatexText += str(vect[i]) + "^{"+str(p)+"} + "
            result += abs(vect[i])**p
        LatexText += ")^{"+str(p)+"} = ("+ str(result) + ")^{"+str(p)+"}."
        LatexText += Container(emph("Therfore the Lp Norm of the Vector A where P = ")+str(p)+emph(" is ")+ "("+ str(result) + ")^{"+str(p)+"} = "+"\\textbf{"+str(result**p)+"}")
        result = result**p

        return {'output':LatexText,"result":result.tolist()}


