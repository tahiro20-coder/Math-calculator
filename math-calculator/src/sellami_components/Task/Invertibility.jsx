import React,{useEffect, useState} from 'react'
import NumberInput from '../Inputs/NumberInput';
import MatrixEntry from '../Inputs/MatrixEntry';
import Container from '../Container';
import Title from '../Title';
import 'katex/dist/katex.min.css';

import Testing_Methods from '../api/Testing_Methods';
import Reference from '../Inputs/Reference';

const Description = `

\\textit{In linear algebra, an $n$-by-$n$ square matrix }A\\textit{ is called \\textbf{invertible}
(also nonsingular, nondegenerate or (rarely used) regular), if there exists 
an} \\; n\\textit{-by-}n\\textit{ square matrix B such that:}\\\\
{\\displaystyle \\mathbf {AB} =\\mathbf {BA} =\\mathbf {I} _{n},}\\\\

\\textit{Matrix \\textbf{inversion} is the process of finding the matrix } B\\textit{ that 
satisfies the prior equation for a given invertible matrix }A.\\\\

\\textit{\\textbf{Notice:}}\\\\
\\textit{An invertible matrix has proprties that satisfies and we use one of 
them to check if a matrix is \\textbf{invertible or not} we use : }\\\\


\\textit{    The determinant of }A\\textit{ is nonzero: det }A ≠ 0.\\textit{ (In general, a 
    square matrix over a commutative ring is invertible if and only if its 
    determinant is a unit in that ring.)}



`
const link = "https://en.wikipedia.org/wiki/Invertible_matrix"
const Invertibility = () => {
  const [sizeX,setSizeX] = useState(2)
  const [matrix1,setMatrix1] = useState(Array(sizeX).fill(0).map(row => new Array(sizeX).fill(0)))
  // const [resultMatrix,setresultMatrix] = useState(Array(sizeX).fill(0).map(row => new Array(sizeX).fill(0)))
  const [output,setoutput] = useState("")

  const HandleMatrix1Change = (indexX,indexY,Value) =>{
    let temp = Array(sizeX).fill(0).map(row => new Array(sizeX).fill(0))
    for (let i = 0; i < Math.min(matrix1.length,sizeX) ; i++) {
      for (let j = 0; j <  Math.min(matrix1[0].length,sizeX) ; j++) {
        temp[i][j] = matrix1[i][j]
      }
    }
    // console.log(temp)
    temp[Number(indexX)][Number(indexY)] = Number(Value)
    setMatrix1(temp)
  }

  const handleSubmit = () =>{
    Testing_Methods.Invertibility({matrix1})
      .then((response) => { setoutput(response["output"])})
      .catch(error => console.log('error',error))
    }
  const handleReset = () =>{
    document.getElementsByName("0,0")[0].value = 0
    if((sizeX >= 2) && (sizeX >= 2)){
      document.getElementsByName("1,1")[0].value = 0
    }
    if(sizeX >= 2){
      document.getElementsByName("1,0")[0].value = 0
    }
    if(sizeX >= 2){
      document.getElementsByName("0,1")[0].value = 0
    }

    setSizeX(2)
    setMatrix1(Array(2).fill(0).map(row => new Array(2).fill(0)))
    setoutput("")
  }
  useEffect (() => {
    let temp1 = Array(sizeX).fill(0).map(row => new Array(sizeX).fill(0))
    for (let i = 0; i < Math.min(matrix1.length,sizeX) ; i++) {
      for (let j = 0; j <  Math.min(matrix1[0].length,sizeX) ; j++) {
        temp1[i][j] = matrix1[i][j]
      }
    }
    setMatrix1(temp1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizeX]);
  return (
    <div>
        <Title title={"Description"}/>
        <Container title={"Function Description"} mathcontent={ Description} content2={
         <Reference link={link}/>
        }/>
        
        <Title title={"Inputs"}/>

        <Container title={"The Size of the Matrix"} content={
            <>
                <NumberInput number = {sizeX} HandleChangeValue = {setSizeX}/>
            </>
        }/>

        <Container title={"The Matrix"} content={
        < MatrixEntry  sizeX = {sizeX} sizeY = {sizeX} HandleMatrixChange = {HandleMatrix1Change} />
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

export default Invertibility