import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom'
import "../../Styles/DropDownMenu.css"
import Tooltip from '@mui/material/Tooltip';
function DropDownMenu ({selected}){
  // const [selected,setSelected] = useState(sel)
  // // console.log(selected)
  // const TitleList = {
  //   "AddMatrices" : "Add two matrices",
  //   "DivScalarMatrix" : "Divide by Scalar",
  //   "Dot_Product" : "Dot Product",
  //   "one_norm" : "Matrix 1rst Norm",
  //   "Euclidean_Norm" : "Matrix Euclidean Norm",
  //   "Inifinity_norm" : "Matrix Infinity Norm",
  //   "Manhattan_Norm" : "Vector Manhattan Norm",
  //   "Euclidean_VNorm" : "Vector Euclidean Norm",
  //   "Inifinity_VNorm" : "Vector Inifinity Norm",
  //   "Lp_Norm" : "Vector Lp Norm",
  //   "Manhattan_Distance" : "Matrix Manhattan Distance",
  //   "Euclidean_Distance" : "Matrix Euclidean Distance",
  //   "Infinity_Distance" : "Matrix Infinity Distance",
  //   "Manhattan_VDistance" : "Vector Manhattan Distance",
  //   "Euclidean_VDistance" : "Vector Euclidean Distance",
  //   "Infinity_VDistance" : "Vector Infinity VDistance",
  //   "Transpose" : "Matrix Transpose",
  //   "Inverse_matrix" : "Matrix Inverse",
  //   "Trace" : "Trace",
  //   "Determinant" : "Determinant",
  //   "Gaussian_Elm" : "Gaussian Elimination",
  //   "Basis" : "Basis Extraction",
  //   "Kernel" : "Kernel Extraction",
  //   "Rank" : "Rank",
  //   "Gram_Shmidt" : "Gram Shmidt",
  //   "Particular_Solution" : "Particular Solution of Ax=b",
  //   "General_solution": "General solution of Ax=b",
  //   "LU_Solv" : "LU Decomposition for Solving a Linear equation",
  //   "Eigenvalues_and_Eigenvectors" : "Eigenvalues and Eigenvectors",
  //   "Diagonizable" : "Diagonizability Cecking",
  //   "Convexity" : "Convexity Checking",
  //   "Invertibility" : "Invertibility Checking",
  //   "Orthogonality" : "Checking Orthogonality for a Subspace",
  //   "Independency" : "Checking Independency for a Subspace",
  //   "Angle" : "Angle between vectors",
  //   "Projection" : "Orthogonal Projection",
  //   "Affine_Projection" : "Orthogonal Projection onto an Affine subspace",
  //   "Gradient_Descent" : "Gradient Descent for quadratic functions",
  //   "Steepest_Gradient_Descent" : "Steepest Gradient Descent",
  //   "Conjugate_Gradient_Descent" : "Conjugate Gradient Descent",
  //   "Eigen_Decomposition": "Eigen Decomposition",
  //   "LU" : "LU Decomposition",
  //   "SVD" : "Singular Values Decomposition",
  //   "Cholosky_Decomposition" : "Cholosky Decomposition",
  //   "QR_Decomposition" : "QR Decomposition",
  //   "Gradient_Linear_Regression" : "Univariante Linear Regression using Gradient Descent ",
  //   "MulMatrcies" : "Hadamard Product",
  //   "MulScalarMatrix" : "Scalar Multiplication",
  //   "SubMatrcies" : "Subtract two matrcies",

  // }
  const TitleList = {
    AddMatrices: "Matrix Addition",
    // DivScalarMatrix: "Divide by Scalar",
    Dot_Product: "Dot Product",
    one_norm: "Matrix 1rst Norm",
    Euclidean_Norm: "Matrix Euclidean Norm",
    Inifinity_norm: "Matrix Infinity Norm",
    Manhattan_Norm: "Vector Manhattan Norm",
    Euclidean_VNorm: "Vector Euclidean Norm",
    Inifinity_VNorm: "Vector Inifinity Norm",
    Lp_Norm: "Vector Lp Norm",
    Manhattan_Distance: "Matrix Manhattan Distance",
    Euclidean_Distance: "Matrix Euclidean Distance",
    Infinity_Distance: "Matrix Infinity Distance",
    Manhattan_VDistance: "Vector Manhattan Distance",
    Euclidean_VDistance: "Vector Euclidean Distance",
    Infinity_VDistance: "Vector Infinity VDistance",
    Transpose: "Matrix Transpose",
    Inverse_matrix: "Matrix Inverse",
    Trace: "Trace",
    Determinant: "Determinant",
    Gaussian_Elm: "Gaussian Elimination",
    Basis: "Basis Extraction",
    Kernel: "Matrix Kernel",
    Rank: "Rank",
    Gram_Shmidt: "Gram Shmidt",
    Particular_Solution: "Particular Solution of Ax=b",
    General_solution: "General solution of Ax=b",
    LU_Solv: "LU Decomposition for Solving a Linear equation",
    Eigenvalues_and_Eigenvectors: "Eigenvalues and Eigenvectors",
    Diagonizable: "Diagonizability Cecking",
    Convexity: "Convexity Checking",
    Invertibility: "Invertibility Checking",
    Orthogonality: "Checking Orthogonality for a Subspace",
    Independency: "Checking Independency for a Subspace",
    Angle: "Angle between vectors",
    Projection: "Orthogonal Projection",
    Affine_Projection: "Orthogonal Projection onto an Affine subspace",
    Gradient_Descent: "Gradient Descent for quadratic functions",
    Steepest_Gradient_Descent: "Steepest Gradient Descent",
    Conjugate_Gradient_Descent: "Conjugate Gradient Descent",
    Eigen_Decomposition: "Eigen Decomposition",
    LU: "LU Decomposition",
    SVD: "Singular Values Decomposition",
    Cholosky_Decomposition: "Cholosky Decomposition",
    QR_Decomposition: "QR Decomposition",
    Gradient_Linear_Regression:
      "Univariante Linear Regression using Gradient Descent ",
    MulMatrcies: "Hadamard Product",
    MulScalarMatrix: "Scalar Multiplication",
    // SubMatrcies: "Subtract two matrcies",
  };
  const SubSubFunctions = {
    AddMatrices:"This function adds two matrices together. The matrices must have the same dimensions in order to be added. The addition of matrices is commutative, meaning that the order in which the matrices are added does not affect the result.",

        
        Dot_Product:"This function computes the dot product of two vectors. The dot product of two vectors is a scalar that measures the similarity between the vectors. The dot product is commutative, meaning that the order in which the vectors are multiplied does not affect the result.",

        
        MulMatrcies:"This function performs element-wise multiplication of two matrices. The matrices must have the same dimensions in order to be multiplied in this way. The element-wise multiplication of matrices is distributive over addition, meaning that multiplying the sum of two matrices by a matrix is the same as multiplying each matrix by the matrix and then adding the results.",
     
        
        MulScalarMatrix:"This function multiplies each element of a matrix by a scalar. The scalar can be any real number. The multiplication of a matrix by a scalar is distributive over addition, meaning that multiplying the sum of two matrices by a scalar is the same as multiplying each matrix by the scalar and then adding the results.",

        
     
    
    
      
        Manhattan_Distance:"The Manhattan matrix distance, also known as the taxicab norm or the L1 norm, measures the sum of the absolute differences between corresponding elements of two matrices. It represents the total entry-wise deviation between the two matrices.",
      
        Euclidean_Distance:"The Euclidean matrix distance, also known as the Frobenius norm, is the most commonly used matrix distance metric. It is the natural extension of the Euclidean distance for vectors to matrices. It measures the difference between corresponding elements of two matrices, taking into account all elements",
 
        
        Infinity_Distance:"The infinity matrix distance, also known as the sup norm, measures the maximum absolute difference between corresponding elements of two matrices. It represents the largest entry-wise difference between the two matrices.",
   
      
        one_norm:"The Manhattan matrix norm, also known as the taxicab norm or the L1 norm, measures the sum of the absolute values of all the elements in the matrix. It represents the total magnitude of all the elements in the matrix.",
       
        
        Euclidean_Norm:"The Euclidean matrix norm, also known as the Frobenius norm, is the most common matrix norm. It is the square root of the sum of the squares of all the elements in the matrix. It represents the size of the matrix in its Euclidean space.",
       
        Inifinity_norm:"The infinity matrix norm, also known as the sup norm, measures the largest absolute value of any element in the matrix. It represents the maximum magnitude of any element in the matrix.",
          
      
        Transpose:"The transpose of a matrix is created by swapping its rows and columns. Transposition has various applications in linear algebra, including matrix multiplication and solving systems of equations.",
        
        Inverse_matrix:"A non-singular matrix has an inverse matrix, which, when multiplied by the original matrix, produces the identity matrix. Invertible matrices play a crucial role in solving systems of linear equations.",
          
        Trace:"The trace of a square matrix is the sum of its diagonal elements. It provides insights into the matrix's structure and behavior, such as its stability and relationships to eigenvalues.",
          
        Determinant:"The determinant of a square matrix is a scalar value that determines its volume, invertibility, and other properties. It has wide applications in various mathematical and computational contexts.",
         
        Rank:"The rank of a matrix is the number of linearly independent rows or columns it possesses. It indicates the matrix's dimensionality and its ability to represent linear relationships.",
         
        Orthogonality:"Orthogonal matrices have perpendicular columns or rows, resulting in certain algebraic properties and applications in geometry and signal processing.",
          
        Invertibility:"A matrix is invertible if it has an inverse matrix, which, when multiplied by the original matrix, produces the identity matrix. Invertible matrices are crucial for solving systems of linear equations, performing matrix transformations, and analyzing linear systems.",
        Gram_Shmidt:"Gram-Schmidt orthogonalization is an algorithm that constructs an orthonormal basis for a subspace. An orthonormal basis is a set of vectors that are mutually orthogonal (perpendicular) and have unit magnitude. This algorithm is widely used to find sets of vectors that are linearly independent and form a basis for a given subspace.",
         
      
      
        Basis:"A basis for a vector space is a set of linearly independent vectors that span the entire space. This means that any vector in the space can be expressed as a linear combination of the vectors in the basis.",
        
        Gaussian_Elm:"Gaussian elimination is a fundamental algorithm in linear algebra that is widely used for solving systems of linear equations and performing matrix operations. The algorithm works by systematically reducing a matrix to its row echelon form, which is a triangular matrix with zeros below the diagonal.",
        
        LU:"LU decomposition factors a square matrix into a lower triangular matrix (L) and an upper triangular matrix (U). This decomposition is widely used for solving systems of linear equations and Gaussian elimination.",
        
        SVD:"SVD factorizes a rectangular matrix into three matrices: an orthogonal matrix (U), a diagonal matrix (Σ), and the transpose of another orthogonal matrix (V). SVD is powerful for data analysis, signal processing, and image compression.",
          
        QR_Decomposition:"QR decomposition factors a rectangular matrix into an orthogonal matrix (Q) and an upper triangular matrix (R). This decomposition is useful for solving least squares  and analyzing data matrices.",
            
        Cholosky_Decomposition:"Cholesky decomposition factors a symmetric positive definite matrix into a lower triangular matrix with positive diagonal elements. This decomposition is efficient for solving systems of linear equations involving symmetric positive definite matrices.",
          
        Kernel:'also known as the null space, is a fundamental concept in linear algebra that represents the set of all vectors that, when multiplied by a specific matrix, result in the zero vector. In simpler terms, it is the collection of vectors that get "mapped to zero" by the matrix transformation. The matrix kernel is denoted by Null(A) for a matrix A.',
          
     
    
      
        Manhattan_Norm:"The Manhattan norm, also known as the L1 norm or the taxicab norm, measures the sum of the absolute values of all the elements in the vector. It represents the total magnitude of all the elements in the vector.",
          
        Euclidean_VNorm:"The Euclidean norm, also known as the L2 norm, is the most commonly used vector norm. It is the natural extension of the Euclidean distance for vectors. The Euclidean norm measures the square root of the sum of the squares of all the elements in the vector. It represents the size of the vector in its Euclidean space.",
     
        Inifinity_VNorm:"The infinity norm measures the largest absolute value of any element in the vector. It represents the maximum magnitude of any element in the vector.",
        
        Lp_Norm:" also known as the Minkowski norm, is a generalization of the Euclidean norm (L2 norm) to higher dimensions. It is a measure of the magnitude or size of a vector in a p-dimensional space.",
         
      
      
        Manhattan_VDistance:"The Manhattan distance, also known as the L1 distance or taxicab norm, measures the sum of the absolute values of the differences between corresponding elements of two vectors. It represents the total distance traveled if one were to move between two points along a grid pattern.",
          
        Euclidean_VDistance:"The Euclidean distance, also known as the L2 distance, is the most commonly used vector distance metric. It is a generalization of the Pythagorean theorem to higher dimensions and represents the straight-line distance between two points in Euclidean space.",
         
        Infinity_VDistance:"also known as the L∞ norm or supremum norm, is a mathematical measure that quantifies the separation or separation between two vectors in a vector space. It is a generalization of the maximum norm to higher dimensions and represents the largest absolute value of the differences between corresponding elements of two vectors.",
        
      
      
        Angle:'The angle between two vectors in a vector space represents the measure of the "turn" between their directions. It quantifies the relative orientation of the vectors and provides insights into their alignment or opposition.',
         Independency:"Linear independence is a fundamental concept in linear algebra that describes the relationship between vectors in a vector space. A set of vectors is linearly independent if no vector in the set can be expressed as a linear combination of the other vectors.",
         
        Convexity:"Convexity is a geometrical property that describes the shape of sets in a vector space. A set is convex if any line segment connecting two points within the set lies entirely within the set.",
        
        Dot_Product:"This function computes the dot product of two vectors. The dot product of two vectors is a scalar that measures the similarity between the vectors. The dot product is commutative, meaning that the order in which the vectors are multiplied does not affect the result.",
        
        Orthogonality:"Orthogonal matrices have perpendicular columns or rows, resulting in certain algebraic properties and applications in geometry and signal processing.",
         
        Gram_Shmidt:"Gram-Schmidt orthogonalization is an algorithm that constructs an orthonormal basis for a subspace. An orthonormal basis is a set of vectors that are mutually orthogonal (perpendicular) and have unit magnitude. This algorithm is widely used to find sets of vectors that are linearly independent and form a basis for a given subspace.",
         Projection:"Projection is a geometrical operation that involves finding the shortest distance between a point and a line or plane. It is a fundamental concept in linear algebra that has various applications in geometry, physics, and engineering.",
        
        Affine_Projection:"Affine projection is a generalization of projection that involves finding the shortest distance between a point and an affine subspace. It is a more general concept than projection onto a line or plane and has applications in various fields.",
        
      
    
      
        Particular_Solution:"In linear algebra, a particular solution to a system of linear equations is a solution that satisfies the equations but may not be the only solution. A system of linear equations can have multiple particular solutions, one for each free variable in the system. The general solution to a system of linear equations is the set of all possible solutions, which can be expressed as a linear combination of the particular solutions.",
         
        General_solution:"The general solution to a system of linear equations is the set of all possible solutions to the system. It is typically expressed as a linear combination of the basic solutions, which are the non-zero solutions that cannot be expressed as a linear combination of the other solutions. The general solution can be written in a variety of forms, such as a system of equations, a matrix equation, or a parametric equation.",
         
        LU_Solv:"is a numerical algorithm for solving systems of linear equations that involves factoring the coefficient matrix into an LU decomposition. The LU decomposition is a factorization of a matrix A into the product of two matrices, L and U, where L is a lower triangular matrix and U is an upper triangular matrix with ones on its diagonal. The LU_Solv algorithm uses this factorization to efficiently solve for the solution vector x to the system Ax = b.",
        
      
  
        Diagonizable:"A matrix A is said to be diagonalizable if there exists a non-singular matrix P such that PAP^-1 is a diagonal matrix. In other words, a diagonalizable matrix can be transformed into a diagonal matrix by a similarity transformation. The diagonal elements of the diagonal matrix are the eigenvalues of the original matrix A.",
          
        Eigenvalues_and_Eigenvectors:"Eigenvalues and eigenvectors are fundamental concepts in linear algebra that describe the behavior of linear transformations. An eigenvalue of a matrix A is a scalar λ such that there exists a non-zero vector v that satisfies the equation Av = λv. The vector v is called an eigenvector of A corresponding to the eigenvalue λ. Eigenvalues and eigenvectors have a wide range of applications in various fields, including physics, engineering, and computer science.",
          
      
      
        Gradient_Descent:"Gradient descent is a general optimization algorithm for finding the minimum of a function. It works by iteratively moving in the direction of the negative gradient of the function, which is the direction of steepest descent. The algorithm stops when it reaches a minimum or reaches a predefined stopping criterion.",
         
        Conjugate_Gradient_Descent:"Conjugate gradient descent is an iterative optimization algorithm for solving a system of linear equations or minimizing a quadratic function. It is a more efficient variant of the gradient descent algorithm, which can converge to the optimal solution in a finite number of steps for certain types of .",
         
        Steepest_Gradient_Descent:"Steepest gradient descent is a specific implementation of the gradient descent algorithm that moves in the direction of the negative gradient of the function at each iteration. It is a simple and efficient algorithm but may not converge to the optimal solution for certain types of .",
         
        Gradient_Linear_Regression:"Gradient linear regression is a statistical method for fitting a linear model to data by minimizing the sum of the squared residuals. It is a common technique for solving linear regression  and is widely used in various fields, including machine learning, economics, and finance.",
  }
  return (
    
    <div>
        <Dropdown className='w-100 '>
        <Dropdown.Toggle className=' dropdown_btn' variant="success" id="dropdown-basic">
            {
              selected == null ? "Choose a Function " : TitleList[selected]
            }
            
        </Dropdown.Toggle>

        <Dropdown.Menu className='dropdown_menu'>
        {Object.entries(TitleList).map(([keyV, value])=>{
          return <Dropdown.Item key={keyV}  className={selected===keyV? "active" : ""} >
            <Tooltip title={SubSubFunctions[keyV]} placement="left">
          <Link to={'/Calculator/'+keyV} className='d-flex w-100'>
            <span>
            {value}
            </span>

          </Link>
          </Tooltip>
          </Dropdown.Item>
        })}
{/*         
            <Dropdown.Item  className={selected==="AddMatrices" ? "active" : ""} >
              <Link to='/Calculator/AddMatrices' className='d-flex w-100'>Add two matrices</Link>
              </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Subtract</Dropdown.Item>
            <Dropdown.Item href="#/action-3">multiplication</Dropdown.Item> */}
        </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default DropDownMenu