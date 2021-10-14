// adding new user to API in registration



const deployedServerUrl = `https://bookstack-heroku-app.herokuapp.com`
const localServerUrl = 'http://localhost:8000'




function formatPublishYear(dateString){
    "2020-10-15"
    const dateAsArray = dateString.split('-')
    const year = parseInt(dateAsArray[0]) 
    return year
}

async function getStats(){
    const username = localStorage.getItem("username");
    const resp = await fetch(`${localServerUrl}/profiles/${username}/stats`)
    const data = await resp.json()

    console.log(data)
}

export {getStats, formatPublishYear}