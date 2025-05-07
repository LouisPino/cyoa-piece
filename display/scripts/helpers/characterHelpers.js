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
const jazCollarLine = document.createElement("img")
const pinoHelmet = document.createElement("img")
const pinoWeapon = document.createElement("img")
const ipadEl = document.createElement("img")
const ipadLineEl = document.createElement("img")
const jazWeapon = document.createElement("img")
pinoHelmet.style.zIndex = "94"
pinoWeapon.src = "/display/assets/characters/pino/weapon.png"
pinoWeapon.style.zIndex = "101"
pinoWeapon.id = "pino-weapon"

ipadEl.style.zIndex = "101"
ipadLineEl.style.zIndex = "102"

ipadLineEl.src = `/display/assets/characters/pino/ipad/line.png`

jazWeapon.src = "/display/assets/characters/jaz/weapon.png"
jazWeapon.style.zIndex = "101"
jazWeapon.id = "jaz-weapon"


const pinoCharSizeCtr = document.createElement("div")
pinoCharSizeCtr.classList.add("char-size-ctr")
pinoCharSizeCtr.id = "pino-size-ctr"
const jazCharSizeCtr = document.createElement("div")
jazCharSizeCtr.classList.add("char-size-ctr")
jazCharSizeCtr.id = "jaz-size-ctr"


const assetPartEls = [jazBody, jazCollar, jazCollarLine, jazFaceLine, jazFace, jazHat, pinoBodyLine, pinoRobe, pinoFaceLine, pinoHands, pinoFace, pinoHat, pinoHelmet]
const assetPartStrs = ["jazBody", "jazCollar", "jazCollarLine", "jazFaceLine", "jazFace", "jazHat", "pinoBodyLine", "pinoRobe", "pinoFaceLine", "pinoHands", "pinoFace", "pinoHat", "pinoHelmet"]

defaultZIndex()

pinoDiv.classList.add("char-div")
pinoDiv.id = "pino-char"
jazDiv.classList.add("char-div")
jazDiv.id = "jaz-char"

let characters
let currentAnimation
let previousAnimation
let randomizeAndRun;

function storeCharacters(newCharacters) {
    characters = newCharacters
}


function renderPino(location) {
    pinoDiv.appendChild(pinoFaceLine)
    pinoDiv.appendChild(pinoBodyLine)
    pinoDiv.appendChild(pinoRobe)
    pinoDiv.appendChild(pinoHands)
    pinoDiv.appendChild(pinoHat)
    pinoDiv.appendChild(pinoFace)
    pinoCharSizeCtr.appendChild(pinoDiv)
    if (!location) {
        document.getElementById("display-main").appendChild(pinoCharSizeCtr)
        pinoCharSizeCtr.classList.remove("float-only")

    } else if (location === "river") {
        document.getElementById("boat-ctr").appendChild(pinoCharSizeCtr)
    } else if (location === "welcome") {
        document.getElementById("intro-gif-page").appendChild(pinoCharSizeCtr)
    }
}

function renderJaz(location) {
    jazDiv.appendChild(jazFaceLine)
    jazDiv.appendChild(jazBody)
    jazDiv.appendChild(jazCollarLine)
    jazDiv.appendChild(jazCollar)
    jazDiv.appendChild(jazHat)
    jazDiv.appendChild(jazFace)
    jazCharSizeCtr.appendChild(jazDiv)
    if (!location) {
        document.getElementById("display-main").appendChild(jazCharSizeCtr)
        jazCharSizeCtr.classList.remove("float-only")
    } else if (location === "river") {
        const boatDiv = document.getElementById("boat-ctr")
        boatDiv.appendChild(jazCharSizeCtr)
    } else if (location === "welcome") {
        document.getElementById("intro-gif-page").appendChild(jazCharSizeCtr)
    }
}


function removePino() {
    pinoCharSizeCtr.remove()
}


function removeJaz() {
    jazCharSizeCtr.remove()
}

async function fileExists(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.status === 200; // Explicitly check for 200 instead of using response.ok
    } catch {
        return false; // Suppresses all errors, including 404s
    }
}

