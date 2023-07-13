import React,{useEffect, useState} from 'react'
import NumberInput from '../Inputs/NumberInput';
import MatrixEntry from '../Inputs/MatrixEntry';
import Container from '../Container';
import Title from '../Title';
import 'katex/dist/katex.min.css';
import Echelon from '../api/Echelon';
import Reference from '../Inputs/Reference';


const Description = `



\\textit{the Gram–Schmidt process is a method for orthonormalizing a 
set of vectors in an inner product space, most commonly the Euclidean 
space Rn equipped with the standard inner product. The Gram–Schmidt process
 takes a finite, linearly independent set of vectors} \\\\ S = \\{{v_1, ..., v_k}\\} \\;
 \\textit{for k ≤ n and generates an orthogonal set } \\\\ S′ = \\{{u_1, ..., u_k}\\} \\; \\textit{that spans 
 the same k-dimensional subspace of Rn as S.}\\\\


 \\textit{We define the projection operator by}\\\\

{\\displaystyle \\operatorname {proj} _{\\mathbf {u} }(\\mathbf {v} 
    )={\\frac {\\langle \\mathbf {v} ,\\mathbf {u} \\rangle }{\\langle \\mathbf {u} ,
    \\mathbf {u} \\rangle }}{\\mathbf {u} },}\\\\

    \\textit{where}\\\\
\\langle \\mathbf {v} ,\\mathbf {u} \\rangle 
\\textit{denotes the inner 
product of the vectors v and u. This operator projects the vector 
v orthogonally onto the line spanned by vector u. If u = 0, we define } \\\\
{\\displaystyle \\operatorname {proj} _{\\mathbf {0} }(\\mathbf {v} ):=\\mathbf {0} },
\\textit{i.e., the projection map} \\;
{\\displaystyle \\operatorname {proj} _{\\mathbf {0} }}  \\;
\\textit{is the zero map, sending every vector to the zero vector.}\\\\

\\textit{The Gram–Schmidt process then works as follows:}\\\\


{\\displaystyle {\\begin{aligned}\\mathbf {u} _{1}&=\\mathbf {v} _{1},
&\\!\\mathbf {e} _{1}&={\\frac {\\mathbf {u} _{1}}{\\|\\mathbf {u} _{1}\\|}}
\\\\\\mathbf {u} _{2}&=\\mathbf {v} _{2}-\\operatorname {proj} _{\\mathbf {u} _{1}}
(\\mathbf {v} _{2}),&\\!\\mathbf {e} _{2}&={\\frac {\\mathbf {u} _{2}}{\\|\\mathbf {u} 
_{2}\\|}}\\\\\\mathbf {u} _{3}&=\\mathbf {v} _{3}-\\operatorname {proj} _{\\mathbf {u} 
_{1}}(\\mathbf {v} _{3})-\\operatorname {proj} _{\\mathbf {u} _{2}}(\\mathbf {v}
     _{3}),&\\!\\mathbf {e} _{3}&={\\frac {\\mathbf {u} _{3}}{\\|\\mathbf {u} _{3}\\|}}
     \\\\\\mathbf {u} _{4}&=\\mathbf {v} _{4}-\\operatorname {proj} _{\\mathbf {u} _{1}}
     (\\mathbf {v} _{4})-\\operatorname {proj} _{\\mathbf {u} _{2}}(\\mathbf {v} _{4})-
     \\operatorname {proj} _{\\mathbf {u} _{3}}(\\mathbf {v} _{4}),&\\!\\mathbf {e} _{4}
     &={\\mathbf {u} _{4} \\over \\|\\mathbf {u} _{4}\\|}\\\\&{}\\ \\ \\vdots &&{}\\ \\ \\vdots 
     \\\\\\mathbf {u} _{k}&=\\mathbf {v} _{k}-\\sum _{j=1}^{k-1}\\operatorname {proj} 
     _{\\mathbf {u} _{j}}(\\mathbf {v} _{k}),&\\!\\mathbf {e} _{k}&={\\frac {\\mathbf {u} 
     _{k}}{\\|\\mathbf {u} _{k}\\|}}.\\end{aligned}}} \\\\




`
const link = "https://en.wikipedia.org/wiki/Gram%E2%80%93Schmidt_process"
const Gram_Shmidt = () => {
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
    Echelon.Gram_Shmidt({matrix1})
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
        <Container title={"Function Description"} mathcontent={ Description} content2={
         <Reference link={link}/>
        }/>
        
        <Title title={"Inputs"}/>

        <Container title={"The Size of the Span"} content={
            <>
                <NumberInput number = {sizeX} HandleChangeValue = {setSizeX}/>
                <div className='p-2'>X</div>
                <NumberInput number = {sizeY} HandleChangeValue = {setSizeY}/>
            </>
        }/>

        <Container title={"The Span"} content={
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

export default Gram_Shmidt