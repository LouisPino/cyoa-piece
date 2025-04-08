function changeBg(newSrc) {
    const container = document.getElementById("sandbox-bg-container");
    // Grab the current background image (if any)
    const oldImg = container.querySelector("sandbox-bg");

    // Create the new image element
    const newImg = document.createElement("img");
    newImg.classList.add("sandbox-bg");
    newImg.id = "sandbox-bg"
    // Start off invisible and heavily blurred
    newImg.style.opacity = 0;
    newImg.style.filter = "blur(10px)";
    newImg.src = `display/assets/backgrounds/${newSrc}`;
    // Append the new image into the container (above the old image)
    container.appendChild(newImg);

    // Force a reflow to ensure the initial state is applied
    newImg.getBoundingClientRect();

    // Slight delay before starting the transition
    setTimeout(() => {
        // Fade in and remove blur on the new image
        newImg.style.opacity = 1;
        newImg.style.filter = "blur(0)";

        // Fade out and add blur on the old image (if it exists)
        if (oldImg) {
            oldImg.style.opacity = 0;
            oldImg.style.filter = "blur(10px)";
        }
    }, 50); // 50ms delay helps ensure the browser applies the initial styles

    // After the transition ends on the new image, remove the old image
    newImg.addEventListener("transitionend", function handler(e) {
        // Check that the opacity transition finished
        if (e.propertyName === "opacity" && oldImg) {
            container.removeChild(oldImg);
            newImg.removeEventListener("transitionend", handler);
        }
    });
}

function changeDialogueSprite(newSrc) {
    const spriteEl = document.getElementById("sandbox-dialogue-sprite");
    spriteEl.src = `/display/assets/npcs/${newSrc}.png`
}

function changeNPCSrc(npcName) {
    const npcEl = document.getElementById("npc");
    if (npcName === "none") {
        npcEl.style.visibility = "hidden"
        return
    } else {
        npcEl.style.visibility = "visible"

    }
    npcEl.src = `/display/assets/npcs/${npcName}/full.png`
}




let iManual = 0; // Index for texts array
let textsArr
let textBodyElGlobal

function typeTextManual(texts, textBodyEl) {
    textsArr = texts
    textBodyElGlobal = textBodyEl
}

function nextLine() {
    const text = textsArr[iManual];
    let j = 0; // Index for characters in the current text

    function typeCharacter() {
        if (j < text.length) {
            textBodyElGlobal.innerHTML += text[j];
            j++;
            setTimeout(typeCharacter, 50); // Type the next character
        } else {
            textBodyElGlobal.innerHTML += "<br> <br>"; // Add a line break after the text
            iManual++;
        }
    }
    typeCharacter(); // Start typing the current text
}


const outs = ["slide-down", "slide-out", "slide-out-fast", "fade-out-fast",]
const ins = ["slide-up", "slide-in", "slide-in-fast", "fade-in-fast"]

function toggleBox(arg, characters) {
    const boxEl = document.getElementById("sandbox-dialogue-box")
    const spriteEl = document.getElementById("sandbox-dialogue-sprite")
    const textBodyEl = document.querySelector(".text-body")
    boxEl.classList.remove(...outs)
    textBodyEl.classList.remove(...outs)
    spriteEl.classList.remove(...outs)
    if (arg === "none") {
        boxEl.style.visibility = "hidden"
        spriteEl.style.visibility = "hidden"
        textBodyEl.style.visibility = "hidden"
        clearText()
        return
    }
    if (arg === "sprite") {
        boxEl.src = "/display/assets/dialogue/boxes/SpriteBox.png"
        moveText("sprite")
    } else {
        let newSrc = "/display/assets/dialogue/boxes/DialogueBox.png"
        let newColor = "#ffbd92"
        if (arg === "pino") {
            newSrc = "/display/assets/dialogue/boxes/PinoDialogueBox.png"
            newColor = "#c5abfc"
        } else if (arg === "duo") {
            newSrc = `/display/assets/dialogue/boxes/DuoDialogueBox${characters.j.hat}.png`
            newColor = "#c5abfc"
        } else if (arg === "jaz") {
            newSrc = `/display/assets/dialogue/boxes/JazDialogueBox${characters.j.hat}.png`
            newColor = "#c5abfc"
        }
        boxEl.src = newSrc
        textBodyEl.style.color = newColor
        moveText("dialogue")
    }
}

