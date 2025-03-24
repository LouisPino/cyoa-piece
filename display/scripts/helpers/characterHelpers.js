const jazBody = document.createElement("img")
const jazCollar = document.createElement("img")
const jazHat = document.createElement("img")
const jazFace = document.createElement("img")
const pinoLine = document.createElement("img")
const pinoRobe = document.createElement("img")
const jazDiv = document.createElement("div")
const jazFaceLine = document.createElement("img")
const pinoDiv = document.createElement("div")
const pinoFaceLine = document.createElement("img")
const pinoHands = document.createElement("img")
const pinoFace = document.createElement("img")
const pinoHat = document.createElement("img")
const jazCollarLine = document.createElement("img")


jazFaceLine.style.zIndex = "100"
jazHat.style.zIndex = "99"
jazCollar.style.zIndex = "98"
jazBody.style.zIndex = "97"
jazCollarLine.style.zIndex = "96"
jazFace.style.zIndex = "95"

pinoFaceLine.style.zIndex = "94"
pinoLine.style.zIndex = "93"
pinoRobe.style.zIndex = "92"
pinoHands.style.zIndex = "91"
pinoHat.style.zIndex = "90"
pinoFace.style.zIndex = "89"


pinoDiv.classList.add("char-div")
pinoDiv.id = "pino-char"
jazDiv.classList.add("char-div")
jazDiv.id = "jaz-char"

let characters

function storeCharacters(newCharacters) {
    characters = newCharacters
    pinoFaceLine.src = `/display/assets/characters/pino/faceLine/${characters.pino.face}.png`
    pinoFace.src = `/display/assets/characters/pino/face/${characters.pino.face}.png`
    pinoHands.src = `/display/assets/characters/pino/hands/${characters.pino.face}.png`
    pinoHat.src = `/display/assets/characters/pino/hat/${characters.pino.hat}.png`
    pinoRobe.src = `/display/assets/characters/pino/robe/${characters.pino.robe}.png`
    pinoLine.src = `/display/assets/characters/pino/static/bodyLine.png`

    jazFaceLine.src = `/display/assets/characters/jaz/faceLine/${characters.jaz.face}.png`
    jazFace.src = `/display/assets/characters/jaz/face/${characters.jaz.face}.png`
    jazHat.src = `/display/assets/characters/jaz/hat/${characters.jaz.hat}.png`
    jazCollar.src = `/display/assets/characters/jaz/collar/${characters.jaz.collar}.png`
    jazBody.src = `/display/assets/characters/jaz/static/body.png`
    jazCollarLine.src = `/display/assets/characters/jaz/static/collarLine.png`
}





function renderPino() {
    pinoDiv.appendChild(pinoFaceLine)
    pinoDiv.appendChild(pinoLine)
    pinoDiv.appendChild(pinoRobe)
    pinoDiv.appendChild(pinoHands)
    pinoDiv.appendChild(pinoHat)
    pinoDiv.appendChild(pinoFace)
    document.body.appendChild(pinoDiv)
}


function renderJaz() {
    jazDiv.appendChild(jazFaceLine)
    jazDiv.appendChild(jazBody)
    jazDiv.appendChild(jazCollarLine)
    jazDiv.appendChild(jazCollar)
    jazDiv.appendChild(jazHat)
    jazDiv.appendChild(jazFace)
    document.body.appendChild(jazDiv)
}




