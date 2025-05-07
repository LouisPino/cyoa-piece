textsArr = [
    "It looks like there's a fork in the road…"
];

const caveVidEl = document.getElementById("cave-video")

function cave() {
    setTimeout(scene0, 100)
    setTimeout(scene1, 1000)
    setTimeout(scene2, 8000)
    setTimeout(scene3, 14000)
    setTimeout(scene4, 254000) // make me length of video + video start time
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
        if (checkHistory("frogs")) {
            toggleAnimation("front", "duo")
            fadeChar("pino", locations.frogs.mapLocations.pino.x, locations.frogs.mapLocations.pino.y, 50, 1000)
            fadeChar("jaz", locations.frogs.mapLocations.jaz.x, locations.frogs.mapLocations.jaz.y, 50, 1000)
            setTimeout(() => {
                flipChar("left", "duo")
                slideChar("pino", locations.cave.mapLocations.pino.x, locations.cave.mapLocations.pino.y, 3000)
                slideChar("jaz", locations.cave.mapLocations.jaz.x, locations.cave.mapLocations.jaz.y, 3000)
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
            flipChar("left", "duo")
            fadeChar("pino", locations.rockField.mapLocations.pino.x, locations.rockField.mapLocations.pino.y, 50, 1000)
            fadeChar("jaz", locations.rockField.mapLocations.jaz.x, locations.rockField.mapLocations.jaz.y, 50, 1000)
            setTimeout(() => {
                toggleAnimation("walk", "duo")
                slideChar("pino", locations.cave.mapLocations.pino.x, locations.cave.mapLocations.pino.y, 3000)
                slideChar("jaz", locations.cave.mapLocations.jaz.x, locations.cave.mapLocations.jaz.y, 3000)
                setTimeout(() => { toggleAnimation("front", "duo") }, 3000)
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
    caveVidEl.style.visibility = "visible"
    caveVidEl.style.opacity = 1
    caveVidEl.play()
    videoAnimationPlaylist()
}
function scene4() {
    //after video
    // caveVidEl.style.opacity = 0
    // setTimeout(() => {
    caveVidEl.pause()
    // }, 8000)
    setTimeout(() => {
        slideBoxY("duo")
        setTimeout(nextLine, 750)
        setTimeout(() => {
            slideBoxY("none")
        }, 9000)
    }, 1000)
}



function videoAnimationPlaylist() {
    changeSize("duo", 1, .7)
    flipChar("right", "duo")
    setTimeout(() => {
        toggleAnimation("walk", "duo")
        fadeChar("jaz", -850, 150, 10, 30)
        fadeChar("pino", -650, 150, 10, 30)
        setTimeout(() => {
            slideChar("jaz", 1640, 150, 15000)
            slideChar("pino", 1840, 150, 15000)
        }, 3000)
    }, 8000)



    setTimeout(() => {
        toggleAnimation("side", "duo")
        changeSize("duo", 1, .2)
        fadeChar("jaz", -414, 150, 10, 1000)
        fadeChar("pino", -114, 150, 10, 1000)
        setTimeout(() => {
            toggleAnimation("walk", "duo")
            slideChar("jaz", 1690, -800, 15000)
            slideChar("pino", 1990, -800, 15000)
        }, 1300)
    }, 85000)





    setTimeout(() => {
        toggleAnimation("front", "duo")
        fadeChar("jaz", 357, -550, 10, 1000)
        fadeChar("pino", 700, -615, 10, 1000)
        setTimeout(() => {
            slideChar("jaz", 465, -564, 25000)
            slideChar("pino", 750, -615, 25000)
        }, 1000)
        setTimeout(() => {
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 1000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 3000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 5000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 7000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 9000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 11000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 13000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 15000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 17000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 19000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 21000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 23000)
        }, 300)
        setTimeout(() => {
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 2000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 4000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 6000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 8000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 10000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 12000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 14000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 16000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 18000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 20000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 22000)
            setTimeout(() => {
                fadeChar("duo", -1000, -1000, 1000, 1000)
            }, 25000)
        }, 700)
    }, 114000)



    setTimeout(() => {
        changeSize("duo", 1, .7)
        flipChar("right", "duo")
        toggleAnimation("walk", "duo")
        fadeChar("jaz", -850, 150, 10, 30)
        fadeChar("pino", -650, 150, 10, 30)
        setTimeout(() => {
            slideChar("jaz", 0, 100, 5000)
            slideChar("pino", 200, 100, 5000)
            setTimeout(() => {
                toggleAnimation("side", "duo")
            }, 5000)
            setTimeout(() => {
                flipChar("left", "duo")
                setTimeout(() => {
                    flipChar("right", "duo")
                }, 1000)
            }, 6000)
            setTimeout(() => {
                toggleAnimation("walk", "duo")
                slideChar("jaz", 800, 0, 3000)
                slideChar("pino", 1000, 0, 3000)
                setTimeout(() => {
                    toggleAnimation("side", "duo")
                }, 3000)
                setTimeout(() => {
                    flipChar("left", "duo")
                    setTimeout(() => {
                        flipChar("right", "duo")
                    }, 1000)
                }, 4000)
            }, 8000)
            setTimeout(() => {
                toggleAnimation("walk", "duo")
                slideChar("jaz", 1800, -100, 5000)
                slideChar("pino", 2000, -100, 5000)
            }, 14000)
        }, 300)
    }, 180000)

}

cave()