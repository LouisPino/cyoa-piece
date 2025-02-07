function changeBg(newSrc) {
    const container = document.getElementById("sandbox-bg-container");
    // Grab the current background image (if any)
    const oldImg = container.querySelector("img.complete-screen-img");

    // Create the new image element
    const newImg = document.createElement("img");
    newImg.classList.add("complete-screen-img");
    // Start off invisible and heavily blurred
    newImg.style.opacity = 0;
    newImg.style.filter = "blur(10px)";
    newImg.src = newSrc;

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



let iManual = 0; // Index for texts array
let textsArr
let textBodyElGlobal



function typeTextManual(texts, textBodyEl) {
    textsArr = texts
    textBodyElGlobal = textBodyEl
}

function nextLine() {
    console.log("hit")
    const text = textsArr[iManual];
    let j = 0; // Index for characters in the current text

    function typeCharacter() {
        if (j < text.length) {
            textBodyElGlobal.innerHTML += text[j];
            j++;
            setTimeout(typeCharacter, 50); // Type the next character
        } else {
            textBodyElGlobal.innerHTML += "<br>"; // Add a line break after the text
            iManual++;
            //ADD AN ON MESSAGE FROM MAX TO SERVE THAT CALLD TYPETEXTMANUAL FUNCTION AGAIN
        }
    }

    typeCharacter(); // Start typing the current text

}