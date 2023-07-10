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

def form_check_diagonizable(array):
    np.set_printoptions(precision=3,suppress=true)
    LatexText = ""
    LatexText += emph('Now we check if the Matrix is Diagonizable or Not?')+'\\\\ \ \\\\'
    LatexText += emph('1)- First Step Calculate the Eigen Values and The Eigen Space of Each Eigen Value and we Have:')+"\\\\ \ \\\\"

    a = Matrix(array)
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


    LatexText +=emph('2)- Second Step We Find The Algebraic Multiplicity and The Geometric Multiplicity To Find out if the Matrix if defective or not?')
    LatexText += '\\\\ \ \\\\'
    for i in range(len(eigen_info)):
        eigen_value = float(eigen_info[i][0])
        LatexText += emph("The Algebraic Multiplicity is :")+'\mu_A'+"("+str(eigen_value)+') = '+str(multiciplty_alg[i])+emph(' / The Geometric Multiplicity is :  dim Ker (A −')+"("+str(eigen_value)+")"+'I) = '+str(multiciplty_geo[i])
        LatexText += '\\\\ \ \\\\'

    for i in range(len(eigen_info)):
        if(multiciplty_alg[i]>multiciplty_geo[i]):
            eigen_value = float(eigen_info[i][0])
            LatexText += emph('We Have Now : ')+'\mu_A'+"("+str(eigen_value)+') '+emph('> dim Ker (A −')+"("+str(eigen_value)+")"+'I)'
            LatexText += '\\\\ \ \\\\'
            return 0,LatexText


    return 1,LatexText

