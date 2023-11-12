import React, { useState, useEffect } from "react";
import DropDownMenu from "../sellami_components/Inputs/DropDownMenu";
import AddMatrices from "../sellami_components/Task/AddMatrices";
import DivScalarMatrix from "../sellami_components/Task/DivScalarMatrix";
import Dot_Product from "../sellami_components/Task/Dot_Product";
import Euclidean_Norm from "../sellami_components/Task/Euclidean_Norm";
import Inifinity_norm from "../sellami_components/Task/inifinity_norm";
import One_norm from "../sellami_components/Task/one_norm";
import Manhattan_Norm from "../sellami_components/Task/Manhattan_Norm";
import Euclidean_VNorm from "../sellami_components/Task/Euclidean_VNorm";
import Inifinity_VNorm from "../sellami_components/Task/Inifinity_VNorm";
import Lp_Norm from "../sellami_components/Task/Lp_Norm";
import Manhattan_Distance from "../sellami_components/Task/Manhattan_Distance";
import Euclidean_Distance from "../sellami_components/Task/Euclidean_Distance";
import Infinity_Distance from "../sellami_components/Task/Infinity_Distance";
import Manhattan_VDistance from "../sellami_components/Task/Manhattan_VDistance";
import Euclidean_VDistance from "../sellami_components/Task/Euclidean_VDistance";
import Infinity_VDistance from "../sellami_components/Task/Infinity_VDistance";
import Transpose from "../sellami_components/Task/Transpose";
import Inverse_matrix from "../sellami_components/Task/Inverse_matrix";
import Trace from "../sellami_components/Task/Trace";
import Determinant from "../sellami_components/Task/Determinant";
import Eigen_Decomposition from "../sellami_components/Task/Eigen_Decomposition";
import LU from "../sellami_components/Task/LU";
import Cholosky_Decomposition from "../sellami_components/Task/Cholosky_Decomposition";
import QR_Decomposition from "../sellami_components/Task/QR_Decomposition";
import SVD from "../sellami_components/Task/SVD";
import Gradient_Linear_Regression from "../sellami_components/Task/Gradient_Linear_Regression";
import MulMatrcies from "../sellami_components/Task/MulMatrcies";
import MulScalarMatrix from "../sellami_components/Task/MulScalarMatrix";
import SubMatrcies from "../sellami_components/Task/SubMatrcies";
import Gaussian_Elm from "../sellami_components/Task/Gaussian_Elm";
import Basis from "../sellami_components/Task/Basis";
import Gram_Shmidt from "../sellami_components/Task/Gram_Shmidt";
import Kernel from "../sellami_components/Task/Kernel";
import Rank from "../sellami_components/Task/Rank";
import Particular_Solution from "../sellami_components/Task/Particular_Solution";
import General_solution from "../sellami_components/Task/General_solution";
import LU_Solv from "../sellami_components/Task/LU_Solv";
import Eigenvalues_and_Eigenvectors from "../sellami_components/Task/Eigenvalues_and_Eigenvectors";
import Diagonizable from "../sellami_components/Task/diagonizable";
import Convexity from "../sellami_components/Task/Convexity";
import Invertibility from "../sellami_components/Task/Invertibility";
import Orthogonality from "../sellami_components/Task/Orthogonality";
import Independency from "../sellami_components/Task/Independency";
import Angle from "../sellami_components/Task/Angle";
import Projection from "../sellami_components/Task/Projection";
import Affine_Projection from "../sellami_components/Task/Affine_Projection";
import Gradient_Descent from "../sellami_components/Task/Gradient_Descent";
import Steepest_Gradient_Descent from "../sellami_components/Task/Steepest_Gradient_Descent";
import Conjugate_Gradient_Descent from "../sellami_components/Task/Conjugate_Gradient_Descent";
import "../sellami_components/Css/calcstyle.css";
import "../sellami_components/Css/Components.css";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { Grid3x3Gap } from "react-bootstrap-icons";
import IconButton from "@mui/material/IconButton";
import PanoramaFishEyeOutlinedIcon from "@mui/icons-material/PanoramaFishEyeOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Matrix_img from "../Images/MATRIX-logo-bg1.png";
import Vector_img from "../Images/3D_Vector.svg.png";
import Geometrique_img from "../Images/analytical-geometry.png";
import Optimization_img from "../Images/convex_cost_function.jpg";
import { ArrowLeftCircle } from "react-bootstrap-icons";
import SelectiveCard from "../Components/SelectiveCard";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FMO from "../Images/Fundamental Matrix Operations.png";
import LGA from "../Images/Linear Algebra Applications.png";
import MTO from "../Images/Matrix Properties and Transformations.png";
import VTO from "../Images/Vector Operations and Geometry.png";

import Basic_Arithmetic from "../Images/Basic Arithmetic.png";
import EAG_IMG from "../Images/Eigenvalues and Eigenvectors.png";
import Linear_Systems from "../Images/Linear Systems.png";
import Matrix_Decompositions from "../Images/Matrix Decompositions.png";
import Matrix_Distance from "../Images/Matrix Distance.png";
import Matrix_Norms from "../Images/Matrix Norms.png";
import Matrix_Properties from "../Images/Matrix Properties.png";
import Optimization from "../Images/Optimization.png";
import Vector_Distances from "../Images/Vector Distances.png";
import Vector_Norms from "../Images/Vector Norms.png";
import Vector_Operations_and_Relationships from "../Images/Vector Operations and Relationships.png";

