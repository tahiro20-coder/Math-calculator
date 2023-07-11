export default class Distance {
    // Insert an article
    static Manhattan_Distance(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Manhattan_Distance`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static Euclidean_Distance(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Euclidean_Distance`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static Infinity_Distance(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Infinity_Distance`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static Manhattan_VDistance(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Manhattan_VDistance`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static Euclidean_VDistance(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Euclidean_VDistance`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static Infinity_VDistance(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Infinity_VDistance`, {
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