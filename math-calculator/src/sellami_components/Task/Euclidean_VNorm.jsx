import React, { useEffect, useState } from "react";
import NumberInput from "../Inputs/NumberInput";
import MatrixEntry from "../Inputs/MatrixEntry";
import Container from "../Container";
import Title from "../Title";
import Norms from "../api/Norms";
import "katex/dist/katex.min.css";

import { CircularProgress } from "@mui/material";

const Description = `
\\Vert x \\Vert_2 = \\sqrt{ \\sum_{i=1}^n\\vert x_i \\vert^2} \\\\

\\textit{L² is the most commonly used norm and the one most encountered in real life. 
    The L² norm measures the shortest distance from the origin.
     It is defined as the root of the sum of the squares of the components of the vector}
`;

const Euclidean_VNorm = () => {
  const [sizeY, setSizeY] = useState(2);
  const [matrix1, setMatrix1] = useState(
    Array(sizeY)
      .fill(0)
      .map((row) => new Array(1).fill(0))
  );
  // const [resultMatrix,setresultMatrix] = useState(Array(sizeY).fill(0).map(row => new Array(1).fill(0)))
  const [output, setoutput] = useState("");
  const [waiting, setWaiting] = useState(false);
  const HandleMatrix1Change = (indexX, indexY, Value) => {
    let temp = Array(1)
      .fill(0)
      .map((row) => new Array(sizeY).fill(0));
    for (let i = 0; i < Math.min(matrix1.length, 1); i++) {
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
    Norms.Euclidean_VNorm({ matrix1 })
      .then((response) => {
        setoutput(response["output"]);
        setWaiting(false);
      })
      .catch((error) => console.log("error", error));
  };
  const handleReset = () => {
    document.getElementsByName("0,0")[0].value = 0;

    if (sizeY >= 2) {
      document.getElementsByName("1,0")[0].value = 0;
    }

    setSizeY(2);
    setMatrix1(
      Array(2)
        .fill(0)
        .map((row) => new Array(2).fill(0))
    );
    setoutput("");
  };
  useEffect(() => {
    let temp1 = Array(1)
      .fill(0)
      .map((row) => new Array(sizeY).fill(0));
    for (let i = 0; i < Math.min(matrix1.length, 1); i++) {
      for (let j = 0; j < Math.min(matrix1[0].length, sizeY); j++) {
        temp1[i][j] = matrix1[i][j];
      }
    }
    setMatrix1(temp1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizeY]);
  return (
    <div>
      <Title title={"Description"} />
      <Container title={"Function Description"} mathcontent={Description} />

      <Title title={"Inputs"} />

      <Container
        title={"The Length of the Vector"}
        content={
          <>
            <NumberInput number={sizeY} HandleChangeValue={setSizeY} />
          </>
        }
      />

      <Container
        title={"The Vector"}
        content={
          <MatrixEntry
            sizeX={1}
            sizeY={sizeY}
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

export default Euclidean_VNorm;