async function toggleAnimation(animation, charName) {
    previousAnimation = currentAnimation
    currentAnimation = animation
    let charNames = []
    if (charName != "pino" && charName != "jaz") {
        charNames = ["pino", "jaz"]
    } else {
        charNames = [charName]
    }



    if (animation === "dvd") {
        if (charNames.includes("jaz")) {
            jazFaceLine.src = `/display/assets/characters/jaz/faceline/dvd/${characters.j.faceline}.png`
            jazHat.src = `/display/assets/characters/jaz/hat/dvd/${characters.j.hat}${currentLocation.name === "twilight" ? "ocean" : "space"}.png` //WORK ON ME
            jazCollarLine.src = `/display/assets/characters/jaz/collarline/dvd/collarLine.png`
            jazCollar.src = `/display/assets/characters/jaz/collar/dvd/${characters.j.collar}.png`
            jazBody.src = `/display/assets/characters/jaz/body/dvd/body.png`
            jazFace.src = `/display/assets/characters/jaz/face/dvd/${characters.j.face}.png`
            jazFaceLine.style.zIndex = "99"
            jazHat.style.zIndex = "100"
        }
        if (charNames.includes("pino")) {
            pinoFaceLine.src = `/display/assets/characters/pino/faceline/dvd/${characters.p.faceline}.png`
            pinoBodyLine.src = `/display/assets/characters/pino/bodyline/dvd/bodyLine.png`
            pinoRobe.src = `/display/assets/characters/pino/robe/dvd/${characters.p.robe}.png`
            pinoHands.src = `/display/assets/characters/pino/hands/dvd/${characters.p.hands}.png`
            pinoHat.src = `/display/assets/characters/pino/hat/dvd/${characters.p.hat}.png`
            pinoFace.src = `/display/assets/characters/pino/face/dvd/${characters.p.face}.png`
            pinoHelmet.src = `/display/assets/characters/pino/helmet/${currentLocation.name === "twilight" ? "ocean" : "space"}.png`
            pinoDiv.appendChild(pinoHelmet)
        }
        return
    } else if (animation === "froggy") {
        if (charNames.includes("jaz")) {
            pinoFaceLine.remove()
            pinoHands.remove()
            pinoBodyLine.style.zIndex = "93"
            pinoRobe.style.zIndex = "91"
            pinoHat.style.zIndex = "92"
            pinoHelmet.remove()
        }
        if (charNames.includes("pino")) {
            jazHat.style.zIndex = "100"
            jazCollarLine.style.zIndex = "99"//Collar Line
            jazCollar.style.zIndex = "98"//Collar Color
            jazFaceLine.style.zIndex = "97"//Body Line
            jazBody.style.zIndex = "96"//Body Color
            jazFace.style.zIndex = "95"//Chair
        }
    } else if (animation === "jump") {
        if (charNames.includes("pino")) {
            pinoHands.remove()
        }
    } else if (animation === "madlib") {
        if (charNames.includes("pino")) {
            pinoHands.remove()
        }
    }
    else if (animation === "robeAura") {
        setTimeout(() => {
            pinoBodyLine.src = `/display/assets/characters/pino/bodyline/robeAura/${characters.p.robe}.png`
            pinoBodyLine.style.zIndex = "101"
            pinoFace.style.zIndex = "100"
            pinoHat.style.zIndex = "99"
            pinoRobe.style.zIndex = "98"

        }, 10)
    }
    else {
        pinoDiv.appendChild(pinoHands)
        pinoDiv.appendChild(pinoFaceLine)
        pinoHelmet.remove()
        jazDiv.appendChild(jazFaceLine)
        defaultZIndex()
    }

    if (animation === "run") {
        for (const child of jazDiv.childNodes) {
            child.style.transformOrigin = "60%"
        }
    } else {
        for (const child of jazDiv.childNodes) {
            child.style.transformOrigin = "75%"
        }
    }

    for (let i = 0; i < assetPartEls.length; i++) {
        const part = assetPartStrs[i]; // e.g., "jazBody"
        const character = part.startsWith("jaz") ? "jaz" : "pino";
        if (character === "jaz" && !charNames.includes("jaz")) {
            continue
        }
        if (character === "pino" && !charNames.includes("pino")) {
            continue
        }
        const key = part.replace(character, "").toLowerCase(); // Extracts the property name (e.g., "faceLine" -> "faceLine")
        const pngPath = `/display/assets/characters/${character}/${key}/${animation}/${characters[character[0]][key]}.png`;
        const gifPath = `/display/assets/characters/${character}/${key}/${animation}/${characters[character[0]][key]}.gif`;
        assetPartEls[i].src = await fileExists(pngPath) ? pngPath : gifPath;
        if (!assetPartEls[i].src) {
            assetPartEls[i]?.remove()
        }
    }

    if (animation === "vs") {
        pinoHands.remove()
    }
    if (animation === "jump") {
        pinoHands.remove()
    }
    if (animation === "weapon") {
        if (charNames.includes("jaz")) {
            jazDiv.appendChild(jazWeapon)
            jazCharSizeCtr.style.transformOrigin = "50% 50%"

        }
        if (charNames.includes("pino")) {
            pinoDiv.appendChild(pinoWeapon)
            pinoHands.remove()
            pinoCharSizeCtr.style.transformOrigin = "50% 50%"
        }
    } else {
        if (charNames.includes("jaz")) {
            jazWeapon.remove()
        }
        if (charNames.includes("pino")) {
            pinoWeapon.remove()
        }
    }

    if (animation === "map") {
        if (charNames.includes("pino")) {
            ipadEl.src = `/display/assets/characters/pino/ipad/${characters.p.device}.png`
            pinoDiv.appendChild(ipadEl)
            pinoDiv.appendChild(ipadLineEl)
            pinoHands.remove()
        }
    } else {
        if (charNames.includes("pino")) {
            ipadEl.remove()
            ipadLineEl.remove()
        }
    }


    if (animation === "weapon" || animation === "weaponWalk" || animation === "map") {
        if (charNames.includes("jaz")) {
            setTransformOrigin(jazDiv, "50% 50%");
        }
        if (charNames.includes("pino")) {
            setTransformOrigin(pinoDiv, "50% 50%");
        }
    } else {
        if (charNames.includes("jaz")) {
            setTransformOrigin(jazDiv, "75%");
        }
        if (charNames.includes("pino")) {
            setTransformOrigin(pinoDiv, "25%");
        }
    }

}


