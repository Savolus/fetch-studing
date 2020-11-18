const readline = require('readline')  // <--- For working with input from console

// Asking question for fetching url
function askQuestion(question) {
    // Create readline interface for input and output
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    // Return a new promise with question --> answer
    return new Promise(resolve => {
        rl.question(question, answer => {
            resolve(answer)
            rl.close()
        })
    })
}

module.exports = askQuestion