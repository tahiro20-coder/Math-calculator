export default class APIService {
    // Insert an article
    static add(body) {
        return fetch(`https://easy-algebra-backend.onrender.com/add`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            .then(response => response)
            .catch(error => console.log(error))
    }
    static addMatricies(content) {
        return fetch(`https://easy-algebra-backend.onrender.com/addMatricies`, {
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