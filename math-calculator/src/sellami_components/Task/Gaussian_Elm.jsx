import React, { useEffect, useState } from "react";
import NumberInput from "../Inputs/NumberInput";
import MatrixEntry from "../Inputs/MatrixEntry";
import Container from "../Container";
import Title from "../Title";
import "katex/dist/katex.min.css";
import Echelon from "../api/Echelon";
// import Checker from '../Inputs/Checker';
import Reference from "../Inputs/Reference";
import Checker from "../Inputs/Checker";
import { CircularProgress } from "@mui/material";
const Description = `


\\textit{ In mathematics, the Gaussian elimination method is known as the row reduction algorithm 
for solving linear equations systems. It consists of a sequence of operations performed 
on the corresponding matrix of coefficients. We can also use this method to estimate either 
of the following:} \\\\


\\textit{ 1.   The rank of the given matrix}\\\\
\\textit{ 2.   The determinant of a square matrix}\\\\
\\textit{ 3.   The inverse of an invertible matrix}\\\\

\\textit{ To perform row reduction on a matrix, we have to complete a sequence of 
elementary row operations \\textbf{(adding-swaping-mulitplaying)} to transform 
the matrix till we get 0s (i.e., zeros) on the lower left-hand corner of the 
matrix as much as possible, the output of \\textbf{Gussian Elimination} called a matrix 
in \\textbf{Echlon Form}.}



`;
const link = "https://athsbyjus.com/m/gauss-elimination-method/";
const Gaussian_Elm = () => {
  const [sizeX, setSizeX] = useState(2);
  const [sizeY, setSizeY] = useState(2);
  const [check1, setcheck1] = useState(false);
  const [matrix1, setMatrix1] = useState(
    Array(sizeY)
      .fill(0)
      .map((row) => new Array(sizeX).fill(0))
  );
  //const [resultMatrix,setresultMatrix] = useState(Array(sizeY).fill(0).map(row => new Array(sizeX).fill(0)))
  const [output, setoutput] = useState("");
  const [waiting, setWaiting] = useState(false);
  const HandleMatrix1Change = (indexX, indexY, Value) => {
    let temp = Array(sizeX)
      .fill(0)
      .map((row) => new Array(sizeY).fill(0));
    for (let i = 0; i < Math.min(matrix1.length, sizeX); i++) {
      for (let j = 0; j < Math.min(matrix1[0].length, sizeY); j++) {
        temp[i][j] = matrix1[i][j];
      }
    }
    // console.log(temp)
    temp[Number(indexX)][Number(indexY)] = Number(Value);
    setMatrix1(temp);
  };

  const handleSubmit = () => {
    setWaiting(true);
    Echelon.Gaussian_Elm({ matrix1, check1 })
      .then((response) => {
        setoutput(response["output"]);
        setWaiting(false);
      })
      .catch((error) => console.log("error", error));
  };
  const handleReset = () => {
    document.getElementsByName("0,0")[0].value = 0;
    if (sizeX >= 2 && sizeY >= 2) {
      document.getElementsByName("1,1")[0].value = 0;
    }
    if (sizeY >= 2) {
      document.getElementsByName("1,0")[0].value = 0;
    }
    if (sizeX >= 2) {
      document.getElementsByName("0,1")[0].value = 0;
    }

    setSizeX(2);
    setSizeY(2);
    setcheck1(false);
    setMatrix1(
      Array(2)
        .fill(0)
        .map((row) => new Array(2).fill(0))
    );
    setoutput("");
  };
  useEffect(() => {
    let temp1 = Array(sizeX)
      .fill(0)
      .map((row) => new Array(sizeY).fill(0));
    for (let i = 0; i < Math.min(matrix1.length, sizeX); i++) {
      for (let j = 0; j < Math.min(matrix1[0].length, sizeY); j++) {
        temp1[i][j] = matrix1[i][j];
      }
    }
    setMatrix1(temp1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizeX, sizeY]);
  return (
    <div>
      <Title title={"Description"} />
      <Container
        title={"Function Description"}
        mathcontent={Description}
        content2={<Reference link={link} />}
      />

      <Title title={"Inputs"} />

      <Container
        title={"The Size of the Matrix"}
        content={
          <>
            <NumberInput number={sizeX} HandleChangeValue={setSizeX} />
            <div className="p-2">X</div>
            <NumberInput number={sizeY} HandleChangeValue={setSizeY} />
          </>
        }
      />

      <Container
        title={"The Matrix"}
        content={
          <MatrixEntry
            sizeX={sizeX}
            sizeY={sizeY}
            HandleMatrixChange={HandleMatrix1Change}
          />
        }
      />

      <Container
        title={"Additions"}
        content={
          <div>
            <Checker
              label={"to Reduced Form ?"}
              check={check1}
              HandleCheckchange={setcheck1}
            />
          </div>
        }
      />

      <div className="d-flex justify-content-center">
        <div className="submit">
          <button onClick={handleSubmit}>Calculate</button>
        </div>
        <div className="cancel">
          <button onClick={handleReset}>Reset Input</button>
        </div>
      </div>

      {output === "" && !waiting ? (
        <></>
      ) : (
        <>
          <Title title={"Output"} />
          {waiting ? (
            <Container
              title={"Results"}
              content={
                <div
                  className="d-flex flex-column justify-content-center align-items-center p-4"
                  style={{ gap: "15px" }}
                >
                  <CircularProgress />
                  <span>This may take some time, please be patient</span>
                </div>
              }
            />
          ) : (
            <Container title={"Results"} mathcontent={output} />
          )}
        </>
      )}
    </div>
  );
};

export default Gaussian_Elm;
