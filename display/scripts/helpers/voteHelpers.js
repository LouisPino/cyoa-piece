//need to get vote and b images or folder names, need vote banner text

const flashTime = 250

function displayVote(mainEl, extras, voteLength, currentLocation) {
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
    backgroundEl.src = currentLocation.voteBgBlur
    voteBannerText.innerHTML = currentLocation.choicePrompt
    voteAImg.src = `display/assets/vote/location/${currentLocation.choices[0]}/up.PNG`
    voteBImg.src = `display/assets/vote/location/${currentLocation.choices[1]}/up.PNG`
    voteTimeDiv.style.animation = `voteTimer ${voteLength / 1000}s linear`;
    let voteEls = [voteAImg, voteBImg, voteBGs[0], voteBGs[1]]
    setTimeout(() => { flashVotes(voteEls) }, flashTime * 2)
    const countdown = setInterval(() => {
        seconds -= 1;
        if (seconds < 0) {
            clearInterval(countdown);
        }
    }, 1000);
}

function promptVote(mainEl, extras, currentLocation) {
    const html = extras.filter(
        (extra) => extra.name === "votePrompt"
    )[0].content;
    mainEl.innerHTML += html
    const backgroundEl = document.querySelector("#location-bg")
    backgroundEl.src = currentLocation.voteBgBlur
    setTimeout(() => { document.getElementById("vote-prompt").style.top = "0px" }, 10)
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