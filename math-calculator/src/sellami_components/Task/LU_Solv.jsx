import React,{useEffect, useState} from 'react'
import NumberInput from '../Inputs/NumberInput';
import MatrixEntry from '../Inputs/MatrixEntry';
import Container from '../Container';
import Title from '../Title';
import 'katex/dist/katex.min.css';
import Echelon from '../api/Echelon';



const Description = `

\\textit{We can use the **LU decomposition** to solve linear systems}
{Ax = LUx = b},\\textit{ as follows:}\\\\


\\textit{1.   Solve the linear system }{Ly = b},\\\\
\\textit{2.   Solve the linear system }{Ux = y}.\\\\

\\textit{**Notice:**\\\\
LU factorization is very effective and cheap method
(computationally), especially when solving different linear
systems that are associated with the same matrix A (coefficient matrix).}\\\\

{AX = B ⇐⇒ LUX = B}\\\\

resource : K.Boanan Cours


`

const LU_Solv = () => {
  const [sizeX,setSizeX] = useState(2)
  const [sizeY,setSizeY] = useState(2)
  const [sizeY2,setSizeY2] = useState(1)
  const [matrix1,setMatrix1] = useState(Array(sizeY).fill(0).map(row => new Array(sizeX).fill(0)))
  const [matrix2,setMatrix2] = useState(Array(sizeY2).fill(0).map(row => new Array(sizeX).fill(0)))
  //const [resultMatrix,setresultMatrix] = useState(Array(sizeY).fill(0).map(row => new Array(sizeX).fill(0)))
  const [output,setoutput] = useState("")

  const HandleMatrix1Change = (indexX,indexY,Value) =>{
    let temp = Array(sizeX).fill(0).map(row => new Array(sizeY).fill(0))
    for (let i = 0; i < Math.min(matrix1.length,sizeX) ; i++) {
      for (let j = 0; j <  Math.min(matrix1[0].length,sizeY) ; j++) {
        temp[i][j] = matrix1[i][j]
      }
    }
    // console.log(temp)
    temp[Number(indexX)][Number(indexY)] = Number(Value)
    setMatrix1(temp)
  }
  const HandleMatrix2Change = (indexX,indexY,Value) =>{
    let temp = Array(sizeX).fill(0).map(row => new Array(sizeY2).fill(0))
    for (let i = 0; i < Math.min(matrix2.length,sizeX) ; i++) {
      for (let j = 0; j <  Math.min(matrix2[0].length,sizeY2) ; j++) {
        temp[i][j] = matrix2[i][j]
      }
    }
    // console.log(temp)
    temp[Number(indexX)][Number(indexY)] = Number(Value)
    setMatrix2(temp)
  }
  const handleSubmit = () =>{
    Echelon.LU_Solv({matrix1,matrix2})
      .then((response) => {console.log("jakobian",response["result"]); setoutput(response["output"])})
      .catch(error => console.log('error',error))
    }
  const handleReset = () =>{
    document.getElementsByName("0,0")[1].value = 0
    document.getElementsByName("0,0")[0].value = 0
    if((sizeX >= 2) && (sizeY >= 2)){
      document.getElementsByName("1,1")[0].value = 0
    }
    if(sizeY >= 2){
      document.getElementsByName("1,0")[0].value = 0
    }

    if((sizeX >= 2) && (sizeY2 >= 2)){
      document.getElementsByName("1,1")[1].value = 0
    }
    if(sizeY2 >= 2){
      document.getElementsByName("1,0")[1].value = 0
    }

    if(sizeX >= 2){
      document.getElementsByName("0,1")[0].value = 0
      document.getElementsByName("0,1")[1].value = 0
    }

    setSizeX(2)
    setSizeY(2)
    setSizeY2(2)
    setMatrix1(Array(2).fill(0).map(row => new Array(2).fill(0)))
    setMatrix2(Array(2).fill(0).map(row => new Array(2).fill(0)))
    setoutput("")
  }
  useEffect (() => {
    let temp1 = Array(sizeX).fill(0).map(row => new Array(sizeY).fill(0))
    
    for (let i = 0; i < Math.min(matrix1.length,sizeX) ; i++) {
      for (let j = 0; j <  Math.min(matrix1[0].length,sizeY) ; j++) {
        temp1[i][j] = matrix1[i][j]
      }
    }
    setMatrix1(temp1)

    let temp2 = Array(sizeX).fill(0).map(row => new Array(sizeY2).fill(0))
    for (let i = 0; i < Math.min(matrix2.length,sizeX) ; i++) {
      for (let j = 0; j <  Math.min(matrix2[0].length,sizeY2) ; j++) {
        temp2[i][j] = matrix2[i][j]
      }
    }
    setMatrix2(temp2)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizeX,sizeY,sizeY2]);
  return (
    <div>
        <Title title={"Description"}/>
        <Container title={"Function Description"} mathcontent={ Description}/>
        
        <Title title={"Inputs"}/>

        <Container title={"The Size of the Matrix A"} content={
            <>
                <NumberInput number = {sizeX} HandleChangeValue = {setSizeX}/>
                <div className='p-2'>X</div>
                <NumberInput number = {sizeY} HandleChangeValue = {setSizeY}/>
            </>
        }/>

        <Container title={"Matrix A"} content={
        < MatrixEntry  sizeX = {sizeX} sizeY = {sizeY} HandleMatrixChange = {HandleMatrix1Change} />
        }/>

      <Container title={"The Size of b"} content={
            <>
                <NumberInput number = {sizeX} HandleChangeValue = {setSizeX}/>
                <div className='p-2'>X</div>
                <NumberInput number = {sizeY2} HandleChangeValue = {setSizeY2}/>
            </>
        }/>

        <Container title={"b"} content={
        < MatrixEntry  sizeX = {sizeX} sizeY = {sizeY2} HandleMatrixChange = {HandleMatrix2Change} />
        }/>

        <div className='d-flex justify-content-center'>
          <div className='submit'>
            <button  onClick={handleSubmit}>Calculate</button>
          </div>
          <div className='cancel'>
            <button  onClick={handleReset}>Reset Input</button>
          </div>
        </div>

        {output==="" ? <></> : 
        <>
        <Title title={"Output"}/>
        
        <Container title={"Results"} mathcontent={
            output
        }/>
        </>
        }
    </div>
  )
}

export default LU_Solv