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
        LatexText += Container(emph("\\textbf{1) At the begining we define a similar zeros matrix with the same size as the first matrix which are }")+"\\textbf{"+str(k)+"."+str(n)+"}")
        LatexText += Container(emph("\\textbf{2) The initial Transpose matrix is }")+bmatrix(tr))
        # Boucle for each index of matrix
        for i in range(n):
            for j in range(k):
                tr[j, i] = arr[i, j]
            LatexText += Container(emph(f"Flipping the {str(i+1)} row results the folowing ")+bmatrix(tr))
        # Return the tr transpose matrix
        LatexText += Container(emph("\\textbf{3) Therefor the resulted transpose matrix is equal to }")+bmatrix(tr))

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
                LatexText += Container(emph("\\textbf{The Determinant of the Matrix A is equal to 0 so the matrix has no inverse}"))
                return None,LatexText
            elif rank<l:
                LatexText += Container(emph("\\textbf{The Rank of the matrix is equal to }")+str(rank)+emph(" \\textbf{which is less than the size of the matrix that is} ")+str(l))
                LatexText += emph(" \\textbf{Then the matrix has no inverse}")
                return None,LatexText

        elif l != m:
            LatexText += emph("\\textbf{The matrix is not a square matrix where the number of rows does not equal to the number of columns}")
            return None
        LatexText += Container(emph("\\textbf{The matrix has a determinant of }")+str(np.linalg.det(arr))+emph(" \\textbf{and the matrix is a full rank matrix, this means that we can continue calculating the inverse matrix normally}"))
        LatexText += Container(emph("\\textbf{1) First we will define the identity matix that has the same size of the input matrix} ")+bmatrix(b))
        # Augment the matrix with the identity matrix
        augmented = np.concatenate((arr, b), axis=1)
        LatexText += Container(emph("\\textbf{2) Then we will idenity the Aumented matrix which is the concatenation between the input and the identity matrix,this will give the following matrix : }"))
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
        LatexText += Container(emph("\\textbf{3) At the end we will extract the inverse matrix that will be :}"))
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

            LatexText += "="+"\\textbf{"+str(trace)+"}"
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
            return {'output':LatexText,"result":["error"]}  
        else:
            LatexText += Container(emph('The Input Matrix: A =')+bmatrix(Matrix)+emph('Is a Square Matrix'))
            LatexText += emph('det(A) = ')

            if(Matrix.shape[0]==2 and Matrix.shape[1]==2):
                sol = (Matrix[0,0]*Matrix[1,1]-Matrix[1,0]*Matrix[0,1])
                LatexText += f"({Matrix[0,0]}*{Matrix[1,1]})-({Matrix[1,0]}*{Matrix[0,1]}) = {sol}"
                return {'output':LatexText,"result":np.array([[sol]]).tolist()}  
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

        LatexText += '= '+"\\textbf{"+str(sum)+"}"
        return {'output':LatexText,"result":np.array([[sum]]).tolist()}  



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

            LatexText += "="+"\\textbf{"+str(trace)+"}"
            return {'output':LatexText,"result":trace.tolist()}   


class Products:
  def __init__(self,A=None):
    self.A = A
  def Standard_inner_product(self,x,y):

    return x.T @ y
  def inner_product(self,x,y):
    if(self.A is None):
      self.A = np.eye(x.shape[0])
    return (x.T @ self.A @ y)

  def isSymmetric(self,tol=1e-8):
    """"
    check the matrix if it's symetrique
    """
    return np.all(np.abs(self.A-self.A.T) < tol)
  def HeisenBerge_EigenValues_Algorithm(self,tol = 1e-5):
    Q,R = np.linalg.qr(self.A)
    for i in range(500):
        A_K = self.A@Q
        H = Q@A_K
        Q,R = np.linalg.qr(A_K)
    H = Q.T @ self.A@Q
    EV = np.diag(H).copy()
    EV[abs(EV) < tol] = 0.0
    return EV
  def check_matrix_positive_symetric(self,tol = 1e-5):
    eigen_values = self.HeisenBerge_EigenValues_Algorithm(tol)
    eigen_values[abs(eigen_values) < tol] = 0.0

    if(self.isSymmetric(tol)==True and np.all(eigen_values >= 0)==True):
      return 1
    else:
      return -1