import AddMatrices_IMG from "../Images/AddMatrices.png";
import Dot_Product_IMG from "../Images/Dot_Product.png";
import one_norm_IMG from "../Images/one_norm.png";
import Euclidean_Norm_IMG from "../Images/Euclidean_Norm.png";
import Inifinity_norm_IMG from "../Images/Inifinity_norm.png";
import Manhattan_Norm_IMG from "../Images/Manhattan_Norm.png";
import Euclidean_VNorm_IMG from "../Images/Euclidean_VNorm.png";
import Inifinity_VNorm_IMG from "../Images/Inifinity_VNorm.png";
import Lp_Norm_IMG from "../Images/Lp_Norm.png";
import Manhattan_Distance_IMG from "../Images/Manhattan_Distance.png";
import Euclidean_Distance_IMG from "../Images/Euclidean_Distance.png";
import Infinity_Distance_IMG from "../Images/Infinity_Distance.png";
import Manhattan_VDistance_IMG from "../Images/Manhattan_VDistance.png";
import Euclidean_VDistance_IMG from "../Images/Euclidean_VDistance.png";
import Infinity_VDistance_IMG from "../Images/Infinity_VDistance.png";
import Transpose_IMG from "../Images/Transpose.png";
import Inverse_matrix_IMG from "../Images/Inverse.png";
import Trace_IMG from "../Images/Trace.png";
import Determinant_IMG from "../Images/Determinant.png";
import Gaussian_Elm_IMG from "../Images/Gaussian_Elm.png";
import Basis_IMG from "../Images/Basis.png";
import Kernel_IMG from "../Images/Kernel.png";
import Rank_IMG from "../Images/Rank.png";
import Gram_Shmidt_IMG from "../Images/Gram_Shmidt.png";
import Particular_Solution_IMG from "../Images/Particular_Solution.png";
import General_solution_IMG from "../Images/General_solution.png";
import LU_Solv_IMG from "../Images/LU_Solv.png";
import Eigenvalues_and_Eigenvectors_IMG from "../Images/Eigenvalues_and_Eigenvectors.png";
import Diagonizable_IMG from "../Images/Diagonizable.png";
import Convexity_IMG from "../Images/Convexity.png";
import Invertibility_IMG from "../Images/Invertibility.png";
import Orthogonality_IMG from "../Images/Orthogonality.png";
import Independency_IMG from "../Images/Independency.png";
import Angle_IMG from "../Images/Angle.png";
import Projection_IMG from "../Images/Projection.png";
import Affine_Projection_IMG from "../Images/Affine_Projection.png";
import Gradient_Descent_IMG from "../Images/Gradient_Descent.png";
import Steepest_Gradient_Descent_IMG from "../Images/Steepest_Gradient_Descent.png";
import Conjugate_Gradient_Descent_IMG from "../Images/Conjugate_Gradient_Descent.png";
import Eigen_Decomposition_IMG from "../Images/Eigen_Decomposition.png";
import LU_IMG from "../Images/LU.png";
import SVD_IMG from "../Images/SVD.png";
import Cholosky_Decomposition_IMG from "../Images/Cholosky_Decomposition.png";
import QR_Decomposition_IMG from "../Images/QR_Decomposition.png";
import Gradient_Linear_Regression_IMG from "../Images/Gradient_Linear_Regression.png";
import MulMatrcies_IMG from "../Images/MulMatrcies.png";
import MulScalarMatrix_IMG from "../Images/MulScalarMatrix.png";

const TitleList = {
  AddMatrices: "Matrix Addition",
  DivScalarMatrix: "Divide by Scalar",
  Dot_Product: "Dot Product",
  one_norm: "Matrix 1rst Norm",
  Euclidean_Norm: "Matrix Euclidean Norm",
  Inifinity_norm: "Matrix Infinity Norm",
  Manhattan_Norm: "Vector Manhattan Norm",
  Euclidean_VNorm: "Vector Euclidean Norm",
  Inifinity_VNorm: "Vector Inifinity Norm",
  Lp_Norm: "Vector Lp Norm",
  Manhattan_Distance: "Matrix Manhattan Distance",
  Euclidean_Distance: "Matrix Euclidean Distance",
  Infinity_Distance: "Matrix Infinity Distance",
  Manhattan_VDistance: "Vector Manhattan Distance",
  Euclidean_VDistance: "Vector Euclidean Distance",
  Infinity_VDistance: "Vector Infinity VDistance",
  Transpose: "Matrix Transpose",
  Inverse_matrix: "Matrix Inverse",
  Trace: "Trace",
  Determinant: "Determinant",
  Gaussian_Elm: "Gaussian Elimination",
  Basis: "Basis Extraction",
  Kernel: "Matrix Kernel",
  Rank: "Rank",
  Gram_Shmidt: "Gram Shmidt",
  Particular_Solution: "Particular Solution of Ax=b",
  General_solution: "General solution of Ax=b",
  LU_Solv: "LU Decomposition for Solving a Linear equation",
  Eigenvalues_and_Eigenvectors: "Eigenvalues and Eigenvectors",
  Diagonizable: "Diagonizability Cecking",
  Convexity: "Convexity Checking",
  Invertibility: "Invertibility Checking",
  Orthogonality: "Checking Orthogonality for a Subspace",
  Independency: "Checking Independency for a Subspace",
  Angle: "Angle between vectors",
  Projection: "Orthogonal Projection",
  Affine_Projection: "Orthogonal Projection onto an Affine subspace",
  Gradient_Descent: "Gradient Descent for quadratic functions",
  Steepest_Gradient_Descent: "Steepest Gradient Descent",
  Conjugate_Gradient_Descent: "Conjugate Gradient Descent",
  Eigen_Decomposition: "Eigen Decomposition",
  LU: "LU Decomposition",
  SVD: "Singular Values Decomposition",
  Cholosky_Decomposition: "Cholosky Decomposition",
  QR_Decomposition: "QR Decomposition",
  Gradient_Linear_Regression:
    "Univariante Linear Regression using Gradient Descent ",
  MulMatrcies: "Hadamard Product",
  MulScalarMatrix: "Scalar Multiplication",
  SubMatrcies: "Subtract two matrcies",
};

