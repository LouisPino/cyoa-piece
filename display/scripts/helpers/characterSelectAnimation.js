function revealCharacter(charObj) {
    mainEl.innerHTML = extras.filter(
        (extra) => extra.name === "characterReveal"
    )[0].content;
    const asset1El = document.getElementById("asset-1");
    const asset2El = document.getElementById("asset-2");
    const asset3El = document.getElementById("asset-3");
    const asset4El = document.getElementById("asset-face");
    const assetsEl = document.querySelector(".skin-assets")
    if (Object.keys(charObj)[0] === "jesterFace") {
        setTimeout(() => {
            asset1El.src = charObj.color.img
            asset1El.style.left = "0px"
            asset1El.style.opacity = 1
        }, 1000)
        setTimeout(() => {
            asset2El.src = charObj.points.img
            asset2El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset2El.getBoundingClientRect().width / 2)}px`
            asset2El.style.opacity = 1
        }, 2000)
        setTimeout(() => {
            asset3El.src = charObj.jesterDevice.img
            asset3El.style.left = `${assetsEl.getBoundingClientRect().width - asset3El.getBoundingClientRect().width}px`
            asset3El.style.opacity = 1
        }, 3000)
        setTimeout(() => {
            asset4El.src = charObj.jesterFace.img
            asset4El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset4El.getBoundingClientRect().width / 2)}px`
            asset4El.style.opacity = 1
        }, 4000)
        setTimeout(() => {
            asset1El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset4El.getBoundingClientRect().width / 2)}px`
            asset1El.style.bottom = "75%"
        }, 5000)
        setTimeout(() => {
            asset2El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset4El.getBoundingClientRect().width / 2)}px`
            asset2El.style.bottom = "75%"
        }, 6000)
        setTimeout(() => {
            asset3El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset4El.getBoundingClientRect().width / 2)}px`
            asset3El.style.bottom = "75%"
        }, 7000)

        setTimeout(() => {
            let newJester = "https://cdn-images.dzcdn.net/images/artist/7d241d43d2b13779977b6331205bc68d/1900x1900-000000-80-0-0.jpg"
            flashImages([asset1El, asset2El, asset3El], asset4El, newJester)
        }, 8000)
    } else {
        setTimeout(() => {
            asset1El.src = charObj.robe.img
            asset1El.style.left = "0px"
            asset1El.style.opacity = 1
        }, 1000)
        setTimeout(() => {
            asset2El.src = charObj.hat.img
            asset2El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset2El.getBoundingClientRect().width / 2)}px`
            asset2El.style.opacity = 1
        }, 2000)
        setTimeout(() => {
            asset3El.src = charObj.wizardDevice.img
            asset3El.style.left = `${assetsEl.getBoundingClientRect().width - asset3El.getBoundingClientRect().width}px`
            asset3El.style.opacity = 1
        }, 3000)
        setTimeout(() => {
            asset4El.src = charObj.wizardFace.img
            asset4El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset4El.getBoundingClientRect().width / 2)}px`
            asset4El.style.opacity = 1
        }, 4000)
        setTimeout(() => {
            asset1El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset4El.getBoundingClientRect().width / 2)}px`
            asset1El.style.bottom = "75%"
        }, 5000)
        setTimeout(() => {
            asset2El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset4El.getBoundingClientRect().width / 2)}px`
            asset2El.style.bottom = "75%"
        }, 6000)
        setTimeout(() => {
            asset3El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset4El.getBoundingClientRect().width / 2)}px`
            asset3El.style.bottom = "75%"
        }, 7000)

        setTimeout(() => {
            let newChar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsLq8jGXoZygQoBD47jVCzB-5nIPLIWGG_A&s"
            flashImages([asset1El, asset2El, asset3El], asset4El, newChar)
        }, 8000)

    }
}

function displaySkinChoice(winner) {
    console.log("hit")
    //REWRITE ME TO REMOVE LOSER IMG, THROW CONFETTI, MOVE IMAGE LEFT OR RIGHT DEPENDING ON WINNER TO CENTER, ENLARGE IMG
    const choice1El = document.getElementById("vote-a-img");
    const choice2El = document.getElementById("vote-b-img");
    const choice1BgEl = document.getElementById("vote-a-bg");
    const choice2BgEl = document.getElementById("vote-b-bg");
    const removableEls = document.querySelectorAll(".vote-banner, .vote-time-div, .vote-banner-text")
for (el of removableEls){
    el.remove()
}
    if(winner === 0){
        choice1El.style.transition = "1000ms"
        choice1BgEl.style.transition = "1000ms"
        choice1El.style.width = "150vw"
        choice1BgEl.style.width = "150vw"
        choice1El.style.height = "150vh"
        choice1BgEl.style.height = "150vh"
                choice1El.style.top = "-40vh"
        choice1BgEl.style.top = "-40vh"
        choice2El.remove();
        choice2BgEl.remove()
    }else{
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

}


function flashImages(assetsArr, oldImage, newImage) {
    let i = 50;
    let oldSrc = oldImage.src;

    function flash() {
        const flashTime = i > 45 ? i * 16 : i ** 2 / 10
        if (i > 1) {
            setTimeout(() => {
                for (const asset of assetsArr) {
                    asset.style.transition = "0s";
                    asset.style.opacity = i % 2 === 0 ? "0" : "1";
                }
                oldImage.src = i % 2 === 0 ? newImage : oldSrc;
                i--;

                // Recursive call
                flash();
            }, flashTime); // Increasing delay as i decreases
        }
    }

    // Start the recursive flashing
    flash();
}