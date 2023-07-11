export default class Testing_Methods {
    static Diagonizable(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Diagonizable`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static Convexity(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Convexity`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static Invertibility(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Invertibility`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static Orthogonality(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Orthogonality`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static Independency(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Independency`, {
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