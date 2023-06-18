import React from 'react'
import {useEffect, useState } from 'react';

function MatrixEntry ({sizeX , sizeY, HandleMatrixChange}){
    let [matrix,setMatrix] = useState(Array(sizeY).fill(0).map(row => new Array(sizeX).fill(0)))
    const input_size = 50
  return (
    <div className='d-flex justify-content-center' style={{"width":sizeY*input_size}}>
        {matrix.map((row, indexRow = 1) => {
          return (
            <div className='d-flex flex-wrap'  key={indexRow}>
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
                          matrix[Number(indexX)][Number(indexY)] = Number(event.target.value)
                          
                          HandleMatrixChange(matrix);
                        }
                          
                      }}
                      className='m-1 Matrix_Input'
                      style={{ "width": input_size }} />
                )
              })}
            </div>
          )
        })}
    </div>
  )
}

export default MatrixEntry