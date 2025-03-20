function startVote(section) {
    console.log(section)
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "vote"))[0].content//get vote html
    let voteAImgEl = document.getElementById('vote-a-img')
    let voteBImgEl = document.getElementById('vote-b-img')
    let prompt = document.getElementById('vote-banner-text')
    prompt.innerHTML = section.choicePrompt
    voteAImgEl.src = `/mobile/assets/vote/location/${section.choices[0]}/up.PNG`
    voteBImgEl.src = `/mobile/assets/vote/location/${section.choices[1]}/up.PNG`
    voteAImgEl.addEventListener('click', () => handleVote("choice1"));
    voteBImgEl.addEventListener('click', () => handleVote("choice2"));
}



function startSkinVote(item) {
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "character"))[0].content
    const choice1El = document.getElementById("skin-choice1")
    const choice2El = document.getElementById("skin-choice2")
    choice1El.src = item.choices[0].img
    choice2El.src = item.choices[1].img
    choice1El.addEventListener('click', () => handleVote("choice1"));
    choice2El.addEventListener('click', () => handleVote("choice2"));
}


function handleVote(vote) {
    sendToServer({ type: "vote", val: vote })
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "thank"))[0].content
}