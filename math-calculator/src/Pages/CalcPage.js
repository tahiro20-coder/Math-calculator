import React from 'react';
import DropDownMenu from '../sellami_components/Inputs/DropDownMenu';
import AddMatrices from '../sellami_components/Task/AddMatrices';
import Gradient_Linear_Regression from '../sellami_components/Task/Gradient_Linear_Regression';
import '../sellami_components/Css/calcstyle.css';
import '../sellami_components/Css/Components.css';
import {useParams} from 'react-router-dom';
import Container from '../sellami_components/Container';

function CalcPage(){
    const { func } = useParams() 
    const Pages = {
        "" : <></>,
        "AddMatrices"  : <AddMatrices/>,
        "Gradient_Linear_Regression": <Gradient_Linear_Regression />,
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