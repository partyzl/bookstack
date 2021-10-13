const token = localStorage.getItem("token");
const username = localStorage.getItem("username");
const authorization = { headers: { authorization: token } };

function login(token, username) {
    //const user = jwt_decode(token);
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    window.location.href("")
}

function checkToken() {
  console.log("checking token")
	if (!token) {
        console.log('No token')
        window.location.href = '/login'
	}
}

export {checkToken, login}