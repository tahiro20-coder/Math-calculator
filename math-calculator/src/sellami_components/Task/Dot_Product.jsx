import React,{useEffect, useState} from 'react'
import NumberInput from '../Inputs/NumberInput';
import MatrixEntry from '../Inputs/MatrixEntry';
import Container from '../Container';
import Title from '../Title';
import StandardFAPIService from '../api/StandardFAPIService';
import 'katex/dist/katex.min.css';



const Description = `
  \\textit{the dot product is a common inner product where the product will equal to :} \\\\
  \\langle A,B \\rangle = A^T . B
`

const Dot_Product = () => {
  const [sizeX,setSizeX] = useState(2)
  const [size1Y,setSize1Y] = useState(2)
  const [size2Y,setSize2Y] = useState(2)
  const [matrix1,setMatrix1] = useState(Array(size1Y).fill(0).map(row => new Array(sizeX).fill(0)))
  const [matrix2,setMatrix2] = useState(Array(size2Y).fill(0).map(row => new Array(sizeX).fill(0)))
  // const [resultMatrix,setresultMatrix] = useState(Array(size2Y).fill(0).map(row => new Array(size1Y).fill(0)))
  const [output,setoutput] = useState("")

  const HandleMatrix1Change = (indexX,indexY,Value) =>{
    let temp = Array(sizeX).fill(0).map(row => new Array(size1Y).fill(0))
    for (let i = 0; i < Math.min(matrix1.length,sizeX) ; i++) {
      for (let j = 0; j <  Math.min(matrix1[0].length,size1Y) ; j++) {
        temp[i][j] = matrix1[i][j]
      }
    }
    // console.log(temp)
    temp[Number(indexX)][Number(indexY)] = Number(Value)
    setMatrix1(temp)
  }
  const HandleMatrix2Change = (indexX,indexY,Value) =>{
    let temp = Array(sizeX).fill(0).map(row => new Array(size2Y).fill(0))
    for (let i = 0; i < Math.min(matrix2.length,sizeX) ; i++) {
      for (let j = 0; j <  Math.min(matrix2[0].length,size2Y) ; j++) {
        temp[i][j] = matrix2[i][j]
      }
    }
    // console.log(temp)
    temp[Number(indexX)][Number(indexY)] = Number(Value)
    setMatrix2(temp)
  }
  const handleSubmit = () =>{
    StandardFAPIService.Dot_Product({matrix1,matrix2})
      .then((response) => { setoutput(response["output"])})
      .catch(error => console.log('error',error))
    }
  const handleReset = () =>{
    document.getElementsByName("0,0")[1].value = 0
    document.getElementsByName("0,0")[0].value = 0
    if((sizeX >= 2) ){
        if(size1Y >= 2){
            document.getElementsByName("1,1")[0].value = 0
        }
        if(size2Y >= 2){
            document.getElementsByName("1,1")[1].value = 0
        }
    }
    if(size1Y >= 2){
      document.getElementsByName("1,0")[0].value = 0
    }
    if(size2Y >= 2){
        document.getElementsByName("1,0")[1].value = 0
      }
    if(sizeX >= 2){
      document.getElementsByName("0,1")[0].value = 0
      document.getElementsByName("0,1")[1].value = 0
    }

    setSizeX(2)
    setSize1Y(2)
    setSize2Y(2)
    setMatrix1(Array(2).fill(0).map(row => new Array(2).fill(0)))
    setMatrix2(Array(2).fill(0).map(row => new Array(2).fill(0)))
    setoutput("")
  }
  useEffect (() => {
    let temp1 = Array(sizeX).fill(0).map(row => new Array(size1Y).fill(0))
    let temp2 = Array(sizeX).fill(0).map(row => new Array(size2Y).fill(0))
    for (let i = 0; i < Math.min(matrix1.length,sizeX) ; i++) {
      for (let j = 0; j <  Math.min(matrix1[0].length,size1Y) ; j++) {
        temp1[i][j] = matrix1[i][j]
      }
    }
    for (let i = 0; i < Math.min(matrix2.length,sizeX) ; i++) {
        for (let j = 0; j <  Math.min(matrix2[0].length,size2Y) ; j++) {
            temp2[i][j] = matrix2[i][j]
        }
      }
  
    setMatrix1(temp1)
    setMatrix2(temp2)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizeX,size1Y,size2Y]);
  return (
    <div>
        <Title title={"Description"}/>
        
        <Container title={"Function Description"} mathcontent={ Description}/>
        
        <Title title={"Inputs"}/>

        <Container title={"The Size of Matrix 1"} content={
            <>
                <NumberInput number = {sizeX} HandleChangeValue = {setSizeX}/>
                <div className='p-2'>X</div>
                <NumberInput number = {size1Y} HandleChangeValue = {setSize1Y}/>
            </>
        }/>

        <Container title={"Matrix One"} content={
        < MatrixEntry  sizeX = {sizeX} sizeY = {size1Y} HandleMatrixChange = {HandleMatrix1Change} />
        }/>

        <Container title={"The Size of Matrix 2"} content={
            <>
                <NumberInput number = {sizeX} HandleChangeValue = {setSizeX}/>
                <div className='p-2'>X</div>
                <NumberInput number = {size2Y} HandleChangeValue = {setSize2Y}/>
            </>
        }/>

        <Container title={"Matrix Two"} content={
        < MatrixEntry  sizeX = {sizeX} sizeY = {size2Y} HandleMatrixChange = {HandleMatrix2Change} />
        }/>
        <div className='d-flex justify-content-center'>
          <div className='submit'>
            <button  onClick={handleSubmit}>Calculate</button>
          </div>
          <div className='cancel'>
            <button  onClick={handleReset}>Reset Input</button>
          </div>
        </div>
        {console.log(matrix1,matrix2)}
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

export default Dot_Product