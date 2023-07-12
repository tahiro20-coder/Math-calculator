import React,{useEffect, useState} from 'react'
import NumberInput from '../Inputs/NumberInput';
import MatrixEntry from '../Inputs/MatrixEntry';
import Container from '../Container';
import Title from '../Title';
import 'katex/dist/katex.min.css';
import Gradients from '../api/Gradients';
import InputParameter from '../Inputs/InputParameter';


const Description = `

\\textit{Steepest Descent it is the same as Gradient descent but with a twist to} ρ_k
\\textit{the aim here is to find }ρ_k\\textit{ such that :}\\\\

{J(x^{(k)}-ρ_k∇J(x^{(k)})^T)=\\underset{ρ_k ∈ R}{min}J(x^{(k)}-ρ_k∇J(x^{(k)})^T)}\\\\

\\textit{with assuming that} J : R^n→ R\\textit{ is such that:}\\\\
J(x) = \\frac{1}{2}⟨A x, x⟩ − ⟨b, x⟩ + c\\\\


\\textit{with }A ∈ R^{n×n} \\textit{symetric definite positive matrix ,} b ∈ R^n \\textit{and} \\; c ∈ R.\\\\


`

const Steepest_Gradient_Descent = () => {
  const [sizeX,setSizeX] = useState(2)
  const [matrix1,setMatrix1] = useState(Array(sizeX).fill(0).map(row => new Array(sizeX).fill(0)))
  const [matrix2,setMatrix2] = useState(Array(1).fill(0).map(row => new Array(sizeX).fill(0)))
  const [matrix3,setMatrix3] = useState(Array(1).fill(0).map(row => new Array(sizeX).fill(0)))
  const [c,setC]  = useState(0)
  const [max_iterations,setMax_iterations]  = useState(50)
  const [tol,setTol]  = useState(0.000001)
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
  const HandleMatrix2Change = (indexX,indexY,Value) =>{
    let temp = Array(1).fill(0).map(row => new Array(sizeX).fill(0))
    for (let i = 0; i < Math.min(matrix2.length,1) ; i++) {
      for (let j = 0; j <  Math.min(matrix2[0].length,sizeX) ; j++) {
        temp[i][j] = matrix2[i][j]
      }
    }
    // console.log(temp)
    temp[Number(indexY)][Number(indexX)] = Number(Value)
    setMatrix2(temp)
  }
  const HandleMatrix3Change = (indexX,indexY,Value) =>{
    let temp = Array(1).fill(0).map(row => new Array(sizeX).fill(0))
    for (let i = 0; i < Math.min(matrix3.length,1) ; i++) {
      for (let j = 0; j <  Math.min(matrix3[0].length,sizeX) ; j++) {
        temp[i][j] = matrix3[i][j]
      }
    }
    // console.log(temp)
    temp[Number(indexY)][Number(indexX)] = Number(Value)
    setMatrix3(temp)
  }
  const handleSubmit = () =>{
    Gradients.Steepest_Gradient_Descent({matrix1,matrix2,c,matrix3,tol,max_iterations})
      .then((response) => {console.log("jakobian",response["result"]); setoutput(response["output"])})
      .catch(error => console.log('error',error))
    }
  const handleReset = () =>{
    document.getElementsByName("0,0")[1].value = 0
    document.getElementsByName("0,0")[2].value = 0
    document.getElementsByName("0,0")[0].value = 0
    if((sizeX >= 2) && (sizeX >= 2)){
      document.getElementsByName("1,1")[0].value = 0
    }
    if(sizeX >= 2){
      document.getElementsByName("1,0")[0].value = 0
    }
    if(sizeX >= 2){
      document.getElementsByName("0,1")[0].value = 0
      document.getElementsByName("0,1")[1].value = 0
      document.getElementsByName("0,1")[2].value = 0
    }

    setSizeX(2)
    setC(0)
    setMax_iterations(50)
    setTol(0.000001)
    setMatrix1(Array(2).fill(0).map(row => new Array(2).fill(0)))
    setMatrix2(Array(1).fill(0).map(row => new Array(2).fill(0)))
    setMatrix3(Array(1).fill(0).map(row => new Array(2).fill(0)))
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

    let temp3 = Array(1).fill(0).map(row => new Array(sizeX).fill(0))
    let temp2 = Array(1).fill(0).map(row => new Array(sizeX).fill(0))
    for (let i = 0; i < Math.min(matrix1.length,1) ; i++) {
      for (let j = 0; j <  Math.min(matrix1[0].length,sizeX) ; j++) {
        temp3[i][j] = matrix1[i][j]
        temp2[i][j] = matrix2[i][j]
      }
    }
    setMatrix3(temp3)
    setMatrix2(temp2)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizeX]);
  return (
    <div>
        <Title title={"Description"}/>
        <Container title={"Function Description"} mathcontent={ Description}/>
        
        <Title title={"Inputs"}/>

        <Container title={"The Size of the Matrix A"} content={
            <>
                <NumberInput number = {sizeX} HandleChangeValue = {setSizeX}/>
            </>
        }/>

        <Container title={"Matrix A"} content={
        < MatrixEntry  sizeX = {sizeX} sizeY = {sizeX} HandleMatrixChange = {HandleMatrix1Change} />
        }/>

        <Container title={"Vector b"} content={
        < MatrixEntry  sizeX = {sizeX} sizeY = {1} HandleMatrixChange = {HandleMatrix2Change} />
        }/>

        <Container title={"The C Value"} content={
            < InputParameter  value = {c} handleChange = {setC} />
        }/>

        <Container title={"the initial value of x"} content={
        < MatrixEntry  sizeX = {sizeX} sizeY = {1} HandleMatrixChange = {HandleMatrix3Change} />
        }/>

        <Container title={"The Maximum number of iterations"} content={
            < InputParameter  value = {max_iterations} handleChange = {setMax_iterations} max={10000}/>
        }/>

        <Container title={"The Breaking Tolerance"} content={
            < InputParameter  value = {tol} handleChange = {setTol} min={0.000000000000000000000000001}/>
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

export default Steepest_Gradient_Descent