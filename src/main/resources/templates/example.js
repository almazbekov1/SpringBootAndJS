function fetchData() {
    fetch("http://localhost:8080/admin")
        .then(response =>{
            if (!response.ok){
                throw Error("error");
            }
            // console.log(response.json());
            return response.json();
        })
        .then(data => {
            console.log(data);
            let html =  '<table> ' +
                '<thead>\n' +
                '      <tr class="active">\n' +
                '         <th>id</th>\n' +
                '         <th>firstName</th>\n' +
                '         <th>lastName</th>\n' +
                '         <th>age</th>\n' +
                '         <th>email</th>\n' +
                '         <th>role</th>\n' +
                '         <th >Edit</th>\n' +
                '         <th>Delete</th>\n' +
                '       </tr>\n' +
                '</thead>\n' +
                '<tbody>';
            html= html+ data
                .map(user => {
                    return `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.firstName}</td>
                        <td>${user.lastName}</td>
                        <td>${user.age}</td>
                        <td>${user.email}</td>
                        <td>${user.password}</td>
                     </tr>
                    `;
                })
                .join("");
            html = html + " </tbody>\n" +
                             "  </table>";
            console.log(html);
            document.querySelector("#app").insertAdjacentHTML("afterbegin",html);
        })
        .catch(err => {
            console.log(err+" error you ");
        })
}
fetchData();

// https://jsonplaceholder.typicode.com/users
// https://reqres.in/api/users
// https://reqres.in/api/users

// <div class="user">
// <p>id: ${user.id}</p>
// <p>age: ${user.age}</p>
// <p>Email: ${user.email}</p>
// <p>firstName: ${user.firstName}</p>
// <p>lastName: ${user.lastName}</p>
// <p>password: ${user.password}</p>
// </div>