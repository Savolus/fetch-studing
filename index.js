const fetch = require('node-fetch')  // <--- Use it for node.js
const askQuestion = require('./askQuestion')

// Checking way for fetching url
function setWay(way){
    // Correct ways
    const correct = [
        ['post', 'comment', 'album', 'photo', 'todo', 'user'],
        ['posts', 'comments', 'albums', 'photos', 'todos', 'users']
    ]

    // Check and return correct way
    if (correct[0].includes(way)) return way + 's'  // Add s to the way to make url correct
    if (correct[1].includes(way)) return way // Don`t add s because it is already there
}

// Function that fetch url by data way and id
async function fetchTODO(way, id){
    try {
        console.log('Fetch todo started...')  // Started a server dialogue

        way = setWay(way)  // Set correct way if it needs
        if (!way) throw 'incorrect way!'  // Throw error in case of incorrect way
        if (id < 0 || isNaN(+id)) throw 'incorrect id!'  // Throw error in case of incorrect id

        const url = `https://jsonplaceholder.typicode.com/${way}/${id}`  // Create url by data way and id
        const response = await fetch(url)  // Fetching the ulr
        const data = await response.json()  // Getting date from json

        if (JSON.stringify(data) === '{}') throw `${way} doesn\`t contain this data!`  // Throw error in case of empty data

        console.log('Data:')  // Console log the data
        console.log(data)  // Console log the data follow by new line
        console.log('Fetch todo ended.')  // End a server dialogue
    } catch(error) {
        console.error(`Error: ${error}`)  // Catching error
        console.error('Fetch todo stopped!')  // End a server dialogue with error
    }
}

// Main function for asking question and call fetch
async function main() {
    const way = await askQuestion('Input what data you need: ') // Getting way from console
    const id = await askQuestion(`Input id of ${way}: `) // Getting id from console

    await fetchTODO(way, id)  // Start fetching by data way and id
}

main()  // Call async main function for fetching url