import React,{useEffect, useState} from 'react'
import NumberInput from '../Inputs/NumberInput';
import MatrixEntry from '../Inputs/MatrixEntry';
import Container from '../Container';
import Title from '../Title';
import APIService from '../api/APIService';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex'; 
import renderLatexMatrix from "../LatexRender"

const AddMatrices = () => {
  const [sizeX,setSizeX] = useState(2)
  const [sizeY,setSizeY] = useState(2)
  const [matrix,setMatrix] = useState(Array(sizeY).fill(0).map(row => new Array(sizeX).fill(0)))

  const HandleMatrixChange = (indexX,indexY,Value) =>{
    let temp = Array(sizeX).fill(0).map(row => new Array(sizeY).fill(0))
    for (let i = 0; i < Math.min(matrix.length,sizeX) ; i++) {
      for (let j = 0; j <  Math.min(matrix[0].length,sizeY) ; j++) {
        temp[i][j] = matrix[i][j]
      }
    }
    // console.log(temp)
    temp[Number(indexX)][Number(indexY)] = Number(Value)
    setMatrix(temp)
  }
  const handleSubmit = () =>{
      APIService.mat({matrix})
      .then((response) => console.log("bambolina",response))
      .catch(error => console.log('error',error))
    }
  useEffect (() => {
    let temp = Array(sizeX).fill(0).map(row => new Array(sizeY).fill(0))
    for (let i = 0; i < Math.min(matrix.length,sizeX) ; i++) {
      for (let j = 0; j <  Math.min(matrix[0].length,sizeY) ; j++) {
        temp[i][j] = matrix[i][j]
      }
    }
    setMatrix(temp)
  }, [sizeX,sizeY]);
  return (
    <div>
        <Title title={"Inputs"}/>

        <Container title={"The Size of the Matrices"} content={
            <>
                <NumberInput HandleChangeValue = {setSizeX}/>
                <div className='p-2'>X</div>
                <NumberInput HandleChangeValue = {setSizeY}/>
            </>
        }/>

        <Container title={"Matrix One"} content={
        < MatrixEntry sizeX = {sizeX} sizeY = {sizeY} HandleMatrixChange = {HandleMatrixChange} />
        }/>

        <Container title={"Matrix Two"} content={
        < MatrixEntry sizeX = {sizeX} sizeY = {sizeY} HandleMatrixChange = {HandleMatrixChange} />
        }/>
        <div className='d-flex justify-content-between'>
          <div className='submit'>
            <button  onClick={handleSubmit}>Calculate</button>
          </div>
          <div className='cancel'>
            <button  onClick={handleSubmit}>Reset Input</button>
          </div>
        </div>

        <BlockMath math={"A = " + renderLatexMatrix(matrix)}/>
        
    </div>
  )
}

export default AddMatrices