function slideBoxY(arg, characters) {
    const boxEl = document.getElementById("sandbox-dialogue-box");
    const spriteEl = document.getElementById("sandbox-dialogue-sprite");
    const textBodyEl = document.querySelector(".text-body");

    if (arg === "sprite") {
        boxEl.src = "/display/assets/dialogue/boxes/SpriteBox.png"
        moveText("sprite")
        boxEl.classList.remove(...outs)
        textBodyEl.classList.remove(...outs)
        spriteEl.classList.remove(...outs)
        textBodyEl.style.color = "#ffbd92"

        boxEl.classList.add("slide-up")
        textBodyEl.classList.add("slide-up")
        spriteEl.classList.add("slide-up")

        spriteEl.style.visibility = "visible";
        textBodyEl.style.visibility = "visible";
    } else if (arg === "none") {
        // boxEl.src = "";
        boxEl.classList.remove(...ins)
        textBodyEl.classList.remove(...ins)
        spriteEl.classList.remove(...ins)
        boxEl.classList.add("slide-down")
        textBodyEl.classList.add("slide-down")
        spriteEl.classList.add("slide-down")
        setTimeout(clearText, 500); // Ensure text clears after animation
    } else {
        let newSrc = "/display/assets/dialogue/boxes/DialogueBox.png"
        let newColor = "#ffbd92"
        if (arg === "pino") {
            newSrc = "/display/assets/dialogue/boxes/PinoDialogueBox.png"
            newColor = "#c5abfc"
        } else if (arg === "duo") {
            newSrc = `/display/assets/dialogue/boxes/DuoDialogueBox${characters.j.hat}.png`
            newColor = "#c5abfc"
        } else if (arg === "jaz") {
            newSrc = `/display/assets/dialogue/boxes/JazDialogueBox${characters.j.hat}.png`
            newColor = "#c5abfc"
        }
        boxEl.src = newSrc
        boxEl.classList.remove(...outs)
        textBodyEl.style.color = newColor

        boxEl.classList.add("slide-up")
        textBodyEl.classList.add("slide-up")
        textBodyEl.style.visibility = "visible";
        moveText("dialogue")

    }
}




function slideBoxX(arg, characters) {
    const boxEl = document.getElementById("sandbox-dialogue-box");
    const spriteEl = document.getElementById("sandbox-dialogue-sprite");
    const textBodyEl = document.querySelector(".text-body");
    if (arg === "sprite") {
        boxEl.src = "/display/assets/dialogue/boxes/SpriteBox.png"
        moveText("sprite")
        boxEl.classList.remove(...outs)
        textBodyEl.classList.remove(...outs)
        spriteEl.classList.remove(...outs)
        textBodyEl.style.color = "#ffbd92"

        boxEl.classList.add("slide-in-fast")
        textBodyEl.classList.add("slide-in-fast")
        spriteEl.classList.add("slide-in-fast")

        spriteEl.style.visibility = "visible";
        textBodyEl.style.visibility = "visible";
    } else if (arg === "none") {
        // boxEl.src = "";
        boxEl.classList.remove(...ins)
        textBodyEl.classList.remove(...ins)
        spriteEl.classList.remove(...ins)
        boxEl.classList.add("slide-out-fast")
        textBodyEl.classList.add("slide-out-fast")
        spriteEl.classList.add("slide-out-fast")
        setTimeout(clearText, 500); // Ensure text clears after animation
    } else {
        let newSrc = "/display/assets/dialogue/boxes/DialogueBox.png"
        let newColor = "#ffbd92"
        if (arg === "pino") {
            newSrc = "/display/assets/dialogue/boxes/PinoDialogueBox.png"
            newColor = "#c5abfc"
        } else if (arg === "duo") {
            newSrc = `/display/assets/dialogue/boxes/DuoDialogueBox${characters.j.hat}.png`
            newColor = "#c5abfc"
        } else if (arg === "jaz") {
            newSrc = `/display/assets/dialogue/boxes/JazDialogueBox${characters.j.hat}.png`
            newColor = "#c5abfc"
        }
        boxEl.src = newSrc
        boxEl.classList.remove(...outs)
        textBodyEl.style.color = newColor

        boxEl.classList.add("slide-in-fast")
        textBodyEl.classList.add("slide-in-fast")
        textBodyEl.style.visibility = "visible";
        moveText("dialogue")

    }
}




