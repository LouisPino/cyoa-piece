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
    console.log(newSrc)
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

    console.log("Changing background to:", newSrc);
}

function changeDialogueSprite(newSrcName) {
    const spriteEl = document.getElementById("sandbox-dialogue-sprite");
    spriteEl.src = `/display/assets/dialogue/sprites/${newSrcName}`
    console.log(spriteEl)
}




let iManual = 0; // Index for texts array
let textsArr
let textBodyElGlobal



function typeTextManual(texts, textBodyEl) {
    textsArr = texts
    textBodyElGlobal = textBodyEl
    console.log(textsArr)
}

function nextLine() {
    const text = textsArr[iManual];
    let j = 0; // Index for characters in the current text
    console.log(textBodyElGlobal)

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



function toggleBox(arg) {
    const boxEl = document.getElementById("sandbox-dialogue-box")
    const spriteEl = document.getElementById("sandbox-dialogue-sprite")
    const spriteNameEl = document.getElementById("sandbox-dialogue-name")
    const textBodyEl = document.querySelector(".text-body")
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


function clearText() {
    textBodyElGlobal.innerHTML = ""
    console.log("test")
}