//need to get vote and b images or folder names, need vote banner text

const flashTime = 250

const choices = {
    pColor: ["pino/color/A", "pino/color/B", "Which cat?"],
    pHat: ["pino/hat/A", "pino/hat/B", "Which hat design?"],
    pDevice: ["pino/device/A", "pino/device/B", "Pick a thing."],
    pRobe: ["pino/robe/A", "pino/robe/B", "What color robe?"],
    jColor: ["jaz/color/A", "jaz/color/B", "Which cat?"],
    jCollar: ["jaz/collar/A", "jaz/collar/B", "What color collar?"],
    jHat: ["jaz/hat/A", "jaz/hat/B", "How pointy of a hat?"],
    jDevice: ["jaz/device/A", "jaz/device/B", "Which is more annoying?"],
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
            voteBannerText.innerHTML = data.currentLocation.choicePrompt
            voteAImg.src = `display/assets/vote/location/${data.currentLocation.choices[0]}/up.PNG`
            voteBImg.src = `display/assets/vote/location/${data.currentLocation.choices[1]}/up.PNG`
            break
        case "skin":
            backgroundEl.src = "display/assets/backgrounds/test.gif"
            voteBannerText.innerHTML = choices[data.item][2]
            voteAImg.src = `display/assets/vote/character/${choices[data.item][0]}/up.PNG`
            voteBImg.src = `display/assets/vote/character/${choices[data.item][1]}/up.PNG`
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
    console.log(type)
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