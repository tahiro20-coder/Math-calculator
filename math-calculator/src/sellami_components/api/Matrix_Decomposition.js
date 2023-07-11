export default class Matrix_Decomposition {
    static Eigen_Decomposition(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Eigen_Decomposition`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static LU(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/LU`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static Cholosky_Decomposition(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Cholosky_Decomposition`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static QR_Decomposition(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/QR_Decomposition`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static SVD(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/SVD`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }

}