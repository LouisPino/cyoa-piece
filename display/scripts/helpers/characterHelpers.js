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
jazFace.style.zIndex = "95"
jazHat.style.zIndex = "99"
jazCollar.style.zIndex = "98"
jazBody.style.zIndex = "97"
jazCollarLine.style.zIndex = "96"
pinoFaceLine.style.zIndex = "100"
pinoFace.style.zIndex = "95"
pinoHands.style.zIndex = "97"
pinoHat.style.zIndex = "96"
pinoRobe.style.zIndex = "98"
pinoLine.style.zIndex = "99"


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



renderJaz()
renderPino()