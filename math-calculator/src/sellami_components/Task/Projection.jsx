import React,{useEffect, useState} from 'react'
import NumberInput from '../Inputs/NumberInput';
import MatrixEntry from '../Inputs/MatrixEntry';
import Container from '../Container';
import Title from '../Title';
import MatrixFund from '../api/MatrixFund';
import 'katex/dist/katex.min.css';
import Choice from '../Inputs/Choice';
import Reference from '../Inputs/Reference';

const Description = `

\\textit{The orthogonal projection of a vector} \\; \\textbf{x} \\; \\textit{onto 
the space of a matrix } \\; \\textbf{A} \\; \\textit{is the vector (e.g a time-series) that is 
closest in the space} \\; C(A), \\textit{where distance is measured as the sum of squared errors.}\\\\

`
const link = "https://www.sciencedirect.com/science/article/abs/pii/B9780123725608500097"
const Projection = () => {
  const [sizeX,setSizeX] = useState(2)
  const [sizeY,setSizeY] = useState(2)
  const [choice,setChoice] = useState(0)
  const [matrix1,setMatrix1] = useState(Array(sizeX).fill(0).map(row => new Array(sizeX).fill(0)))

  
  const [matrix2,setMatrix2] = useState(Array(sizeX).fill(0).map(row => new Array(1).fill(0)))

  const [matrix3,setMatrix3] = useState(Array(sizeY).fill(0).map(row => new Array(sizeX).fill(0)))

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
    temp[Number(indexX)][Number(indexY)] = Number(Value)
    setMatrix2(temp)
  }
  const HandleMatrix3Change = (indexX,indexY,Value) =>{
    let temp = Array(sizeX).fill(0).map(row => new Array(sizeY).fill(0))
    for (let i = 0; i < Math.min(matrix3.length,sizeX) ; i++) {
      for (let j = 0; j <  Math.min(matrix3[0].length,sizeY) ; j++) {
        temp[i][j] = matrix3[i][j]
      }
    }
    // console.log(temp)
    temp[Number(indexX)][Number(indexY)] = Number(Value)
    setMatrix3(temp)
  }
  
  const handleSubmit = () =>{
    MatrixFund.Projection({matrix1,matrix2,matrix3,choice})
      .then((response) => { setoutput(response["output"])})
      .catch(error => console.log('error',error))
    }
    const handleReset = () =>{
      if(choice === 1){
        document.getElementsByName("0,0")[2].value = 0
        if((sizeX >= 2) && (sizeY >= 2)){
        document.getElementsByName("1,1")[1].value = 0
        }
        if(sizeY >= 2){
        document.getElementsByName("1,0")[2].value = 0
        }
        if(sizeX >= 2){
        document.getElementsByName("0,1")[1].value = 0
        }

      }
      


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
      setChoice(0)
      setSizeX(2)
      setSizeY(2)
      setMatrix3(Array(2).fill(0).map(row => new Array(2).fill(0)))
      setMatrix1(Array(2).fill(0).map(row => new Array(2).fill(0)))
      setMatrix2(Array(2).fill(0).map(row => new Array(1).fill(0)))
      
      setoutput("")

    document.getElementsByName("0,0")[1].value = 0

    if(sizeX >= 2){
      document.getElementsByName("1,0")[1].value = 0
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
    for (let i = 0; i < Math.min(matrix2.length,1) ; i++) {
      for (let j = 0; j <  Math.min(matrix2[0].length,sizeX) ; j++) {
        temp2[i][j] = matrix2[i][j]
      }
    }
    setMatrix2(temp2)


    let temp3 = Array(sizeX).fill(0).map(row => new Array(sizeY).fill(0))
    for (let i = 0; i < Math.min(matrix3.length,sizeX) ; i++) {
      for (let j = 0; j <  Math.min(matrix3[0].length,sizeY) ; j++) {
        temp3[i][j] = matrix3[i][j]
      }
    }
    setMatrix3(temp1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizeX,sizeY]);

  return (
    <div>
        <Title title={"Description"}/>
        <Container title={"Function Description"} mathcontent={ Description} content2={
         <Reference link={link}/>
        }/>
        
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


        <Container title={"The Size of the Span"} content={
            <>
                <NumberInput number = {sizeX} HandleChangeValue = {setSizeX}/>
                <div className='p-2'>X</div>
                <NumberInput number = {sizeY} HandleChangeValue = {setSizeY}/>
            </>
        }/>

        <Container title={"The Span"} content={
        < MatrixEntry  sizeX = {sizeX} sizeY = {sizeY} HandleMatrixChange = {HandleMatrix3Change} />
        }/>

        <Container title={"The Length of the Vector X"} content={
            <>
                <NumberInput number = {sizeX} HandleChangeValue = {setSizeX}/>
            </>
        }/>

        <Container title={"Vector x"} content={
        < MatrixEntry  sizeX = {1} sizeY = {sizeX} HandleMatrixChange = {HandleMatrix2Change} />
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

export default Projection