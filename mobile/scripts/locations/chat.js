let submittedCount = 0

const typePromptEl = document.getElementById("word-type")
const inputEl = document.getElementById("madlib-input")
const submitEl = document.getElementById("submit-madlib")
submitEl.addEventListener("click", submitWord)
function submitWord() {
    let word = inputEl.value
    sendToServer({ type: "madlib-word", val: { wordType: wordTypes[submittedCount].toLowerCase(), word: word } })

    inputEl.value = ""
    submittedCount++
    if (submittedCount === wordTypes.length) {
        hideMadlib()
    }
}
