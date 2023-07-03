import React,{useEffect, useState} from 'react'
import NumberInput from '../Inputs/NumberInput';
import MatrixEntry from '../Inputs/MatrixEntry';
import InputParameter from '../Inputs/InputParameter';
import Container from '../Container';
import Title from '../Title';
import Norms from '../api/Norms';
import 'katex/dist/katex.min.css';



const Description = `
\\Vert x_p\\Vert = \\left [  \\sum_{i=1}^n \\vert x_i\\vert^p \\right]^{\\frac{1}{p}} where \\  p > 0 \\\\

\\textit{We can now generalize to the idea of what is known as the p-norm.
     In a way, we can derive all other norms from the p-norm by varying the values of p. 
     That is to say, if you substitute the value of p with one, two, 
     and ∞ respectively in the formula below, you'll obtain L¹, L², and L∞ norms.}
`

const Lp_Norm = () => {
  const [sizeY,setSizeY] = useState(2)
  const [matrix1,setMatrix1] = useState(Array(sizeY).fill(0).map(row => new Array(1).fill(0)))
  const [p,setP] = useState(2)
  const [resultMatrix,setresultMatrix] = useState(Array(sizeY).fill(0).map(row => new Array(1).fill(0)))
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

  const handleSubmit = () =>{
    Norms.Lp_Norm({matrix1,p})
      .then((response) => {setresultMatrix(response["result"]);setoutput(response["output"])})
      .catch(error => console.log('error',error))
    }
  const handleReset = () =>{
    document.getElementsByName("0,0")[1].value = 0

    if(sizeY >= 2){
      document.getElementsByName("1,0")[0].value = 0
    }

    setP(2)
    setSizeY(2)
    setMatrix1(Array(2).fill(0).map(row => new Array(2).fill(0)))
    setoutput("")
  }
  useEffect (() => {
    let temp1 = Array(1).fill(0).map(row => new Array(sizeY).fill(0))
    for (let i = 0; i < Math.min(matrix1.length,1) ; i++) {
      for (let j = 0; j <  Math.min(matrix1[0].length,sizeY) ; j++) {
        temp1[i][j] = matrix1[i][j]
      }
    }
    setMatrix1(temp1)
  }, [sizeY]);
  return (
    <div>
        <Title title={"Description"}/>
        <Container title={"Function Description"} mathcontent={ Description}/>
        
        <Title title={"Inputs"}/>

        <Container title={"The Length of the Vector"} content={
            <>
                <NumberInput number = {sizeY} HandleChangeValue = {setSizeY}/>
            </>
        }/>

        <Container title={"The Vector"} content={
        < MatrixEntry  sizeX = {1} sizeY = {sizeY} HandleMatrixChange = {HandleMatrix1Change} />
        }/>

        <Container title={"The Value P"} content={
        < InputParameter  value = {p} handleChange = {setP} min={1}/>
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

export default Lp_Norm