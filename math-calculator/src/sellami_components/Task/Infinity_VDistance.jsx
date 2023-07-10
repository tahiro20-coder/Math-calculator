import React,{useEffect, useState} from 'react'
import NumberInput from '../Inputs/NumberInput';
import MatrixEntry from '../Inputs/MatrixEntry';
import Container from '../Container';
import Title from '../Title';
import Distance from '../api/Distance';
import 'katex/dist/katex.min.css';



const Description = `
d_\\infty(A,B) = \\max_{1\\leq i \\leq n}\\vert a_{i} - b_{i} \\vert
`

const Infinity_VDistance = () => {
  const [sizeY,setSizeY] = useState(2)
  const [matrix1,setMatrix1] = useState(Array(sizeY).fill(0).map(row => new Array(1).fill(0)))
  const [matrix2,setMatrix2] = useState(Array(sizeY).fill(0).map(row => new Array(1).fill(0)))
  // const [resultMatrix,setresultMatrix] = useState(Array(sizeY).fill(0).map(row => new Array(1).fill(0)))
  const [output,setoutput] = useState("")

  const HandleMatrix1Change = (indexX,indexY,Value) =>{
    let temp = Array(1).fill(0).map(row => new Array(sizeY).fill(0))
    for (let i = 0; i < Math.min(matrix1.length,1) ; i++) {
      for (let j = 0; j <  Math.min(matrix1[0].length,sizeY) ; j++) {
        temp[i][j] = matrix1[i][j]
      }
    }
    // console.log(temp)
    temp[Number(indexX)][Number(indexY)] = Number(Value)
    setMatrix1(temp)
  }
  const HandleMatrix2Change = (indexX,indexY,Value) =>{
    let temp = Array(1).fill(0).map(row => new Array(sizeY).fill(0))
    for (let i = 0; i < Math.min(matrix2.length,1) ; i++) {
      for (let j = 0; j <  Math.min(matrix2[0].length,sizeY) ; j++) {
        temp[i][j] = matrix2[i][j]
      }
    }
    // console.log(temp)
    temp[Number(indexX)][Number(indexY)] = Number(Value)
    setMatrix2(temp)
  }
  const handleSubmit = () =>{
    Distance.Infinity_VDistance({matrix1,matrix2})
      .then((response) => {console.log("jakobian",response["result"]); setoutput(response["output"])})
      .catch(error => console.log('error',error))
    }
  const handleReset = () =>{
    document.getElementsByName("0,0")[1].value = 0
    document.getElementsByName("0,0")[0].value = 0

    if(sizeY >= 2){
      document.getElementsByName("1,0")[0].value = 0
      document.getElementsByName("1,0")[1].value = 0
    }

    setSizeY(2)
    setMatrix1(Array(2).fill(0).map(row => new Array(1).fill(0)))
    setMatrix2(Array(2).fill(0).map(row => new Array(1).fill(0)))
    setoutput("")
  }
  useEffect (() => {
    let temp1 = Array(1).fill(0).map(row => new Array(sizeY).fill(0))
    let temp2 = Array(1).fill(0).map(row => new Array(sizeY).fill(0))
    for (let i = 0; i < Math.min(matrix1.length,1) ; i++) {
      for (let j = 0; j <  Math.min(matrix1[0].length,sizeY) ; j++) {
        temp1[i][j] = matrix1[i][j]
        temp2[i][j] = matrix2[i][j]
      }
    }
    setMatrix1(temp1)
    setMatrix2(temp2)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [1,sizeY]);
  return (
    <div>
        <Title title={"Description"}/>
        <Container title={"Function Description"} mathcontent={ Description}/>
        
        <Title title={"Inputs"}/>

        <Container title={"The Length of the Vectors"} content={
            <>
                <NumberInput number = {sizeY} HandleChangeValue = {setSizeY}/>
            </>
        }/>

        <Container title={"Vector One"} content={
        < MatrixEntry  sizeX = {1} sizeY = {sizeY} HandleMatrixChange = {HandleMatrix1Change} />
        }/>

        <Container title={"Vector Two"} content={
        < MatrixEntry  sizeX = {1} sizeY = {sizeY} HandleMatrixChange = {HandleMatrix2Change} />
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

export default Infinity_VDistance