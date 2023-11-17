import React, { useEffect, useState } from "react";
import NumberInput from "../Inputs/NumberInput";
import MatrixEntry from "../Inputs/MatrixEntry";
import Container from "../Container";
import Title from "../Title";
import "katex/dist/katex.min.css";
import Echelon from "../api/Echelon";
import Reference from "../Inputs/Reference";
import { CircularProgress } from "@mui/material";

const Description = `

\\textit{A solution of a linear system is an assignment of values to the variables }
{x_1, x_2, ..., x_n}\\textit{ such that each of the equations is satisfied. 
The set of all possible solutions is called the \\textbf{solution set}.}\\\\

\\textit{A linear system may behave in any one of three possible ways:}\\\\



\\textit{1.   The system has infinitely many solutions (\\textbf{General solution}). }\\\\ 
\\textit{2.   The system has a single unique solution (\\textbf{Particular Solution}).}\\\\ 
\\textit{3.   The system has no solution.}



`;
const link = "https://en.wikipedia.org/wiki/System_of_linear_equations";
const General_solution = () => {
  const [sizeX, setSizeX] = useState(2);
  const [sizeY, setSizeY] = useState(2);
  const [sizeY2, setSizeY2] = useState(1);
  const [matrix1, setMatrix1] = useState(
    Array(sizeY)
      .fill(0)
      .map((row) => new Array(sizeX).fill(0))
  );
  const [matrix2, setMatrix2] = useState(
    Array(sizeY2)
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
  const HandleMatrix2Change = (indexX, indexY, Value) => {
    let temp = Array(sizeX)
      .fill(0)
      .map((row) => new Array(sizeY2).fill(0));
    for (let i = 0; i < Math.min(matrix2.length, sizeX); i++) {
      for (let j = 0; j < Math.min(matrix2[0].length, sizeY2); j++) {
        temp[i][j] = matrix2[i][j];
      }
    }
    // console.log(temp)
    temp[Number(indexX)][Number(indexY)] = Number(Value);
    setMatrix2(temp);
  };
  const handleSubmit = () => {
    setWaiting(true);
    Echelon.General_solution({ matrix1, matrix2 })
      .then((response) => {
        console.log("jakobian", response["result"]);
        setoutput(response["output"]);
        setWaiting(false);
      })
      .catch((error) => console.log("error", error));
  };
  const handleReset = () => {
    document.getElementsByName("0,0")[1].value = 0;
    document.getElementsByName("0,0")[0].value = 0;
    if (sizeX >= 2 && sizeY >= 2) {
      document.getElementsByName("1,1")[0].value = 0;
    }
    if (sizeY >= 2) {
      document.getElementsByName("1,0")[0].value = 0;
    }

    if (sizeX >= 2 && sizeY2 >= 2) {
      document.getElementsByName("1,1")[1].value = 0;
    }
    if (sizeY2 >= 2) {
      document.getElementsByName("1,0")[1].value = 0;
    }

    if (sizeX >= 2) {
      document.getElementsByName("0,1")[0].value = 0;
      document.getElementsByName("0,1")[1].value = 0;
    }

    setSizeX(2);
    setSizeY(2);
    setSizeY2(2);
    setMatrix1(
      Array(2)
        .fill(0)
        .map((row) => new Array(2).fill(0))
    );
    setMatrix2(
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

    let temp2 = Array(sizeX)
      .fill(0)
      .map((row) => new Array(sizeY2).fill(0));
    for (let i = 0; i < Math.min(matrix2.length, sizeX); i++) {
      for (let j = 0; j < Math.min(matrix2[0].length, sizeY2); j++) {
        temp2[i][j] = matrix2[i][j];
      }
    }
    setMatrix2(temp2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizeX, sizeY, sizeY2]);
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
        title={"The Size of the Matrix A"}
        content={
          <>
            <NumberInput number={sizeX} HandleChangeValue={setSizeX} />
            <div className="p-2">X</div>
            <NumberInput number={sizeY} HandleChangeValue={setSizeY} />
          </>
        }
      />

      <Container
        title={"Matrix A"}
        content={
          <MatrixEntry
            sizeX={sizeX}
            sizeY={sizeY}
            HandleMatrixChange={HandleMatrix1Change}
          />
        }
      />

      <Container
        title={"The Size of b"}
        content={
          <>
            <NumberInput number={sizeX} HandleChangeValue={setSizeX} />
            <div className="p-2">X</div>
            <NumberInput number={sizeY2} HandleChangeValue={setSizeY2} />
          </>
        }
      />

      <Container
        title={"b"}
        content={
          <MatrixEntry
            sizeX={sizeX}
            sizeY={sizeY2}
            HandleMatrixChange={HandleMatrix2Change}
          />
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

export default General_solution;
