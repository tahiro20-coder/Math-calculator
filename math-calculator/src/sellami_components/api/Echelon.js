export default class Echelon {
  static Gaussian_Elm(content) {
    return fetch(`https://easy-algebra-backend.onrender.com/Gaussian_Elm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
  static Basis(content) {
    return fetch(`https://easy-algebra-backend.onrender.com/Basis`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
  static Gram_Shmidt(content) {
    return fetch(`https://easy-algebra-backend.onrender.com/Gram_Shmidt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
  static Kernel(content) {
    return fetch(`https://easy-algebra-backend.onrender.com/Kernel`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  static Rank(content) {
    return fetch(`http://easy-algebra-backend.onrender.com/Rank`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
  static Particular_Solution(content) {
    return fetch(
      `https://easy-algebra-backend.onrender.com/Particular_Solution`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(content),
      }
    )
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
  static General_solution(content) {
    return fetch(`https://easy-algebra-backend.onrender.com/General_solution`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
  static LU_Solv(content) {
    return fetch(`https://easy-algebra-backend.onrender.com/LU_Solv`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
  static Eigenvalues_and_Eigenvectors(content) {
    return fetch(
      `https://easy-algebra-backend.onrender.com/Eigenvalues_and_Eigenvectors`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(content),
      }
    )
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
}
