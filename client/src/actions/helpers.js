// adding new user to API in registration

function register(formData)



const deployedServerUrl = `https://bookstack-heroku-app.herokuapp.com`
const localServerUrl = 'http://localhost:8000'






async function getStats(){
    const username = localStorage.getItem("username");
    const resp = await fetch(`${localServerUrl}/profiles/${username}/stats`)
    const data = await resp.json()

    console.log(data)
}

