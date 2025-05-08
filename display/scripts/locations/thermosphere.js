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
    setTimeout(scene4, 373000) // make me length of video + video start time
}

function scene0() {
    removePino()
    removeJaz()
    renderMap()
    fadeMap(1, 1)
    toggleAnimation("front", "duo")
    changeSize("duo", 1, .3)
    setTimeout(() => {
        jumpChar("pino", 3000, 3000)
        jumpChar("jaz", 3000, 3000)
    }, 50)
}
function scene1() {
    renderPino()
    renderJaz()
    if (checkHistory("clouds")) {
        setTimeout(() => {
            fadeChar("pino", locations.clouds.mapLocations.pino.x - 250, locations.clouds.mapLocations.pino.y + 300, 50, 1000)
            fadeChar("jaz", locations.shores.mapLocations.jaz.x, locations.shores.mapLocations.jaz.y, 50, 1000)
            setTimeout(() => {
                setTimeout(() => {
                    slideChar("pino", -311, -503, 3000)
                    slideChar("jaz", locations.thermosphere.mapLocations.jaz.x, locations.thermosphere.mapLocations.jaz.y, 3000)
                    setTimeout(() => {
                    }, 3000)
                }, 250)
            }, 3000)
        }, 1000)
    }
    else if (checkHistory("shores")) {
        setTimeout(() => {
            fadeChar("pino", locations.clouds.mapLocations.pino.x, locations.clouds.mapLocations.pino.y, 50, 1000)
            fadeChar("jaz", locations.shores.mapLocations.jaz.x, locations.shores.mapLocations.jaz.y + 200, 50, 1000)
            setTimeout(() => {
                setTimeout(() => {
                    slideChar("pino", locations.thermosphere.mapLocations.pino.x, locations.thermosphere.mapLocations.pino.y, 3000)
                    slideChar("jaz", -471, -506, 3000)
                    setTimeout(() => {
                    }, 3000)
                }, 250)
            }, 3000)
        }, 1000)
    }
    else {
        setTimeout(() => {
            fadeChar("pino", locations.clouds.mapLocations.pino.x, locations.clouds.mapLocations.pino.y, 50, 1000)
            fadeChar("jaz", locations.shores.mapLocations.jaz.x, locations.shores.mapLocations.jaz.y, 50, 1000)
            setTimeout(() => {
                setTimeout(() => {
                    slideChar("pino", locations.thermosphere.mapLocations.pino.x, locations.thermosphere.mapLocations.pino.y, 3000)
                    slideChar("jaz", locations.thermosphere.mapLocations.jaz.x, locations.thermosphere.mapLocations.jaz.y, 3000)
                    setTimeout(() => {
                    }, 3000)
                }, 250)
            }, 3000)
        }, 1000)
    }
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
    videoAnimationPlaylist()
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
        setTimeout(() => { sendToServer({ type: "fx", val: "waitWhat.mp3" }) }, 7000)
        setTimeout(() => {
            clearText()
            toggleBox("duo")
            setTimeout(nextLine, 200)
        }, 15000)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 25000)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 46000)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 62000)
        setTimeout(() => {
            slideBoxY("none")
        }, 73000)
    }, 1000)
}


function videoAnimationPlaylist() {

}

thermosphere()

