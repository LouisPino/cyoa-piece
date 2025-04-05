function revealCharacter(charName, extras) {
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
    const assetsEl = document.querySelector(".skin-assets")
   const thirdItem = charName === "pino" ? "robe" : "collar"
   if(charName === "pino"){
    asset1El.src = `/display/assets/characterSelect/${charName}/color/${charObj.color}.png`
    asset2El.src = `/display/assets/characterSelect/${charName}/robe/${charObj.robe}.png`
    asset3El.src = `/display/assets/characterSelect/${charName}/hat/${charObj.hat}.png`
   }else{
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
            if(charName === "pino"){
                renderPino()

            }else{
                renderJaz()
            }
toggleAnimation("front")         
   // flashImages([asset1El, asset2El, asset3El], )
        }, 4000)
}

function displaySkinChoice(winner) {
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
        choice2El?.remove();
        choice2BgEl?.remove()
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