function startVote(section) {
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "vote"))[0].content//get vote html
    let choice1El = document.getElementById('choice-1')
    let choice2El = document.getElementById('choice-2')
    // let prompt = document.getElementById('vote-prompt-mobile')
    // prompt.innerText = section.choicePrompt
    // choice1El.innerHTML = section.choices[0]
    // choice2El.innerHTML = section.choices[1]
    choice1El.addEventListener('click', () => handleVote("choice1"));
    choice2El.addEventListener('click', () => handleVote("choice2"));
}



function startSkinVote(item) {
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "character"))[0].content
    const choice1El = document.getElementById("skin-choice1")
    const choice2El = document.getElementById("skin-choice2")
    const choice3El = document.getElementById("skin-choice3")
    const choice4El = document.getElementById("skin-choice4")
    const choice5El = document.getElementById("skin-choice5")
    choice1El.src = item.choices[0].img
    choice2El.src = item.choices[1].img
    choice3El.src = item.choices[2] ? item.choices[2].img : ""
    choice4El.src = item.choices[3] ? item.choices[3].img : ""
    choice5El.src = item.choices[4] ? item.choices[4].img : ""
    choice1El.addEventListener('click', () => handleVote("choice1"));
    choice2El.addEventListener('click', () => handleVote("choice2"));
    choice3El.addEventListener('click', () => handleVote("choice3"));
    choice4El.addEventListener('click', () => handleVote("choice4"));
    choice5El.addEventListener('click', () => handleVote("choice5"));
}


function handleVote(vote) {
    sendToServer({ type: "vote", val: vote })
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "thank"))[0].content
}