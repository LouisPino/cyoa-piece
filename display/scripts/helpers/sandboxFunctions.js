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

function changeDialogueSprite(newSrcName) {
    const spriteEl = document.getElementById("sandbox-dialogue-sprite");
    spriteEl.src = `/display/assets/dialogue/sprites/${newSrcName}`
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

function toggleBox(arg) {
    const boxEl = document.getElementById("sandbox-dialogue-box")
    const spriteEl = document.getElementById("sandbox-dialogue-sprite")
    const spriteNameEl = document.getElementById("sandbox-dialogue-name")
    const textBodyEl = document.querySelector(".text-body")
    boxEl.classList.remove(...outs)
    textBodyEl.classList.remove(...outs)
    spriteNameEl.classList.remove(...outs)
    spriteEl.classList.remove(...outs)
    if (arg === "sprite") {
        boxEl.src = "/display/assets/dialogue/DialogueSpriteBox.png"
        spriteEl.style.visibility = "visible"
        spriteNameEl.style.visibility = "visible"
        textBodyEl.style.visibility = "visible"
        textBodyEl.style.width = "38%"
        textBodyEl.style.left = "45%"
    } else if (arg === "dialogue") {
        boxEl.src = "/display/assets/dialogue/DialogueBox.png"
        spriteEl.style.visibility = "hidden"
        spriteNameEl.style.visibility = "hidden"
        textBodyEl.style.visibility = "visible"
        textBodyEl.style.width = "65%"
        textBodyEl.style.left = "17.5%"
        textBodyEl.style.textAlign = "center"
    } else if (arg === "none") {
        boxEl.src = ""
        spriteEl.style.visibility = "hidden"
        spriteNameEl.style.visibility = "hidden"
        textBodyEl.style.visibility = "hidden"
        clearText()
    }
}


function slideBoxY(arg) {
    const boxEl = document.getElementById("sandbox-dialogue-box");
    const spriteEl = document.getElementById("sandbox-dialogue-sprite");
    const spriteNameEl = document.getElementById("sandbox-dialogue-name");
    const textBodyEl = document.querySelector(".text-body");
    if (arg === "sprite") {
        boxEl.src = "/display/assets/dialogue/DialogueSpriteBox.png";
        boxEl.classList.remove(...outs)
        textBodyEl.classList.remove(...outs)
        spriteNameEl.classList.remove(...outs)
        spriteEl.classList.remove(...outs)

        boxEl.classList.add("slide-up")
        textBodyEl.classList.add("slide-up")
        spriteNameEl.classList.add("slide-up");
        spriteEl.classList.add("slide-up")

        spriteEl.style.visibility = "visible";
        spriteNameEl.style.visibility = "visible";
        textBodyEl.style.visibility = "visible";
    } else if (arg === "dialogue") {
        boxEl.src = "/display/assets/dialogue/DialogueBox.png";
        boxEl.classList.remove(...outs)

        boxEl.classList.add("slide-up")
        textBodyEl.classList.add("slide-up")
        textBodyEl.style.visibility = "visible";
    } else if (arg === "none") {
        // boxEl.src = "";
        boxEl.classList.remove(...ins)
        textBodyEl.classList.remove(...ins)
        spriteNameEl.classList.remove(...ins)
        spriteEl.classList.remove(...ins)
        boxEl.classList.add("slide-down")
        textBodyEl.classList.add("slide-down")
        spriteNameEl.classList.add("slide-down");
        spriteEl.classList.add("slide-down")
        setTimeout(clearText, 500); // Ensure text clears after animation
    }
}




function slideBoxX(arg) {
    const boxEl = document.getElementById("sandbox-dialogue-box");
    const spriteEl = document.getElementById("sandbox-dialogue-sprite");
    const spriteNameEl = document.getElementById("sandbox-dialogue-name");
    const textBodyEl = document.querySelector(".text-body");
    if (arg === "sprite") {
        boxEl.src = "/display/assets/dialogue/DialogueSpriteBox.png";
        boxEl.classList.remove(...outs)
        textBodyEl.classList.remove(...outs)
        spriteNameEl.classList.remove(...outs)
        spriteEl.classList.remove(...outs)

        boxEl.classList.add("slide-in-fast")
        textBodyEl.classList.add("slide-in-fast")
        spriteNameEl.classList.add("slide-in-fast");
        spriteEl.classList.add("slide-in-fast")

        spriteEl.style.visibility = "visible";
        spriteNameEl.style.visibility = "visible";
        textBodyEl.style.visibility = "visible";
    } else if (arg === "dialogue") {
        boxEl.src = "/display/assets/dialogue/DialogueBox.png";
        boxEl.classList.remove(...outs)

        boxEl.classList.add("slide-in-fast")
        textBodyEl.classList.add("slide-in-fast")
        textBodyEl.style.visibility = "visible";
    } else if (arg === "none") {
        // boxEl.src = "";
        boxEl.classList.remove(...ins)
        textBodyEl.classList.remove(...ins)
        spriteNameEl.classList.remove(...ins)
        spriteEl.classList.remove(...ins)
        boxEl.classList.add("slide-out-fast")
        textBodyEl.classList.add("slide-out-fast")
        spriteNameEl.classList.add("slide-out-fast");
        spriteEl.classList.add("slide-out-fast")
        setTimeout(clearText, 500); // Ensure text clears after animation
    }
}




function fadeBox(arg) {
    const boxEl = document.getElementById("sandbox-dialogue-box");
    const spriteEl = document.getElementById("sandbox-dialogue-sprite");
    const spriteNameEl = document.getElementById("sandbox-dialogue-name");
    const textBodyEl = document.querySelector(".text-body");

    if (arg === "sprite") {
        boxEl.src = "/display/assets/dialogue/DialogueSpriteBox.png";

        boxEl.classList.remove(...outs)
        textBodyEl.classList.remove(...outs)
        spriteNameEl.classList.remove(...outs)
        spriteEl.classList.remove(...outs)

        boxEl.classList.add("fade-in-fast")
        textBodyEl.classList.add("fade-in-fast")
        spriteNameEl.classList.add("fade-in-fast");
        spriteEl.classList.add("fade-in-fast")


    } else if (arg === "dialogue") {
        boxEl.src = "/display/assets/dialogue/DialogueBox.png";
        boxEl.classList.remove(...outs)
        boxEl.classList.add("fade-in-fast")
        textBodyEl.classList.add("fade-in-fast")

        spriteEl.style.visibility = "hidden";
        spriteNameEl.style.visibility = "hidden";
        textBodyEl.style.visibility = "visible";
    } else if (arg === "none") {
        // boxEl.src = "";
        boxEl.classList.remove(...ins)
        textBodyEl.classList.remove(...ins)
        spriteNameEl.classList.remove(...ins)
        spriteEl.classList.remove(...ins)
        boxEl.classList.add("fade-out-fast")
        textBodyEl.classList.add("fade-out-fast")
        spriteNameEl.classList.add("fade-out-fast");
        spriteEl.classList.add("fade-out-fast")
        setTimeout(clearText, 500); // Ensure text clears after animation
    }
}





function clearText() {
    textBodyElGlobal.innerHTML = ""
}