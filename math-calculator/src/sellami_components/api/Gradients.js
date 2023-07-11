export default class Gradients {
    // Insert an article
    static Gradient_Descent(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/Gradient_Descent`, {
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
        return fetch(`https://easy-algebra-backend.onrender.com/Steepest_Gradient_Descent`, {
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
        return fetch(`https://easy-algebra-backend.onrender.com/Conjugate_Gradient_Descent`, {
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