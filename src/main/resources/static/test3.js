const requestUrl = "https://jsonplaceholder.typicode.com/users";


function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type' : 'application/json'
    }
    return  fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response =>{
        if(response.ok){
            return response.json()
        }

        return response.json().then(error =>{
            const  e = new Error('what is it')
            e.data = error
            throw e
        })
    })
}

sendRequest('GET', requestUrl)
    .then(data => console.log(data))
// document.body.innerHTML = ""


// let get3 = document.getElementById('22');
// //     .catch(err => console.log(err))
// let get = document.body.innerHTML('get3');

const body = {
    name:'Vladilen',
    age: 26
}
// sendRequest('POST', requestUrl, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))