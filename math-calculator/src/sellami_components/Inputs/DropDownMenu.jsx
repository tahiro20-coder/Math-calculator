import React,{useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom'
import "../../Styles/DropDownMenu.css"

function DropDownMenu ({selected}){
  // const [selected,setSelected] = useState(sel)
  // console.log(selected)
  const TitleList = {
    "AddMatrices" : "Add two matrices",
    "DivScalarMatrix" : "Divide by Scalar",
    "Dot_Product" : "Dot Product",
    "one_norm" : "Matrix 1rst Norm",
    "Euclidean_Norm" : "Matrix Euclidean Norm",
    "Inifinity_norm" : "Matrix Infinity Norm",
    "Manhattan_Norm" : "Vector Manhattan Norm",
    "Euclidean_VNorm" : "Vector Euclidean Norm",
    "Inifinity_VNorm" : "Vector Inifinity Norm",
    "Lp_Norm" : "Vector Lp Norm",
    "Manhattan_Distance" : "Matrix Manhattan Distance",
    "Euclidean_Distance" : "Matrix Euclidean Distance",
    "Infinity_Distance" : "Matrix Infinity Distance",
    "Manhattan_VDistance" : "Vector Manhattan Distance",
    "Euclidean_VDistance" : "Vector Euclidean Distance",
    "Infinity_VDistance" : "Vector Infinity VDistance",
    "Transpose" : "Matrix Transpose",
    "Inverse_matrix" : "Matrix Inverse",
    "Trace" : "Trace",
    "Determinant" : "Determinant",
    "Gaussian_Elm" : "Gaussian_Elimination",
    "Basis" : "Basis Extraction",
    "Kernel" : "Null Space",
    "Rank" : "Rank",
    "Gram_Shmidt" : "Gram Shmidt",
    "Particular_Solution" : "Particular Solution of Ax=b",
    "General_solution": "General solution of Ax=b",
    "LU_Solv" : "LU Decomposition for Solving a Linear equation",
    "Eigenvalues_and_Eigenvectors" : "Eigenvalues and Eigenvectors",
    "Diagonizable" : "Diagonizable Check",
    "Convexity" : "Convexity Check",
    "Invertibility" : "Invertibility Check",
    "Orthogonality" : "Orthogonality Check of a Subspace",
    "Independency" : "Independency check of a Subspace",
    "Eigen_Decomposition": "Eigen Decomposition",
    "LU" : "LU Decomposition",
    "SVD" : "Singular Values Decomposition",
    "Cholosky_Decomposition" : "Cholosky Decomposition",
    "QR_Decomposition" : "QR Decomposition",
    "Gradient_Linear_Regression" : "Univariante Linear Regression using Gradient Descent ",
    "MulMatrcies" : "Side by Side Matricies Multiplication ",
    "MulScalarMatrix" : "Scalar Multiplication",
    "SubMatrcies" : "Subtract two matrcies",

  }
  return (
    <div>
        <Dropdown className='w-100 '>
        <Dropdown.Toggle className=' dropdown_btn' variant="success" id="dropdown-basic">
            {
              selected == null ? "Dropdown Button" : TitleList[selected]
            }
            
        </Dropdown.Toggle>

        <Dropdown.Menu className='dropdown_menu'>
        {Object.entries(TitleList).map(([keyV, value])=>{
          return <Dropdown.Item key={keyV}  className={selected===keyV? "active" : ""} >
          <Link to={'/Calculator/'+keyV} className='d-flex w-100'>{value}</Link>
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