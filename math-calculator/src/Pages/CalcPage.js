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
import Gradient_Linear_Regression from '../sellami_components/Task/Gradient_Linear_Regression';
import MulMatrcies from '../sellami_components/Task/MulMatrcies';
import MulScalarMatrix from '../sellami_components/Task/MulScalarMatrix';
import SubMatrcies from '../sellami_components/Task/SubMatrcies';
import '../sellami_components/Css/calcstyle.css';
import '../sellami_components/Css/Components.css';
import {useParams} from 'react-router-dom';

function CalcPage(){
    const { func } = useParams() 
    const Pages = {
        "" : <></>,
        "AddMatrices"  : <AddMatrices/>,
        "DivScalarMatrix" : <DivScalarMatrix/>,
        "Dot_Product"  : <Dot_Product/>,
        "one_norm" : <One_norm/>,
        "Euclidean_Norm" : <Euclidean_Norm/>,
        "Inifinity_norm" : <Inifinity_norm/>,
        "Manhattan_Norm" : <Manhattan_Norm/>,
        "Euclidean_VNorm" : <Euclidean_VNorm/>,
        "Inifinity_VNorm" : <Inifinity_VNorm/>,
        "Lp_Norm" : <Lp_Norm/>,
        "Manhattan_Distance" : <Manhattan_Distance/>,
        "Euclidean_Distance" : <Euclidean_Distance/>,
        "Infinity_Distance" : <Infinity_Distance/>,
        "Manhattan_VDistance" : <Manhattan_VDistance/>,
        "Euclidean_VDistance": <Euclidean_VDistance/>,
        "Infinity_VDistance" : <Infinity_VDistance/>,
        "Gradient_Linear_Regression": <Gradient_Linear_Regression />,
        "MulMatrcies" : <MulMatrcies/>,
        "MulScalarMatrix" :  <MulScalarMatrix/>,
        "SubMatrcies" : <SubMatrcies/>,
    }

    return(
        <div className= "container content text-center" >
            <span className='Header' >
                Step by Step Solving
            </span>
            <span className = 'normal' >
                You can choose the linear algebra problem that you want to solve from the bottom menu
            </span>
            <DropDownMenu selected={func}/>


            

            {
                func != null ?  Pages[func] : <></>
            }

            <div className='h-100'></div>
        </div>
    );
}

export default CalcPage