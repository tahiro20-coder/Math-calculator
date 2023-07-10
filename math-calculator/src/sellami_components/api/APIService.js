export default class APIService {
    // Insert an article
    static add(body) {
        return fetch(`http://localhost:5000/add`, {
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
        return fetch(`http://localhost:5000/addMatricies`, {
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