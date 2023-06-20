import React ,{useEffect, useState } from 'react';
import DropDownMenu from './Inputs/DropDownMenu';
import AddMatrices from './Task/AddMatrices';
import './Css/calcstyle.css';
import './Css/Components.css';


const TempCalcPage = () => {
  

  return (
    <div className= "container content" >
      <span className='Header' >
        Step by Step Solving
      </span>
      <span className = 'normal' >
        You can choose the linear algebra problem that you want to solve from the bottom menu
      </span>
      <DropDownMenu />

      <AddMatrices />
      <div className='h-100'></div>
      </div>
  )
}

export default TempCalcPage
