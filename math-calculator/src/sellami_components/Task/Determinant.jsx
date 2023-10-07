import React, { useEffect, useState } from "react";
import NumberInput from "../Inputs/NumberInput";
import MatrixEntry from "../Inputs/MatrixEntry";
import Container from "../Container";
import Title from "../Title";
import MatrixFund from "../api/MatrixFund";
import "katex/dist/katex.min.css";
import Reference from "../Inputs/Reference";
import { CircularProgress } from "@mui/material";

const Description = `

        \\textit{1)- Expansion along column j :} \\\\
      det(A)= \\sum_{k=1}^n (-1)^{k+j} a_{kj} det(A_{kj})\\\\ \\  \\\\
      \\textit{2)- Expansion along row j :} \\\\
      det(A)= \\sum_{k=1}^n (-1)^{k+j} a_{jk} det(A_{jk}) \\\\ \\  \\\\
      
      
      \\textit{In mathematics, the determinant is a scalar value that is a 
      function of the entries of a square matrix. It characterizes 
      some properties of the matrix and the linear map represented 
      by the matrix. In particular, the determinant is nonzero if 
      and only if the matrix is invertible and the linear map represented 
      by the matrix is an isomorphism.}
`;
const link = "https://en.wikipedia.org/wiki/Determinant";
const Determinant = () => {
  const [sizeX, setSizeX] = useState(2);
  const [matrix1, setMatrix1] = useState(
    Array(sizeX)
      .fill(0)
      .map((row) => new Array(sizeX).fill(0))
  );
  // const [resultMatrix,setresultMatrix] = useState(Array(sizeX).fill(0).map(row => new Array(sizeX).fill(0)))
  const [output, setoutput] = useState("");
  const [waiting, setWaiting] = useState(false);
  const HandleMatrix1Change = (indexX, indexY, Value) => {
    let temp = Array(sizeX)
      .fill(0)
      .map((row) => new Array(sizeX).fill(0));
    for (let i = 0; i < Math.min(matrix1.length, sizeX); i++) {
      for (let j = 0; j < Math.min(matrix1[0].length, sizeX); j++) {
        temp[i][j] = matrix1[i][j];
      }
    }
    // console.log(temp)
    temp[Number(indexX)][Number(indexY)] = Number(Value);
    setMatrix1(temp);
  };

  const handleSubmit = () => {
    setWaiting(true);
    MatrixFund.Determinant({ matrix1 })
      .then((response) => {
        setoutput(response["output"]);
        setWaiting(false);
      })
      .catch((error) => console.log("error", error));
  };
  const handleReset = () => {
    document.getElementsByName("0,0")[0].value = 0;
    if (sizeX >= 2) {
      document.getElementsByName("1,1")[0].value = 0;
    }
    if (sizeX >= 2) {
      document.getElementsByName("1,0")[0].value = 0;
    }
    if (sizeX >= 2) {
      document.getElementsByName("0,1")[0].value = 0;
    }

    setSizeX(2);
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
      .map((row) => new Array(sizeX).fill(0));
    for (let i = 0; i < Math.min(matrix1.length, sizeX); i++) {
      for (let j = 0; j < Math.min(matrix1[0].length, sizeX); j++) {
        temp1[i][j] = matrix1[i][j];
      }
    }
    setMatrix1(temp1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizeX]);
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
        title={"The Size of the Squared Matrix"}
        content={
          <>
            <NumberInput number={sizeX} HandleChangeValue={setSizeX} />
          </>
        }
      />

      <Container
        title={"The Matrix"}
        content={
          <MatrixEntry
            sizeX={sizeX}
            sizeY={sizeX}
            HandleMatrixChange={HandleMatrix1Change}
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

export default Determinant;