function CalcPage() {
  const navigate = useNavigate();
  const loc = useLocation();
  const { state } = useLocation();
  const { func } = useParams();
  const Pages = {
    "": React.Fragment,
    AddMatrices: AddMatrices,
    DivScalarMatrix: DivScalarMatrix,
    Dot_Product: Dot_Product,
    one_norm: One_norm,
    Euclidean_Norm: Euclidean_Norm,
    Inifinity_norm: Inifinity_norm,
    Manhattan_Norm: Manhattan_Norm,
    Euclidean_VNorm: Euclidean_VNorm,
    Inifinity_VNorm: Inifinity_VNorm,
    Lp_Norm: Lp_Norm,
    Manhattan_Distance: Manhattan_Distance,
    Euclidean_Distance: Euclidean_Distance,
    Infinity_Distance: Infinity_Distance,
    Manhattan_VDistance: Manhattan_VDistance,
    Euclidean_VDistance: Euclidean_VDistance,
    Infinity_VDistance: Infinity_VDistance,
    Transpose: Transpose,
    Inverse_matrix: Inverse_matrix,
    Trace: Trace,
    Determinant: Determinant,
    Gaussian_Elm: Gaussian_Elm,
    Basis: Basis,
    Kernel: Kernel,
    Rank: Rank,
    Angle: Angle,
    Projection: Projection,
    Affine_Projection: Affine_Projection,
    Gram_Shmidt: Gram_Shmidt,
    Particular_Solution: Particular_Solution,
    General_solution: General_solution,
    LU_Solv: LU_Solv,
    Gradient_Descent: Gradient_Descent,
    Steepest_Gradient_Descent: Steepest_Gradient_Descent,
    Conjugate_Gradient_Descent: Conjugate_Gradient_Descent,
    Diagonizable: Diagonizable,
    Convexity: Convexity,
    Invertibility: Invertibility,
    Orthogonality: Orthogonality,
    Independency: Independency,
    Eigenvalues_and_Eigenvectors: Eigenvalues_and_Eigenvectors,
    Eigen_Decomposition: Eigen_Decomposition,
    LU: LU,
    SVD: SVD,
    Cholosky_Decomposition: Cholosky_Decomposition,
    QR_Decomposition: QR_Decomposition,
    Gradient_Linear_Regression: Gradient_Linear_Regression,
    MulMatrcies: MulMatrcies,
    MulScalarMatrix: MulScalarMatrix,
    SubMatrcies: SubMatrcies,
  };
  useEffect(() => {
    if (state != null) {
      setFunctionSelectedMAIN(state.Findex);
      setSubFunctionSelectedMAIN(state.Sindex);

      setFunctionSelected(state.Findex == -1 ? state.Findex : 0);
      setSubFunctionSelected(state.Sindex == -1 ? state.Sindex : 0);

      navigate(loc.pathname, { replace: true });
    }
    if (func != null) {
      for (let i = 0; i < SubSubFunctions.length; i++) {
        for (let j = 0; j < SubSubFunctions[i].length; j++) {
          for (let k = 0; k < SubSubFunctions[i][j].length; k++) {
            if (SubSubFunctions[i][j][k]["title"] == func) {
              setFF(i);
              setSSF(j);
              setSubSubFunctionSelected(k);
              return;
            }
          }
        }
      }
    }
  });
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handle_page = (func) => {
    if (func in Pages) {
      const Comp = Pages[func];

      return <Comp />;
    } else {
      return Pages[""];
    }
  };
  const select_func = (func) => {
    if (func == null) {
      return func;
    }
    if (func in Pages) {
      return func;
    } else {
      return null;
    }
  };

  const [FunctionSelected, setFunctionSelected] = useState(
    state ? state.Findex : 0
  );
  const [SubFunctionSelected, setSubFunctionSelected] = useState(
    state ? state.Sindex : 0
  );
  const [SubSubFunctionSelected, setSubSubFunctionSelected] = useState(
    state ? state.SSindex : -1
  );

  const [FunctionSelectedMAIN, setFunctionSelectedMAIN] = useState(
    state ? state.Findex : -1
  );
  const [SubFunctionSelectedMAIN, setSubFunctionSelectedMAIN] = useState(
    state ? state.Sindex : -1
  );

  const [FF, setFF] = useState(-1);
  const [SSF, setSSF] = useState(-1);

  const MainFunctions = [
    {
      title: "Fundamental Matrix Operations",
      description:
        "This group covers basic operations on matrices, including addition, subtraction, multiplication, scalar multiplication, and the dot product. These operations form the foundation for more advanced matrix manipulations",
      img: FMO,
    },
    {
      title: "Matrix Properties and Transformations",
      description:
        "This group deals with various properties and transformations of matrices, such as the inverse, trace, determinant, orthogonality, and rank. These properties provide insights into the structure and behavior of matrices.",
      img: MTO,
    },
    {
      title: "Vector Operations and Geometry",
      description:
        "This group focuses on operations and relationships involving vectors, including norms, distances, angles, independence, convexity, orthogonality, and projection. These concepts are crucial for understanding vector spaces and their geometric applications.",
      img: VTO,
    },
    {
      title: "Linear Algebra Applications",
      description:
        "This group explores various applications of linear algebra in solving linear systems, finding eigenvalues and eigenvectors, optimization problems, and other areas. These applications demonstrate the power and versatility of linear algebra in various fields.",
      img: LGA,
    },
  ];
  const SubFunctions = [
    [
      {
        title: "Basic Arithmetic",
        description:
          "Basic arithmetic in linear algebra encompasses fundamental operations on matrices and vectors. These operations lay the foundation for more advanced manipulations and transformations in linear algebra.",
        img: Basic_Arithmetic,
      },
    ],
    [
      {
        title: "Matrix Distances",
        description:
          "Matrix distances quantify the separation between two matrices, analogous to how vector distances measure the separation between two vectors. These distances provide a way to compare and assess the similarity between matrices. Several matrix distance metrics exist, each with its own properties and applications.",
        img: Matrix_Distance,
      },
      {
        title: "Matrix Norms",
        description:
          'Matrix norms, similar to vector norms, provide a way to measure the magnitude or size of a matrix. They quantify the "bigness" or "smallness" of a matrix, giving an indication of its overall scale or influence. ',
        img: Matrix_Norms,
      },
      {
        title: "Matrix Properties",
        description:
          "are inherent characteristics of matrices that describe their structure, behavior, and relationships. These properties provide insights into the nature of matrices and their applications in various fields.",
        img: Matrix_Properties,
      },
      {
        title: "Matrix Decompositions",
        description:
          "are factorization techniques that break down a matrix into simpler or more structured matrices. These decompositions provide insights into the matrix's structure, properties, and relationships, enabling efficient computations and solving various problems.",
        img: Matrix_Decompositions,
      },
    ],
    [
      {
        title: "Vector Norms",
        description:
          "Vector norms measure the magnitude or size of a vector. Different norm types exist, including the Euclidean norm, infinity norm, and Manhattan norm, each with its own properties and applications.",
        img: Vector_Norms,
      },
      {
        title: "Vector Distances",
        description:
          " Vector distances quantify the separation between two vectors. Different distance metrics exist, such as Euclidean distance, infinity distance, and Manhattan distance, each with its own interpretation and applications.",
        img: Vector_Distances,
      },
      {
        title: "Vector Operations and Relationships",
        description:
          "are fundamental concepts in linear algebra that deal with manipulating and analyzing vectors, which are mathematical objects representing quantities with both magnitude and direction. These operations and relationships provide a framework for understanding the properties, behavior, and interactions of vectors in various contexts.",
        img: Vector_Operations_and_Relationships,
      },
    ],
    [
      {
        title: "Solving Linear Systems",
        description:
          "Linear algebra techniques provide powerful tools for solving systems of linear equations, finding general or particular solutions that represent the set of values that satisfy the given equations.",
        img: Linear_Systems,
      },
      {
        title: "Eigenvalues and Eigenvectors",
        description:
          "are fundamental concepts in linear algebra that provide insights into the behavior and properties of linear transformations. Eigenvalues are scalar values associated with a linear transformation, while eigenvectors are non-zero vectors that are transformed by the linear transformation in a special way.",
        img: EAG_IMG,
      },
      {
        title: "Optimization",
        description:
          "is a fundamental concept in mathematics and engineering that deals with finding the best or most effective solution to a problem, often involving minimizing a function or maximizing a certain objective. Optimization techniques are widely used in various fields.",
        img: Optimization,
      },
    ],
  ];
  const SubSubFunctions = [
    [
      [
        {
          title: "AddMatrices",
          description:
            "This function adds two matrices together. The matrices must have the same dimensions in order to be added. The addition of matrices is commutative, meaning that the order in which the matrices are added does not affect the result.",
          img: AddMatrices_IMG,
        },
        {
          title: "Dot_Product",
          description:
            "This function computes the dot product of two vectors. The dot product of two vectors is a scalar that measures the similarity between the vectors. The dot product is commutative, meaning that the order in which the vectors are multiplied does not affect the result.",
          img: Dot_Product_IMG,
        },
        {
          title: "MulMatrcies",
          description:
            "This function performs element-wise multiplication of two matrices. The matrices must have the same dimensions in order to be multiplied in this way. The element-wise multiplication of matrices is distributive over addition, meaning that multiplying the sum of two matrices by a matrix is the same as multiplying each matrix by the matrix and then adding the results.",
          img: MulMatrcies_IMG,
        },
        {
          title: "MulScalarMatrix",
          description:
            "This function multiplies each element of a matrix by a scalar. The scalar can be any real number. The multiplication of a matrix by a scalar is distributive over addition, meaning that multiplying the sum of two matrices by a scalar is the same as multiplying each matrix by the scalar and then adding the results.",
          img: MulScalarMatrix_IMG,
        },
      ],
    ],
    [
      [
        {
          title: "Manhattan_Distance",
          description:
            "The Manhattan matrix distance, also known as the taxicab norm or the L1 norm, measures the sum of the absolute differences between corresponding elements of two matrices. It represents the total entry-wise deviation between the two matrices.",
          img: Manhattan_Distance_IMG,
        },
        {
          title: "Euclidean_Distance",
          description:
            "The Euclidean matrix distance, also known as the Frobenius norm, is the most commonly used matrix distance metric. It is the natural extension of the Euclidean distance for vectors to matrices. It measures the difference between corresponding elements of two matrices, taking into account all elements",
          img: Euclidean_Distance_IMG,
        },
        {
          title: "Infinity_Distance",
          description:
            "The infinity matrix distance, also known as the sup norm, measures the maximum absolute difference between corresponding elements of two matrices. It represents the largest entry-wise difference between the two matrices.",
          img: Infinity_Distance_IMG,
        },
      ],
      [
        {
          title: "one_norm",
          description:
            "The Manhattan matrix norm, also known as the taxicab norm or the L1 norm, measures the sum of the absolute values of all the elements in the matrix. It represents the total magnitude of all the elements in the matrix.",
          img: one_norm_IMG,
        },
        {
          title: "Euclidean_Norm",
          description:
            "The Euclidean matrix norm, also known as the Frobenius norm, is the most common matrix norm. It is the square root of the sum of the squares of all the elements in the matrix. It represents the size of the matrix in its Euclidean space.",
          img: Euclidean_Norm_IMG,
        },
        {
          title: "Inifinity_norm",
          description:
            "The infinity matrix norm, also known as the sup norm, measures the largest absolute value of any element in the matrix. It represents the maximum magnitude of any element in the matrix.",
          img: Inifinity_norm_IMG,
        },
      ],
      [
        {
          title: "Transpose",
          description:
            "The transpose of a matrix is created by swapping its rows and columns. Transposition has various applications in linear algebra, including matrix multiplication and solving systems of equations.",
          img: Transpose_IMG,
        },
        {
          title: "Inverse_matrix",
          description:
            "A non-singular matrix has an inverse matrix, which, when multiplied by the original matrix, produces the identity matrix. Invertible matrices play a crucial role in solving systems of linear equations.",
          img: Inverse_matrix_IMG,
        },
        {
          title: "Trace",
          description:
            "The trace of a square matrix is the sum of its diagonal elements. It provides insights into the matrix's structure and behavior, such as its stability and relationships to eigenvalues.",
          img: Trace_IMG,
        },
        {
          title: "Determinant",
          description:
            "The determinant of a square matrix is a scalar value that determines its volume, invertibility, and other properties. It has wide applications in various mathematical and computational contexts.",
          img: Determinant_IMG,
        },
        {
          title: "Rank",
          description:
            "The rank of a matrix is the number of linearly independent rows or columns it possesses. It indicates the matrix's dimensionality and its ability to represent linear relationships.",
          img: Rank_IMG,
        },
        {
          title: "Orthogonality",
          description:
            "Orthogonal matrices have perpendicular columns or rows, resulting in certain algebraic properties and applications in geometry and signal processing.",
          img: Orthogonality_IMG,
        },
        {
          title: "Invertibility",
          description:
            "A matrix is invertible if it has an inverse matrix, which, when multiplied by the original matrix, produces the identity matrix. Invertible matrices are crucial for solving systems of linear equations, performing matrix transformations, and analyzing linear systems.",
          img: Invertibility_IMG,
        },
        {
          title: "Gram_Shmidt",
          description:
            "Gram-Schmidt orthogonalization is an algorithm that constructs an orthonormal basis for a subspace. An orthonormal basis is a set of vectors that are mutually orthogonal (perpendicular) and have unit magnitude. This algorithm is widely used to find sets of vectors that are linearly independent and form a basis for a given subspace.",
          img: Gram_Shmidt_IMG,
        },
      ],
      [
        {
          title: "Basis",
          description:
            "A basis for a vector space is a set of linearly independent vectors that span the entire space. This means that any vector in the space can be expressed as a linear combination of the vectors in the basis.",
          img: Basis_IMG,
        },
        {
          title: "Gaussian_Elm",
          description:
            "Gaussian elimination is a fundamental algorithm in linear algebra that is widely used for solving systems of linear equations and performing matrix operations. The algorithm works by systematically reducing a matrix to its row echelon form, which is a triangular matrix with zeros below the diagonal.",
          img: Gaussian_Elm_IMG,
        },
        {
          title: "LU",
          description:
            "LU decomposition factors a square matrix into a lower triangular matrix (L) and an upper triangular matrix (U). This decomposition is widely used for solving systems of linear equations and Gaussian elimination.",
          img: LU_IMG,
        },
        {
          title: "SVD",
          description:
            "SVD factorizes a rectangular matrix into three matrices: an orthogonal matrix (U), a diagonal matrix (Σ), and the transpose of another orthogonal matrix (V). SVD is powerful for data analysis, signal processing, and image compression.",
          img: SVD_IMG,
        },
        {
          title: "QR_Decomposition",
          description:
            "QR decomposition factors a rectangular matrix into an orthogonal matrix (Q) and an upper triangular matrix (R). This decomposition is useful for solving least squares problems and analyzing data matrices.",
          img: QR_Decomposition_IMG,
        },
        {
          title: "Cholosky_Decomposition",
          description:
            "Cholesky decomposition factors a symmetric positive definite matrix into a lower triangular matrix with positive diagonal elements. This decomposition is efficient for solving systems of linear equations involving symmetric positive definite matrices.",
          img: Cholosky_Decomposition_IMG,
        },
        {
          title: "Kernel",
          description:
            'also known as the null space, is a fundamental concept in linear algebra that represents the set of all vectors that, when multiplied by a specific matrix, result in the zero vector. In simpler terms, it is the collection of vectors that get "mapped to zero" by the matrix transformation. The matrix kernel is denoted by Null(A) for a matrix A.',
          img: Kernel_IMG,
        },
      ],
    ],
    [
      [
        {
          title: "Manhattan_Norm",
          description:
            "The Manhattan norm, also known as the L1 norm or the taxicab norm, measures the sum of the absolute values of all the elements in the vector. It represents the total magnitude of all the elements in the vector.",
          img: Manhattan_Norm_IMG,
        },
        {
          title: "Euclidean_VNorm",
          description:
            "The Euclidean norm, also known as the L2 norm, is the most commonly used vector norm. It is the natural extension of the Euclidean distance for vectors. The Euclidean norm measures the square root of the sum of the squares of all the elements in the vector. It represents the size of the vector in its Euclidean space.",
          img: Euclidean_VNorm_IMG,
        },
        {
          title: "Inifinity_VNorm",
          description:
            "The infinity norm measures the largest absolute value of any element in the vector. It represents the maximum magnitude of any element in the vector.",
          img: Inifinity_VNorm_IMG,
        },
        {
          title: "Lp_Norm",
          description:
            " also known as the Minkowski norm, is a generalization of the Euclidean norm (L2 norm) to higher dimensions. It is a measure of the magnitude or size of a vector in a p-dimensional space.",
          img: Lp_Norm_IMG,
        },
      ],
      [
        {
          title: "Manhattan_VDistance",
          description:
            "The Manhattan distance, also known as the L1 distance or taxicab norm, measures the sum of the absolute values of the differences between corresponding elements of two vectors. It represents the total distance traveled if one were to move between two points along a grid pattern.",
          img: Manhattan_VDistance_IMG,
        },
        {
          title: "Euclidean_VDistance",
          description:
            "The Euclidean distance, also known as the L2 distance, is the most commonly used vector distance metric. It is a generalization of the Pythagorean theorem to higher dimensions and represents the straight-line distance between two points in Euclidean space.",
          img: Euclidean_VDistance_IMG,
        },
        {
          title: "Infinity_VDistance",
          description:
            "also known as the L∞ norm or supremum norm, is a mathematical measure that quantifies the separation or separation between two vectors in a vector space. It is a generalization of the maximum norm to higher dimensions and represents the largest absolute value of the differences between corresponding elements of two vectors.",
          img: Infinity_VDistance_IMG,
        },
      ],
      [
        {
          title: "Angle",
          description:
            'The angle between two vectors in a vector space represents the measure of the "turn" between their directions. It quantifies the relative orientation of the vectors and provides insights into their alignment or opposition.',
          img: Angle_IMG,
        },
        {
          title: "Independency",
          description:
            "Linear independence is a fundamental concept in linear algebra that describes the relationship between vectors in a vector space. A set of vectors is linearly independent if no vector in the set can be expressed as a linear combination of the other vectors.",
          img: Independency_IMG,
        },
        {
          title: "Convexity",
          description:
            "Convexity is a geometrical property that describes the shape of sets in a vector space. A set is convex if any line segment connecting two points within the set lies entirely within the set.",
          img: Convexity_IMG,
        },
        {
          title: "Dot_Product",
          description:
            "This function computes the dot product of two vectors. The dot product of two vectors is a scalar that measures the similarity between the vectors. The dot product is commutative, meaning that the order in which the vectors are multiplied does not affect the result.",
          img: Dot_Product_IMG,
        },
        {
          title: "Orthogonality",
          description:
            "Orthogonal matrices have perpendicular columns or rows, resulting in certain algebraic properties and applications in geometry and signal processing.",
          img: Orthogonality_IMG,
        },
        {
          title: "Gram_Shmidt",
          description:
            "Gram-Schmidt orthogonalization is an algorithm that constructs an orthonormal basis for a subspace. An orthonormal basis is a set of vectors that are mutually orthogonal (perpendicular) and have unit magnitude. This algorithm is widely used to find sets of vectors that are linearly independent and form a basis for a given subspace.",
          img: Gram_Shmidt_IMG,
        },
        {
          title: "Projection",
          description:
            "Projection is a geometrical operation that involves finding the shortest distance between a point and a line or plane. It is a fundamental concept in linear algebra that has various applications in geometry, physics, and engineering.",
          img: Projection_IMG,
        },
        {
          title: "Affine_Projection",
          description:
            "Affine projection is a generalization of projection that involves finding the shortest distance between a point and an affine subspace. It is a more general concept than projection onto a line or plane and has applications in various fields.",
          img: Affine_Projection_IMG,
        },
      ],
    ],
    [
      [
        {
          title: "Particular_Solution",
          description:
            "In linear algebra, a particular solution to a system of linear equations is a solution that satisfies the equations but may not be the only solution. A system of linear equations can have multiple particular solutions, one for each free variable in the system. The general solution to a system of linear equations is the set of all possible solutions, which can be expressed as a linear combination of the particular solutions.",
          img: Particular_Solution_IMG,
        },
        {
          title: "General_solution",
          description:
            "The general solution to a system of linear equations is the set of all possible solutions to the system. It is typically expressed as a linear combination of the basic solutions, which are the non-zero solutions that cannot be expressed as a linear combination of the other solutions. The general solution can be written in a variety of forms, such as a system of equations, a matrix equation, or a parametric equation.",
          img: General_solution_IMG,
        },
        {
          title: "LU_Solv",
          description:
            "is a numerical algorithm for solving systems of linear equations that involves factoring the coefficient matrix into an LU decomposition. The LU decomposition is a factorization of a matrix A into the product of two matrices, L and U, where L is a lower triangular matrix and U is an upper triangular matrix with ones on its diagonal. The LU_Solv algorithm uses this factorization to efficiently solve for the solution vector x to the system Ax = b.",
          img: LU_Solv_IMG,
        },
      ],
      [
        {
          title: "Diagonizable",
          description:
            "A matrix A is said to be diagonalizable if there exists a non-singular matrix P such that PAP^-1 is a diagonal matrix. In other words, a diagonalizable matrix can be transformed into a diagonal matrix by a similarity transformation. The diagonal elements of the diagonal matrix are the eigenvalues of the original matrix A.",
          img: Diagonizable_IMG,
        },
        {
          title: "Eigenvalues_and_Eigenvectors",
          description:
            "Eigenvalues and eigenvectors are fundamental concepts in linear algebra that describe the behavior of linear transformations. An eigenvalue of a matrix A is a scalar λ such that there exists a non-zero vector v that satisfies the equation Av = λv. The vector v is called an eigenvector of A corresponding to the eigenvalue λ. Eigenvalues and eigenvectors have a wide range of applications in various fields, including physics, engineering, and computer science.",
          img: Eigenvalues_and_Eigenvectors_IMG,
        },
      ],
      [
        {
          title: "Gradient_Descent",
          description:
            "Gradient descent is a general optimization algorithm for finding the minimum of a function. It works by iteratively moving in the direction of the negative gradient of the function, which is the direction of steepest descent. The algorithm stops when it reaches a minimum or reaches a predefined stopping criterion.",
          img: Gradient_Descent_IMG,
        },
        {
          title: "Conjugate_Gradient_Descent",
          description:
            "Conjugate gradient descent is an iterative optimization algorithm for solving a system of linear equations or minimizing a quadratic function. It is a more efficient variant of the gradient descent algorithm, which can converge to the optimal solution in a finite number of steps for certain types of problems.",
          img: Conjugate_Gradient_Descent_IMG,
        },
        {
          title: "Steepest_Gradient_Descent",
          description:
            "Steepest gradient descent is a specific implementation of the gradient descent algorithm that moves in the direction of the negative gradient of the function at each iteration. It is a simple and efficient algorithm but may not converge to the optimal solution for certain types of problems.",
          img: Steepest_Gradient_Descent_IMG,
        },
        {
          title: "Gradient_Linear_Regression",
          description:
            "Gradient linear regression is a statistical method for fitting a linear model to data by minimizing the sum of the squared residuals. It is a common technique for solving linear regression problems and is widely used in various fields, including machine learning, economics, and finance.",
          img: Gradient_Linear_Regression_IMG,
        },
      ],
    ],
  ];
  const [Opened, setOpened] = useState(true);
  return (
    <div>
      <IconButton
        className={"TopDownButton " + (offset <= 50 ? "Frezed" : "")+
        (Opened ? " Opened" : "")}
        onClick={() => {
          setOpened(!Opened);
        }}
      >
        {/* <PanoramaFishEyeOutlinedIcon sx={{ fontSize: 40 }} /> */}
        <MenuRoundedIcon />
      </IconButton>
      <div
        className={
          "TopDownPanel " +
          (offset <= 50 ? "Frezed " : "") +
          (Opened ? " Opened" : "")
        }
      >
        <Box sx={{ backgroundColor: "white" }}>
          <div className="d-flex flex-row " style={{ gap: 0 }}>
            <div className=" w-25 p-4" style={{ backgroundColor: "#116a7b" }}>
              <span style={{ color: "#83c5be" }}>Main Problems</span>

              <div
                className=" d-flex flex-column justify-content-center "
                style={{ gap: 15, marginTop: 20 }}
              >
                {MainFunctions.map((e, i) => {
                  return (
                    <div className="d-flex flex-row " style={{ gap: 10 }}>
                      <h6
                        className={
                          FunctionSelected == i ? "funcActive func " : "func"
                        }
                        onClick={() => {
                          setFunctionSelected(i);
                          setSubFunctionSelected(0);
                        }}
                      >
                        {" "}
                        {e["title"]}
                      </h6>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex-fill p-4">
              Sub Groupment Problems
              <div
                className="d-flex flex-column flex-wrap "
                style={{
                  gap: 15,
                  marginTop: 20,
                  height: "30vh",
                  backgroundColor: "white",
                }}
              >
                {SubFunctions[FunctionSelected].map((e, i) => {
                  return (
                    <h6
                      className={
                        SubFunctionSelected == i
                          ? "subfuncActive subfunc "
                          : "subfunc"
                      }
                      onClick={() => {
                        setSubFunctionSelected(i);
                      }}
                    >
                      {" "}
                      {e["title"]}
                    </h6>
                  );
                })}
              </div>
            </div>
            <div
              className="p-4 "
              style={{ backgroundColor: "#edf2f4", width: "40%" }}
            >
              Problems
              <div
                className="d-flex flex-column flex-wrap"
                style={{ gap: 15, marginTop: 20, height: "30vh" }}
              >
                {SubSubFunctions[FunctionSelected][SubFunctionSelected].map(
                  (e, i) => {
                    return (
                      <Link
                        to={"/Calculator/" + e["title"]}
                        state={{
                          Findex: FunctionSelected,
                          Sindex: SubFunctionSelected,
                          SSindex: i,
                        }}
                      >
                        <h6
                          className={
                            SubSubFunctionSelected == i
                              ? "subsubfuncActive subsubfunc "
                              : "subsubfunc"
                          }
                          onClick={() => {
                            setSubSubFunctionSelected(i);
                          }}
                        >
                          {" "}
                          {TitleList[e["title"]]}
                        </h6>
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </Box>
      </div>

      {func != null ? (
        <div
          className="container content text-center"
          style={{ paddingTop: "2.5vh" }}
        >
          {FF == -1 ? (
            <></>
          ) : (
            <div
              className="d-flex flex-row align-items-center flex-wrap "
              style={{ gap: 15 }}
            >
              <Link
                to="/Calculator"
                state={{ Findex: FF, Sindex: SSF, SSindex: -1 }}
              >
                <IconButton>
                  <ArrowLeftCircle />
                </IconButton>
              </Link>
              <Link
                to="/Calculator"
                state={{ Findex: -1, Sindex: -1, SSindex: -1 }}
              >
                <span
                  className="Header text-center"
                  style={{ fontSize: 18, cursor: "pointer" }}
                >
                  Main Problems
                </span>
              </Link>
              /
              <Link
                to="/Calculator"
                state={{ Findex: FF, Sindex: -1, SSindex: -1 }}
              >
                <span
                  className="Header text-center"
                  style={{ fontSize: 18, cursor: "pointer" }}
                >
                  {MainFunctions[FF]["title"]} Problems
                </span>
              </Link>
              /
              <Link
                to="/Calculator"
                state={{
                  Findex: FF,
                  Sindex: SSF,
                  SSindex: -1,
                }}
              >
                <span
                  className="Header text-center"
                  style={{ fontSize: 18, cursor: "pointer" }}
                >
                  {SubFunctions[FF][SSF]["title"]} Problems
                </span>
              </Link>{" "}
              /
              <span
                className="Header text-center"
                style={{ fontSize: 18 }}
                onClick={() => {}}
              >
                {TitleList[func]}
              </span>
            </div>
          )}
          <span className="Header text-center m-4" style={{ fontSize: 35 }}>
            {TitleList[func]}
          </span>
          {handle_page(func)}
          <div className="h-100"></div>
        </div>
      ) : FunctionSelectedMAIN == -1 ? (
        <div className="container content " style={{ paddingTop: "2vh" }}>
          {/* <span className="Header text-center" style={{ fontSize: 30 }}>
        Step by Step Solving
      </span> */}
          <div
            className="d-flex flex-row align-items-center"
            style={{ gap: 15 }}
          >
            <span className="Header text-center" style={{ fontSize: 25 }}>
              Main Problems
            </span>
          </div>

          <div
            className="d-flex flex-row justify-content-evenly flex-wrap"
            style={{ marginTop: 25, gap: 15 }}
          >
            {MainFunctions.map((e, i) => {
              return (
                <SelectiveCard
                  title={e["title"]}
                  description={e["description"]}
                  img={e["img"]}
                  subdescription={
                    SubFunctions[i] != null ? SubFunctions[i].length : 0
                  }
                  onClick={() => {
                    setFunctionSelectedMAIN(i);
                    setFunctionSelected(i);
                    setSubFunctionSelected(0);
                  }}
                />
              );
            })}
          </div>

          <div className="h-100"></div>
        </div>
      ) : SubFunctionSelectedMAIN == -1 ? ( // THIS IS THE SubFunctions FIELD
        <div className="container content " style={{ paddingTop: "2vh" }}>
          <div
            className="d-flex flex-row align-items-center"
            style={{ gap: 15 }}
          >
            <IconButton
              onClick={() => {
                setFunctionSelectedMAIN(-1);
                setFunctionSelected(-1);
                SubFunctionSelected(0);
              }}
            >
              <ArrowLeftCircle />
            </IconButton>
            <span
              className="Header text-center"
              style={{ fontSize: 20, cursor: "pointer" }}
              onClick={() => {
                setFunctionSelectedMAIN(-1);
                setFunctionSelected(-1);
                SubFunctionSelected(0);
              }}
            >
              Main Problems
            </span>
            /
            <span className="Header text-center" style={{ fontSize: 20 }}>
              {MainFunctions[FunctionSelectedMAIN]["title"]} Problems
            </span>
          </div>

          <div
            className="d-flex flex-row justify-content-evenly flex-wrap"
            style={{ marginTop: 25, gap: 15 }}
          >
            {SubFunctions[FunctionSelectedMAIN].map((e, i) => {
              return (
                <SelectiveCard
                  title={e["title"]}
                  description={e["description"]}
                  img={e["img"]}
                  subdescription={
                    SubSubFunctions[FunctionSelectedMAIN][i] != null
                      ? SubSubFunctions[FunctionSelectedMAIN][i].length
                      : 0
                  }
                  onClick={() => {
                    setSubFunctionSelectedMAIN(i);
                    setSubFunctionSelected(i);
                  }}
                />
              );
            })}
          </div>

          <div className="h-100"></div>
        </div>
      ) : (
        // THIS IS THE SubSubFunctions FIELD
        <div className="container content " style={{ paddingTop: "2vh" }}>
          <div
            className="d-flex flex-row align-items-center"
            style={{ gap: 15 }}
          >
            <IconButton
              onClick={() => {
                setSubFunctionSelectedMAIN(-1);
                setSubFunctionSelected(-1);
              }}
            >
              <ArrowLeftCircle />
            </IconButton>
            <span
              className="Header text-center"
              style={{ fontSize: 20, cursor: "pointer" }}
              onClick={() => {
                setFunctionSelectedMAIN(-1);
                setFunctionSelected(-1);
                SubFunctionSelected(0);
              }}
            >
              Main Problems
            </span>
            /
            <span
              className="Header text-center"
              style={{ fontSize: 20, cursor: "pointer" }}
              onClick={() => {
                setSubFunctionSelectedMAIN(-1);
                setSubFunctionSelected(-1);
              }}
            >
              {MainFunctions[FunctionSelectedMAIN]["title"]} Problems
            </span>
            /
            <span className="Header text-center" style={{ fontSize: 20 }}>
              {
                SubFunctions[FunctionSelectedMAIN][SubFunctionSelectedMAIN][
                  "title"
                ]
              }{" "}
              Problems
            </span>
          </div>

          <div
            className="d-flex flex-row justify-content-evenly flex-wrap"
            style={{ marginTop: 25, gap: 15 }}
          >
            {SubSubFunctions[FunctionSelectedMAIN][SubFunctionSelectedMAIN].map(
              (e, i) => {
                return (
                  <SelectiveCard
                    title={TitleList[e["title"]]}
                    description={e["description"]}
                    img={e["img"]}
                    link={
                      "/Calculator/" +
                      SubSubFunctions[FunctionSelectedMAIN][
                        SubFunctionSelectedMAIN
                      ][i]["title"]
                    }
                  />
                );
              }
            )}
          </div>

          <div className="h-100"></div>
        </div>
      )}

      {/* <div>
        <Button
          onClick={() => {
            setDrawer(true);
          }}
        >
          {"top"}
        </Button>
        <SwipeableDrawer
          anchor={"top"}
          open={Drawer}
          onClose={() => {
            setDrawer(false);
          }}
          onOpen={() => {
            setDrawer(true);
          }}
        ></SwipeableDrawer>
      </div>
      <div className="container content text-center">
        <span className="Header">Step by Step Solving</span>
        <span className="normal">
          You can choose the linear algebra problem that you want to solve from
          the bottom menu
        </span>
        <div className="d-flex flex-row w-100 justify-content-center">
          <Button>Matrix</Button>
          <Button>vector</Button>
          <Button>useless</Button>
          <Button>phonetix</Button>
        </div>
        <DropDownMenu selected={select_func(func)} />

        {func != null ? handle_page(func) : <></>}

        <div className="h-100"></div>
      </div> */}
    </div>
  );
}

export default CalcPage;
