export default class StandardFAPIService {
    // Insert an article
    static addMatricies(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/addMatricies`, {
                'method': 'POST',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static Dot_Product(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Dot_Product`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static SubMatrcies(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/SubMatrcies`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static MulMatrcies(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/MulMatrcies`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static MulScalarMatrix(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/MulScalarMatrix`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static DivScalarMatrix(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/DivScalarMatrix`, {
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