class Eigen_Decomposition(Resource):
    def get(self):
        return {
        'message': "Eigen_Decomposition Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        array = np.array(request.json["matrix1"])
        
        if(array.shape[0]==array.shape[1]):
            LatexText += Container('The Input Matrix: A ='+bmatrix(array)+emph('Is a Square Matrix'))+'\\\\ \ \\\\'

        if(array.shape[0]!=array.shape[1]):
            LatexText += '\\\\' + '{\color{red}'+emph('Error The Input Matrix is Not a Square Matrix ')+'}'
            return {'output':LatexText,"result":[0,0],"P":[0],"D":[0]}  

        var_diagonizable,LatexString = form_check_diagonizable(array)
        LatexText = LatexText+LatexString
        if(var_diagonizable == 0):

            error_msg= emph('The Matrix is defective so it not diagonizable and can not use eigen decomposition')
            LatexText += error_msg
            return {'output':LatexText,"result":[0,0],"P":[0],"D":[0]}  
        else:
            egvals,egvects = np.linalg.eig(array)

            if(egvals.dtype == complex):
                egvals = np.sqrt(np.real(egvals)**2+np.imag(egvals)**2)
                egvects = np.sqrt(np.real(egvects)**2+np.imag(egvects)**2)

            np.set_printoptions(suppress=true)
            D = np.diag(egvals)
            P = egvects

            LatexText += Container(emph('The Matrix A can be using eigen decompostion to:')+bmatrix(array)+emph('=')+bmatrix(P)+'^{-1}'+bmatrix(D)+bmatrix(P))

        return {'output':LatexText,"result":[P.tolist(),D.tolist()],"P":P.tolist(),"D":D.tolist()}   


class LU(Resource):
    def get(self):
        return {
        'message': "LU Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        a = np.array(request.json["matrix1"])
        
        np.set_printoptions(suppress=True)
        LatexText = emph(" Your Input is , A = ") + bmatrix(a) +"\\\\ \ \\\\"
        LatexText += emph("Insert Identity Matrix To L And A To U")+"\\\\ \ \\\\"
        l=np.eye(len(a)).astype(float)
        p=np.eye(len(a))
        u=a.copy().astype(float)
        LatexText +=Container(emph("L = ")+bmatrix(l) +emph(" , U = ")+bmatrix(u))
        for j in range(min(u.shape[0],u.shape[1])):
            if(j!=len(u)-1 and u[j,j].round(5)==0):
                LatexText += emph("We Have 0 In The Pivot Element U"+'['+str(j)+','+str(j)+']')+"\\"+emph("So We Need To Search First Non Zero Under This Element And Swap Rows")+"\\\\ \ \\\\"
                k=1
                while(u[j+k,j].round(5)==0):
                    k=k+1
                    if(j+k==len(a)):
                        LatexText += emph("Stop Because We Dont Have Any Non Zero Under Pivot Element U"+'['+str(j)+','+str(j)+']')+"\\\\ \ \\\\"
                        if 0 not in p.diagonal():
                            LatexText += emph("Result:")+"\\\\ \ \\\\"+emph("L = ")+bmatrix(l) +"\\\\ \ \\\\"+emph("U = ")+bmatrix(u)
                        else:
                            LatexText += emph("Result:")+"\\\\ \ \\\\"+emph("P = ")+bmatrix(p) +"\\\\ \ \\\\"+emph("L = ")+bmatrix(l) +"\\\\ \ \\\\"+emph("U = ")+bmatrix(u)
                        return {'output':LatexText,"result":[l.tolist(),u.tolist(),p.tolist()],"l":l.tolist(),"u":u.tolist(),"p":p.tolist()} 
                if 0 not in p.diagonal():
                    LatexText += emph("Create And Insert Identity Matrix To Permutation Matrix P")+'\\\\ \ \\\\'
                    LatexText +=emph("P = ")+bmatrix(p) +"\\\\ \ \\\\"
                LatexText += emph("Swap Row"+str(j)+" with Row"+str(j+k)+" in P")+'\\\\ \ \\\\'
                p[j],p[j+k]=p[j+k].copy(),p[j].copy()
                LatexText += emph("P = ")+bmatrix(p)+'\\\\ \ \\\\'
                LatexText += emph("Swap Row"+str(j)+" with Row"+str(j+k)+" in U")+'\\\\ \ \\\\'
                u[j],u[j+k]=u[j+k].copy(),u[j].copy()
                LatexText +=emph("U = ")+bmatrix(u)+'\\\\ \ \\\\'
                if(j!=0):
                    LatexText += emph("Swap Correspendent Elements In L")+"\\\\ \ \\\\"
                    l[j,:j],l[j+k,:j]=l[j+k,:j].copy(),l[j,:j].copy()
                    LatexText += emph("L = ")+bmatrix(l)+'\\\\ \ \\\\'
            for i in range(j+1,u.shape[0]):
                if(u[i,j]==0):
                    LatexText += emph("U["+str(i)+','+str(j)+"] Already Equal 0 So Go To The Next Step")+"\\\\ \ \\\\"
                    continue
                LatexText += emph("Add U["+str(i)+','+str(j)+"] / U["+str(j)+','+str(j)+"] = "+str(u[i,j])+" / "+str(u[j,j])+" = "+str(u[i,j]/u[j,j])+" in L["+str(i)+','+str(j)+"]")+'\\\\ \ \\\\'
                l[i,j]=(u[i,j]/u[j,j])
                LatexText += emph("L = ")+bmatrix(l)+'\\\\ \ \\\\'
                LatexText += emph("Substruct ("+str(u[i,j]/u[j,j])+")*Row"+str(j)+" From Row"+str(i)+" In U")+'\\\\ \ \\\\'
                u[i]=u[i]-(u[i,j]/u[j,j])*u[j]
                LatexText += emph("U = ")+bmatrix(u)+'\\\\ \ \\\\'
        LatexText += emph("There Is No Other Element Non Zero Under The Diagonal In U (U Upper Triangular) So Stop ")+"\\\\ \ \\\\"
        if 0 not in p.diagonal():
            LatexText += emph("Result:")+"\\\\ \ \\\\"+emph("L = ")+bmatrix(l) +"\\\\ \ \\\\"+emph("U = ")+bmatrix(u)
        else:
            LatexText += emph("Result:")+"\\\\ \ \\\\"+emph("P = ")+bmatrix(p) +"\\\\ \ \\\\"+emph("L = ")+bmatrix(l) +"\\\\ \ \\\\"+emph("U = ")+bmatrix(u)
        return {'output':LatexText,"result":[l.tolist(),u.tolist(),p.tolist()],"l":l.tolist(),"u":u.tolist(),"p":p.tolist()} 
        
def check_symmetric(a, rtol=1e-05, atol=1e-08):
    return np.allclose(a, a.T, rtol=rtol, atol=atol)
class Cholosky_Decomposition(Resource):
    def get(self):
        return {
        'message': "Cholosky_Decomposition Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        A = np.array(request.json["matrix1"])
        
        LatexText = emph(" Your Input is ") +", A = "+ bmatrix(A) +"\\\\ \ \\\\"
        matrix = A.copy()
        m , n = matrix.shape
        #
        if  m!=n:
            LatexText += Container(emph("The Matrix is not a square matrix,Thus you cant apply Cholosky decomposition on it"))
            return {'output':LatexText,"result":[]}  
        if(not check_symmetric(A)):
            LatexText += Container(emph("The Matrix is not a symmetric matrix where ")+"A \neq A^T"+emph(" so it is impossible to apply Cholosky decomposition on it"))
            return {'output':LatexText,"result":[]}  

        if np.any(np.linalg.eigvals(matrix) < 0):
            LatexText += Container(emph("some or one of the eigen values of the input matrix are negative which are ")+str(np.linalg.eigvals(matrix)[np.linalg.eigvals(matrix) < 0])+emph(", so the matrix is not a positive definite matrix "))
            LatexText += Container(emph(" so it is impossible to apply Cholosky decomposition on it"))
            return {'output':LatexText,"result":[]}   
        else :
            LatexText += Container(emph("The input matrix is a square symmetric positive definite matrix so Cholosky decomposition is calculable"))
            ch_matrix = np.zeros(matrix.shape)
            ch_matrix[0,0] = np.sqrt(matrix[0,0])
            for i in range(m):
                for j in range(n):
                    if i >= 1 and j==0 and ch_matrix[j,j] !=0:
                        ch_matrix[i,j] = matrix[i,j]/ch_matrix[j,j]

                    elif i > j and ch_matrix[j,j] !=0 :
                        ch_matrix[i,j]=(matrix[i,j]-np.sum([ch_matrix[i,p]*ch_matrix[j,p] for p in range(i)]))/ch_matrix[j,j]

                    elif i == j and i>0 :
                        ch_matrix[i,j]= np.sqrt(matrix[i,i]-np.sum([(ch_matrix[i,p])**2 for p in range(i)]))

            LatexText += Container(emph("The result of applying Cholosky decomposition on the input matrix is : "))
            LatexText += Container("L = "+bmatrix(ch_matrix))
            return {'output':LatexText,"result":ch_matrix.tolist()}   

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
def Kernel(U_Span):
    LatexText =  emph(" Your Input Subspace is ") +", U = span \\left ("+ bmatrix(U_Span) +" \\right )\\\\ \ \\\\"
    LatexText += Container(emph("we will apply the Gaussian elimination on the space to eliminate the basis vectors"))
    U_reduced,ls = Apply_Gaussian_Elm(U_Span)
    ls = ls.replace(" Your Input is " ,"we will start by the Space matrix ")
    LatexText += ls
    Kernel = []
    for i in range(0,U_reduced.shape[1]):
      if(U_reduced[i,i] == 0): # this is a Kernel
        Kernel.append(U_Span[:,i])
    LatexText += Container(emph("After extracting the non pivot columns which forms the kernel space we find that the kernel of the space is : "))
    LatexText += Container("Ker(U) = Span \\left ("+bmatrix(np.array(Kernel).T)+"\\right )")
    return np.array(Kernel).T,LatexText

# defined inner product
def inner(a,b):
    return np.sum(a.T@b)
#====================================
# Projection between tow vector
def projection(a,b):
    if(inner(a,a) == 0):
        return np.zeros_like(a)
    return (inner(a,b)/inner(a,a))*a
#====================================
def norm(V):
    return np.sqrt(np.sum(V.T@V))
#====================================
# Gram methode
def Gram(A,b):
    B=b-projection(A,b)
    return B
def Schmidt(A):
    if(norm(A) == 0):
        return np.zeros_like(A)
    return A/norm(A)
def gram_schmidt(A):
    # create an empty matrix to store the orthonormal basis
    Q = np.zeros((A.shape))
    Q[:,0] = Schmidt(A[:,0])
    # iterate over the vectors and orthonormalize them
    k = 0
    if((Q[:,0] != 0).any()):
        k+=1
    for i in range(1,A.shape[1]):
        Q[:,i] = A[:,i]
        for j in range(i):
            Q[:,i] -= projection(Q[:,j],A[:,i])
        Q[:,i] = Schmidt(Q[:,i])

        if((Q[:,i] != 0).any()):
            k+=1

    QL = np.zeros((Q.shape[0],k))
    n = 0
    for i in range(A.shape[1]):
        if((Q[:,i] != 0).any()):
            QL[:,n] = Q[:,i]
            n += 1
    if(QL.shape[1] < A.shape[0]):
        # QL_Augm = np.column_stack([QL,b])
        # v,ls = Kernel(QL.T)
        M = sp.Matrix(QL.T)
        N = np.array(M.nullspace()).astype(float)
        QL_Augm = QL.copy()
        for i in range(N.shape[0]):
            QL_Augm = np.column_stack([QL_Augm,N[i]])
        return QL_Augm
    return QL

class QR_Decomposition(Resource):
    def get(self):
        return {
        'message': "QR_Decomposition Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        A = np.array(request.json["matrix1"])
        
        LatexText = emph(" Your Input is ") +", A = "+ bmatrix(A) +"\\\\ \ \\\\"
        LatexText += Container(emph("first we will apply the gram schmidt on the matrix A to find the Q matrix "))
        Q = gram_schmidt(A)
        LatexText += Container(emph("from there we will get the following Q matrix :")+" Q = "+bmatrix(Q))
        R = np.round(Q.T @ A ,8)
        LatexText += Container(emph("And then we will calculate the matrix R where ")+" R = Q^T.A")
        LatexText += Container(emph("so ")+"R = "+bmatrix(Q.T)+"."+bmatrix(A)+" = "+bmatrix(R))
        LatexText += Container(emph("At the end after applying the QR Decomposition on the input matrix ")+bmatrix(A)+emph("we get"))
        LatexText += Container("Q = "+bmatrix(Q))
        LatexText += Container("R = "+bmatrix(R))
        return {'output':LatexText,"result":[Q.tolist(),R.tolist()],"Q":Q.tolist(),"R":R.tolist()}  



def egen_valeus(mat):
    eigenValues, eigenVectors = la.eig(mat.T@mat)
    idx = eigenValues.argsort()[::-1]
    eigenValues = eigenValues[idx]
    for i in range(eigenValues.shape[0]):
        if(eigenValues[i]<= 0.00000001):
            eigenValues[i] = 0
        else:
            eigenValues[i] =  eigenValues[i]/np.sqrt(eigenValues[i])
#     eigenValues = eigenValues[idx]/np.sqrt(eigenValues[idx])
    return eigenValues.real
def V(mat):
    eigenValues, eigenVectors = la.eig(mat.T@mat)
    idx = eigenValues.argsort()[::-1]
    eigenValues = eigenValues[idx]
    eigenVectors = eigenVectors[:,idx]
    LatexText = Container(emph("The next step is to find the eigen values and eigen vectors of the calculated matrix"))
    LatexText += Container(Format_EigenSpace(eigenValues,eigenVectors))
    LatexText += Container(emph("the next step is to Deduce the right singular vectors V as the founded eigenvectors"))
    LatexText += Container(emph("we will get ")+" V = "+bmatrix(eigenVectors))
    return eigenVectors,LatexText
def  row_echelon_form(Matrix):
    m = sp.Matrix(Matrix)
    m_rref, pivots = m.rref() # Compute reduced row echelon form (rref).
    return (m_rref)
def sigma(mat):
    LatexText = Container(emph("and then we should Compute the singular values"))

    S=np.zeros(mat.shape)
    p=mat.T@mat
    λ=egen_valeus(p)
    LatexText += Container(emph("the Singular values are calculated as following : ")+"\sigma_k = \sqrt{{\lambda_k}} "+emph("where ")+"k = 1\\dots"+str(len(λ)))
    if mat.shape[0]==mat.shape[1]:
         for i in range(len(λ)):
            S[i,i]=sqrt(λ[i])
    else:
         for i in range(len(λ)):
            if float(λ[i])>0.01:
                S[i,i]=sqrt(λ[i])
    LatexText += Container(emph("From there we have ")+"\\Sigma = "+bmatrix(S))
    return S,LatexText
def typ_float(mat):
    mat2=np.zeros(mat.shape)
    for i in range(mat.shape[0]):
        for j in range(mat.shape[1]):
            mat2[i,j]=float(mat[i,j])
    return mat2
def sig0(mat):
    LatexText = Container(emph("There is a 0 eigenvalue , to find the coresponding vector of U we should solve the equation : ")+"AA^T u_i = 0")
    k=typ_float(row_echelon_form(mat@mat.T))
    Sol=np.zeros([k.shape[0],1])
    for i in range(k.shape[0]):
         c=0
         if k[i,i]==0:
            s=k[::,i].copy()
            s[i]=-1
            c+=1
            S=-1*s/np.sqrt(s.T@s)
            Sol=np.hstack([Sol,S.reshape(k.shape[0],1)])
         if c==0 :
            S=np.zeros([mat.shape[0],1])
    LatexText += Container(emph("This results of the following vector : ")+bvector(S))
    return np.delete(Sol, 0, 1),LatexText

def U(mat,v,sigma):
    LatexText = Container(emph("To Compute the Left singular vector U we use the following formula : ")+"u_i = \\frac{1}{\sigma_i} A v_i , i = 1\\dots r")
    p=mat.T@mat
    U=np.zeros([mat.shape[0],1])
    if mat.shape[0]==mat.shape[1] or mat.shape[0]<mat.shape[1]:
        for i in range(sigma.shape[0]):
            if sigma[i,i]>=0.01:
                U=np.hstack([U,1/sigma[i,i]*mat@v[::,i].reshape(p.shape[0],1)])
            else:
                vect,ls = sig0(mat)
                LatexText += ls
                U=np.hstack([U,vect])
                break
    else:
        for i in range(sigma.shape[1]):
            if sigma[i,i]>=0.01:
                U=np.hstack([U,1/sigma[i,i]*mat@v[::,i].reshape(p.shape[0],1)])
        vect,ls = sig0(mat)
        LatexText += ls
        U=np.hstack([U,vect])
    LatexText += Container(emph("From there we have ")+" U = "+bmatrix(U))
    return np.delete(U, 0, 1),LatexText

class SVD(Resource):
    def get(self):
        return {
        'message': "SVD Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        mat = np.array(request.json["matrix1"])
        
        LatexText = emph(" Your Input is ") +", A = "+ bmatrix(mat) +"\\\\ \ \\\\"
        LatexText += Container(emph("first we will need the transpose matrix which is : "))
        LatexText += Container(bmatrix(mat)+"^T = "+bmatrix(mat.T))
        P=mat.T@mat
        LatexText += Container(emph("Then we will multiply the initial matrix with the transpose one :"))
        LatexText += Container("A^TA = "+bmatrix(mat.T)+"."+bmatrix(mat)+" = "+bmatrix(P))

        v,ls = V(P)
        LatexText += ls

        Sigma,ls = sigma(mat)
        LatexText += ls

        u,ls = U(mat,v,Sigma)
        LatexText += ls

        LatexText += Container(emph("At the end for the input ")+bmatrix(mat))
        LatexText += Container("U = "+bmatrix(u))
        LatexText += Container("\\Sigma = "+bmatrix(Sigma))
        LatexText += Container("V = "+bmatrix(v))
        return {'output':LatexText,"result":[u.tolist(),v.tolist(),Sigma.tolist()],"u":u.tolist(),"v":v.tolist(),"Sigma":Sigma.tolist()}  