function toggleAnimation(animation) {
    switch (animation) {
        case "run":
            pinoFaceLine.src = `/display/assets/characters/pino/faceLine/${characters.pino.face}run.png`
            pinoFace.src = `/display/assets/characters/pino/face/${characters.pino.face}run.png`
            pinoHands.src = `/display/assets/characters/pino/hands/${characters.pino.face}run.gif`
            pinoHat.src = `/display/assets/characters/pino/hat/${characters.pino.hat}run.png`
            pinoRobe.src = `/display/assets/characters/pino/robe/${characters.pino.robe}run.gif`
            pinoLine.src = `/display/assets/characters/pino/static/bodyLineRun.gif`

            jazFaceLine.src = `/display/assets/characters/jaz/faceLine/${characters.jaz.face}run.png`
            jazFace.src = `/display/assets/characters/jaz/face/${characters.jaz.face}run.png`
            jazHat.src = `/display/assets/characters/jaz/hat/${characters.jaz.hat}run.png`
            jazCollar.src = `/display/assets/characters/jaz/collar/${characters.jaz.collar}run.png`
            jazBody.src = `/display/assets/characters/jaz/static/bodyRun.gif`
            jazCollarLine.src = `/display/assets/characters/jaz/static/collarLineRun.png`
            break;
        case "walk":
            pinoFaceLine.src = `/display/assets/characters/pino/faceLine/${characters.pino.face}.png`
            pinoFace.src = `/display/assets/characters/pino/face/${characters.pino.face}.png`
            pinoHands.src = `/display/assets/characters/pino/hands/${characters.pino.face}.gif`
            pinoHat.src = `/display/assets/characters/pino/hat/${characters.pino.hat}.png`
            pinoRobe.src = `/display/assets/characters/pino/robe/${characters.pino.robe}.gif`
            pinoLine.src = `/display/assets/characters/pino/static/bodyLine.gif`

            jazFaceLine.src = `/display/assets/characters/jaz/faceLine/${characters.jaz.face}.png`
            jazFace.src = `/display/assets/characters/jaz/face/${characters.jaz.face}.png`
            jazHat.src = `/display/assets/characters/jaz/hat/${characters.jaz.hat}.png`
            jazCollar.src = `/display/assets/characters/jaz/collar/${characters.jaz.collar}.png`
            jazBody.src = `/display/assets/characters/jaz/static/body.gif`
            jazCollarLine.src = `/display/assets/characters/jaz/static/collarLine.png`
            break;
        case "stand":
            pinoFaceLine.src = `/display/assets/characters/pino/faceLine/${characters.pino.face}.png`
            pinoFace.src = `/display/assets/characters/pino/face/${characters.pino.face}.png`
            pinoHands.src = `/display/assets/characters/pino/hands/${characters.pino.face}.png`
            pinoHat.src = `/display/assets/characters/pino/hat/${characters.pino.hat}.png`
            pinoRobe.src = `/display/assets/characters/pino/robe/${characters.pino.robe}.png`
            pinoLine.src = `/display/assets/characters/pino/static/bodyLine.png`

            jazFaceLine.src = `/display/assets/characters/jaz/faceLine/${characters.jaz.face}.png`
            jazFace.src = `/display/assets/characters/jaz/face/${characters.jaz.face}.png`
            jazHat.src = `/display/assets/characters/jaz/hat/${characters.jaz.hat}.png`
            jazCollar.src = `/display/assets/characters/jaz/collar/${characters.jaz.collar}.png`
            jazBody.src = `/display/assets/characters/jaz/static/body.png`
            jazCollarLine.src = `/display/assets/characters/jaz/static/collarLine.png`
            break;
    }
}


function jumpChar(char, x, y) {
    switch (char) {
        case "pino":

            pinoDiv.style.left = `${x}px`;
            pinoDiv.style.top = `${y}px`;
            break;
        case "jaz":
            console.log("jump", char, x, y);
            break;
        case "duo":
            console.log("jump", char, x, y);
            break;
    }
}

function slideChar(char, x, y, time) {
    switch (char) {
        case "pino":
            moveDivSmoothly(pinoDiv, x, y, time); // Moves pinoDiv to (200, 300) over 1 second
            break;
        case "jaz":
            console.log("slide", char, x, y, time);
            break;
        case "duo":
            console.log("slide", char, x, y, time);
            break;
    }
}

function fadeChar(char, x, y, inTime, outTime) {
    switch (char) {
        case "pino":
            console.log("slide", char, x, y, inTime, outTime)
            break
        case "jaz":
            console.log("slide", char, x, y, inTime, outTime)
            break
        case "duo":
            console.log("slide", char, x, y, inTime, outTime)
            break
    }
}


function moveDivSmoothly(element, x, y, duration) {
    const startX = parseInt(element.style.left) || 0;
    const startY = parseInt(element.style.top) || 0;
    const startTime = performance.now();

    function animate(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Ensures we don't overshoot

        // Linear interpolation (LERP) for smooth movement
        const newX = startX + (x - startX) * progress;
        const newY = startY + (y - startY) * progress;

        element.style.left = `${newX}px`;
        element.style.top = `${newY}px`;

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}
