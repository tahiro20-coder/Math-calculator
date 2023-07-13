from flask_restful import Api, Resource, reqparse
from flask import Flask, send_from_directory,current_app,jsonify,request
import numpy as np
import math as mt
from sympy import *
import sympy as sym
import sympy as sp
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

def Gaussian_Elm(A,col=0,isReduit=False,tol = 1e-5):
    LatexText = ""
    A[abs(A) < tol] = 0.0
    n,m = A.shape
    A = A.astype(float)
    #existing Conditions
    if col >= min(n,m):
        return A,LatexText
    if(col!=0):
      LatexText+=Container(emph("Then we Evaluate the next column which is the column number ")+str(col+1))
    else:
      LatexText += Container(emph("we will be applying the transformations column by column so we will start by the first column"))
    # swaping pointer(index)
    LatexText += Container(emph("The current matrix is ")+bmatrix(A))
    swap_idx = col
    cop = A.copy()
    # select pivot value
    pivot = A[col][col]
    # finding  the next Number not equat to zero in same columns in remaining rows
    while pivot == 0 and col + swap_idx < A.shape[0]:
        if(swap_idx == col):
          LatexText += Container(emph("The pivot is 0 so we should swap rows until we find the non pivot row one "))
        else:
          LatexText += Container(emph("but This swap doesnt prevent the zero pivot so we should continue swaping"))
        # swaping rows col , col+swap_index
        A[[col, col + swap_idx]] = A[[col + swap_idx, col]]
        # incrememnt row swaping pointer
        swap_idx += 1
        #new pivot value
        pivot = A[col][col]
        LatexText += Container(emph("After swaping with the ")+str(col + swap_idx)+emph(" row we get the following matrix ")+bmatrix(A))
    # if pivot still zero thats mean all remaining rows are  zeros  so abort the function
    if pivot == 0:# return the current  A
        LatexText += Container(emph("All the rows has 0 pivot so we cant continue calculation,Therefor we will be end with the following matrix ")+bmatrix(cop))
        return cop,LatexText

    if(A[col][col] != 1):
      # divide the current row at Pivot to get 1 in the diagonal
      A[col] = A[col]/A[col][col]
      LatexText += Container(emph("then we will divide the current row of the pivot by the pivot itself to get 1 in the diagonal , that will result the following matrix : ")+bmatrix(A))
    #rows under the diagonal
    for row in range(col+1 ,n):
        rate = A[row][col]/A[col][col]
        A[row] -= rate * A[col]
    LatexText += Container(emph("then next step is to transform the under diagonal rows where we get the following matrix : ")+bmatrix(A))
    #above the diagonal
    if isReduit ==True:
        for row in range(0 ,col):
            rate = A[row][col]/A[col][col]
            A[row] -= rate * A[col]
        LatexText += Container(emph("And also because we want the reduced form we will calculate the upper diagonal rows where we finally get the matrix : ")+bmatrix(A))
    #the call the function for the next col
    g,ls = Gaussian_Elm(A,col+1,isReduit=isReduit)
    LatexText += ls
    return g,LatexText
def Apply_Gaussian_Elm(A,isReduit=False):
    LatexText = emph(" Your Input is ") +", A = "+ bmatrix(A) +"\\\\ \ \\\\"
    g,ls = Gaussian_Elm(A,0,isReduit)
    LatexText += ls
    LatexText += Container(emph("At the end the Echelon form of the input matrix ")+bmatrix(A)+emph(" is ")+bmatrix(g))
    return g,LatexText


