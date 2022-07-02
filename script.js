



const asyncFunc = async () => {
    var res = await fetch ("https://jsonplaceholder.typicode.com/posts");
    var jsonResult = await res.json();
    postUser(jsonResult)
}
asyncFunc();


function postUser(data) {
    for (i=0 ; i<=9 ; i++){
        console.log(`user ${data[i]["id"]} post title: ${data[i]["title"]}`)
        console.log(`user ${data[i]["id"]} post body: ${data[i]["body"]}`)
    }
}
 



function getUsers() {
fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((json) => {
    let output = "";
    json.forEach(function (user) {
        output += `<ul>
        <li>${user.id}</li>
        <li>${user.title}</li>
        <li>${user.body}</li>
    </ul>`;
    });
    document.getElementById("output").innerHTML = output;
})
}

getUsers ();


document.querySelector("#output").style.color = "#60b347"