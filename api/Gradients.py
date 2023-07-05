from flask_restful import Api, Resource, reqparse
from flask import Flask, send_from_directory,current_app,jsonify,request
import numpy as np
import math as mt
from sympy import *
import sympy as sym
import scipy.linalg as la
from sympy import sqrt

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



def Quadratic_Function(x,A,b,c):
    return (1/2)*(x.T@A@x)-(b.T@x)+c
def Quadratic_Derivative(x,A,b):
    return A@x-b
def Gradient_Descent(A,b,c=0,x=None,p=0.1,Max_Iterations=50,tol = 1e-5,Steps=True,Calc_Steps=False):
    LatexText =  "\\textbf{Apply The Gradient Descent to find a minimum for the function where A =  } \ \ "+bmatrix(A)+"\ \ \\textbf{ and b = } \ \ "+bvector(b)
    if(x is None):
        x = np.random.randn(A.shape[0])
    Changments = [x]
    for i in range(Max_Iterations):
        if(Calc_Steps):
            LatexText += Container("X^{"+str(i)+"} = "+bvector(x))
        if(Calc_Steps == False):
            if(i==0):
                LatexText += Container("X^{"+str(i)+"} = "+bvector(x))
        difference = Quadratic_Derivative(x,A,b)
        if(i == 0):
            LatexText += Container(emph("First We calculate the derivative as following "))
            LatexText += Container(f"\\nabla f(x) = Ax - b " )
            LatexText += Container(f"\\Rightarrow "+bmatrix(A)+"."+bvector(x)+" - "+bvector(b)+" = "+bvector(difference))
        if((difference<tol).all()):
            LatexText += Container(emph("The Derivative is less then the tolerance where"))
            LatexText += Container(f"\\nabla f(x) = "+bvector(difference)+" < {tol} = "+str(tol))
            break
        if(Calc_Steps):
            LatexText += Container(" x^{"+str(i+1)+"} = x^{"+str(i)+"} - p\\nabla f(x^{"+str(i)+"}) = "+bvector(x)+" - {p}"+bvector(difference))
        if(Calc_Steps == False):
            if((i==0)or(i==Max_Iterations-1)):
                LatexText += Container(" x^{"+str(i+1)+"} = x^{"+str(i)+"} - p\\nabla f(x^{"+str(i)+"}) = "+bvector(x)+" - {p}"+bvector(difference))
                LatexText += Container("X^{"+str(i+1)+"} = "+bvector(x))
        x = x - p*difference
        Changments.append(x)
    LatexText += Container(emph(" The Gradient Descent Completed where the final result is "))
    LatexText += Container(f"x^* = "+bvector(x)+" , f(x^*) = "+str(Quadratic_Function(x,A,b,c)))
    return x,np.array(Changments),LatexText



