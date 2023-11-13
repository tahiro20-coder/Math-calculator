import React, { useEffect, useState } from "react";
import NumberInput from "../Inputs/NumberInput";
import MatrixEntry from "../Inputs/MatrixEntry";
import Container from "../Container";
import Title from "../Title";
import "katex/dist/katex.min.css";
import Matrix_Decomposition from "../api/Matrix_Decomposition";
import Reference from "../Inputs/Reference";
import { CircularProgress } from "@mui/material";

const Description = `

        \\textit{ Let A be a square matrix. An LU factorization refers to the factorization of A,
         with proper row and/or column orderings or permutations, into two factors a lower
          triangular matrix L and an upper triangular matrix U:}\\\\

        A=LU. 
        \\textit{In the lower triangular matrix} {L}
        \\textit{ all elements above the diagonal are zero, 
        in the upper triangular matrix }{U} \\textit{,all the elements below the diagonal are zero.}

        
`;
const link = " https://en.wikipedia.org/wiki/LU_decomposition";
const LU = () => {
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
    Matrix_Decomposition.LU({ matrix1 })
      .then((response) => {
        setoutput(response["output"]);
        setWaiting(false);
      })
      .catch((error) => console.log("error", error));
  };
  const handleReset = () => {
    document.getElementsByName("0,0")[0].value = 0;
    if (sizeX >= 2 && sizeX >= 2) {
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

export default LU;
