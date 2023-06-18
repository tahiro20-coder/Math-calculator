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
    static mat(matrix) {
        console.log("zz", matrix)
        let data = new FormData();
        let array = [
            [
                [1, 4],
                [2, 4]
            ],
            [
                [3, 1],
                [2, 4]
            ],
            [
                [7, 4],
                [1, 1]
            ]
        ];
        data.append("matrix", JSON.stringify(array));
        return fetch(`http://localhost:5000/mat`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                matrix: data
            })
            .then(response => response)
            .catch(error => console.log(error))
    }

}