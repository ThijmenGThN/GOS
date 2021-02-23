
// Fetch elements
let looper = {
    notepad: document.querySelector(`#notepad-textarea`)
}

looper.notepad.value = localStorage.getItem(`notepad`)

// Looper
setInterval(() => {

    // Update time
    handleFetchDate()

    // Save data locally
    localStorage.setItem(`notepad`, looper.notepad.value)

}, 500)