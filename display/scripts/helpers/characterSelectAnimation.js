function revealCharacter(charName, extras, confetti) {
    document.getElementById("display-main").innerHTML = extras.filter(
        (extra) => extra.name === "characterReveal"
    )[0].content;
    charObj = characters[charName[0]]
    const asset1El = document.getElementById("asset-1");
    const asset2El = document.getElementById("asset-2");
    const asset3El = document.getElementById("asset-3");
    const asset1BgEl = document.getElementById("asset-1-bg");
    const asset2BgEl = document.getElementById("asset-2-bg");
    const asset3BgEl = document.getElementById("asset-3-bg");
    if (charName === "pino") {
        asset1El.src = `/display/assets/characterSelect/${charName}/color/${charObj.color}.png`
        asset2El.src = `/display/assets/characterSelect/${charName}/robe/${charObj.robe}.png`
        asset3El.src = `/display/assets/characterSelect/${charName}/hat/${charObj.hat}.png`
    } else {
        asset1El.src = `/display/assets/characterSelect/${charName}/color/${charObj.color}.png`
        asset2El.src = `/display/assets/characterSelect/${charName}/hat/${charObj.hat}.png`
        asset3El.src = `/display/assets/characterSelect/${charName}/collar/${charObj.collar}.png`

    }

    setTimeout(() => {
        asset1El.style.setProperty("top", "0vh", "important");
        asset1BgEl.style.setProperty("top", "0vh", "important");
    }, 1000)
    setTimeout(() => {
        asset2El.style.setProperty("top", "0vh", "important");
        asset2BgEl.style.setProperty("top", "0vh", "important");
    }, 2000)
    setTimeout(() => {
        asset3El.style.setProperty("top", "0vh", "important");
        asset3BgEl.style.setProperty("top", "0vh", "important");
    }, 3000)
    setTimeout(() => {
        asset3El.style.left = "-27vw"
        asset3BgEl.style.left = "-27vw"
        asset1El.style.left = "27vw"
        asset1BgEl.style.left = "27vw"
    }, 4000)
    setTimeout(() => {
        flashImages([asset1El, asset2El, asset3El], charName, confetti)
    }, 5000)
}

function displayChoice(winner, confetti) {
    const choice1El = document.getElementById("vote-a-img");
    const choice2El = document.getElementById("vote-b-img");
    const choice1BgEl = document.getElementById("vote-a-bg");
    const choice2BgEl = document.getElementById("vote-b-bg");
    const removableEls = document.querySelectorAll(".vote-banner, .vote-time-div, .vote-banner-text")
    for (el of removableEls) {
        el.remove()
    }
    if (winner === 0) {
        choice1El.style.transition = "1000ms"
        choice1BgEl.style.transition = "1000ms"
        choice1El.style.width = "150vw"
        choice1BgEl.style.width = "150vw"
        choice1El.style.height = "150vh"
        choice1BgEl.style.height = "150vh"
        choice1El.style.top = "-40vh"
        choice1BgEl.style.top = "-40vh"
        choice2El?.remove();
        choice2BgEl?.remove()
    } else {
        choice2El.style.transition = "1000ms"
        choice2BgEl.style.transition = "1000ms"
        choice2El.style.width = "150vw"
        choice2BgEl.style.width = "150vw"
        choice2El.style.height = "150vh"
        choice2BgEl.style.height = "150vh"
        choice2El.style.left = "-50vw"
        choice2BgEl.style.left = "-50vw"
        choice2El.style.top = "-50vh"
        choice2BgEl.style.top = "-50vh"
        choice1El.remove();
        choice1BgEl.remove();
    }
    setTimeout(() => {
        confetti.addConfetti({
            confettiColors: [
                '#e9ecd9', '#ae8cbe', '#6d6faa', '#444573', '#aeadcf'
            ],
            // emojis: ["🐸","🦇", "🦐", "🪨", "🤡", "🫵"],
            confettiNumber: 200,
        })
    }, 1000)
}


function flashImages(assetsArr, charName, confetti) {
    let i = 50;
    let characterDiv
    const assetsEl = document.querySelector(".skin-assets")
    function flash() {
        const flashTime = i > 50 ? i * 16 : i ** 2 / 10
        for (const asset of assetsArr) {
            asset.style.transition = "0s";
        }
        if (i > 1) {
            setTimeout(() => {
                if (i === 50) {
                    if (charName === "pino") {
                        renderPino()
                        document.getElementById("pino-char").classList.add("pino-reveal")
                    } else {
                        renderJaz()
                        document.getElementById("jaz-char").classList.add("jaz-reveal")
                    }
                    characterDiv = document.getElementById(`${charName}-char`)
                    for (const child of characterDiv.children) {
                        child.classList.add('black-mask');
                    }
                    toggleAnimation("front")
                }
                assetsEl.style.opacity = i % 2 === 0 ? "0" : "1";
                characterDiv.style.opacity = i % 2 === 1 ? "0" : "1";
                i--;

                // Recursive call
                flash();
            }, flashTime); // Increasing delay as i decreases
        } else {
            confetti.addConfetti({
                confettiColors: [
                    '#e9ecd9', '#ae8cbe', '#6d6faa', '#444573', '#aeadcf'
                ],
                // emojis: ["🐸","🦇", "🦐", "🪨", "🤡", "🫵"],
                confettiNumber: 200,
            })
            for (const child of characterDiv.children) {
                child.classList.remove('black-mask');
            }
            setTimeout(() => {
                hopChar(charName)
            }, 1000)
            setTimeout(() => {
                toggleAnimation("walk")
            }, 2500)
            setTimeout(() => {
                toggleAnimation("left")
            }, 4500)
            setTimeout(() => {
                toggleAnimation("front")
                hopChar(charName)
                toggleAnimation("right")
            }, 6500)
        }
    }

    // Start the recursive flashing
    flash();
}