function fadeBox(arg, characters) {
    const boxEl = document.getElementById("sandbox-dialogue-box");
    const spriteEl = document.getElementById("sandbox-dialogue-sprite");
    const textBodyEl = document.querySelector(".text-body");
    if (arg === "sprite") {
        boxEl.src = "/display/assets/dialogue/boxes/SpriteBox.png"
        moveText("sprite")
        textBodyEl.style.color = "#ffbd92"
        boxEl.classList.remove(...outs)
        textBodyEl.classList.remove(...outs)
        spriteEl.classList.remove(...outs)
        boxEl.classList.add("fade-in-fast")
        textBodyEl.classList.add("fade-in-fast")
        spriteEl.classList.add("fade-in-fast")


    } else if (arg === "none") {
        // boxEl.src = "";
        boxEl.classList.remove(...ins)
        textBodyEl.classList.remove(...ins)
        spriteEl.classList.remove(...ins)
        boxEl.classList.add("fade-out-fast")
        textBodyEl.classList.add("fade-out-fast")
        spriteEl.classList.add("fade-out-fast")
        setTimeout(clearText, 500); // Ensure text clears after animation
    }
    else {
        let newSrc = "/display/assets/dialogue/boxes/DialogueBox.png"
        let newColor = "#ffbd92"
        if (arg === "pino") {
            newSrc = "/display/assets/dialogue/boxes/PinoDialogueBox.png"
            newColor = "#c5abfc"
        } else if (arg === "duo") {
            newSrc = `/display/assets/dialogue/boxes/DuoDialogueBox${characters.j.hat}.png`
            newColor = "#c5abfc"
        } else if (arg === "jaz") {
            newSrc = `/display/assets/dialogue/boxes/JazDialogueBox${characters.j.hat}.png`
            newColor = "#c5abfc"
        }
        boxEl.src = newSrc
        boxEl.classList.remove(...outs)
        boxEl.classList.add("fade-in-fast")
        textBodyEl.classList.add("fade-in-fast")
        textBodyEl.style.color = newColor
        spriteEl.style.visibility = "hidden";
        textBodyEl.style.visibility = "visible";
        moveText("dialogue")
    }
}





function clearText() {
    textBodyElGlobal.innerHTML = ""
}




function locationBanner(location) {
    const bannerEl = document.getElementById("sandbox-location-banner")
    const bannerElText = document.getElementById("sandbox-location-banner-text")
    bannerElText.innerHTML = location
    bannerElText.style.left = "0%"
    bannerEl.style.left = "0%"
    setTimeout(() => {
        bannerEl.style.left = "100%"
        bannerElText.style.left = "100%"

    }, 3000);

}



function moveText(box) {
    const boxEl = document.getElementById("sandbox-dialogue-box")
    const spriteEl = document.getElementById("sandbox-dialogue-sprite")
    const textBodyEl = document.querySelector(".text-body")
    if (box === "dialogue") {
        spriteEl.style.visibility = "hidden"
        textBodyEl.style.visibility = "visible"
        textBodyEl.style.minWidth = "65%"
        textBodyEl.style.maxWidth = "65%"
        textBodyEl.style.left = "17.5%"
        textBodyEl.style.textAlign = "center"
    } else if (box === "sprite") {
        spriteEl.style.visibility = "visible"
        textBodyEl.style.visibility = "visible"
        textBodyEl.style.minWidth = "42%"
        textBodyEl.style.maxWidth = "42%"
        textBodyEl.style.left = "43%"
        textBodyEl.style.color = "#ffbd92"
    }
}