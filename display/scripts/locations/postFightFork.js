
textsArr = [
    `You have received the `,
    "EXTRA SHARP COCKTAIL FORK!",
    "Neat! What a cool souvenir. Ol’ Tilly is gonna get a kick out of this!",
    "According to our map, there is treasure to be found amidst the stars or deep in the ocean! The Grand Teleporter will bring us half way there……..",
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
    }, 5000)
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
        }, 28000)
        setTimeout(() => {
            clearText()
            toggleBox("jaz")
            setTimeout(nextLine, 200)
        }, 36000)
        setTimeout(() => {
            fadeBox("none")
        }, 40000)
    }, 16000)

    setTimeout(() => {
        changeSize("duo", 1, .7)
        toggleAnimation("front", "duo")
        jumpChar("duo", 2000, 2000)
        renderPino()
        renderJaz()
        fadeChar("pino", 575, 0, 10, 5000)
        fadeChar("jaz", 325, 0, 10, 5000)
        document.getElementById("buff-screen").style.opacity = 0
        setTimeout(() => {
            slideChar("pino", 575, -1000, 3000)
            slideChar("jaz", 325, -1000, 3000)
            document.getElementById("teleporter-beam").style.visibility = "visible"

            flipChar("left", "duo")
            setTimeout(() => {
                flipChar("right", "duo")
            }, 200)
            setTimeout(() => {
                flipChar("left", "duo")
            }, 400)
            setTimeout(() => {
                flipChar("right", "duo")
            }, 600)
            setTimeout(() => {
                flipChar("left", "duo")
            }, 800)
            setTimeout(() => {
                flipChar("right", "duo")
            }, 1000)
            setTimeout(() => {
                flipChar("left", "duo")
            }, 1200)
            setTimeout(() => {
                flipChar("right", "duo")
            }, 1400)
            setTimeout(() => {
                flipChar("left", "duo")
            }, 1600)
            setTimeout(() => {
                flipChar("right", "duo")
            }, 1800)
            setTimeout(() => {
                flipChar("left", "duo")
            }, 2000)
            setTimeout(() => {
                flipChar("right", "duo")
            }, 2200)
            setTimeout(() => {
                flipChar("left", "duo")
            }, 2400)
            setTimeout(() => {
                flipChar("right", "duo")
            }, 2600)
            setTimeout(() => {
                flipChar("left", "duo")
            }, 2800)
        }, 8000)
    }, 55000)
}


postFightFork()