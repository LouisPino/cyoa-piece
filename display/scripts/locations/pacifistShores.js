textsArr = [
    "Wow. That was amazing!",
    "According to the map, our next and final stop is the TWILIGHT ZONE. We’re almost there! ",
    "I wonder what sort of treasure we’ll find..."
];

const shoreVidEl = document.getElementById("shore-video")

function pacifistShores() {
    setTimeout(scene0, 100)
    setTimeout(scene1, 1000)
    setTimeout(scene2, 8000)
    setTimeout(scene3, 14000)
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
        if (checkHistory("river")) {
            toggleAnimation("front", "duo")
            fadeChar("pino", locations.river.mapLocations.pino.x, locations.river.mapLocations.pino.y, 50, 1000)
            fadeChar("jaz", locations.river.mapLocations.jaz.x, locations.river.mapLocations.jaz.y, 50, 1000)
            setTimeout(() => {
                flipChar("left", "duo")
                slideChar("pino", locations.shores.mapLocations.pino.x, locations.shores.mapLocations.pino.y, 3000)
                slideChar("jaz", locations.shores.mapLocations.jaz.x, locations.shores.mapLocations.jaz.y, 3000)
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
            fadeChar("pino", locations.cave.mapLocations.pino.x, locations.cave.mapLocations.pino.y, 50, 1000)
            fadeChar("jaz", locations.cave.mapLocations.jaz.x, locations.cave.mapLocations.jaz.y, 50, 1000)
            setTimeout(() => {
                flipChar("left", "duo")
                slideChar("pino", locations.shores.mapLocations.pino.x, locations.shores.mapLocations.pino.y, 3000)
                slideChar("jaz", locations.shores.mapLocations.jaz.x, locations.shores.mapLocations.jaz.y, 3000)
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
    shoreVidEl.style.visibility = "visible"
    shoreVidEl.style.opacity = 1
    shoreVidEl.play()
}
function scene4() {
    //after video
    shoreVidEl.style.opacity = 0
    setTimeout(() => {
        shoreVidEl.pause()
    }, 8000)
    setTimeout(() => {
        slideBoxY("duo")
        setTimeout(nextLine, 750)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 5000)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 15000)
        setTimeout(() => {
            slideBoxY("none")
        }, 25000)
    }, 1000)
}

pacifistShores()