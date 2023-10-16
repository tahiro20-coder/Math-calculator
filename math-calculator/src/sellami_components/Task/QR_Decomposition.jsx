import React, { useEffect, useState } from "react";
import NumberInput from "../Inputs/NumberInput";
import MatrixEntry from "../Inputs/MatrixEntry";
import Container from "../Container";
import Title from "../Title";
import "katex/dist/katex.min.css";
import Matrix_Decomposition from "../api/Matrix_Decomposition";
import { CircularProgress } from "@mui/material";

const Description = `

\\textit{QR Decomposition :} \\\\

   A = QR \\\\
   \\textit{\\textbf{where} :}\\\\
    A \\textit{: m × n matrix } .\\\\
    Q \\textit{: m × m orthogonal matrix.}\\\\
    R \\textit{: m × n upper triangular matrix.}\\\\

A = \\begin{bmatrix} \\mathbf{q_1} & \\mathbf{q_2} & \\dots & \\mathbf{q_m} \\end{bmatrix}
\\begin{bmatrix} r_{11} & r_{12} & \\dots & r_{1n} \\\\ 0 & r_{22} & \\dots & r_{2n} 
\\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\dots & r_{mn} \\end{bmatrix}
\\\\
\\textit{\\textbf{Calculat}} \\; Q  :\\\\
\\textit{for calculate this matrix we use Gram-Schmidt methode :}
\\\\
\\textit{\\textbf{Gram :}\\\\}\\\\
\\mathbf{v}_1 = \\mathbf{u}_1
\\\\
\\mathbf{v}_i = \\mathbf{u}_i - \\sum_{j=1}^{i-1} \\text{proj}_{\\mathbf{v}_j}(\\mathbf{u}_i)
\\\\
\\textit{to Calculate R}\\\\
\\textit{We have :}
    A = Q R \\\\
    Q^T A =Q^T Q R
    \\\\
R = Q^T A
`;

const QR_Decomposition = () => {
  const [sizeX, setSizeX] = useState(2);
  const [sizeY, setSizeY] = useState(2);
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
    Matrix_Decomposition.QR_Decomposition({ matrix1 })
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
      <Container title={"Function Description"} mathcontent={Description} />

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

export default QR_Decomposition;