class Angle(Resource):
    def get(self):
        return {
        'message': "Angle Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        A = np.array(request.json["matrix1"])
        x = np.array(request.json["matrix2"])[0]
        y = np.array(request.json["matrix3"])[0]
        product_type = np.array(request.json["choice"])

        if((x==0).all() or(y==0).all()):
            LatexText += Container(emph("\\textbf{You Cant calculate Angles using a zero vector}"))
            return {'output':LatexText,"result":[[-1]]}   
        
        if(product_type==0):
            # the inner product = dot product
            LatexText += emph('\\textbf{computing the angle between:}')+'\\\\'
            LatexText += Container(emph('x=')+bmatrix(x)+emph(' , y= ')+bmatrix(y))
            LatexText += emph('using <x,y> :=')+f"x^{'T'}y"+'\\\\'
            pr = Products()
            product_x_y = pr.Standard_inner_product(x,y)
            norm_x = pr.Standard_inner_product(x,x)
            norm_y = pr.Standard_inner_product(y,y)
            cos_angle = np.arccos(product_x_y/np.sqrt(norm_x*norm_y))
            angle = (cos_angle*180/np.pi)

            a,b = f"\sqrt{norm_x}",f"\sqrt{norm_y}"
            f = "\dfrac{"+str(product_x_y)+"}{"+a+b+"} = "+str(cos_angle)+"rad = "+f"{str(angle)}^{'o'}"+'\\\\'
            LatexText += emph('cos ω =')+f
            return {'output':LatexText,"result":angle.tolist()}   
        if(product_type==1):
            if((A==0).all()):
                LatexText += Container(emph("\\textbf{You Cant calculate Angles using a zero Matrix }"))
                return {'output':LatexText,"result":[[-1]]}   
            # the inner product defined as <x,y> = x.T@A@y
            LatexText += emph('\\textbf{computing the angle between:}')+'\\\\'
            LatexText += Container(emph('x=')+bmatrix(x)+emph(' , y= ')+bmatrix(y) +emph(' ,B = ')+bmatrix(A))
            LatexText += emph('using <x,y> :=')+f"x^{'T'}By"+'\\\\'

            pr = Products(A)
            if(pr.check_matrix_positive_symetric()==-1):
                LatexText += emph('\\textbf{The B matrix must be symmetric and positive define}')
                return {'output':LatexText,"result":[[-1]]}   
            product_x_y = pr.inner_product(x,y)
            norm_x = pr.inner_product(x,x)
            norm_y = pr.inner_product(y,y)
            cos_angle = np.arccos(product_x_y/np.sqrt(norm_x*norm_y))
            angle = (cos_angle*180/np.pi)

            a,b = f"\sqrt{norm_x}",f"\sqrt{norm_y}"
            f = "\dfrac{"+str(product_x_y)+"}{"+a+b+"} = "+str(cos_angle)+"rad = "+f"{str(angle)}^{'o'}"+'\\\\'
            LatexText += emph('cos ω =')+f

            return {'output':LatexText,"result":angle.tolist()}   



class Projection:
  def __init__(self,inner_product = None):
    pr = Products()
    if(inner_product is None):
      self.inner_product = pr.Standard_inner_product
      self.dot_space = True
    else:
      self.inner_product = inner_product
      self.dot_space = False
  def Gaussian_Elm(self,A,col=0,isReduit=False,tol = 1e-5):
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
        LatexText += Container(emph("After swaping with the ")+str(col + swap_idx+1)+emph(" row we get the following matrix ")+bmatrix(A))
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
    g,ls = self.Gaussian_Elm(A,col+1,isReduit=isReduit)
    LatexText += ls
    return g,LatexText
  def Apply_Gaussian_Elm(self,A,isReduit=False):
    LatexText = emph(" Your Input is ") +", A = "+ bmatrix(A) +"\\\\ \ \\\\"
    g,ls = self.Gaussian_Elm(A,0,isReduit)
    LatexText += ls
    LatexText += Container(emph("At the end the Echelon form of the input matrix ")+bmatrix(A)+emph(" is ")+bmatrix(g))
    return g,LatexText
  def distance(self,p,x):
    z = x - p
    return np.sqrt(np.round((self.inner_product(z, z))))
  def Gram_Shmidt(self,B):
    LatexText = Container(emph("The new Basis Space after applying the gram shmidt method will be : "))
    C = [B[:,0].copy()]
    LatexText += Container("u_1 = b_1 = "+bvector(B[:,0].copy()))
    for i in range(1,B.shape[1]):
      C.append(B[:,i].copy())
      for j in range(i):
        c = np.array(C[j])
        C[i] = C[i] - ( self.inner_product(B[:,i] , c)  /  self.inner_product(c , c )) * c
      LatexText += Container("u_{"+str(i+1)+"} = b_{"+str(i+1)+"} - \\sum_{j=1}^{"+str(i)+"} proj_{u_j}(b_{"+str(i+1)+"}) = "+bvector(C[i]))
    return np.array(C).T,LatexText
  def Basis(self,U_Span):
    LatexText = Container(emph("\\textbf{1) The first step is to find the Basis of the input space where we will apply the Gaussian elimination on the space}"))
    U_reduced,ls = self.Apply_Gaussian_Elm(U_Span)
    ls = ls.replace(" Your Input is " ,"we will start by the Space matrix ")
    LatexText += ls
    Basis = []
    for i in range(0,U_reduced.shape[1]):
      if(U_reduced[i,i] == 1): # this is a basis
        Basis.append(U_Span[:,i])
    LatexText += Container(emph("\\textbf{2) After extracting the pivot columns which are the basis we find that the basis of the space are : }"))
    LatexText += Container("Basis = Span \\left ("+bmatrix(np.array(Basis).T)+"\\right )")
    return np.array(Basis).T,LatexText
  def Dot_Projection(self,Basis,x):
    LatexText = Container(emph("Where the standard dot projection is applyied with the formula : "))
    lambda_B = np.linalg.inv(Basis.T @ Basis) @ Basis.T @ x
    LatexText += Container("\lambda = (B^T.B)^{-1}.B^T.x = \\left ( "+bmatrix(Basis.T)+"."+bmatrix(Basis)+"\\right )^{-1} ."+bmatrix(Basis.T)+"."+bvector(x)+" = "+bmatrix(lambda_B))
    LatexText += Container(emph("From there the projection will be "))
    LatexText += Container("B.\\lambda = " +bmatrix(Basis @ lambda_B))
    return Basis @ lambda_B,LatexText
  def is_Orthogonal_Space(self,SubSpace):
    LatexText = Container(emph("\\textbf{3) The next step is to test if the Basis of the space are orthogonal or not}"))
    tester = True
    for i in range(SubSpace.shape[1]):
      for j in range(i+1,SubSpace.shape[1]):
        if(self.inner_product(SubSpace[:,i], SubSpace[:,j]) != 0):
          LatexText += Container(emph("after evaluating we find that the vector ")+bvector(SubSpace[:,i])+emph(" is not orthogonal with the vector ")+bvector(SubSpace[:,j]))
          LatexText += Container(emph("where the inner product between them is ")+str(self.inner_product(SubSpace[:,i], SubSpace[:,j])))
          LatexText += Container(emph("Therefor, the Space is not othogonal "))
          tester = False
          break
      if(tester is False):
        break
    if(tester):
      LatexText += Container(emph("After evaluation we find that all the basis are orthogonal ,Then the space is an Orthogonal space"))
    return tester,LatexText
  def Projection_custom(self,Basis,x):
    LatexText = Container(emph("\\textbf{4) After applying the projection we will get the following projected vector : }"))
    p = np.zeros_like(x)
    LatexText += "\\\\ \ \\\\ \pi_{U} x = "
    for i in range(Basis.shape[1]):
      b = Basis[:,i]
      lambda_b = self.inner_product(b,x) / self.inner_product(b,b)
      if(i == Basis.shape[1]-1):
        LatexText += "\\frac{<b_{"+str(i+1)+"},x>}{<b_{"+str(i+1)+"},b_{"+str(i+1)+"}}.b_{"+str(i+1)+"}"
      else:
        LatexText += "\\frac{<b_{"+str(i+1)+"},x>}{<b_{"+str(i+1)+"},b_{"+str(i+1)+"}}.b_{"+str(i+1)+"} + "
      p = p + ( lambda_b * b )
    LatexText += Container(emph("From there the resulted projected vector will be : ")+bvector(p))
    return p,LatexText

  def project(self,Space,x):
    LatexText =  emph(" Your Input Space is ") +", U = span\\left ("+ bmatrix(Space) +" \\right ), x = "+bvector(x)+"\\\\ \ \\\\"
    Basis,ls = self.Basis(Space)
    LatexText += ls
    is_Orthogonal,ls = self.is_Orthogonal_Space(Basis)
    LatexText += ls
    if((is_Orthogonal is False) and (self.dot_space is True)):
      LatexText += Container(emph("The space is not orthogonal and the inner space is set to the dot product so we should apply the standard dot projection"))
      D,ls = self.Dot_Projection(Basis,x)
      LatexText += ls
      return D,LatexText
    elif(is_Orthogonal is False):
      LatexText += Container(emph("The space is not orthogonal and the inner product is not set as the dot product so we should apply the Gram shmidt method to turn the basis into an orthonormal basis "))
      Basis,ls = self.Gram_Shmidt(Basis)
      LatexText += ls
      LatexText += Container(emph("\\textbf{4) After applying the gramshmidt method we will be remain with the basis} ")+bmatrix(Basis)+emph("\\textbf{which are now orthogonal} "))
      LatexText += Container(emph("\\textbf{5) now we will apply the basic projection which applied on different inner products}"))
      P,ls = self.Projection_custom(Basis,x)
      LatexText += ls
      return P,LatexText
    else:
      LatexText += Container(emph("The space is an orthogonal space and the inner product is not set as the dot product so we will apply the normal projection"))
      P,ls = self.Projection_custom(Basis,x)
      LatexText += ls
      return P,LatexText

  def affine_project(self,Space,x0,x): # L = x0 + U
    LatexText =  emph(" Your Input Space is ") +", U = span\\left ("+ bmatrix(Space) +" \\right ),x_0 = "+bvector(x0)+", x = "+bvector(x)+"\\\\ \ \\\\"
    LatexText += emph("we should start by calculating :")
    LatexText += Container("x = x-x_0 = "+bvector(x)+" - "+bvector(x0)+" = "+bvector(x-x0))
    x -= x0
    Basis,ls = self.Basis(Space)
    LatexText += ls
    is_Orthogonal,ls = self.is_Orthogonal_Space(Basis)
    LatexText += ls
    if((is_Orthogonal is False) and (self.dot_space is True)):
      LatexText += Container(emph("The space is not orthogonal and the inner space is set to the dot product so we should apply the standard dot projection"))
      D,ls = self.Dot_Projection(Basis,x)
      LatexText += ls
      LatexText += Container(emph("the final step is to add the offset vector x0 to the projected vector :"))
      LatexText += Container("x_0 + \pi_U x = "+bvector(x0)+" + "+bvector(D)+" = "+ bvector(x0 +D))
      return x0 +D,LatexText
    elif(is_Orthogonal is False):
      LatexText += Container(emph("The space is not orthogonal and the inner product is not set as the dot product so we should apply the Gram shmidt method to turn the basis into an orthonormal basis "))
      Basis,ls = self.Gram_Shmidt(Basis)
      LatexText += ls
      LatexText += Container(emph("After applying the gramshmidt method we will be remain with the basis ")+bmatrix(Basis)+emph("which are now orthogonal "))
      LatexText += Container(emph("now we will apply the basic projection which applyied on different inner products"))
      P,ls = self.Projection_custom(Basis,x)
      LatexText += ls
      LatexText += Container(emph("the final step is to add the offset vector x0 to the projected vector :"))
      LatexText += Container("x_0 + \pi_U x = "+bvector(x0)+" + "+bvector(P)+" = "+ bvector(x0 +P))
      return P+x0,LatexText
    else:
      LatexText += Container(emph("The space is an orthogonal space and the inner product is not set as the dot product so we will apply the normal projection"))
      P,ls = self.Projection_custom(Basis,x)
      LatexText += ls
      LatexText += Container(emph("the final step is to add the offset vector x0 to the projected vector :"))
      LatexText += Container("x_0 + \pi_U x = "+bvector(x0)+" + "+bvector(P)+" = "+ bvector(x0 +P))
      return P+x0,LatexText




class Projection_C(Resource):
    def get(self):
        return {
        'message': "Projection_C Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        A = np.array(request.json["matrix1"])
        x = np.array(request.json["matrix2"])[0]
        U_Span = np.array(request.json["matrix3"])
        product_type = np.array(request.json["choice"])
        if((U_Span == 0).all()):
            LatexText += Container(emph("\\textbf{You cant do projection using full zeros span}"))
            return {'output':LatexText,"result":[[-1]]}   
        if(product_type == 0):
            prj = Projection()
        else:
            pr = Products(A)
            if(pr.check_matrix_positive_symetric()==-1):
                LatexText += emph('\\textbf{The A matrix must be symmetric and positive define}')
                return {'output':LatexText,"result":[[-1]]}   
            prj = Projection(pr.inner_product)
        
        
        p,LatexText = prj.project(U_Span,x)

        return {'output':LatexText,"result":p.tolist()}   

class Affine_Projection(Resource):
    def get(self):
        return {
        'message': "Affine_Projection Get"
        }

    def post(self):
        print(self)
        
        LatexText = ""
        A = np.array(request.json["matrix1"])
        x = np.array(request.json["matrix2"])[0]
        U_Span = np.array(request.json["matrix3"])
        x0 = np.array(request.json["matrix4"])[0]
        product_type = np.array(request.json["choice"])
        if((U_Span == 0).all()):
            LatexText += Container(emph("You cant do projection using full zeros span"))
            return {'output':LatexText,"result":[[-1]]}   
        if(product_type == 0):
            prj = Projection()
        else:
            pr = Products(A)
            if(pr.check_matrix_positive_symetric()==-1):
                LatexText += emph('The A matrix must be symmetric and positive define')
                return {'output':LatexText,"result":[[-1]]}   
            prj = Projection(pr.inner_product)
        
        
        p,LatexText = prj.affine_project(U_Span,x0,x)

        return {'output':LatexText,"result":p.tolist()}   
