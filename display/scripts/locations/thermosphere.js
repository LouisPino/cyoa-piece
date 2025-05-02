textsArr = [
    "Upon arriving at the treasure location, the adventurers discovered that there was absolutely no treasure.",
    "Oh well! Tis the risk of an adventurer.",
    "Even if there was treasure, it would have been a little weird to take it back to the Tillyland Kingdom. What’s the use in taking artifacts from ancient societies that have no association to us?",
    "This adventure was so much more enjoyable than any treasure could have been. It’s not everyday you get to be a couple of cats exploring the ocean!",
    "The real treasure…was the friends we made along the way.",
];

textsArr = [
    "Upon arriving at the treasure location, the adventurers discovered that there was absolutely no treasure.",
    "Oh well! Tis the risk of an adventurer.",
    "Even if there was treasure, it would have been a little weird to take it back to the Tillyland Kingdom. What’s the use in taking artifacts from ancient societies that have no association to us?",
    "This adventure was so much more enjoyable than any treasure could have been. It’s not everyday you get to be a couple of cats exploring space!",
    "The real treasure…was the friends we made along the way.",
];

const spaceVidEl = document.getElementById("space-video")

function thermosphere() {
    setTimeout(scene0, 100)
    setTimeout(scene1, 1000)
    setTimeout(scene2, 8000)
    setTimeout(scene3, 18000)
    setTimeout(scene4, 35000) // make me length of video + video start time

}

function scene0() {
    renderMap()
    fadeMap(1, 1)
    toggleAnimation("side", "duo")
    changeSize("duo", 1, .3)
    jumpChar("pino", 3000, 3000)
    jumpChar("jaz", 3000, 3000)
}
function scene1() {
    renderPino()
    renderJaz()
    setTimeout(() => {
        if (checkHistory("shores")) {
            toggleAnimation("front", "duo")
            fadeChar("pino", locations.shores.mapLocations.pino.x, locations.shores.mapLocations.pino.y, 50, 1000)
            fadeChar("jaz", locations.shores.mapLocations.jaz.x, locations.shores.mapLocations.jaz.y, 50, 1000)
            setTimeout(() => {
                flipChar("left", "duo")
                slideChar("pino", locations.thermosphere.mapLocations.pino.x, locations.thermosphere.mapLocations.pino.y, 3000)
                slideChar("jaz", locations.thermosphere.mapLocations.jaz.x, locations.thermosphere.mapLocations.jaz.y, 3000)
                setTimeout(() => {
                    flipChar("right", "duo")
                }, 300)
                setTimeout(() => {
                    flipChar("left", "duo")
                }, 600)
                setTimeout(() => {
                    flipChar("right", "duo")
                }, 900)
                setTimeout(() => {
                    flipChar("left", "duo")
                }, 1200)
                setTimeout(() => {
                    flipChar("right", "duo")
                }, 1500)
                setTimeout(() => {
                    flipChar("left", "duo")
                }, 1800)
                setTimeout(() => {
                    flipChar("right", "duo")
                }, 2100)
                setTimeout(() => {
                    flipChar("left", "duo")
                }, 2400)
                setTimeout(() => {
                    flipChar("right", "duo")
                }, 2700)
            }, 3000)
        } else {
            toggleAnimation("front", "duo")

            fadeChar("pino", locations.clouds.mapLocations.pino.x, locations.clouds.mapLocations.pino.y, 50, 1000)
            fadeChar("jaz", locations.clouds.mapLocations.jaz.x, locations.clouds.mapLocations.jaz.y, 50, 1000)
            setTimeout(() => {
                setTimeout(() => {
                    slideChar("pino", locations.thermosphere.mapLocations.pino.x, locations.thermosphere.mapLocations.pino.y, 3000)
                    slideChar("jaz", locations.thermosphere.mapLocations.jaz.x, locations.thermosphere.mapLocations.jaz.y, 3000)
                }, 250)

            }, 3000)
        }
    }, 1000)
}
function scene2() {
    fadeMap(0, 5000)
    fadeChar("duo", 3000, 3000, 5000, 20)
    setTimeout(() => {
        locationBanner(currentLocation.banner)
    }, 5000)
}
function scene3() {
    //play video
    spaceVidEl.style.visibility = "visible"
    spaceVidEl.style.opacity = 1
    spaceVidEl.play()
    dvdBounce()
}
function scene4() {
    //after video
    spaceVidEl.style.opacity = 0
    setTimeout(() => {
        spaceVidEl.pause()
    }, 8000)
    setTimeout(() => {
        slideBoxY("dialogue")
        setTimeout(nextLine, 750)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 12000)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 22000)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 37000)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 48000)
        setTimeout(() => {
            slideBoxY("none")
        }, 57000)
    }, 1000)
}

thermosphere()

