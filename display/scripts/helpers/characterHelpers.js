function renderPino(characters) {
    const pinoDiv = document.createElement("div")
    const pinoFace = document.createElement("img")
    pinoFace.src = `/display/assets/characters/pino/face/${characters.pino.face}.png`
    const pinoHands = document.createElement("img")
    pinoHands.src = `/display/assets/characters/pino/hands/${characters.pino.hands}.png`
    const pinoHat = document.createElement("img")
    pinoHat.src = `/display/assets/characters/pino/hat/${characters.pino.hat}.png`
    const pinoRobe = document.createElement("img")
    pinoRobe.src = `/display/assets/characters/pino/robe/${characters.pino.robe}.png`
    const pinoLine = document.createElement("img")
    pinoLine.src = `/display/assets/characters/pino/static/bodyLine.png`
    pinoDiv.appendChild(pinoFace)
    pinoDiv.appendChild(pinoHands)
    pinoDiv.appendChild(pinoHat)
    pinoDiv.appendChild(pinoRobe)
    pinoDiv.appendChild(pinoLine)


    document.body.appendChild(pinoDiv)
}
function renderJaz(characters) {
    console.log(characters.jaz)
}
function renderDuo(characters) {
    console.log(characters)
}