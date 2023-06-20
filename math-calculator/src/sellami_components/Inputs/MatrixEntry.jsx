import React from 'react'
import {useEffect, useState } from 'react';


function MatrixEntry ({sizeX , sizeY, HandleMatrixChange}){
    let matrix = Array(sizeY).fill(0).map(row => new Array(sizeX).fill(0))
    
    const input_size = 50
    const ins = 15
  return (
    <div className='d-flex justify-content-center MinputCont' style={{"width":((32*ins) - sizeY*ins) +"vw"}}>
        {matrix.map((row, indexRow = 1) => {
          return (
            <div className='d-flex flex-wrap justify-content-center'  key={indexRow} style={{ "width": ins + "%" ,"minWidth":"25px"}} >
              {row.map((item, indexColumn = 1) => {
                return (
                    <input
                      key={indexRow + " " + indexColumn}
                      defaultValue={0}
                      type='text'
                      name={indexRow + "," + indexColumn}
                      onKeyPress={(event) => {
                        // console.log(event.target.value)
                        if ((!/[0-9]/.test(event.key))&&(event.key !== '+') && (event.key !== "-")) {
                        event.preventDefault();
                        }
                      }}
                      onInput={(event)=>{
                        if(event.target.value !== ''){
                          event.target.value = event.target.value[0] + event.target.value.substring(1).replace('+','').replace('-','')
                          let [indexY,indexX] = event.target.name.split(",")
                          // matrix[Number(indexX)][Number(indexY)] = Number(event.target.value)
                          // console.log("done")
                          HandleMatrixChange(indexX,indexY,Number(event.target.value));
                        }
                          
                      }}
                      onBlur={(event)=>{
                        if((event.target.value === '-' ) || (event.target.value === '+' )){
                          event.target.value = 0
                          let [indexY,indexX] = event.target.name.split(",")
                          HandleMatrixChange(indexX,indexY,0);
                        }
                        
                      }}
                      className='m-1 Matrix_Input'
                      style={{ "width":  "100%" }}/>
                )
              })}
            </div>
          )
        })}
    </div>
  )
}

export default MatrixEntry