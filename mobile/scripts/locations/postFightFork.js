
textsArr = [
    `You have received the `,
    "EXTRA SHARP COCKTAIL FORK!",
    "Neat! What a cool souvenir. Ol’ Tilly is gonna get a kick out of this!",
    "According to our map, there is treasure to be found amidst the stars or deep in the ocean! The Grand Teleporter will bring us half way there……",
    "What about the other half?",
    "Let’s worry about that later. How about we go to The Cloud Zone?",
    "Ok!",
]


function postFightFork() {
    if (checkHistory("river")) {
        document.getElementById("teleporter").src = "/display/assets/locations/teleporter/river.png"
    } else {
        changeBg("animated/caveInterior.gif")
        document.getElementById("teleporter").src = "/display/assets/locations/teleporter/cave.png"
    }

    setTimeout(() => {
        slideBoxY("dialogue")
        setTimeout(nextLine, 500)
        setTimeout(nextLine, 2000)
        setTimeout(() => {
            fadeBox("none")
        }, 8000)
    }, 4000)
    setTimeout(() => {
        slideBoxY("duo")
        setTimeout(nextLine, 500)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 8000)
        setTimeout(() => {
            clearText()
            toggleBox("jaz")
            setTimeout(nextLine, 200)
        }, 22000)
        setTimeout(() => {
            clearText()
            toggleBox("pino")
            setTimeout(nextLine, 200)
        }, 30000)
        setTimeout(() => {
            clearText()
            toggleBox("jaz")
            setTimeout(nextLine, 200)
        }, 40000)
        setTimeout(() => {
            fadeBox("none")
        }, 42000)
    }, 17000)

    setTimeout(() => {
        changeSize("duo", 1, .7)
        toggleAnimation("front", "duo")
        jumpChar("duo", 2000, 2000)
        renderPino()
        renderJaz()
        fadeChar("pino", 575, 75, 10, 5000)
        fadeChar("jaz", 325, 75, 10, 5000)
        document.getElementById("buff-screen").style.opacity = 0
        setTimeout(() => {
            document.getElementById("teleporter-beam").style.visibility = "visible"
            sendToServer({ type: "fx", val: "aura.wav" })
        }, 8000)
        setTimeout(() => {
            slideChar("pino", 575, -1000, 8000)
            slideChar("jaz", 325, -1000, 8000)
            startFlipping()
        }, 12000)
    }, 59000)
    setTimeout(() => {
        fadeChar(document.getElementById("teleporter-beam"), 3000, 3000, 2000, 0)
        setTimeout(() => { sendToServer({ type: "fx", val: 0 }) }, 2000)
    }, 81000)
}

function startFlipping(duration = 9000) {
    let direction = "left";
    const target = "duo";

    const interval = setInterval(() => {
        flipChar(direction, target);
        direction = direction === "left" ? "right" : "left";
    }, 200);

    // Stop the interval after the specified duration
    setTimeout(() => {
        clearInterval(interval);
    }, duration);
}



postFightFork()