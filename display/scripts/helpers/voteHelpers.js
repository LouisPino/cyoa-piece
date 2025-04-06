//need to get vote and b images or folder names, need vote banner text

const flashTime = 250

const skinChoices = {
    pColor: ["pino/color/A", "pino/color/B", "Pick a cat"],
    pHat: ["pino/hat/A", "pino/hat/B", "Which pattern?"],
    pDevice: ["pino/device/A", "pino/device/B", "Choose one"],
    pRobe: ["pino/robe/A", "pino/robe/B", "Green or purple?"],
    jColor: ["jaz/color/A", "jaz/color/B", "Pick a cat"],
    jCollar: ["jaz/collar/A", "jaz/collar/B", "Which one?"],
    jHat: ["jaz/hat/A", "jaz/hat/B", "Four or Two?"],
    jDevice: ["jaz/device/A", "jaz/device/B", "Choose a sound"]
}
function displayVote(mainEl, extras, voteLength, data, type) {
    let seconds = voteLength / 1000 - 1;
    mainEl.innerHTML = extras.filter(
        (extra) => extra.name === "vote"
    )[0].content;
    const voteTimeDiv = document.querySelector(".vote-time-div")
    const voteBannerText = document.querySelector(".vote-banner-text")
    const voteAImg = document.getElementById("vote-a-img")
    const voteBImg = document.getElementById("vote-b-img")
    const voteBGs = document.querySelectorAll(".vote-selection-bg")
    const backgroundEl = document.querySelector(".vote-bg")
    voteTimeDiv.style.animation = `voteTimer ${voteLength / 1000}s linear`;
    let voteEls = [voteAImg, voteBImg, voteBGs[0], voteBGs[1]]
    switch (type) {
        case "path":
            backgroundEl.src = data.currentLocation.voteBgBlur
            voteBannerText.innerHTML = data.currentLocation.choicePrompts.display
            voteAImg.src = `display/assets/vote/location/${data.currentLocation.choices[0]}/up.PNG`
            voteBImg.src = `display/assets/vote/location/${data.currentLocation.choices[1]}/up.PNG`
            break
        case "skin":
            backgroundEl.src = "display/assets/backgrounds/testbg.jpg"
            voteBannerText.innerHTML = skinChoices[data.item][2]
            voteAImg.src = `display/assets/vote/character/${skinChoices[data.item][0]}/up.PNG`
            voteBImg.src = `display/assets/vote/character/${skinChoices[data.item][1]}/up.PNG`
            break
    }
    setTimeout(() => { flashVotes(voteEls) }, flashTime * 2)
    const countdown = setInterval(() => {
        seconds -= 1;
        if (seconds < 0) {
            clearInterval(countdown);
        }
    }, 1000);
}

function promptVote(mainEl, extras, data, type) {
    const html = extras.filter(
        (extra) => extra.name === "votePrompt"
    )[0].content;
    mainEl.innerHTML += html
    switch (type) {
        case "path":
            const backgroundEl = document.querySelector("#location-bg")
            if (backgroundEl) {
                backgroundEl.src = data.currentLocation.voteBgBlur
            }
            break;
        case "skin":
//CHARACTER SELECT BACKGROUND
            break
    }
    // setTimeout(() => { document.getElementById("vote-prompt").style.top = "0px" }, 10)
}

function displayWinner(winner, extras, mainEl, currentLocation) {
    const html = extras.filter(
        (extra) => extra.name === "voteWin"
    )[0].content;
    mainEl.innerHTML = html
    const backgroundEl = document.querySelector(".vote-bg")
    backgroundEl.src = currentLocation.voteBgBlur
    const winnerEl = document.getElementById("vote-winner")
    winnerEl.innerHTML = `THE WINNER IS ${currentLocation.paths[winner].toUpperCase()}`
    console.log(`THE WINNER IS ${currentLocation.paths[winner].toUpperCase()}`)
}
function flashOnce(voteEls) {
    voteEls.forEach((el) => {
        setTimeout(() => {
            el.src = el.src.replace("up", "down");
        }, flashTime / 2);

        setTimeout(() => {
            el.src = el.src.replace("down", "up"); // Change back if needed
        }, flashTime);
    });
}


function flashCtrl(choice) {
    let voteEls = []
    if (choice === "choice1") {
        voteEls.push(document.getElementById("vote-a-img"))
        voteEls.push(document.getElementById(".vote-a-bg"))
    } else if (choice === "choice2") {
        voteEls.push(document.getElementById("vote-b-img"))
        voteEls.push(document.getElementById(".vote-b-bg"))
    }
    flashOnce(voteEls)
}



function flashVotes(voteEls) {
    setTimeout(() => flashOnce(voteEls), flashTime)
    setTimeout(() => flashOnce(voteEls), flashTime * 2)
    setTimeout(() => flashOnce(voteEls), flashTime * 3)
}