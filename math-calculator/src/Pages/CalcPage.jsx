import React from 'react';
import DropDownMenu from '../sellami_components/Inputs/DropDownMenu';
import AddMatrices from '../sellami_components/Task/AddMatrices';
import DivScalarMatrix from '../sellami_components/Task/DivScalarMatrix';
import Dot_Product from '../sellami_components/Task/Dot_Product';
import Euclidean_Norm from '../sellami_components/Task/Euclidean_Norm';
import Inifinity_norm from '../sellami_components/Task/inifinity_norm';
import One_norm from '../sellami_components/Task/one_norm';
import Manhattan_Norm from '../sellami_components/Task/Manhattan_Norm';
import Euclidean_VNorm from '../sellami_components/Task/Euclidean_VNorm';
import Inifinity_VNorm from '../sellami_components/Task/Inifinity_VNorm';
import Lp_Norm from '../sellami_components/Task/Lp_Norm';
import Manhattan_Distance from '../sellami_components/Task/Manhattan_Distance';
import Euclidean_Distance from '../sellami_components/Task/Euclidean_Distance';
import Infinity_Distance from '../sellami_components/Task/Infinity_Distance';
import Manhattan_VDistance from '../sellami_components/Task/Manhattan_VDistance';
import Euclidean_VDistance from '../sellami_components/Task/Euclidean_VDistance';
import Infinity_VDistance from '../sellami_components/Task/Infinity_VDistance';
import Transpose from '../sellami_components/Task/Transpose';
import Inverse_matrix from '../sellami_components/Task/Inverse_matrix';
import Trace from '../sellami_components/Task/Trace';
import Determinant from '../sellami_components/Task/Determinant';
import Eigen_Decomposition from '../sellami_components/Task/Eigen_Decomposition';
import LU from '../sellami_components/Task/LU';
import Cholosky_Decomposition from '../sellami_components/Task/Cholosky_Decomposition';
import QR_Decomposition from '../sellami_components/Task/QR_Decomposition';
import SVD from '../sellami_components/Task/SVD';
import Gradient_Linear_Regression from '../sellami_components/Task/Gradient_Linear_Regression';
import MulMatrcies from '../sellami_components/Task/MulMatrcies';
import MulScalarMatrix from '../sellami_components/Task/MulScalarMatrix';
import SubMatrcies from '../sellami_components/Task/SubMatrcies';
import Gaussian_Elm from '../sellami_components/Task/Gaussian_Elm';
import Basis from '../sellami_components/Task/Basis';
import Gram_Shmidt from '../sellami_components/Task/Gram_Shmidt';
import Kernel from '../sellami_components/Task/Kernel';
import Rank from '../sellami_components/Task/Rank';
import Particular_Solution from '../sellami_components/Task/Particular_Solution';
import General_solution from '../sellami_components/Task/General_solution';
import LU_Solv from '../sellami_components/Task/LU_Solv';
import Eigenvalues_and_Eigenvectors from '../sellami_components/Task/Eigenvalues_and_Eigenvectors';
import Diagonizable from '../sellami_components/Task/diagonizable';
import Convexity from '../sellami_components/Task/Convexity';
import Invertibility from '../sellami_components/Task/Invertibility';
import Orthogonality from '../sellami_components/Task/Orthogonality';
import Independency from '../sellami_components/Task/Independency';
import Angle from '../sellami_components/Task/Angle';
import Projection from '../sellami_components/Task/Projection';
import Affine_Projection from '../sellami_components/Task/Affine_Projection';
import Gradient_Descent from '../sellami_components/Task/Gradient_Descent';
import Steepest_Gradient_Descent from '../sellami_components/Task/Steepest_Gradient_Descent';
import Conjugate_Gradient_Descent from '../sellami_components/Task/Conjugate_Gradient_Descent';
import '../sellami_components/Css/calcstyle.css';
import '../sellami_components/Css/Components.css';
import {useParams} from 'react-router-dom';


function CalcPage(){
    const { func } = useParams() 
    const Pages = {
        "" : React.Fragment,
        "AddMatrices"  : AddMatrices,
        "DivScalarMatrix" : DivScalarMatrix,
        "Dot_Product"  : Dot_Product,
        "one_norm" : One_norm,
        "Euclidean_Norm" : Euclidean_Norm,
        "Inifinity_norm" : Inifinity_norm,
        "Manhattan_Norm" : Manhattan_Norm,
        "Euclidean_VNorm" : Euclidean_VNorm,
        "Inifinity_VNorm" : Inifinity_VNorm,
        "Lp_Norm" : Lp_Norm,
        "Manhattan_Distance" : Manhattan_Distance,
        "Euclidean_Distance" : Euclidean_Distance,
        "Infinity_Distance" : Infinity_Distance,
        "Manhattan_VDistance" : Manhattan_VDistance,
        "Euclidean_VDistance": Euclidean_VDistance,
        "Infinity_VDistance" : Infinity_VDistance,
        "Transpose" : Transpose,
        "Inverse_matrix" : Inverse_matrix,
        "Trace" : Trace,
        "Determinant" : Determinant,
        "Gaussian_Elm" : Gaussian_Elm,
        "Basis" : Basis,
        "Kernel" : Kernel,
        "Rank" : Rank,
        "Angle" : Angle,
        "Projection" : Projection ,
        "Affine_Projection" : Affine_Projection ,
        "Gram_Shmidt" : Gram_Shmidt,
        "Particular_Solution" : Particular_Solution,
        "General_solution" : General_solution,
        "LU_Solv" : LU_Solv,
        "Gradient_Descent" : Gradient_Descent ,
        "Steepest_Gradient_Descent" : Steepest_Gradient_Descent ,
        "Conjugate_Gradient_Descent" : Conjugate_Gradient_Descent ,
        "Diagonizable" : Diagonizable,
        "Convexity" : Convexity,
        "Invertibility" : Invertibility,
        "Orthogonality" : Orthogonality,
        "Independency" : Independency,
        "Eigenvalues_and_Eigenvectors" : Eigenvalues_and_Eigenvectors,
        "Eigen_Decomposition" : Eigen_Decomposition,
        "LU" : LU,
        "SVD" : SVD,
        "Cholosky_Decomposition" : Cholosky_Decomposition,
        "QR_Decomposition" : QR_Decomposition,
        "Gradient_Linear_Regression": Gradient_Linear_Regression ,
        "MulMatrcies" : MulMatrcies,
        "MulScalarMatrix" :  MulScalarMatrix,
        "SubMatrcies" : SubMatrcies,
    }
    const handle_page = (func)=>{
        const  Comp  = Pages[func];
        return <Comp  />
    }
    return(
        <div className= "container content text-center" >
            <span className='Header' >
                Step by Step Solving
            </span>
            <span className = 'normal' >
                You can choose the linear algebra problem that you want to solve from the bottom menu
            </span>
            <DropDownMenu selected={func} />
            

            {
                func != null ? handle_page(func) : <></>
            }

            <div className='h-100' ></div>
        </div>
    );
}

export default CalcPage