function setTransformOrigin(div, origin) {
    [...div.children].forEach(child => {
        child.style.transformOrigin = origin;
    });
}

function jumpChar(char, x, y) {
    switch (char) {
        case "pino":
            pinoCharSizeCtr.style.left = `${x}px`;
            pinoCharSizeCtr.style.top = `${y}px`;
            break;
        case "jaz":
            jazCharSizeCtr.style.left = `${x}px`;
            jazCharSizeCtr.style.top = `${y}px`;
            break;
        case "duo":
            pinoCharSizeCtr.style.left = `${x}px`;
            pinoCharSizeCtr.style.top = `${y}px`;
            jazCharSizeCtr.style.left = `${x}px`;
            jazCharSizeCtr.style.top = `${y}px`;
            break;
        case "npc":
            document.getElementById("npc-size-ctr").style.left = `${x}px`;
            document.getElementById("npc-size-ctr").style.top = `${y}px`;
            break;
        default:
            char.style.left = `${x}px`;
            char.style.top = `${y}px`;
    }
}




function fadeChar(char, x, y, outTime, inTime) {
    let elements = [];
    switch (char) {
        case "pino":
            elements.push(pinoCharSizeCtr);
            break;
        case "jaz":
            elements.push(jazCharSizeCtr);
            break;
        case "duo":
            elements.push(pinoCharSizeCtr, jazCharSizeCtr);
            break;
        case "npc":
            elements.push(document.getElementById("npc"));
            break;
        default:
            elements.push(char);
            break;

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


function landCharBounce(char, x, y, startYArg) {
    let elements = [];

    switch (char) {
        case "pino":
            elements.push(pinoCharSizeCtr);
            break;
        case "jaz":
            elements.push(jazCharSizeCtr);
            break;
        case "duo":
            elements.push(pinoCharSizeCtr, jazCharSizeCtr);
            break;
        case "npc":
            elements.push(document.getElementById("npc"));
            break;
        default:
            elements.push(char)
            break;
    }

    elements.forEach(element => {
        if (!element) return;

        // Start above the screen
        const startY = startYArg ? startYArg : y - 300;

        // Reset
        element.style.transition = "none";
        // element.style.transform = "none";
        element.style.opacity = 1;
        element.style.left = `${x}px`;
        element.style.top = `${startY}px`;

        // Trigger reflow
        void element.offsetWidth;

        // Fall to the target position
        element.style.transition = "top 400ms ease-in";
        element.style.top = `${y}px`;

        // Begin bounce after landing
        setTimeout(() => {
            // Helper to bounce down/up with diminishing distance
            const bounceSequence = [
                { offset: 30, duration: 150 },
                { offset: 20, duration: 100 },
                { offset: 10, duration: 80 },
                { offset: 5, duration: 60 }
            ];

            let totalDelay = 0;

            bounceSequence.forEach(({ offset, duration }, i) => {
                setTimeout(() => {
                    element.style.transition = `transform ${duration}ms ease-out`;
                    element.style.transform = `${element.style.transform || ""} translateY(-${offset}px)`.trim();

                    setTimeout(() => {
                        element.style.transition = `transform ${duration}ms ease-in`;
                        element.style.transform = `${element.style.transform || ""} translateY(${offset}px)`.trim();
                    }, duration);
                }, totalDelay);

                totalDelay += duration * 2;
            });

        }, 400); // wait for initial fall
    });
}
function landChar(char, x, y, startYArg) {
    let elements = [];

    switch (char) {
        case "pino":
            elements.push(pinoCharSizeCtr);
            break;
        case "jaz":
            elements.push(jazCharSizeCtr);
            break;
        case "duo":
            elements.push(pinoCharSizeCtr, jazCharSizeCtr);
            break;
        case "npc":
            elements.push(document.getElementById("npc"));
            break;
        default:
            elements.push(char)
            break;
    }

    elements.forEach(element => {
        if (!element) return;

        // Get current transform values
        const computedStyle = getComputedStyle(element);
        const transform = computedStyle.transform;
        let scaleX = 1, scaleY = 1;
        let otherTransforms = '';

        if (transform && transform !== 'none') {
            const match = transform.match(/matrix\(([^)]+)\)/);
            if (match) {
                const values = match[1].split(',').map(parseFloat);
                scaleX = values[0];
                scaleY = values[3];
            } else {
                // if using something like rotate(...) scale(...) translate(...)
                otherTransforms = transform;
            }
        }

        const startY = startYArg ? startYArg : y - 600;

        // Set starting position
        element.style.transition = "none";
        element.style.left = `${x}px`;
        element.style.top = `${startY}px`;

        // Trigger reflow
        void element.offsetWidth;

        // Fall down to final Y position
        element.style.transition = "top 400ms ease-in";
        element.style.top = `${y}px`;

        // Wobble after landing
        setTimeout(() => {
            const wobbleSequence = [
                { sx: 1.2, sy: 0.8, duration: 150 },
                { sx: 0.9, sy: 1.1, duration: 125 },
                { sx: 1.05, sy: 0.95, duration: 100 },
                { sx: 1, sy: 1, duration: 75 }
            ];

            let delay = 0;

            wobbleSequence.forEach(({ sx, sy, duration }) => {
                setTimeout(() => {
                    element.style.transition = `transform ${duration}ms ease`;
                    if (otherTransforms) {
                        element.style.transform = `${otherTransforms} scale(${scaleX * sx}, ${scaleY * sy})`;
                    } else {
                        element.style.transform = `scale(${scaleX * sx}, ${scaleY * sy})`;
                    }
                }, delay);
                delay += duration;
            });
        }, 400);
    });
}



function flyInRotateChar(char, x, y) {
    let elements = [];
    toggleAnimation("jump", char)
    setTimeout(() => {
        toggleAnimation(previousAnimation)
    }, 2400)
    switch (char) {
        case "pino":
            elements.push(pinoCharSizeCtr);
            break;
        case "jaz":
            jazCharSizeCtr.style.transformOrigin = "40% 50%"
            elements.push(jazCharSizeCtr);
            break;
        case "duo":
            elements.push(pinoCharSizeCtr, jazCharSizeCtr);
            break;
        case "npc":
            elements.push(document.getElementById("npc"));
            break;
    }

    elements.forEach(element => {
        if (!element) return;

        // Get current position
        const currentX = parseInt(element.style.left || 0);
        const startY = y - 300;

        // Set initial position
        element.style.transition = "none";
        // element.style.animation = "";
        element.style.left = `${currentX}px`;
        element.style.top = `${startY}px`;

        // Trigger reflow
        void element.offsetWidth;
        element.style.transition = "left 2000ms ease-in-out, transform 2000ms ease-in-out";
        let originalTransform = element.style.transform
        element.style.transform = `${originalTransform || ""} rotate(1080deg)`.trim();

        // Move horizontally and rotate
        element.style.left = `${x}px`;
        // element.style.animation = "rotate360 .5s linear infinite";

        // After horizontal movement, move up to final y
        setTimeout(() => {
            // element.style.animation = "";
            landChar(char, x, y, startY)
            setTimeout(() => {

                jazCharSizeCtr.style.transformOrigin = "40% 80%"
            }, 1000)
        }, 2000);
    });
}



function slideChar(char, x, y, time) {
    switch (char) {
        case "pino":
            moveDivSmoothly(pinoCharSizeCtr, x, y, time); // Moves pinoDiv to (200, 300) over 1 second
            break;
        case "jaz":
            moveDivSmoothly(jazCharSizeCtr, x, y, time); // Moves pinoDiv to (200, 300) over 1 second
            break;
        case "duo":
            moveDivSmoothly(pinoCharSizeCtr, x, y, time); // Moves pinoDiv to (200, 300) over 1 second
            moveDivSmoothly(jazCharSizeCtr, x, y, time); // Moves pinoDiv to (200, 300) over 1 second
            break;
        case "npc":
            moveDivSmoothly(document.getElementById("npc-size-ctr"), x, y, time); // Moves pinoDiv to (200, 300) over 1 second
            break;
        default:
            moveDivSmoothly(char, x, y, time); // Moves pinoDiv to (200, 300) over 1 second
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

function flipChar(direction, char) {
    switch (char) {
        case "pino":
            for (el of assetPartEls) {
                if (el.src.includes("pino")) {
                    el.style.transform = `scaleX(${direction === "left" ? -1 : 1})`
                    if (currentAnimation === "weapon") {
                        pinoWeapon.style.transform = `scaleX(${direction === "left" ? -1 : 1})`
                    }
                }
            }
            break;
        case "jaz":
            for (el of assetPartEls) {
                if (el.src.includes("jaz")) {
                    el.style.transform = `scaleX(${direction === "left" ? -1 : 1})`
                    if (currentAnimation === "weapon") {
                        jazWeapon.style.transform = `scaleX(${direction === "left" ? -1 : 1})`
                    }
                }
            }
            break;
        case "duo":
            for (el of assetPartEls) {
                el.style.transform = `scaleX(${direction === "left" ? -1 : 1})`
            }
            break;
        case "npc":
            let npcEl = document.getElementById("npc")
            npcEl.style.transform = `scaleX(${direction === "left" ? -1 : 1})`
            return
    }
}

function hopChar(char, height = 200, duration = 700, jump = false) {
    const start = performance.now();
    if (jump) {
        if (jump != "false") {
            toggleAnimation("jump", char)
            setTimeout(() => {
                toggleAnimation(previousAnimation)
            }, duration + 15)
        }

    }
    const divs = [];
    switch (char) {
        case "pino":
            divs.push(pinoCharSizeCtr);
            break;
        case "jaz":
            divs.push(jazCharSizeCtr);
            break;
        case "duo":
            divs.push(pinoCharSizeCtr, jazCharSizeCtr);
            break;
        case "npc":
            divs.push(document.getElementById("npc"));
            break;
        default:
            divs.push(char);
            break;
    }

    const originalTops = divs.map(div => parseFloat(getComputedStyle(div).top) || 0);

    function animate(time) {
        const elapsed = time - start;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out then in (simulate gravity): y = -4h * (x - 0.5)^2 + h
        const yOffset = -4 * height * Math.pow(progress - 0.5, 2) + height;

        divs.forEach((div, i) => {
            div.style.position = 'absolute';
            div.style.top = `${originalTops[i] - yOffset}px`;
        });

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);

}



function shakeChar(char, time, intensity = 10) {
    const styleId = `shake-style-${intensity}`;

    // Only create a new style element if it doesn't exist
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.innerHTML = `
            @keyframes shake-${intensity} {
                0% { transform: translateX(0); }
                25% { transform: translateX(${intensity}px); }
                50% { transform: translateX(0); }
                75% { transform: translateX(-${intensity}px); }
                100% { transform: translateX(0); }
            }
            .shaking-${intensity} {
                animation: shake-${intensity} 100ms linear infinite;
            }
        `;
        document.head.appendChild(style);
    }

    function applyShake(el) {
        const className = `shaking-${intensity}`;
        el.classList.add(className);
        setTimeout(() => {
            el.classList.remove(className);
        }, time);
    }

    switch (char) {
        case "pino":
            applyShake(pinoDiv);
            break;
        case "jaz":
            applyShake(jazDiv);
            break;
        case "duo":
            shakeChar("pino", time, intensity);
            shakeChar("jaz", time, intensity);
            break;
        case "npc":
            applyShake(document.getElementById("npc"));
            break;
        default:
            applyShake(char);
            break
    }
}


function changeSize(char, time, targetSize) {
    let els = [];
    switch (char) {
        case "pino":
            el = pinoCharSizeCtr
            break;
        case "jaz":
            el = jazCharSizeCtr
            break;
        case "duo":
            changeSize("pino", time, targetSize)
            changeSize("jaz", time, targetSize)
            break;
        case "npc":
            el = document.getElementById("npc-size-ctr")
            break;
        default:
            el = char;
            break


    }


    el.style.transition = `transform ${time}ms ease-in-out`;
    el.style.transform = `scale(${targetSize})`;


    setTimeout(() => {
        els.forEach(el => {
            el.style.transition = "";
        });
    }, time);
}

let congaRunning = false;
let congaInterval;
let npcClones = [];
let trail = [];
let npcAnchorPos = null; // stores starting position of the original NPC
let currentAmount = 0; // track the current number of clones
let currentSpeed = 0; // track the current speed

function congaLine(state, amount, speed) {
    const container = document.body;
    const originalNpc = document.getElementById("npc-size-ctr");

    if (state === 1) {
        // If already running, update parameters only
        if (congaRunning) {
            // Update clones if amount changed
            if (amount !== currentAmount) {
                const difference = amount - currentAmount;
                if (difference > 0) {
                    for (let i = 0; i < difference; i++) {
                        const clone = originalNpc.cloneNode(true);
                        clone.id = `npcClone${npcClones.length}`;
                        clone.style.position = 'absolute';
                        clone.style.top = `${npcAnchorPos.top}px`;
                        clone.style.left = `${npcAnchorPos.left}px`;
                        clone.style.pointerEvents = "none";
                        container.appendChild(clone);
                        npcClones.push(clone);
                    }
                } else {
                    for (let i = 0; i < -difference; i++) {
                        const clone = npcClones.pop();
                        clone.remove();
                    }
                }
                currentAmount = amount;
            }

            // If speed changed, recalculate interval
            if (speed !== currentSpeed) {
                currentSpeed = speed;
                const trailSpacing = Math.floor(currentSpeed * 2);
                clearInterval(congaInterval);
                congaInterval = setInterval(() => {
                    const npcPos = {
                        top: originalNpc.offsetTop,
                        left: originalNpc.offsetLeft
                    };
                    trail.unshift(npcPos);
                    const maxTrailLength = currentAmount * trailSpacing + 1;
                    if (trail.length > maxTrailLength) {
                        trail.pop();
                    }

                    npcClones.forEach((clone, i) => {
                        const index = (i + 1) * trailSpacing;
                        if (trail[index]) {
                            clone.style.top = `${trail[index].top}px`;
                            clone.style.left = `${trail[index].left}px`;
                        }
                    });
                }, 16);
            }

            return;
        }

        // === Initial startup ===
        congaRunning = true;
        currentAmount = amount;
        currentSpeed = speed;

        // Store original position if not already stored
        if (!npcAnchorPos) {
            npcAnchorPos = {
                top: originalNpc.offsetTop,
                left: originalNpc.offsetLeft
            };
        }

        // Reset NPC to anchor to prevent drifting start points
        originalNpc.style.position = 'absolute';
        originalNpc.style.top = `${npcAnchorPos.top}px`;
        originalNpc.style.left = `${npcAnchorPos.left}px`;

        // Create clones
        for (let i = 0; i < amount; i++) {
            const clone = originalNpc.cloneNode(true);
            clone.id = `npcClone${i}`;
            clone.style.position = 'absolute';
            clone.style.top = `${npcAnchorPos.top}px`;
            clone.style.left = `${npcAnchorPos.left}px`;
            clone.style.pointerEvents = "none";
            container.appendChild(clone);
            npcClones.push(clone);
        }

        const trailSpacing = Math.floor(speed * 2);
        trail = [];

        congaInterval = setInterval(() => {
            const npcPos = {
                top: originalNpc.offsetTop,
                left: originalNpc.offsetLeft
            };
            trail.unshift(npcPos);
            const maxTrailLength = amount * trailSpacing + 1;
            if (trail.length > maxTrailLength) {
                trail.pop();
            }

            npcClones.forEach((clone, i) => {
                const index = (i + 1) * trailSpacing;
                if (trail[index]) {
                    clone.style.top = `${trail[index].top}px`;
                    clone.style.left = `${trail[index].left}px`;
                }
            });
        }, 16);
    }

    else if (state === 0 && congaRunning) {
        congaRunning = false;
        clearInterval(congaInterval);
        npcClones.forEach(clone => clone.remove());
        npcClones = [];
        trail = [];
        npcAnchorPos = null;
        currentAmount = 0;
        currentSpeed = 0;
    }
}



function defaultZIndex() {
    jazFaceLine.style.zIndex = "100"
    jazHat.style.zIndex = "99"
    jazCollarLine.style.zIndex = "98"
    jazCollar.style.zIndex = "97"
    jazBody.style.zIndex = "96"
    jazFace.style.zIndex = "95"

    pinoFaceLine.style.zIndex = "94"
    pinoBodyLine.style.zIndex = "93"
    pinoRobe.style.zIndex = "92"
    pinoHands.style.zIndex = "91"
    pinoHat.style.zIndex = "90"
    pinoFace.style.zIndex = "89"
}



function stopGifRandomizer() {
    clearInterval(randomizeAndRun);
}
const fieldsPino = ["color", "hat", "robe"]
const fieldsJaz = ["color", "hat", "collar"]

function gifRandomizer() {
    if (!randomizeAndRun) {
        randomizeAndRun = setInterval(() => {
            const randomFieldPino = fieldsPino[Math.floor(Math.random() * fieldsPino.length)];
            const randomFieldJaz = fieldsJaz[Math.floor(Math.random() * fieldsJaz.length)];

            if (randomFieldPino === "color") {
                characters.p["color"] = characters.p["color"] === 'A' ? 'B' : 'A';
                characters.p["face"] = characters.p["face"] === 'A' ? 'B' : 'A';
                characters.p["faceline"] = characters.p["faceline"] === 'A' ? 'B' : 'A';
                characters.p["hands"] = characters.p["hands"] === 'A' ? 'B' : 'A';
            } else {
                characters.p[randomFieldPino] = characters.p[randomFieldPino] === 'A' ? 'B' : 'A';
            }
            if (randomFieldJaz === "color") {
                characters.j["color"] = characters.j["color"] === 'A' ? 'B' : 'A';
                characters.j["face"] = characters.j["face"] === 'A' ? 'B' : 'A';
                characters.j["faceline"] = characters.j["faceline"] === 'A' ? 'B' : 'A';
                characters.j["hands"] = characters.j["hands"] === 'A' ? 'B' : 'A';
            } else {
                characters.p[randomFieldJaz] = characters.p[randomFieldJaz] === 'A' ? 'B' : 'A';
            }
            toggleAnimation("run", "duo")
        }, 300)
    }
}



function getInBoat(boatRockerEl) {
    removePino()
    removeJaz()
    toggleAnimation("front", "duo")
    jumpChar(boatRockerEl, -1500, 0)
    boatRockerEl.style.visibility = "visible"
    pinoCharSizeCtr.style.left = "20%"
    pinoCharSizeCtr.style.top = "-5%"
    jazCharSizeCtr.style.left = "30%"
    jazCharSizeCtr.style.top = "-5%"
    pinoCharSizeCtr.classList.add("float-only")
    jazCharSizeCtr.classList.add("float-only")
    renderJaz("river")
    renderPino("river")
}


function getOutBoat(boatRockerEl) {
    jumpChar(boatRockerEl, 3000, 3000)
    removePino()
    removeJaz()
    boatRockerEl.style.visibility = "hidden"
    pinoCharSizeCtr.style.left = "0"
    pinoCharSizeCtr.style.top = "0"
    jazCharSizeCtr.style.left = "0"
    jazCharSizeCtr.style.top = "0"
    pinoCharSizeCtr.classList.remove("float-only")
    jazCharSizeCtr.classList.remove("float-only")
    jumpChar("duo", 3000, 3000)
    renderJaz()
    renderPino()
}