class Gradient_Descent_C(Resource):
    def get(self):
        return {
        'message': "Gradient_Descent_C Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        A = np.array(request.json["matrix1"])
        b = np.array(request.json["matrix2"])[0]
        c = np.array(request.json["c"])
        x = np.array(request.json["matrix3"])[0]

        Max_Iterations = np.array(request.json["max_iterations"])
        p = np.array(request.json["p"])
        tol = np.array(request.json["tol"])
        x,g,LatexText = Gradient_Descent(A,b,c=c,x=x,p=p,Max_Iterations=Max_Iterations,tol = tol,Calc_Steps=False)

        return {'output':LatexText,"result":x.tolist()}   

def norm(x):
    return np.sqrt(x.T@x)
def Steepest_Gradient_Descent(A,b,c=0,x=None,Max_Iterations=50,tol = 1e-5,Steps=True,Calc_Steps=False):

    LatexText=("\\textbf{Apply The Steepest Gradient Descent to find a minimum for the function where A =  } \ \ "+bmatrix(A)+"\ \ \\textbf{ and b = } \ \ "+bvector(b))

    if(x is None):
        x = np.random.randn(A.shape[0])
    Changments = [x]
    for i in range(Max_Iterations):
        if(Calc_Steps):
            LatexText += Container("X^{"+str(i)+"} = "+bvector(x))
        if(Calc_Steps == False):
            if(i==0):
                LatexText += Container("X^{"+str(i)+"} = "+bvector(x))
        difference = Quadratic_Derivative(x,A,b)
        p = ( norm(difference)**2 ) / ( (A@difference)@difference)

        if(i == 0):
            LatexText += Container(emph("First We calculate the derivative as following "))
            LatexText += Container(f"\\nabla f(x) = Ax - b " )
            LatexText += Container(f"\\Rightarrow "+bmatrix(A)+"."+bvector(x)+" - "+bvector(b)+" = "+bvector(difference))

            LatexText += Container(emph("Then we should calculate the Step size variable ")+"\\rho")
            LatexText += Container("\\rho = \\frac{\\Vert Ax^{(k)} - b \\Vert^2 }{ \\langle A(Ax^{(k)}-b),Ax^{(k)}-b \\rangle} " )
            LatexText += Container("\\Rightarrow \\frac{\\Vert"+bvector(difference)+"\\Vert}{\\langle "+bmatrix(A)+"."+bvector(difference)+","+bvector(difference)+" \\rangle} = "+ str(p))

        if((difference<tol).all()):
            LatexText += Container(emph("The Derivative is less then the tolerance where"))
            LatexText += Container(f"\\nabla f(x) = "+bvector(difference)+" < {tol} = "+str(tol))
            LatexText += Container(" x^{"+str(i+1)+"} = x^{"+str(i)+"} - \\rho\\nabla f(x^{"+str(i)+"}) = "+bvector(x)+" - "+str(p)+bvector(difference))
            LatexText += Container("X^{"+str(i+1)+"} = "+bvector(x))
            break
        if(Calc_Steps):
            LatexText += Container(" x^{"+str(i+1)+"} = x^{"+str(i)+"} - \\rho\\nabla f(x^{"+str(i)+"}) = "+bvector(x)+" - "+str(p)+bvector(difference))
        if(Calc_Steps == False):
            if((i==0)or(i==Max_Iterations-1)):
                LatexText += Container(" x^{"+str(i+1)+"} = x^{"+str(i)+"} - \\rho\\nabla f(x^{"+str(i)+"}) = "+bvector(x)+" - "+str(p)+bvector(difference))
                LatexText += Container("X^{"+str(i+1)+"} = "+bvector(x))
        x = x - p*difference
        Changments.append(x)
    LatexText += Container(emph(" The Steepest Gradient Descent Completed where the final result is "))
    LatexText += Container(f"x^* = "+bvector(x)+" , f(x^*) = "+str(Quadratic_Function(x,A,b,c)))
    return x,np.array(Changments),LatexText

class Steepest_Gradient_Descent_C(Resource):
    def get(self):
        return {
        'message': "Steepest_Gradient_Descent_C Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        A = np.array(request.json["matrix1"])
        b = np.array(request.json["matrix2"])[0]
        c = np.array(request.json["c"])
        x = np.array(request.json["matrix3"])[0]
        Max_Iterations = np.array(request.json["max_iterations"])

        tol = np.array(request.json["tol"])

        x,g,LatexText = Steepest_Gradient_Descent(A,b,c=c,x=x,Max_Iterations=Max_Iterations,tol = tol,Calc_Steps=False)

        return {'output':LatexText,"result":x.tolist()}   

def Conjugate_Gradient_Descent(A,b,c=0,x=None,Max_Iterations=50,tol = 1e-5,Steps=True,Calc_Steps=False):
    LatexText = ("\\textbf{Apply The Conjugate Gradient Descent to find a minimum for the function where A =  } \ \ "+bmatrix(A)+"\ \ \\textbf{ and b = } \ \ "+bvector(b))

    if(x is None):
        x = np.random.randn(A.shape[0])
    Changments = [x]
    x_old = x.copy()
    for i in range(Max_Iterations):
        if(Calc_Steps):
            LatexText += Container("X^{"+str(i)+"} = "+bvector(x))
        if(Calc_Steps == False):
            if(i==0):
                LatexText += Container("X^{"+str(i)+"} = "+bvector(x))
        difference = Quadratic_Derivative(x,A,b)
        if(i==0):
            dk = difference
        else:
            dk= difference  + bk*dk
            if(Calc_Steps):
                LatexText += Container("d^{"+str(i)+"} =  \\nabla  J(x^{"+str(i)+"} + \\beta_{"+str(i-1)+"} d^{"+str(i-1)+"} = "+bvector(bk))

        if((difference==0).all()):
            LatexText += Container(emph("The Derivative is equal to 0"))
            LatexText += Container("\\nabla J(x^{"+str(i)+"})^T = "+bvector(difference)+" = 0")
            LatexText += Container("X^{"+str(i)+"} = "+bvector(x))
            break

        p = -(difference@dk)/((A@dk)@dk)
        x = x + p*dk
        bk = (norm(Quadratic_Derivative(x,A,b).T)**2)/(norm(Quadratic_Derivative(x_old,A,b).T)**2)


        if(i == 0):
            LatexText += Container(emph("First We calculate the derivative as following "))
            LatexText += Container("d^{"+str(i)+"} = Ax^{"+str(i)+"} - b " )
            LatexText += Container(f"\\Rightarrow "+bmatrix(A)+"."+bvector(x)+" - "+bvector(b)+" = "+bvector(difference))

#             LatexText += Container(emph("Then we should calculate the Step size variable ")+"\\rho")
#             LatexText += Container("\\rho = \\frac{\\Vert Ax^{(k)} - b \\Vert^2 }{ \\langle A(Ax^{(k)}-b),Ax^{(k)}-b \\rangle} " )
#             LatexText += Container("\\Rightarrow \\frac{\\Vert"+bvector(difference)+"\\Vert}{\\langle "+bmatrix(A)+"."+bvector(difference)+","+bvector(difference)+" \\rangle} = "+ str(p))



        if(Calc_Steps):

            LatexText += Container("\\rho = - \\frac{\\langle \\nabla J(x^{"+str(i)+"})^T,d^{"+str(i)+"} \\rangle}{ \\langle Ad^{"+str(i)+"},d^{"+str(i)+"}\\rangle} =  "+str(p) )

            LatexText += Container(" x^{"+str(i+1)+"} = x^{"+str(i)+"} - \\rho\\nabla f(x^{"+str(i)+"}) = "+bvector(x)+" - "+str(p)+bvector(difference))

            LatexText += Container("\\beta_{"+str(i)+"} =  \\frac{\Vert \\nabla  J(x^{"+str(i+1)+"})^T \Vert ^2 }{\Vert \\nabla  J(x^{"+str(i+1)+"})^T \Vert ^2} = "+str(bk))

        if(Calc_Steps == False):
            if((i==0)or(i==Max_Iterations-1)):

                LatexText += Container("\\rho = - \\frac{\\langle \\nabla J(x^{"+str(i)+"})^T,d^{"+str(i)+"} \\rangle}{ \\langle Ad^{"+str(i)+"},d^{"+str(i)+"}\\rangle} =  "+str(p) )

                LatexText += Container(" x^{"+str(i+1)+"} = x^{"+str(i)+"} - \\rho\\nabla f(x^{"+str(i)+"}) = "+bvector(x)+" - "+str(p)+bvector(difference))

                LatexText += Container("\\beta_{"+str(i)+"} =  \\frac{\Vert \\nabla  J(x^{"+str(i+1)+"})^T \Vert ^2 }{\Vert \\nabla  J(x^{"+str(i+1)+"})^T \Vert ^2} = "+str(bk))

                LatexText += Container("X^{"+str(i+1)+"} = "+bvector(x))

        Changments.append(x)
    LatexText += Container(emph(" The Conjugate Gradient Descent Completed where the final result is "))
    LatexText += Container(f"x^* = "+bvector(x)+" , f(x^*) = "+str(Quadratic_Function(x,A,b,c)))
    return x,np.array(Changments),LatexText


class Conjugate_Gradient_Descent_C(Resource):
    def get(self):
        return {
        'message': "Conjugate_Gradient_Descent_C Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        A = np.array(request.json["matrix1"])
        b = np.array(request.json["matrix2"])[0]
        c = np.array(request.json["c"])
        x = np.array(request.json["matrix3"])[0]
        Max_Iterations = np.array(request.json["max_iterations"])

        tol = np.array(request.json["tol"])

        x,g,LatexText = Conjugate_Gradient_Descent(A,b,c=c,x=x,Max_Iterations=Max_Iterations,tol = tol,Calc_Steps=False)

        return {'output':LatexText,"result":x.tolist()}   

