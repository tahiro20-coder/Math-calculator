import React,{useEffect, useState} from 'react'
import NumberInput from '../Inputs/NumberInput';
import MatrixEntry from '../Inputs/MatrixEntry';
import Container from '../Container';
import Title from '../Title';
import 'katex/dist/katex.min.css';
import Matrix_Decomposition from '../api/Matrix_Decomposition';
import Reference from '../Inputs/Reference';


const Description = `
      
      \\textit{ Let A be a square n × n matrix with n linearly independent eigenvectors qi 
      (where i = 1, ..., n). Then A can be factorized as} \\\\ 
       \\mathbf{A}=\\mathbf{Q}\\mathbf{\\Lambda}\\mathbf{Q}^{-1} 
       \\textit{where Q is the square n × n matrix whose ith column is the eigenvector qi of A, 
        and Λ is the diagonal matrix whose diagonal elements are the corresponding eigenvalues,}
        Λ_{ii} = λ_i \\\\ \\textit{-Note that only diagonalizable matrices can be factorized in this way.}
        
`
const link = "https://en.wikipedia.org/wiki/Eigendecomposition_of_a_matrix"
const Eigen_Decomposition = () => {
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
        Matrix_Decomposition.Eigen_Decomposition({matrix1})
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

export default Eigen_Decomposition