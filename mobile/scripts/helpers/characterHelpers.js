function storeCharacters(newCharacters) {
    characters = newCharacters
    console.log(characters)
}


const jazBody = document.createElement("img")
const jazCollar = document.createElement("img")
const jazHat = document.createElement("img")
const jazFace = document.createElement("img")
const pinoBodyLine = document.createElement("img")
const pinoRobe = document.createElement("img")
const jazDiv = document.createElement("div")
const jazFaceLine = document.createElement("img")
const pinoDiv = document.createElement("div")
const pinoFaceLine = document.createElement("img")
const pinoHands = document.createElement("img")
const pinoFace = document.createElement("img")
const pinoHat = document.createElement("img")
const pinoHelmet = document.createElement("img")
const jazCollarLine = document.createElement("img")

const assetPartEls = [jazBody, jazCollar, jazCollarLine, jazFaceLine, jazFace, jazHat, pinoBodyLine, pinoRobe, pinoFaceLine, pinoHands, pinoFace, pinoHat]
const assetPartStrs = ["jazBody", "jazCollar", "jazCollarLine", "jazFaceLine", "jazFace", "jazHat", "pinoBodyLine", "pinoRobe", "pinoFaceLine", "pinoHands", "pinoFace", "pinoHat"]

jazHat.style.zIndex = "100"
jazFaceLine.style.zIndex = "99"
jazCollarLine.style.zIndex = "98"
jazCollar.style.zIndex = "97"
jazBody.style.zIndex = "96"
jazFace.style.zIndex = "95"

pinoHelmet.style.zIndex = "94"
pinoHat.style.zIndex = "90"
pinoFaceLine.style.zIndex = "94"
pinoBodyLine.style.zIndex = "93"
pinoRobe.style.zIndex = "92"
pinoHands.style.zIndex = "91"
pinoFace.style.zIndex = "89"


pinoDiv.classList.add("char-div")
pinoDiv.id = "pino-char"
jazDiv.classList.add("char-div")
jazDiv.id = "jaz-char"

let characters

function storeCharacters(newCharacters) {
    characters = newCharacters
    console.log(characters)
    // toggleAnimation("dvd")
}


function renderPino() {
    pinoDiv.appendChild(pinoFaceLine)
    pinoDiv.appendChild(pinoBodyLine)
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


async function fileExists(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.status === 200; // Explicitly check for 200 instead of using response.ok
    } catch {
        return false; // Suppresses all errors, including 404s
    }
}


async function toggleAnimation(animation) {
    if (animation === "left") {
        for (el of assetPartEls) {
            el.style.transform = "scaleX(-1)"
        }
        return
    }
    else if (animation === "right") {
        for (el of assetPartEls) {
            el.style.transform = "scaleX(1)"
        }
        return
    }
    else if (animation === "dvd") {
        // console.log(currentLocation)
        // jazFaceLine.src = `/display/assets/characters/jaz/faceline/dvd/${characters.jaz.faceline}.png`
        // jazHat.src = `/display/assets/characters/jaz/hat/dvd/${characters.jaz.hat}${currentLocation.name.toLowerCase().includes("ocean") ? "ocean" : "space"}.png` //WORK ON ME
        // jazCollarLine.style.zIndex = `/display/assets/characters/jaz/collarline/dvd/collarLine.png`
        // jazCollar.src = `/display/assets/characters/jaz/collar/dvd/${characters.jaz.collar}.png`
        // jazBody.src = `/display/assets/characters/jaz/body/dvd/body.png`
        // jazFace.src = `/display/assets/characters/jaz/face/dvd/${characters.jaz.face}.png`

        // pinoFaceLine.src = `/display/assets/characters/pino/faceline/dvd/${characters.pino.faceline}.png`
        // pinoBodyLine.src = `/display/assets/characters/pino/bodyline/dvd/bodyLine.png`
        // pinoRobe.src = `/display/assets/characters/pino/robe/dvd/${characters.pino.robe}.png`
        // pinoHands.src = `/display/assets/characters/pino/hands/dvd/${characters.pino.hands}.png`
        // pinoHat.src = `/display/assets/characters/pino/hat/dvd/${characters.pino.hat}.png`
        // pinoFace.src = `/display/assets/characters/pino/face/dvd/${characters.pino.face}.png`
        // pinoHelmet.src = `/display/assets/characters/pino/helmet/${currentLocation.name.toLowerCase().includes("ocean") ? "ocean" : "space"}.png`
        // pinoDiv.appendChild(pinoHelmet)
        return
    }

    for (let i = 0; i < assetPartEls.length; i++) {
        const part = assetPartStrs[i]; // e.g., "jazBody"
        const character = part.startsWith("jaz") ? "jaz" : "pino";
        const key = part.replace(character, "").toLowerCase(); // Extracts the property name (e.g., "faceLine" -> "faceLine")
        const pngPath = `/display/assets/characters/${character}/${key}/${animation}/${characters[character][key]}.png`;
        const gifPath = `/display/assets/characters/${character}/${key}/${animation}/${characters[character][key]}.gif`;
        assetPartEls[i].src = await fileExists(pngPath) ? pngPath : gifPath;
    }
}



function jumpChar(char, x, y) {
    switch (char) {
        case "pino":
            pinoDiv.style.left = `${x}px`;
            pinoDiv.style.top = `${y}px`;
            break;
        case "jaz":
            jazDiv.style.left = `${x}px`;
            jazDiv.style.top = `${y}px`;
            break;
        case "duo":
            pinoDiv.style.left = `${x}px`;
            pinoDiv.style.top = `${y}px`;
            jazDiv.style.left = `${x}px`;
            jazDiv.style.top = `${y}px`;
            break;
    }
}



function fadeChar(char, x, y, outTime, inTime) {
    let elements = [];

    switch (char) {
        case "pino":
            elements.push(pinoDiv);
            break;
        case "jaz":
            elements.push(jazDiv);
            break;
        case "duo":
            elements.push(pinoDiv, jazDiv);
            break;
        default:
            return;
    }

    elements.forEach(element => {
        if (!element) return;
        // Fade out
        element.style.transition = `opacity ${outTime}ms`;
        element.style.opacity = 0;

        setTimeout(() => {
            // Move the element
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;

            // Fade in
            element.style.transition = `opacity ${inTime}ms`;
            element.style.opacity = 1;
        }, outTime);
    });
}

function slideChar(char, x, y, time) {
    switch (char) {
        case "pino":
            moveDivSmoothly(pinoDiv, x, y, time); // Moves pinoDiv to (200, 300) over 1 second
            break;
        case "jaz":
            moveDivSmoothly(jazDiv, x, y, time); // Moves pinoDiv to (200, 300) over 1 second
            break;
        case "duo":
            moveDivSmoothly(pinoDiv, x, y, time); // Moves pinoDiv to (200, 300) over 1 second
            moveDivSmoothly(jazDiv, x, y, time); // Moves pinoDiv to (200, 300) over 1 second
            break;
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