const deployedServerUrl = `https://bookstack-heroku-app.herokuapp.com`
const localServerUrl = 'http://localhost:8000'

async function getBooksList(list_name) {
    try {
        const username = localStorage.getItem("username")
        const token = localStorage.getItem("token")
        const options = {
            headers: { "Authorization": `Token ${token}` }
        }
        const resp = await fetch(`${deployedServerUrl}/profiles/${username}/books/${list_name}`, options)
        const data = resp.json()
        return data
    } catch (err) {
        throw new Error('cannot fetch your tbr list', err)
    }
}

async function moveToCurrentBooks(bookId) {
    const username = localStorage.getItem("username")
    const token = localStorage.getItem("token")
    
        const options = {
            method:"PUT",
            headers: {"Content-Type":  "application/json", "Authorization": `Token ${token}` },
            body: JSON.stringify({
                update:"",
                date_started: formateDateNow()
            })
        }
        try{
            const resp = await fetch(`${deployedServerUrl}/profiles/${username}/books/${bookId}/`, options)
            const data = resp.json()
            return data
        } catch(err){
            console.warn(err)
        }
}


async function movetoFinishedBooks(book_id, note, rating) {
    const username = localStorage.getItem("username")
    const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            update:"finished",
            date_finished: formateDateNow(),
            user_notes: note
        })
    }
    try {
        const resp = await fetch(`${deployedServerUrl}/profiles/${username}/books/${book_id}/`, options)
        const data = resp.json()
        return data
    } catch (err) {
        console.warn(err)
    }
}

function formateDateNow() {
    const now = new Date()
    const month = now.getMonth() + 1
    const day = now.getDate()
    const year = now.getFullYear()
    return `${year}-${month}-${day}`
}

function formatPublishYear(dateString) {
    "2020-10-15"
    const dateAsArray = dateString.split('-')
    const year = parseInt(dateAsArray[0])
    return year
}

async function getStats() {
    const username = localStorage.getItem("username");
    const resp = await fetch(`${deployedServerUrl}/profiles/${username}/stats`)
    const data = await resp.json()
    return data
}

async function getProfile() {
    const username = localStorage.getItem("username");
    const resp = await fetch(`${localServerUrl}/profiles/${username}`)
    const data = await resp.json()
    return data
}

export { getStats, formatPublishYear, formateDateNow, getBooksList, moveToCurrentBooks, movetoFinishedBooks }