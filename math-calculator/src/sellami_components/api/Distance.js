export default class Distance {
    // Insert an article
    static Manhattan_Distance(content) {
        return fetch(`http://localhost:5000/Manhattan_Distance`, {
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
        return fetch(`http://localhost:5000/Euclidean_Distance`, {
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
        return fetch(`http://localhost:5000/Infinity_Distance`, {
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
        return fetch(`http://localhost:5000/Euclidean_VDistance`, {
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
        return fetch(`http://localhost:5000/Infinity_VDistance`, {
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