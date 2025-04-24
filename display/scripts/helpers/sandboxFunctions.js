function changeBg(newSrc) {
    const container = document.getElementById("sandbox-bg-container");

    // Grab the current background element (img or video)
    const oldEl = container.querySelector(".sandbox-bg");

    // Determine the type of element to create
    const isVideo = newSrc.match(/\.(mp4|webm|ogg)$/i);
    const newEl = isVideo ? document.createElement("video") : document.createElement("img");

    newEl.classList.add("sandbox-bg");
    newEl.id = "sandbox-bg";
    newEl.style.opacity = 0;
    newEl.style.filter = "blur(10px)";
    newEl.style.position = "absolute";
    newEl.style.top = 0;
    newEl.style.left = 0;
    newEl.style.width = "100%";
    newEl.style.height = "100%";
    newEl.style.objectFit = "cover";
    newEl.style.transition = "opacity 1s ease, filter 1s ease";

    if (isVideo) {
        newEl.src = `display/assets/backgrounds/${newSrc}`;
        newEl.autoplay = true;
        newEl.loop = true;
        newEl.muted = true;
        newEl.playsInline = true;
    } else {
        newEl.src = `display/assets/backgrounds/${newSrc}`;
    }

    container.appendChild(newEl);

    // Force reflow
    newEl.getBoundingClientRect();

    setTimeout(() => {
        newEl.style.opacity = 1;
        newEl.style.filter = "blur(0)";

        if (oldEl) {
            oldEl.style.opacity = 0;
            oldEl.style.filter = "blur(10px)";
        }
    }, 50);

    newEl.addEventListener("transitionend", function handler(e) {
        if (e.propertyName === "opacity" && oldEl) {
            container.removeChild(oldEl);
            newEl.removeEventListener("transitionend", handler);
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
    npcEl.src = `/display/assets/npcs/${npcName}`
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
    document.querySelector(".text-body").innerHTML = ""
}




function locationBanner(locationName) {
    const bannerEl = document.getElementById("sandbox-location-banner")
    bannerEl.style.transition = "left 0ms"
    bannerEl.style.left = "-100%"
    setTimeout(() => {
        bannerEl.style.transition = "left 1.5s ease-in-out"
        bannerEl.style.left = "0%"

    }, 100)
    // const bannerElText = document.getElementById("sandbox-location-banner-text")
    // bannerElText.innerHTML = location
    // bannerElText.style.left = "0%"
    bannerEl.src = `/display/assets/locations/banners/${locationName}.PNG`
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