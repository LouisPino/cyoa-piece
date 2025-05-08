textsArr = [
    "Wow. That was amazing!",
    "According to the map, our next and final stop is the THERMOSHPERE. We’re almost there! ",
    "I wonder what sort of treasure we’ll find..."
];

const cloudVidEl = document.getElementById("clouds-video")

function pacifistClouds() {
    setTimeout(scene0, 100)
    setTimeout(scene1, 1000)
    setTimeout(scene2, 8000)
    setTimeout(scene3, 14000)
    setTimeout(scene4, 314000) // make me length of video + video start time
}

function scene0() {
    renderMap()
    fadeMap(1, 1)
    toggleAnimation("side", "duo")
    changeSize("duo", 1, .3)
    jumpChar("pino", 3000, 3000)
    jumpChar("jaz", 3000, 3000)
    jumpChar("npc", 2000, 2000)
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
                slideChar("pino", locations.clouds.mapLocations.pino.x, locations.clouds.mapLocations.pino.y, 3000)
                slideChar("jaz", locations.clouds.mapLocations.jaz.x, locations.clouds.mapLocations.jaz.y, 3000)
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
                slideChar("pino", locations.clouds.mapLocations.pino.x, locations.clouds.mapLocations.pino.y, 3000)
                slideChar("jaz", locations.clouds.mapLocations.jaz.x, locations.clouds.mapLocations.jaz.y, 3000)
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
    cloudVidEl.style.visibility = "visible"
    cloudVidEl.style.opacity = 1
    cloudVidEl.play()
    videoAnimationPlaylist()
}
function scene4() {
    //after video
    cloudVidEl.style.opacity = 0
    setTimeout(() => {
        cloudVidEl.pause()
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
    const jazEl = document.getElementById("jaz-char")
    const pinoEl = document.getElementById("pino-char")
    const npcEl = document.getElementById("npc")

    jazEl.classList.add("float-cloud")
    setTimeout(() => {

        pinoEl.classList.add("float-cloud")
    }, 3000)
    setTimeout(() => {
        npcEl.classList.add("float-cloud")
    }, 2000)
    setTimeout(() => {
        fadeChar("jaz", -1000, 0, 200, 200)
        setTimeout(() => {
            slideChar("jaz", 2000, -100, 30000)
        }, 3000)
    }, 8000)
    setTimeout(() => {
        fadeChar("pino", -1000, 100, 300, 200)
        setTimeout(() => {
            slideChar("pino", 2000, 100, 30000)
        }, 3000)
    }, 12000)


    setTimeout(() => {
        jumpChar("npc", 1900, 0)
        setTimeout(() => {
            slideChar("npc", -2000, 0, 6000)
            setTimeout(() => {
                flipChar("left", "npc")
            }, 1000)
            setTimeout(() => {
                flipChar("right", "npc")
            }, 2000)
            setTimeout(() => {
                flipChar("left", "npc")
            }, 3000)
            setTimeout(() => {
                flipChar("right", "npc")
            }, 4000)
            setTimeout(() => {
                flipChar("left", "npc")
            }, 5000)
        }, 1000)
    }, 60000)

    setTimeout(() => {
        changeSize("duo", 1, .8)
        toggleAnimation("run", "duo")
        flipChar("left", "duo")
        jumpChar("npc", -2000, 0)
        flipChar("right", "npc")
        fadeChar("jaz", 2000, 0, 400, 200)
        setTimeout(() => {
            slideChar("jaz", -1000, -400, 30000)
        }, 3000)
        setTimeout(() => {
            slideChar("npc", 1900, 0, 30000)
        }, 9000)
    }, 120000)
    setTimeout(() => {
        fadeChar("pino", 2000, 100, -400, 200)
        setTimeout(() => {
            slideChar("pino", -1000, 400, 30000)
        }, 6000)
    }, 120000)




    setTimeout(() => {
        changeSize("npc", 1, .8)
        setTimeout(() => {
            congaLine(1, 8, 100)
        }, 100)
        setTimeout(() => {
            slideChar("npc", -1900, 0, 30000)
        }, 1000)
    }, 180000)

    setTimeout(() => {
        const almostEl = document.getElementById("almost-space")

        startFlipping(45000)
        toggleAnimation("front", "duo")
        setTimeout(() => {
            jumpChar(almostEl, 2000, 0)
            fadeChar("jaz", -1000, 0, 200, 200)
            setTimeout(() => {
                slideChar("jaz", 2000, -100, 30000)
                slideChar(almostEl, 1000, 0, 5000)
            }, 3000)
        }, 8000)
        setTimeout(() => {
            slideChar("npc", 2000, 0, 30000)
        }, 9000)
        setTimeout(() => {
            fadeChar("pino", -1000, 100, 300, 200)
            setTimeout(() => {
                slideChar("pino", 2000, 100, 30000)
            }, 3000)
        }, 12000)
    }, 240000)
}

function startFlipping(duration = 45000) {
    let direction = "left";
    const target = "duo";

    const interval = setInterval(() => {
        flipChar(direction, target);
        direction = direction === "left" ? "right" : "left";
    }, 300);

    // Stop the interval after the specified duration
    setTimeout(() => {
        clearInterval(interval);
    }, duration);
}


pacifistClouds()