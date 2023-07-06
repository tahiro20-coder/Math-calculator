export default class Gradients {
    // Insert an article
    static Gradient_Descent(content) {
        return fetch(`http://localhost:5000/Gradient_Descent`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static Steepest_Gradient_Descent(content) {
        return fetch(`http://localhost:5000/Steepest_Gradient_Descent`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    static Conjugate_Gradient_Descent(content) {
        return fetch(`http://localhost:5000/Conjugate_Gradient_Descent`, {
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