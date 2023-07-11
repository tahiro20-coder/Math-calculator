export default class Norms {
    // Insert an article
    static Euclidean_Norm(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Euclidean_Norm`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static Inifinity_norm(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Inifinity_norm`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static one_norm(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/one_norm`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static Manhattan_Norm(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Manhattan_Norm`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static Euclidean_VNorm(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Euclidean_VNorm`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static Inifinity_VNorm(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Inifinity_VNorm`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static Lp_Norm(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Lp_Norm`, {
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