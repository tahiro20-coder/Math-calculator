import React,{useEffect, useState} from 'react'
import NumberInput from '../Inputs/NumberInput';
import MatrixEntry from '../Inputs/MatrixEntry';
import Container from '../Container';
import Title from '../Title';
import 'katex/dist/katex.min.css';

import Testing_Methods from '../api/Testing_Methods';


const Description = `

\\textit{Convexity is a term that pertains to both sets and functions.\\\\

For functions, there are different degrees of convexity, and how
convex a function is, tells us a lot about its minima: do they
exist, are they unique, how quickly can we find them using
optimization algorithms.\\\\

we use the Theorem:\\\\}


\\textit{*   f is **convex** if and only if} ∇^{2}f(x)\\textit{ is **positive semi definite** for all} x ∈ dom f\\\\

\\textit{*   If} ∇^{2}f(x)\\textit{ is **positive definite** for all} x ∈ dom f\\textit{ then }f \\textit{is **strictly convex**.}\\\\



\\textit{To tell wheither the function is convex or not by calculating the eignvalues of }∇^{2}f(x)\\\\

\\textit{resource: K.Boanan cours}


`

const Convexity = () => {
  const [sizeX,setSizeX] = useState(2)
  const [sizeY,setSizeY] = useState(2)
  const [matrix1,setMatrix1] = useState(Array(sizeY).fill(0).map(row => new Array(sizeX).fill(0)))
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

  const handleSubmit = () =>{
    Testing_Methods.Convexity({matrix1})
      .then((response) => { setoutput(response["output"])})
      .catch(error => console.log('error',error))
    }
  const handleReset = () =>{
    document.getElementsByName("0,0")[0].value = 0
    if((sizeX >= 2) && (sizeY >= 2)){
      document.getElementsByName("1,1")[0].value = 0
    }
    if(sizeY >= 2){
      document.getElementsByName("1,0")[0].value = 0
    }
    if(sizeX >= 2){
      document.getElementsByName("0,1")[0].value = 0
    }

    setSizeX(2)
    setSizeY(2)
    setMatrix1(Array(2).fill(0).map(row => new Array(2).fill(0)))
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizeX,sizeY]);
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

        <Container title={"The Matrix"} content={
        < MatrixEntry  sizeX = {sizeX} sizeY = {sizeY} HandleMatrixChange = {HandleMatrix1Change} />
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

export default Convexity