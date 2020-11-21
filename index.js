const fetch = require('node-fetch')  // <--- Use it for node.js
const askQuestion = require('./askQuestion')  // <--- Use own module form askQuestion.js

// Function to validate inputed data
function validateInput(path, userId) {
    // Array of correct paths
    const correct = [
        ['post', 'comment', 'album', 'photo', 'todo', 'user'],
        ['posts', 'comments', 'albums', 'photos', 'todos', 'users']
    ]

    // Validate path and user id
    if (correct[0].includes(path)) path += 's'  // Add 's' to the path to make it correct
    if (!correct[1].includes(path)) throw 'incorrect path!'  // Throw error in case of incorrect path
    if (isNaN(+userId) || userId < 0) throw 'incorrect user id!'  // Throw error in case of incorrect user id

    return [path, +userId]  // Return array for destructing it on path and user id after
}

// Function that fetch url by data path and user id
async function fetchTODO(pathInput, userIdIput){
    try {
        console.log('Fetch todo started...')  // Started a server dialogue

        const [path, userId] = validateInput(pathInput, userIdIput)  // Get correct path and user id
        const url = `https://jsonplaceholder.typicode.com/${path}/${userId}`  // Create url by data`s path and id
        const response = await fetch(url)  // Fetching the ulr
        const data = await response.json()  // Getting date from json
        const output = JSON.stringify(data, null, 2)  // Stringify data to the output

        if (output === '{}') throw `${url} doesn\`t contain data`  // Throw error in case of empty data

        console.log(`Data:\n${output}`)  // Output data
        console.log('Fetch todo ended!')  // End a server dialogue
    } catch(error) {
        console.error(`Error: ${error}`)  // Output catched error
        console.error('Fetch todo stopped!')  // End a server dialogue with error
    }
}

// Main function for asking question and call fetch
async function main() {
    const path = await askQuestion('Input what data you need: ') // Getting path from console
    const userId = await askQuestion(`Input id of ${path}: `) // Getting user id from console

    await fetchTODO(path, userId)  // Start fetching by data path and user id
}

main()  // Call async main function for fetching url
