
textsArr = [
    "What a lovely experience!",
    "According to our map, there is treasure to be found amidst the stars or deep in the ocean! The Grand Teleporter will bring us half way there……",
    "What about the remaining half?",
    "Let’s worry about that later. How about we decide where we want to go?"
]


function postChat() {
    if (history.locationsVisited[history.locationsVisited.length - 5].name === "river") {
        document.getElementById("teleporter").src = "/display/assets/locations/teleporter/river.png"
        changeBg("animated/riverInterior.gif")
    } else {
        changeBg("animated/caveInterior.gif")
        document.getElementById("teleporter").src = "/display/assets/locations/teleporter/cave.png"
    }

    slideBoxY("duo")
    setTimeout(nextLine, 1500)
    setTimeout(() => {
        clearText()
        setTimeout(nextLine, 200)
    }, 6000)
    setTimeout(() => {
        clearText()
        toggleBox("jaz")
        setTimeout(nextLine, 200)
    }, 20000)
    setTimeout(() => {
        clearText()
        toggleBox("pino")
        setTimeout(nextLine, 200)
    }, 26000)
    setTimeout(() => {
        fadeBox("none")
    }, 34000)



    setTimeout(() => {
        changeSize("duo", 1, .7)
        toggleAnimation("front", "duo")
        jumpChar("duo", 2000, 2000)

        renderPino()
        renderJaz()
        fadeChar("pino", 575, 0, 10, 5000)
        fadeChar("jaz", 325, 0, 10, 5000)
        setTimeout(() => {
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
                slideChar("pino", 575, -1000, 3000)
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
            setTimeout(() => {
                flipChar("right", "duo")
            }, 3000)
            setTimeout(() => {
                flipChar("left", "duo")
            }, 3200)
            setTimeout(() => {
                flipChar("right", "duo")
            }, 3400)
            setTimeout(() => {
                flipChar("left", "duo")
            }, 3600)
            setTimeout(() => {
                flipChar("right", "duo")
            }, 3800)
            setTimeout(() => {
                flipChar("left", "duo")
            }, 4000)
        }, 8000)
    }, 35000)




}


postChat()