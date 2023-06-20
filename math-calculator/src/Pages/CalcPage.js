import React ,{useEffect, useState } from 'react';
import DropDownMenu from '../sellami_components/Inputs/DropDownMenu';
import AddMatrices from '../sellami_components/Task/AddMatrices';
import '../sellami_components/Css/calcstyle.css';
import '../sellami_components/Css/Components.css';
import {Route, Routes, useParams} from 'react-router-dom';

function CalcPage(){
    const { func } = useParams()
    const Pages = [{
        'title' : "AddMatrices",
        "page"  : <AddMatrices/>,
    }]
    return(
        <div className= "container content text-center" >
            <span className='Header' >
                Step by Step Solving
            </span>
            <span className = 'normal' >
                You can choose the linear algebra problem that you want to solve from the bottom menu
            </span>
            <DropDownMenu />

            {Pages.map((item) => {
                if(item['title'] == func){
                    return <div key={item["title"]}>{item["page"]}</div>
                }
            })}
            <div className='h-100'></div>
        </div>
    );
}

export default CalcPage