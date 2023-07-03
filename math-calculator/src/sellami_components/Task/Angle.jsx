import React,{useEffect, useState} from 'react'
import NumberInput from '../Inputs/NumberInput';
import MatrixEntry from '../Inputs/MatrixEntry';
import Container from '../Container';
import Title from '../Title';
import MatrixFund from '../api/MatrixFund';
import 'katex/dist/katex.min.css';
import Choice from '../Inputs/Choice';


const Description = `

\\textit{Calculate Angle between two vectors with assuming that} x\\neq0,y\\neq0 , then:\\\\
{-1\\leq\\frac{<x,y>}{||x||\\:||y||}\\leq1}\\\\
{cos\\:\\:ω = \\frac{<x,y>}{||x||\\:||y||}}\\\\

\\textit{resource: mml-book}

`

const Angle = () => {
  const [sizeX,setSizeX] = useState(2)
  const [choice,setChoice] = useState(0)
  const [matrix1,setMatrix1] = useState(Array(sizeX).fill(0).map(row => new Array(sizeX).fill(0)))

  
  const [matrix2,setMatrix2] = useState(Array(sizeX).fill(0).map(row => new Array(1).fill(0)))
  const [matrix3,setMatrix3] = useState(Array(sizeX).fill(0).map(row => new Array(1).fill(0)))

  const [resultMatrix,setresultMatrix] = useState(Array(sizeX).fill(0).map(row => new Array(sizeX).fill(0)))
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
    temp[Number(indexX)][Number(indexY)] = Number(Value)
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
    temp[Number(indexX)][Number(indexY)] = Number(Value)
    setMatrix3(temp)
  }
  const handleSubmit = () =>{
    MatrixFund.Angle({matrix1,matrix2,matrix3,choice})
      .then((response) => {setresultMatrix(response["result"]);setoutput(response["output"])})
      .catch(error => console.log('error',error))
    }
    const handleReset = () =>{
      document.getElementsByName("0,0")[1].value = 0
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
      setMatrix2(Array(2).fill(0).map(row => new Array(1).fill(0)))
      setMatrix3(Array(2).fill(0).map(row => new Array(1).fill(0)))
      setoutput("")

    document.getElementsByName("0,0")[1].value = 0
    document.getElementsByName("0,0")[2].value = 0

    if(sizeX >= 2){
      document.getElementsByName("1,0")[1].value = 0
      document.getElementsByName("1,0")[2].value = 0
    }


    }
    useEffect (() => {
      let temp1 = Array(sizeX).fill(0).map(row => new Array(sizeX).fill(0))
      for (let i = 0; i < Math.min(matrix1.length,sizeX) ; i++) {
        for (let j = 0; j <  Math.min(matrix1[0].length,sizeX) ; j++) {
          temp1[i][j] = matrix1[i][j]
        }
      }
      setMatrix1(temp1)

    
    let temp2 = Array(1).fill(0).map(row => new Array(sizeX).fill(0))
    let temp3 = Array(1).fill(0).map(row => new Array(sizeX).fill(0))
    for (let i = 0; i < Math.min(matrix2.length,1) ; i++) {
      for (let j = 0; j <  Math.min(matrix2[0].length,sizeX) ; j++) {
        temp2[i][j] = matrix2[i][j]
        temp3[i][j] = matrix3[i][j]
      }
    }
    setMatrix2(temp2)
    setMatrix3(temp3)

    }, [sizeX]);
  return (
    <div>
        <Title title={"Description"}/>
        <Container title={"Function Description"} mathcontent={ Description}/>
        
        <Title title={"Inputs"}/>


        <Choice choice={choice} setChoice={setChoice}/>

        {
          choice === 0 ? null : 
          <>
          <Container title={"Matrix inner product"} mathcontent={ 
            `
            \\textit{The Matrix inner product is defined as following : }\\\\
            \\langle x,y  \\rangle  = x^T.A.y\\\\
            \\textit{where A is a squared matrix of size n x n \\\\
            and x,y are vectors of size n}
            `
          }/>
          <Container title={"The Size of the Squared Matrix A"} content={
            <>
                <NumberInput number = {sizeX} HandleChangeValue = {setSizeX}/>
            </>
          }/>

          <Container title={"The Matrix A"} content={
          < MatrixEntry  sizeX = {sizeX} sizeY = {sizeX} HandleMatrixChange = {HandleMatrix1Change} />
          }/>
          </>
        }

        <Container title={"The Length of the Vectors"} content={
            <>
                <NumberInput number = {sizeX} HandleChangeValue = {setSizeX}/>
            </>
        }/>

        <Container title={"Vector One"} content={
        < MatrixEntry  sizeX = {1} sizeY = {sizeX} HandleMatrixChange = {HandleMatrix2Change} />
        }/>

        <Container title={"Vector Two"} content={
        < MatrixEntry  sizeX = {1} sizeY = {sizeX} HandleMatrixChange = {HandleMatrix3Change} />
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

export default Angle