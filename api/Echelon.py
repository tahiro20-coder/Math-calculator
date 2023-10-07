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
      LatexText += Container(emph("we will be applying the transformations column by column so we will start by the first column "))
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

class Gaussian_Elmination(Resource):
    def get(self):
        return {
        'message': "Gaussian_Elmination Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        A = np.array(request.json["matrix1"])
        isReduit = np.array(request.json["check1"])

        g,LatexText = Apply_Gaussian_Elm(A,isReduit)

        return {'output':LatexText,"result":g.tolist()}   



class Basis(Resource):
    def get(self):
        return {
        'message': "Basis Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        U_Span = np.array(request.json["matrix1"])

        LatexText =  emph(" Your Input Subspace is ") +", U = span \\left ("+ bmatrix(U_Span) +" \\right )\\\\ \ \\\\"
        LatexText += Container(emph("\\textbf{1) we will apply the Gaussian elimination on the space to eliminate the kernel vectors}"))
        U_reduced,ls = Apply_Gaussian_Elm(U_Span)
        ls = ls.replace(" Your Input is " ,"we will start by the Space matrix ")
        LatexText += ls
        Basis = []
        for i in range(0,U_reduced.shape[1]):
            if(U_reduced[i,i] == 1): # this is a basis
                Basis.append(U_Span[:,i])
        LatexText += Container(emph("\\textbf{2) After extracting the pivot columns which are the basis we find that the basis of the space are: }"))
        LatexText += Container("Basis = Span \\left ("+bmatrix(np.array(Basis).T)+"\\right )")

        return {'output':LatexText,"result":(np.array(Basis).T).tolist()}   

class Gram_Shmidt(Resource):
    def get(self):
        return {
        'message': "Gram_Shmidt Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        B = np.array(request.json["matrix1"])

        LatexText =  emph(" Your Input Subspace is ") +", U = span \\left ("+ bmatrix(B) +" \\right )\\\\ \ \\\\"
        if((B==0).all()):
            LatexText += Container(emph("\\textbf{Your input is a zero matrix there is nothing to do about it}"))
            return {'output':LatexText,"result":[["Error"]]}   
        LatexText += Container(emph("\\textbf{The new Basis Space after applying the gram shmidt method will be : }"))
        C = [B[:,0].copy()]
        LatexText += Container("u_1 = b_1 = "+bvector(B[:,0].copy()))
        for i in range(1,B.shape[1]):
            C.append(B[:,i].copy())
            for j in range(i):
                c = np.array(C[j])
                C[i] = C[i] - ( (B[:,i] @ c ) / ( c @ c )) * c
            LatexText += Container("u_{"+str(i+1)+"} = b_{"+str(i+1)+"} - \\sum_{j=1}^{"+str(i)+"} proj_{u_j}(b_{"+str(i+1)+"}) = "+bvector(C[i]))
        LatexText += Container("Basis = Span \\left ("+bmatrix(np.array(C).T)+"\\right)")

        return {'output':LatexText,"result":(np.array(C).T).tolist()}   



class Kernel(Resource):
    def get(self):
        return {
        'message': "Kernel Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        U_Span = np.array(request.json["matrix1"])

        LatexText =  emph(" Your Input Subspace is ") +", U = span \\left ("+ bmatrix(U_Span) +" \\right )\\\\ \ \\\\"
        LatexText += Container(emph("\\textbf{1) we will apply the Gaussian elimination on the space to eliminate the basis vectors}"))
        U_pik,ls = Apply_Gaussian_Elm(U_Span,isReduit=True)
        ls = ls.replace(" Your Input is " ,"we will start by the Space matrix ")
        LatexText += ls
        Kernel = []
        U_reduced = np.zeros((U_pik.shape[1],U_pik.shape[1]))
        U_reduced[:U_pik.shape[0],:U_pik.shape[1]] = U_pik
        for i in range(0,U_reduced.shape[1]):
            if(U_reduced[i,i] == 0): # this is a Kernel
                U_reduced[i,i] = -1
                Kernel.append(U_reduced[:,i])
        LatexText += Container(emph("\\textbf{2) After extracting the non pivot columns which forms the kernel space we find that the kernel of the space is : }"))
        LatexText += Container("Ker(U) = Span \\left ("+bmatrix(np.array(Kernel).T)+"\\right )")

        return {'output':LatexText,"result":(np.array(Kernel).T).tolist()}   


class Rank(Resource):
    def get(self):
        return {
        'message': "Rank Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        U_Span = np.array(request.json["matrix1"])

        LatexText =  emph(" Your Input Subspace is ") +", U = span \\left ("+ bmatrix(U_Span) +" \\right )\\\\ \ \\\\"
        LatexText += Container(emph("\\textbf{1) we will apply the Gaussian elimination on the space to eliminate the kernel vectors}"))
        U_reduced,ls = Apply_Gaussian_Elm(U_Span)
        Basis = []
        LatexText += Container(emph("where the echelon form of will be"))
        LatexText += Container("U_{echelon} = "+bmatrix(U_reduced))
        for i in range(0,min(U_reduced.shape[0],U_reduced.shape[1])):
            if(U_reduced[i,i] == 1): # this is a basis
                Basis.append(U_Span[:,i])
        LatexText += Container(emph("\\textbf{2) After extracting the pivot columns which are the basis we find that the basis of the space are : }"))
        LatexText += Container("Basis = Span \\left ("+bmatrix(np.array(Basis).T)+"\\right )")

        LatexText += Container(emph("\\textbf{3) From there the rank is the size of the basis so it will be : }"))
        if(len(Basis) == 0):
            LatexText += Container("Rank(U) = "+"\\textbf{"+str(0)+"}")
            return {'output':LatexText,"result":[[0]]}   
        else:
            LatexText += Container("Rank(U) = "+"\\textbf{"+str(np.array(Basis).T.shape[1])+"}")
            return {'output':LatexText,"result":[[np.array(Basis).T.shape[1]]]}   
        


class Particular_Solution_C(Resource):
    def get(self):
        return {
        'message': "Particular_Solution_C Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        A = np.array(request.json["matrix1"])
        b = np.array(request.json["matrix2"])

        LatexText = emph(" Your Input is ") +", A = "+ bmatrix(A) +" , b = "+bmatrix(b)+"\\\\ \ \\\\"
        A_Augm = np.column_stack([A,b])
        LatexText += Container(emph("\\textbf{1) The first thing to do is to concatenate the A and b Matrices, this will give as the following matrix : }"))
        LatexText += Container("A_{aug} = "+bmatrix(A_Augm))
        LatexText += Container(emph("\\textbf{2) Then we should apply the reduced Echelon form on the augmented matrix }"))
        U_Augm,ls = Apply_Gaussian_Elm(A_Augm,isReduit=True)
        ls = ls.replace(" Your Input is " ,"we will start by the augmented matrix ")
        LatexText += ls
        U = U_Augm[:,:A.shape[1]]
        Solution = U_Augm[:,U.shape[1]:]
        for i in range(U.shape[0]):
            if(((U[i]==0).all())and((Solution[i]!=0).any())):
                LatexText += Container(emph("\\textbf{There exist a Zero row after the transformation of A faced by a valued transformed b so it is impossible to find a solution in this case}"))
                return {'output':LatexText,"result":[]}   
        sol = np.zeros((U.shape[1],b.shape[1]))

        sol[:Solution.shape[0],:Solution.shape[1]] = Solution
        LatexText += Container(emph("\\textbf{3) Then we will extract the particular solution where the solution will be : }"))
        LatexText += "\\begin{bmatrix}"
        if(sol.shape[1] == 1):
            LatexText += "x_1"
            for i in range(1,sol.shape[0]):
                LatexText += "\\\\ x_{"+str(i+1)+"}"
        else:
            
            for i in range(sol.shape[0]):
                for j in range(sol.shape[1]):
                    if(j == sol.shape[1]-1):
                        LatexText += "x_{"+str(i+1)+str(j+1)+"}"
                    else:
                        LatexText += "x_{"+str(i+1)+str(j+1)+"} &"
                LatexText += "\\\\"
           
        LatexText += "\\end{bmatrix}" +" = "+ bmatrix(sol)
        return {'output':LatexText,"result":sol.tolist()}   

class General_solution(Resource):
    def get(self):
        return {
        'message': "General_solution Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        A = np.array(request.json["matrix1"])
        b = np.array(request.json["matrix2"])

        LatexText = emph(" Your Input is ") +", A = "+ bmatrix(A) +" , b = "+bmatrix(b)+"\\\\ \ \\\\"
        A_Augm = np.column_stack([A,b])
        LatexText += Container(emph("\\textbf{1) The first thing to do is to concatenate the A and b Matrices, this will give as the following matrix :} "))
        LatexText += Container("A_{aug} = "+bmatrix(A_Augm))
        LatexText += Container(emph("\\textbf{2) Then we should apply the reduced Echelon form on the augmented matrix }"))
        U_Augm,ls = Apply_Gaussian_Elm(A_Augm,isReduit=True)
        ls = ls.replace(" Your Input is " ,"we will start by the augmented matrix ")
        LatexText += ls
        U = U_Augm[:,:A.shape[1]]
        Solution = U_Augm[:,U.shape[1]:]
        for i in range(U.shape[0]):
            if(((U[i]==0).all())and((Solution[i]!=0).any())):
                LatexText += Container(emph("\\textbf{There exist a Zero row after the transformation of A faced by a valued transformed b so it is impossible to find a solution in this case}"))
                return {'output':LatexText,"result":[]}  
        sol = np.zeros((U.shape[1],b.shape[1]))
        sol[:Solution.shape[0],:Solution.shape[1]] = Solution
        U = A.copy()
        U_Aug = np.zeros((U.shape[1],U.shape[1]))
        if(U.shape[0]<U.shape[1]):
            U_Aug[:U.shape[0],:U.shape[1]] = U
        U,ls = Apply_Gaussian_Elm(U_Aug,isReduit=True)
        nullSpaces = []
        variables = ""
        LatexText += Container(emph("\\textbf{3) Then we will extract the particular solution where the solution will be : }")+bmatrix(sol))
        LatexText += Container(emph("\\textbf{4) After finding the null space the general solution will be :} "))
        LatexText += "\\\\ \ \\\\ \\left \{ x \in \mathbb{R}^{"+str(U.shape[1])+"} : x = "+bmatrix(sol)

        for i in range(U.shape[0]):
            if(U[i,i] == 0):
                U[i,i] = -1
                nullSpaces.append(U[:,i])
                LatexText += "+ \lambda_{"+str(len(nullSpaces))+"} "+bvector(nullSpaces[-1])
                variables += "\lambda_{"+str(len(nullSpaces))+"}"

        LatexText += ", "+ variables +"\in \mathbb{R} \\right \}"

        return {'output':LatexText,"result":sol.tolist()}  

def LU(a):
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
                    return l,u,p,LatexText
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
    return l,u,p,LatexText

def Particular_Solution(A,b):
  LatexText = emph(" Your Input is ") +", A = "+ bmatrix(A) +" , b = "+bmatrix(b)+"\\\\ \ \\\\"
  A_Augm = np.column_stack([A,b])
  LatexText += Container(emph("The first thing to do is to concatenate the A and b Matrices, this will give as the following matrix : "))
  LatexText += Container("A_{aug} = "+bmatrix(A_Augm))
  LatexText += Container(emph("Then we should apply the reduced Echelon form on the augmented matrix "))
  U_Augm,ls = Apply_Gaussian_Elm(A_Augm,isReduit=True)
  ls = ls.replace(" Your Input is " ,"we will start by the augmented matrix ")
  LatexText += ls
  U = U_Augm[:,:A.shape[1]]
  Solution = U_Augm[:,U.shape[1]:]
  for i in range(U.shape[0]):
    if(((U[i]==0).all())and((Solution[i]!=0).any())):
      LatexText += Container(emph("There exist a Zero row after the transformation of A faced by a valued transformed b so it is impossible to find a solution in this case"))
      return None,LatexText
  sol = np.zeros((U.shape[1],b.shape[1]))
  sol[:Solution.shape[0],:Solution.shape[1]] = Solution
  LatexText += Container(emph("Then we will extract the particular solution where the solution will be : ")+bmatrix(sol))
  return sol,LatexText

def LU_Solv(A,B):
  X=np.zeros(A.shape[1]).astype('str')
  for i in range(len(X)):
    X[i]="x_"+str(i)
  LatexText =emph("The Input System Is : ")+Container(bmatrix(A) +bvector(X) +" = "+bmatrix(B)) +"\\\\ \ \\\\"
  LatexText +=emph("\\textbf{1) Decompose A Using LU Decomposition : }")+"\\\\ \ \\\\"
  l,u,p,ls=LU(A)
  # LatexText+=ls
  if 0 in p.diagonal():
    LatexText +="\\\\ \ \\\\"+emph("A = ")+"P^{-1}"+"LU = "+bmatrix(p)+"^{-1}"+bmatrix(l)+bmatrix(u)+"\\\\ \ \\\\"
    LatexText +="\\\\ \ \\\\"+emph("A = ")+"P^{-1}"+"LU = "+bmatrix(np.linalg.inv(p))+bmatrix(l)+bmatrix(u)+"\\\\ \ \\\\"
    LatexText +=emph("We Can Write The System As ")+"P^{-1}"+"LUX = B: "+Container(bmatrix(np.linalg.inv(p)) +bmatrix(l) +bmatrix(u) +bvector(X) +" = "+bmatrix(B)) +"\\\\ \ \\\\"
    Z=np.linalg.pinv(p)@l
    LatexText +=emph("Set Z=")+"P^{-1}"+"L = "+bmatrix(np.linalg.inv(p))+bmatrix(l)+" = "+bmatrix(Z)+"\\\\ \ \\\\"
    LatexText +=emph("And Write The System As ZUX = B")+Container(bmatrix(Z) +bmatrix(u) +bvector(X) +" = "+bmatrix(B)) +"\\\\ \ \\\\"
    Y=np.zeros(l.shape[1]).astype('str')
    for i in range(len(Y)):
      Y[i]="y_"+str(i)
    LatexText +=emph("\\textbf{2) Suppose Y=UX And Find Y By Solving The System ZY=B: }")+Container(bmatrix(Z) +bvector(Y) +" = "+bmatrix(B)) +"\\\\ \ \\\\"
    Y_,ls = Particular_Solution(Z,B)
    LatexText+=ls
    if(Y_ is None):
      LatexText +="\\\\ \ \\\\"+emph("The System ZY=B Don't Have a Solution  So There is No Solution For Your System")
      return None,LatexText
    else:
      LatexText +=bvector(Y) +" = "+bvector(Y_.flatten())+"\\\\ \ \\\\"
      LatexText +=emph("\\textbf{3) After Finding Y find X by solving The System UX=Y: }")+Container(bmatrix(u) +bvector(X) +" = "+bmatrix(Y_)) +"\\\\ \ \\\\"
      X_,ls = Particular_Solution(u,Y_)
      LatexText+=ls
      if(X_ is None):
        LatexText +="\\\\ \ \\\\"+emph("The System UX=Y Don't Have a Solution  So There is No Solution For Your System")
        return None,LatexText
      else:
        LatexText +=bvector(X) +" = "+bvector(X_.flatten())+"\\\\ \ \\\\"
        LatexText += emph("Result:")+"\\\\ \ \\\\"+emph("The Solution of The System is :")+bvector(X) +" = "+bvector(X_.flatten())
        return X_,LatexText
  else:
    LatexText +="\\\\ \ \\\\"+emph("A = LU = ")+bmatrix(l)+bmatrix(u)+"\\\\ \ \\\\"
    LatexText +=emph("We Can Write The System As LUX = B : ")+Container(bmatrix(l) +bmatrix(u) +bvector(X) +" = "+bmatrix(B)) +"\\\\ \ \\\\"
    Y=np.zeros(l.shape[1]).astype('str')
    for i in range(len(Y)):
      Y[i]="y_"+str(i)
    LatexText +=emph("\\textbf{2) Suppose Y=UX And Find Y By Solving The System LY=B: }")+Container(bmatrix(l) +bvector(Y) +" = "+bmatrix(B)) +"\\\\ \ \\\\"
    Y_,ls = Particular_Solution(l,B)
    # LatexText+=ls
    if(Y_ is None):
      LatexText +="\\\\ \ \\\\"+emph("The System LY=B Don't Have a Solution  So There is No Solution For Your System")
      return None,LatexText
    else:
      LatexText +=bvector(Y) +" = "+bvector(Y_.flatten())+"\\\\ \ \\\\"
      LatexText +=emph("\\textbf{3) After Finding Y find X by solving The System UX=Y: }")+Container(bmatrix(u) +bvector(X) +" = "+bmatrix(Y_)) +"\\\\ \ \\\\"
      X_,ls = Particular_Solution(u,Y_)
      # LatexText+=ls
      if(X_ is None):
        LatexText +="\\\\ \ \\\\"+emph("The System UX=Y Don't Have a Solution  So There is No Solution For Your System")
        return None,LatexText
      else:
        LatexText +=bvector(X) +" = "+bvector(X_.flatten())+"\\\\ \ \\\\"
        LatexText += emph("Result:")+"\\\\ \ \\\\"+emph("The Solution of The System is :")+bvector(X) +" = "+bvector(X_.flatten())
        return X_,LatexText

class LU_Solv_C(Resource):
    def get(self):
        return {
        'message': "LU_Solv Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        A = np.array(request.json["matrix1"])
        b = np.array(request.json["matrix2"])

        sol,LatexText=LU_Solv(A,b)

        return {'output':LatexText,"result":sol.tolist()}  


class Eigenvalues_and_Eigenvectors:
#-------------------------------------------------------------------------------
  def __init__(self, mat=[]):
      """
      initializes the matrix as a numPy array.
      """
      self.mat = np.array(mat)

#-------------------------------------------------------------------------------
  def isEmpty(self):
    """
    checks if the matrix is empty or not.
    """
    return True if self.mat.shape[0] == 0 and self.mat.shape[1] == 0 else False
#-------------------------------------------------------------------------------
  def isNotSquare(self):
    """"
    check the matrix if it's not sequare
    """
    return True if self.mat.shape[0] != self.mat.shape[0] else False
#-------------------------------------------------------------------------------
  def isSymmetric(self,tol=1e-8):
      """"
      check the matrix if it's symetrique
      """
      return np.all(np.abs(self.mat-self.mat.T) < tol)
#-------------------------------------------------------------------------------
  def eignvalues2by2(self):
    #the formila is lamda1 , lamda2 = m +- sqrt(m**2 - p)
    #calculate the mean and the determinant p
    LatexText = Container(emph("\\textbf{The input matrix is a 2x2 matrix so its eigen values could be calculated as follwing : }"))
    LatexText += Container("\\lambda_1 = m + \\sqrt{m^2 - p} , \\lambda_2 = m - \\sqrt{m^2 - p}")
    LatexText += Container(emph("where ")+" m = \\frac{a_{11}+a_{22}}{2} "+emph(" and ")+" p = (a_{11}*a_{22}) - (a_{12}*a_{21})"+emph(" , From there :"))


    m = (self.mat[0,0] + self.mat[1,1])/2
    p = self.mat[0,0]*self.mat[1,1] - self.mat[0,1]*self.mat[1,0]
    LatexText += Container(" m = \\frac{"+str(self.mat[0,0])+" + "+str(self.mat[1,1])+"}{2} = "+str(m))
    LatexText += Container(" p = ("+str(self.mat[0,0])+" * "+str(self.mat[1,1])+" )-( "+str(self.mat[0,1])+"*"+str(self.mat[1,0])+")= "+str(p))
    LatexText += Container("\\lambda_1 = "+str(m)+" + \\sqrt{"+str(m**2)+" - "+str(p)+" } = "+str(m + np.sqrt(m**2-p)))
    LatexText += Container("\\lambda_2 = "+str(m)+" - \\sqrt{"+str(m**2)+" - "+str(p)+" } = "+str(m - np.sqrt(m**2-p)))

    return [m + np.sqrt(m**2-p) , m - np.sqrt(m**2-p)],LatexText
#-------------------------------------------------------------------------------

  def eignvalues(self, max_iteration=500,tol = 1e-5):
    LatexText = ""
    # Check if the matrix is empty or not square
    if self.isEmpty() or self.isNotSquare():
        LatexText += Container(emph("\\textbf{The matrix is not squared so you cant calculate its eigen values or eigen vectors}"))
        return [[], []],LatexText

    #case the matrix is 2*2 for quique calculation we will use easy method
    if self.mat.shape[0]==2:
      EV,LatexText = self.eignvalues2by2()
      self.eigenSet = list(set(EV))[::-1]
      return EV,LatexText

    LatexText += Container(emph("\\textbf{1) To calculate the eigen values we will use the HeisenBerge algorithm with 500 iteration where the eigen values will be }"))

    matrix = self.mat
    Q,R = np.linalg.qr(matrix)
    for i in range(max_iteration):
        A_K = matrix@Q
        H = Q@A_K
        Q,R = np.linalg.qr(A_K)
    H = Q.T @ matrix@Q
    EV = np.diag(H).copy()
    EV[abs(EV) < tol] = 0.0
    
    self.eigenvalues = EV
    self.eigenSet = list(set(EV))[::-1]

    LatexText += Format_EigenValues(EV)
    return EV,LatexText

#-------------------------------------------------------------------------------
  def eignvectos_solve_homogen(self, eignvalues):
    LatexText = Container(emph("\\textbf{3) For each eigenvalue λ,we will solve the homogeneous system}")+ "\\textbf{ ( A - λ I)x = 0}")
    # Create an empty list to store the eigenvectors
    eign = []
    
    # Iterate over each eigenvalue (rounded to 5 decimal places)
    for eignvalue in self.eigenSet:
        # Create a matrix by subtracting the rounded eigenvalue times the identity matrix
        mat =  self.mat - np.round(eignvalue,decimals=8)* np.eye(self.mat.shape[0])
        LatexText += Container("E_{"+str(eignvalue)+"} : ")
        LatexText += Container(" ( A - \lambda I)x= \\left ("+bmatrix(self.mat)+"-"+bmatrix(np.round(eignvalue,decimals=8)* np.eye(self.mat.shape[0]))+" \\right) = "+bmatrix(mat)+"X = 0")
        # Solve the homogeneous system of equations for the given matrix
        g,latex = Apply_Gaussian_Elm(mat,isReduit=True)
        m = mat.shape[0]
        LatexText += Container(emph("\\textbf{After applying the Gaussian Elimination we get the following matrix : }")+bmatrix(g))

        sol = []
        # set the pivot that equal 0 to -1
        for k in range(m):
            if g[k,k] ==0:
                g[k,k]=-1
                sol.append( g[:,k])

        LatexText += Container(emph("\\textbf{after extracting the null space we will get the following eigen values  : }"))

        LatexText += Format_EigenSpect([eignvalue],[sol])
        eign.append(sol)

    # Return the list of eigenvectors
    return eign,LatexText

  def Find(self,matrix):
    LatexText = emph(" Your Input is ") +", A = "+ bmatrix(matrix) +"\\\\ \ \\\\"
    ev,ls = self.eignvalues()
    LatexText += ls
    LatexText += Container(emph("\\textbf{2) Then we will use the eigen values to find the eigen vectors }"))
    evect,ls = self.eignvectos_solve_homogen(ev)
    LatexText += ls
    LatexText += Container(emph("\\textbf{6) At the end we find that the eigen values and eigen vectors of the matrix }")+bmatrix(matrix)+emph("\\textbf{are equal to : }"))
    LatexText += Format_EigenSpect(self.eigenSet,evect)
    return ev,evect,LatexText

class Eigenvalues_and_Eigenvectors_C(Resource):
    def get(self):
        return {
        'message': "Eigenvalues_and_Eigenvectors Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        A = np.array(request.json["matrix1"])

        ev,evct,LatexText = Eigenvalues_and_Eigenvectors(A).Find(A)

        return {'output':LatexText}  
