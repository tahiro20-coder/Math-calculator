import React ,{useEffect, useState } from 'react';
import DropDownMenu from './Inputs/DropDownMenu';
import NumberInput from './Inputs/NumberInput';
import MatrixEntry from './Inputs/MatrixEntry';
import './calcstyle.css';
import APIService from './api/APIService'; 
// import script from '../python/main.py';


// const runScript = async (code) => {
//   const pyodide = await window.loadPyodide({
//     indexURL : "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/"
//   });

//   return await pyodide.runPythonAsync(code);
// }



const TempCalcPage = () => {
  const [sizeX,setSizeX] = useState(2)
  const [sizeY,setSizeY] = useState(2)
  const [matrix,setMatrix] = useState(NaN)

  const handleSubmit = () =>{
      console.log(JSON.stringify(matrix))
      APIService.mat(matrix)
      .then((response) => console.log("bambolina",response))
      .catch(error => console.log('error',error))
    }
  return (
    <div className= "container content" >
    <span className='Header' >
      Step by Step Solving
        < /span>
        < span className = 'normal' >
          You can choose the linear algebra problem that you want to solve from the bottom menu
            < /span>
            < DropDownMenu />

            X
            <NumberInput HandleChangeValue = {setSizeX}/>
            Y
            <NumberInput HandleChangeValue = {setSizeY}/>
            < MatrixEntry sizeX = {sizeX} sizeY = {sizeY} HandleMatrixChange = {setMatrix} />
            <button onClick={handleSubmit}></button>
              </div>
  )
}

export default TempCalcPage