class Diagonizable(Resource):
    def get(self):
        return {
        'message': "Diagonizable Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        array = np.array(request.json["matrix1"])

        np.set_printoptions(precision=3,suppress=True)

        LatexText =  emph(" Your Input is ") +", A = "+ bmatrix(array) +"\\\\ \ \\\\"
        LatexText += emph('we check if the Matrix is Diagonizable or Not?')+'\\\\ \ \\\\'
        LatexText += emph('\\textbf{1) First Step Calculate the Eigen Values and The Eigen Space of Each Eigen Value and we Have:}')+"\\\\ \ \\\\"

        a = sp.Matrix(array)
        eigen_info = a.eigenvects()
        multiciplty_alg = np.zeros(len(eigen_info))
        multiciplty_geo = np.zeros(len(eigen_info))
        for i in range(len(eigen_info)):
            eigen_value = float(eigen_info[i][0])

            egen_vects =  np.array(eigen_info[i][2][0]).astype(complex)
            if(np.imag(egen_vects).all()== 0):
                egen_vects =  np.array(eigen_info[i][2][0]).astype(float)
            LatexText += emph('The Eigen Value')+"\lambda_"+str(i)+" "+ '=' + ' '+ str(eigen_value)+'\:/\:'+emph('The Eigen Space:')+'U_'+str(i)+'=' +bmatrix(egen_vects)+'\\\\ \ \\\\'
            multiciplty_alg[i] = eigen_info[i][1]
            multiciplty_geo[i] = egen_vects.shape[1]


        LatexText +=emph('\\textbf{2) Second Step We Find The Algebraic Multiplicity and The Geometric Multiplicity To Find out if the Matrix if defective or not?}')
        LatexText += '\\\\ \ \\\\'
        r = True

        for i in range(len(eigen_info)):
            if(multiciplty_alg[i]>multiciplty_geo[i]):
                eigen_value = float(eigen_info[i][0])
                LatexText += emph('We Have Now : ')+'\mu_A'+"("+str(eigen_value)+') '+emph('> dim Ker (A −')+"("+str(eigen_value)+")"+'I)'
                LatexText += '\\\\ \ \\\\'
                LatexText += Container(emph('\\textbf{The Matrix is defective so it not diagonizable} '))
                r = False
            if(r == False):
                return {'output':LatexText,"result":[0]}   
        
        for i in range(len(eigen_info)):
            eigen_value = float(eigen_info[i][0])
            LatexText += emph("The Algebraic Multiplicity is :")+'\mu_A'+"("+str(eigen_value)+') = '+str(multiciplty_alg[i])+"\\\\"+emph('The Geometric Multiplicity is :  dim Ker (A −')+"("+str(eigen_value)+")"+'I) = '+str(multiciplty_geo[i])
            LatexText += '\\\\ \ \\\\'
        LatexText += Container(emph("\\textbf{The matrix is not defective so it is diagonizable} "))

        return {'output':LatexText,"result":[1]}   

def HeisenBerge_EigenValues_Algorithm(matrix,tol = 1e-5):
    Q,R = np.linalg.qr(matrix)
    for i in range(500):
        A_K = matrix@Q
        H = Q@A_K
        Q,R = np.linalg.qr(A_K)
    H = Q.T @ matrix@Q
    EV = np.diag(H).copy()
    EV[abs(EV) < tol] = 0.0
    return EV
class Convexity(Resource):
    def get(self):
        return {
        'message': "Convexity Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        A = np.array(request.json["matrix1"])
        tol = 1e-5
        LatexText =  emph(" Your Input is ") +", A = "+ bmatrix(A) +"\\\\ \ \\\\"


        LatexText += Container(emph("\\textbf{1) to check the function convexity we should calculate the eigen values of the matrix A}"))

        eigen_values = HeisenBerge_EigenValues_Algorithm(A)
        eigen_values[abs(eigen_values) < tol] = 0.0
        LatexText += Format_EigenValues(eigen_values)

        if((eigen_values > 0).all()):
            LatexText += Container(emph("All The Eigen Values Are Strictly Larger then 0"))
            LatexText += Container(emph("\\textbf{Then The matrix A is definite positive and The Function F is a Strictly Convex function} "))
            return {'output':LatexText,"result":[2]}   
        elif((eigen_values >= 0).all()):
            LatexText += Container(emph("All The Eigen Values Are Larger or equale to 0"))
            LatexText += Container(emph("\\textbf{Then The matrix A is semidifinte positive and The Function F is a Convex function} "))
            return {'output':LatexText,"result":[1]}   
        else:
            LatexText += Container(emph("Since there exist a eigen values less then 0 where "))
            for i in range(eigen_values.size):
                if(eigen_values<0):
                    LatexText += f"\\circ  \\lambda_{i} = {eigen_values[i]} < 0"
            LatexText += Container(emph("\\textbf{Then The matrix A is not positive and The Function F is not a Convex function }"))
            return {'output':LatexText,"result":[0]}   

def calc_det(Matrix):
    a,j,i,sum=1,0,0,0
    if(Matrix.shape[0]!=Matrix.shape[1]):
        print('Enter a Squar Matrix')
    else:
        if(Matrix.shape[0]==2 and Matrix.shape[1]==2):
            return Matrix[0,0]*Matrix[1,1]-Matrix[1,0]*Matrix[0,1]
        else:
            for j in range(0,Matrix.shape[1]):
                a=i+j
                mat = np.delete(np.delete(Matrix.copy(),i,axis=0),j,axis=1)
                sum = sum + ((-1)**a)*Matrix[i,j]*calc_det(mat)
    return sum

def form_determinant(Matrix):
    a,j,i,sum=1,0,0,0
    LatexText = ""

    if(Matrix.shape[0]!=Matrix.shape[1]):
        LatexText += Container('The Input Matrix: A ='+bmatrix(Matrix)+emph('Is not a Square Matrix'))
        return "error",LatexText
    else:
        LatexText += Container('The Input Matrix: A ='+bmatrix(Matrix)+emph('Is a Square Matrix'))
        LatexText += emph('det(A) = ')

        if(Matrix.shape[0]==2 and Matrix.shape[1]==2):
            sol = (Matrix[0,0]*Matrix[1,1]-Matrix[1,0]*Matrix[0,1])
            LatexText += f"({Matrix[0,0]}*{Matrix[1,1]})-({Matrix[1,0]}*{Matrix[0,1]}) = {sol}"
            return sol,LatexText
        else:
            for j in range(0,Matrix.shape[1]):
                a=i+j
                f = '{('+str(i)+'+'+str(j)+')}'
                mat = np.delete(np.delete(Matrix.copy(),i,axis=0),j,axis=1)
                if(j == Matrix.shape[1]-1):
                    LatexText += f"(-1)^{f}"+'*'+str(Matrix[i,j])+'* det'+bmatrix(mat)
                else:
                    LatexText += f"(-1)^{f}"+'*'+str(Matrix[i,j])+'* det'+bmatrix(mat)+'+'

                sum = sum + ((-1)**a)*Matrix[i,j]*calc_det(mat)

    LatexText += emph('= '+str(sum))

    return sum,LatexText

class Invertibility(Resource):
    def get(self):
        return {
        'message': "Invertibility Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        A = np.array(request.json["matrix1"])

        LatexText =  emph(" Your Input is ") +", A = "+ bmatrix(A) +"\\\\ \ \\\\"
        a,ls = form_determinant(A)
        LatexText += Container(emph("\\textbf{1) to check the Invertibility of the matrix we should calculate the determinant of it where}"))
        LatexText += ls
        if(a == "error"):
            LatexText += Container(emph("The input matrix is not square so it is not invertible"))
            return {'output':LatexText,"result":[-1]}   
        if(a== 0):
            LatexText += Container(emph("The determinant is equal to 0 so The input matrix ")+bmatrix(A)+emph(" \\textbf{is not invertible}"))
            return {'output':LatexText,"result":[0]}   
        else:
            LatexText += Container(emph("The determinant is ")+str(a)+emph(" we doesnt equal to 0 ,Therefor the matrix ")+bmatrix(A)+emph(" \\textbf{is invertible}"))
            return {'output':LatexText,"result":[1]}   
class Orthogonality(Resource):
    def get(self):
        return {
        'message': "Orthogonality Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        SubSpace = np.array(request.json["matrix1"])

        LatexText =  emph(" Your Input Subspace is ") +", U = span \\left ("+ bmatrix(SubSpace) +" \\right )\\\\ \ \\\\"
        tester = True
        for i in range(SubSpace.shape[1]):
            for j in range(i+1,SubSpace.shape[1]):
                if(SubSpace[:,i]@ SubSpace[:,j] != 0):
                    LatexText += Container(emph("\\textbf{after evaluating we find that the vector} ")+bvector(SubSpace[:,i])+emph(" \\textbf{is not orthogonal with the vector} ")+bvector(SubSpace[:,j]))
                    LatexText += Container(emph("\\textbf{where the inner product between them is} ")+str(SubSpace[:,i]@ SubSpace[:,j]))
                    LatexText += Container(emph("\\textbf{Therefor, the Space is not othogonal} "))
                    tester = False
                    break
            if(tester is False):
                break
        if(tester):
            LatexText += Container(emph("\\textbf{After evaluation we find that all the basis are orthogonal ,Then the space is an Orthogonal space}"))
        
        return {'output':LatexText,"result":[[tester]]}  
    

class Independency(Resource):
    def get(self):
        return {
        'message': "Independency Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        U_Span = np.array(request.json["matrix1"])

        LatexText =  emph(" Your Input Subspace is ") +", U = span \\left ("+ bmatrix(U_Span) +" \\right )\\\\ \ \\\\"
        LatexText += Container(emph("\\textbf{1) we will apply the Gaussian elimination on the space to check if there exist a kernel span}"))
        U_reduced,ls = Apply_Gaussian_Elm(U_Span)
        Kernel = []
        for i in range(0,U_reduced.shape[1]):
            if(U_reduced[i,i] == 0): # this is a kernel
                Kernel.append(U_Span[:,i])
                LatexText += Container(emph("\\textbf{The vector} ")+bvector(U_Span[:,i])+emph("\\textbf{ is dependent with one or more of the other subspace vectors} "))
                LatexText += Container(emph("\\textbf{So the vectors are lineary dependent}"))
                return {'output':LatexText,"result":[0]}  
        LatexText += Container(emph("\\textbf{There is no dependent vectors, so all of the subspace vectors are lineary independent}"))
        return {'output':LatexText,"result":[1]}  
        

