const token = localStorage.getItem("token");
const username = localStorage.getItem("username");
const authorization = { headers: { authorization: token } };

function login(token, username, id) {
    //const user = jwt_decode(token);
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("user_id", id);
    window.location.href = "/profilelanding"
}

function checkToken() {
  console.log("checking token")
	if (!token) {
        console.log('No token')
        window.location.href = '/login'
	}
}

export {checkToken, login}