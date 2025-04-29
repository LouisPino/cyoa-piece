let submittedCount = 0
const typePromptEl = document.getElementById("word-type")
const inputEl = document.getElementById("madlib-input")
const submitEl = document.getElementById("submit-madlib")
submitEl.addEventListener("click", submitWord)

function submitWord() {
    let word = inputEl.value
    if (word === "") { return }
    sendToServer({ type: "madlib-word", val: { wordType: wordTypes[submittedCount].toLowerCase(), word: word } })
    inputEl.value = ""
    submittedCount++
    if (submittedCount === wordTypes.length) {
        lookUp()
        setTimeout(() => {
            mainEl.innerHTML = `<img class="complete-screen-img" src="/mobile/assets/backgrounds/Phone_Load.gif">`
        }, 2000)
    } else {
        typePromptEl.innerHTML = `${wordTypes[submittedCount].toUpperCase()}`
    }
}
