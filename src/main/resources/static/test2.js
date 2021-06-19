const requestUrl = "http://localhost:8080/admin";


function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type' : 'application/json'
    };
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

function sendRequestGet(method, url) {
    var array = new array
    return fetch(url).then(response =>{
         return  response.json()
    })
}

var test = sendRequestGet('GET',requestUrl);

console.log(test)
document.getElementById("demo").innerHTML =
   " test.Array[1].firstName +  + test.Array[1].lastName;"
// console.log('dsfsd')
// test.then(r =>{
//     var t = JSON.stringify(r)
//     document.getElementById('test').innerHTML = ''
// })
// document.getElementById('test').innerHTML = 'sdf'

// sendRequestGet('GET', requestUrl)
//     .then(data => console.log(data));



// document.body.innerHTML = ""


// let get3 = document.getElementById('22');
// //     .catch(err => console.log(err))
// let get = document.body.innerHTML('get3');

const body = {
    age : 25,
    email : 'sdf@gmail.com',
    firstName : 'argen',
    lastName : 'abdymomunov',
    password : 'parol'

}
// sendRequest('POST', requestUrl, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// const xhr = new XMLHttpRequest()
//
// xhr.open('GET',requestUrl)
//
//
// xhr.onload = () =>{
//     console.log(xhr.response)
// }
// xhr.send()