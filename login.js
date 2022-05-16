function login()
{
    let srvurl = document.getElementById("srvurl").value+"/api/public/get_user";
    let username = document.getElementById("username").value; 
    let apikey = document.getElementById("apikey").value; 
    let apisecret = document.getElementById("apisecret").value;  
    localStorage.setItem("srvurl", srvurl);
    localStorage.setItem("username", username);
    localStorage.setItem("apikey", apikey);
    localStorage.setItem("apisecret", apisecret);

    var retsrvurl = localStorage.getItem('srvurl');
    var retusername = localStorage.getItem('username');
    var retapikey = localStorage.getItem('apikey');
    var retapisecret = localStorage.getItem('apisecret');
			
const data = {"api_key": retapikey,"api_key_secret": retapisecret,"target_user": {"username": retusername}};
let dataReceived = ""; 

fetch(retsrvurl, {
  method: 'POST',
  mode: 'cors', // defaults to same-origin
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data),
})
.then(resp => {
    if (resp.status === 200) {
        return resp.json()
    } else {
        console.log("Status: " + resp.status)
        return Promise.reject("server")
    }
})
.then(dataJson => {
    dataReceived = dataJson
})
.catch(err => {
    if (err === "server") return
    console.log(err)
})

console.log(dataReceived.username)
}