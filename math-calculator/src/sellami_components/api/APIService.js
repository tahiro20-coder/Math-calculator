function arrayToJSONObject(arr) {
    //header
    // vacate headers/keys
    console.log(arr)
    let keys = arr.shift()
        // create JSON objects from Array
    let result = arr.map(arr =>
        Object.assign({}, ...arr.map((x, i) => ({
            [keys[i]]: x
        })))
    );
    return { "matrix": result };
}
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