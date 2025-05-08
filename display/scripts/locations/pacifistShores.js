textsArr = [
    "Wow. That was amazing!",
    "According to the map, our next and final stop is the TWILIGHT ZONE. We’re almost there!",
    "I wonder what sort of treasure we’ll find..."
];

const shoreVidEl = document.getElementById("shore-video")

function pacifistShores() {
    setTimeout(scene0, 100)
    setTimeout(scene1, 1000)
    setTimeout(scene2, 8000)
    setTimeout(scene3, 14000)
    setTimeout(scene4, 320000) // make me length of video + video start time

}

function scene0() {
    renderMap()
    fadeMap(1, 1)
    toggleAnimation("side", "duo")
    changeSize("duo", 1, .3)
    jumpChar("pino", 3000, 3000)
    jumpChar("jaz", 3000, 3000)
    jumpChar("npc", 1900, 0)

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
    videoAnimationPlaylist()
}
function scene4() {
    //after video
    shoreVidEl.style.opacity = 0
    setTimeout(() => {
        shoreVidEl.pause()
        congaLine(0)
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


function videoAnimationPlaylist() {

    changeSize("duo", 1, .8)
    toggleAnimation("run", "duo")

    setTimeout(() => {
        jumpChar("jaz", 500, 800)
        setTimeout(() => {
            changeSize("jaz", 30000, .4)
            slideChar("jaz", 1250, -900, 30000)
        }, 3000)
    }, 8000)
    setTimeout(() => {
        jumpChar("pino", 600, 800)
        setTimeout(() => {
            changeSize("pino", 30000, .4)
            slideChar("pino", 1750, -900, 30000)
        }, 4000)
    }, 12000)


    setTimeout(() => {
        toggleAnimation("walk", "duo")
        jumpChar("duo", -2000, 50)
        changeSize("duo", 1, 2)
        slideChar("duo", 2100, 50, 10000)
    }, 60000)

    setTimeout(() => {
        slideChar("npc", -2000, 0, 10000)
        setTimeout(() => {
            flipChar("left", "npc")
        }, 2000)
        setTimeout(() => {
            flipChar("right", "npc")
        }, 4000)
        setTimeout(() => {
            flipChar("left", "npc")
        }, 6000)
        setTimeout(() => {
            flipChar("right", "npc")
        }, 8000)
        setTimeout(() => {
            flipChar("left", "npc")
        }, 10000)
        setTimeout(() => {
            flipChar("right", "npc")
        }, 12000)
        setTimeout(() => {
            flipChar("left", "npc")
        }, 14000)
    }, 94000)


    setTimeout(() => {
        toggleAnimation("side", "duo")
        flipChar("right", "duo")
        changeSize("duo", 1, 1)
        fadeChar("pino", 200, -200, 20, 5000)
        fadeChar("jaz", 200, 0, 20, 5000)
        setTimeout(() => {
            fadeChar("pino", 2000, -200, 5000, 5000)
            fadeChar("jaz", 2000, 0, 5000, 5000)
        }, 74000)
    }, 145000)

    setTimeout(() => {
        congaLine(1, 6, 75)
        setTimeout(() => {
            slideChar("npc", 2000, 0, 10000)
        }, 9000)
    }, 225000)

    setTimeout(() => {
        flipChar("left", "duo")
        setTimeout(() => {
            toggleAnimation("walk", "duo")
        }, 500)
        setTimeout(() => {
            fadeChar("jaz", 200, -1000, 200, 200)
            fadeChar("pino", 400, -1000, 300, 200)
            setTimeout(() => {
                slideChar("jaz", 0, 1000, 22000)
                slideChar("pino", 200, 1000, 22000)
            }, 300)
        }, 300)
        const almostEl = document.getElementById("almost-ocean")
        jumpChar(almostEl, -1000, 0)
        slideChar(almostEl, 0, 0, 5000)
    }, 250000)
}


pacifistShores()