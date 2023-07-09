import React,{useEffect, useState} from 'react'
import NumberInput from '../Inputs/NumberInput';
import MatrixEntry from '../Inputs/MatrixEntry';
import Container from '../Container';
import Title from '../Title';
import 'katex/dist/katex.min.css';
import Echelon from '../api/Echelon';
import {Emph,NewLine,Bold} from '../Inputs/StyleDescription'


/*const Description = 
Emph('Eigenvalues are the special set of scalars associated with the system of linear equations.It is mostly used in matrix equations. ‘Eigen’ is a German word that means ‘proper’ or‘characteristic’. Therefore, the term eigenvalue can be termed as characteristic value,characteristic root, proper values or latent roots as well. In simple words, the eigenvalueis a scalar that is used to transform the eigenvector. The basic equation is:')
+NewLine()
+'Ax = λx'
+NewLine()
+Emph('The number or scalar value {“λ”}')
+Emph('is an eigenvalue of '+Bold('A')+'.')
+NewLine()
+Emph('An '+Bold('Eigenspace')+' of vector {“x”}')
+Emph('consists of a set of all eigenvectors with the equivalent eigenvalue {“λ”} collectively with the zero vector. Though, the zero vector is not an eigenvector.' )
+NewLine()*/

const Description = `
\\textit{Eigenvalues are the special set of scalars associated with the system of linear equations.
 It is mostly used in matrix equations. ‘Eigen’ is a German word that means ‘proper’ or
  ‘characteristic’. Therefore, the term eigenvalue can be termed as characteristic value,
   characteristic root, proper values or latent roots as well. In simple words, the eigenvalue
    is a scalar that is used to transform the eigenvector. The basic equation is:}\\\\
Ax = λx\\\\

\\textit{The number or scalar value} {“λ”}\\textit{ is an eigenvalue of **A**.}\\\\

\\textit{An **Eigenspace** of vector} {“x”}\\textit{ consists of a set of all eigenvectors with the 
equivalent eigenvalue }{“λ”} \\textit{collectively with the zero vector. Though, the zero 
vector is not an eigenvector.}\\\\

\\textit{\\\\for more : \\\\ https://byjus.com/maths/eigen-values/}\\#\\textit{definition}
`

const Eigenvalues_and_Eigenvectors = () => {
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
    Echelon.Eigenvalues_and_Eigenvectors({matrix1})
      .then((response) => {setoutput(response["output"])})
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

export default Eigenvalues_and_Eigenvectors