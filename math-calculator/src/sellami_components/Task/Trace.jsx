import React,{useEffect, useState} from 'react'
import NumberInput from '../Inputs/NumberInput';
import MatrixEntry from '../Inputs/MatrixEntry';
import Container from '../Container';
import Title from '../Title';
import MatrixFund from '../api/MatrixFund';
import 'katex/dist/katex.min.css';



const Description = `

tr(A)= \\sum_{i=1}^n a_{ii}


\\textit{In linear algebra, the trace of a square matrix A,
denoted tr(A) is defined to be the sum of elements on the main diagonal
(from the upper left to the lower right) of A. The trace is only defined for a square matrix (n × n).}

      \\textit{\\\\for more : \\\\https://en.wikipedia.org/wiki/Trace\\_(linear\\_algebra)}
      
`

const Trace = () => {
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
        MatrixFund.Trace({matrix1})
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
          <Container title={"Function Description"} mathcontent={ Description}/>
          
          <Title title={"Inputs"}/>
  
          <Container title={"The Size of the Squared Matrix"} content={
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

export default Trace