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


class Transpose(Resource):
    def get(self):
        return {
        'message': "Transpose Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        arr = np.array(request.json["matrix1"])
        
        LatexText = emph(" Your Input is ") +", A = "+ bmatrix(arr) +"\\\\ \ \\\\"
        # Define the shape of matrix
        n, k = arr.shape[0], arr.shape[1]
        # Define zeros array for save the transpose matrix
        tr = np.zeros((k, n))
        LatexText += Container(emph("At the begining we define a similar zeros matrix with the same size as the first matrix which are ")+str(k)+"."+str(n))
        LatexText += Container(emph("The initial Transpose matrix is ")+bmatrix(tr))
        # Boucle for each index of matrix
        for i in range(n):
            for j in range(k):
                tr[j, i] = arr[i, j]
            LatexText += Container(emph(f"Flipping the {str(i+1)} row results the folowing ")+bmatrix(tr))
        # Return the tr transpose matrix
        LatexText += Container(emph("Therefor the resulted transpose matrix is equal to ")+bmatrix(tr))

        return {'output':LatexText,"result":tr.tolist()}   


class Inverse_matrix(Resource):
    def get(self):
        return {
        'message': "Inverse_matrix Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        arr = np.array(request.json["matrix1"])
        
        LatexText = emph(" Your Input is ") +", A = "+ bmatrix(arr) +"\\\\ \ \\\\"
        l, m = arr.shape[0], arr.shape[1]
        b = np.eye(m)
        n = len(b)
        rank = np.linalg.matrix_rank(arr)
        if l == m:
            if np.linalg.det(arr) == 0:
                LatexText += Container(emph("The Determinant of the Matrix A is equal to 0 so the matrix has no inverse"))
                return None,LatexText
            elif rank<l:
                LatexText += Container(emph("The Rank of the matrix is equal to ")+str(rank)+emph(" which is less than the size of the matrix that is ")+str(l))
                LatexText += emph(" Then the matrix has no inverse")
                return None,LatexText

        elif l != m:
            LatexText += emph("The matrix is not a square matrix where the number of rows does not equal to the number of columns")
            return None
        LatexText += Container(emph("The matrix has a determinant of ")+str(np.linalg.det(arr))+emph(" and the matrix is a full rank matrix, this means that we can continue calculating the inverse matrix normally"))
        LatexText += Container(emph("First we will define the identity matix that has the same size of the input matrix ")+bmatrix(b))
        # Augment the matrix with the identity matrix
        augmented = np.concatenate((arr, b), axis=1)
        LatexText += Container(emph("Then we will idenity the Aumented matrix which is the concatenation between the input and the identity matrix,this will give the following matrix : "))
        LatexText += Container("A_{aug} = "+bmatrix(augmented))
        # Gaussian elimination
        for k in range(n):
            if augmented[k, k] == 0:
                LatexText += Container(emph("the pivot at the index ")+str(k)+","+str(k)+emph(" is equal to 0, Therefor the matrix has not inverse"))
                return None,LatexText

            LatexText += Container(emph(f"Then we scale the pivot row at the index {str(k+1)} by its pivot which is {str(augmented[k, k])}"))
            # Scale the pivot row
            augmented[k] /= augmented[k, k]
            LatexText += Container(emph("The augmented matrix will be equal to ")+bmatrix(augmented))
            # Elimination phase
            for i in range(n):
                if i != k:
                    factor = augmented[i, k]
                    augmented[i] -= factor * augmented[k]
            LatexText += Container(emph(" After eliminating the next rows we will remain with the matrix : ")+bmatrix(augmented))
        # Extract the inverted matrix
        inverted = augmented[:, n:]
        LatexText += Container(emph("At the end we will extract the inverse matrix that will be :"))
        LatexText += Container("A^{-1} = "+bmatrix(inverted))
        LatexText += Container(emph("Where ")+"A.A^{-1} = "+bmatrix(arr)+"."+bmatrix(inverted)+" = "+bmatrix(b)+" = I")


        return {'output':LatexText,"result":inverted.tolist()}   

class Trace(Resource):
    def get(self):
        return {
        'message': "Trace Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        Matrix = np.array(request.json["matrix1"])
   
        if(Matrix.shape[0]!=Matrix.shape[1]):
            LatexText += Container(emph('The Input Matrix: A =')+bmatrix(Matrix)+emph('Is not a Square Matrix'))
            return {'output':LatexText,"result":["error"]}   
        else:
            trace = np.sum(np.diag(Matrix))
            LatexText += Container(emph('The Input Matrix: A =')+bmatrix(Matrix)+emph('Is a Square Matrix'))
            LatexText += emph('tr(A) = ')
            diag = np.diag(Matrix)
            for i in range(len(diag)):
                if( i == len(diag)-1):
                    LatexText += str(diag[i])
                else:
                    LatexText += str(diag[i])+'+'

            LatexText += "="+str(trace)
            return {'output':LatexText,"result":trace.tolist()}   

class Determinant(Resource):
    def get(self):
        return {
        'message': "Determinant Get"
        }
    def calc_det(self,Matrix):
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
                    sum = sum + ((-1)**a)*Matrix[i,j]*self.calc_det(mat)
        return sum

    def post(self):
        print(self)
        
        LatexText = ""
        Matrix = np.array(request.json["matrix1"])
   
        a,j,i,sum=1,0,0,0

        if(Matrix.shape[0]!=Matrix.shape[1]):
            LatexText += Container(emph('The Input Matrix: A =')+bmatrix(Matrix)+emph('Is not a Square Matrix'))
            return "error",LatexText
        else:
            LatexText += Container(emph('The Input Matrix: A =')+bmatrix(Matrix)+emph('Is a Square Matrix'))
            LatexText += emph('det(A) = ')

            if(Matrix.shape[0]==2 and Matrix.shape[1]==2):
                return Matrix[0,0]*Matrix[1,1]-Matrix[1,0]*Matrix[0,1]
            else:
                for j in range(0,Matrix.shape[1]):
                    a=i+j
                    f = '{('+str(i)+'+'+str(j)+')}'
                    mat = np.delete(np.delete(Matrix.copy(),i,axis=0),j,axis=1)
                    if(j == Matrix.shape[1]-1):
                        LatexText += f"(-1)^{f}"+'*'+str(Matrix[i,j])+'* det'+bmatrix(mat)
                    else:
                        LatexText += f"(-1)^{f}"+'*'+str(Matrix[i,j])+'* det'+bmatrix(mat)+'+'

                    sum = sum + ((-1)**a)*Matrix[i,j]*self.calc_det(mat)

        LatexText += emph('= '+str(sum))
        return {'output':LatexText,"result":sum.tolist()}  



class Trace(Resource):
    def get(self):
        return {
        'message': "Trace Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        Matrix = np.array(request.json["matrix1"])
   
        if(Matrix.shape[0]!=Matrix.shape[1]):
            LatexText += Container(emph('The Input Matrix: A =')+bmatrix(Matrix)+emph('Is not a Square Matrix'))
            return {'output':LatexText,"result":["error"]}   
        else:
            trace = np.sum(np.diag(Matrix))
            LatexText += Container(emph('The Input Matrix: A =')+bmatrix(Matrix)+emph('Is a Square Matrix'))
            LatexText += emph('tr(A) = ')
            diag = np.diag(Matrix)
            for i in range(len(diag)):
                if( i == len(diag)-1):
                    LatexText += str(diag[i])
                else:
                    LatexText += str(diag[i])+'+'

            LatexText += "="+str(trace)
            return {'output':LatexText,"result":trace.tolist()}   