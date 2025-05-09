const boatRockerEl = document.getElementById("boat-rocker")
const boatCtrEl = document.getElementById("boat-ctr")
const npcEl = document.getElementById("npc-size-ctr")

textsArr = [
    "Look at this beautiful waterfall! Let’s take a moment to enjoy the sounds.",
    "Oh boy! We did it! We found the River System. Let’s go check it out."
];

const waterfallVidEl = document.getElementById("waterfall-video")

function waterfall() {
    jumpChar(boatRockerEl, -1000, 300)
    jumpChar(npcEl, -1200, 300)
    setTimeout(scene0, 100)
    setTimeout(scene1, 1000)
    setTimeout(scene2, 6000)
    setTimeout(scene3, 20000)
    setTimeout(scene4, 262000) // make me length of video + video start time
    setTimeout(scene5, 274000) // scene4 + 9000
    setTimeout(scene6, 287000)


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
    flipChar("left", "duo")
    renderPino()
    renderJaz()
    fadeChar("pino", locations.forestSouth.mapLocations.pino.x, locations.forestSouth.mapLocations.pino.y, 50, 1000)
    fadeChar("jaz", locations.forestSouth.mapLocations.jaz.x, locations.forestSouth.mapLocations.jaz.y, 50, 1000)
    setTimeout(() => {
        toggleAnimation("walk", "duo")
        slideChar("pino", locations.waterfall.mapLocations.pino.x, locations.waterfall.mapLocations.pino.y, 3000)
        slideChar("jaz", locations.waterfall.mapLocations.jaz.x, locations.waterfall.mapLocations.jaz.y, 3000)
        setTimeout(() => {
            toggleAnimation("side", "duo")
        }, 3000)
    }, 1000)
}
function scene2() {
    fadeMap(0, 5000)
    fadeChar("duo", 3000, 3000, 5000, 20)
    setTimeout(() => {
        locationBanner(currentLocation.banner)
    }, 5000)
    setTimeout(() => {
        slideBoxY("duo")
        setTimeout(nextLine, 750)
        setTimeout(() => {
            slideBoxY("none")
        }, 8000)
    }, 12000)
}
function scene3() {
    //play video
    waterfallVidEl.style.visibility = "visible"
    waterfallVidEl.style.opacity = 1
    waterfallVidEl.play()
    videoAnimationPlaylist()
}
function scene4() {
    //after video
    waterfallVidEl.style.opacity = 0
    setTimeout(() => {
        waterfallVidEl.pause()
    }, 8000)
    slideBoxY("duo")
    setTimeout(nextLine, 750)
    setTimeout(() => {
        slideBoxY("none")
    }, 9000)

}
function scene5() {
    getInBoat(boatRockerEl)
    changeSize(boatCtrEl, 1, .6)
    slideChar(boatRockerEl, 3000, 300, 4000)
    sendToServer({ type: "fx", val: "boat.wav" })
}
function scene6() {
    getOutBoat(boatRockerEl)
    // slideChar("duo", 0, 0, 4000)
}


function videoAnimationPlaylist() {
    changeSize("duo", 1, .7)
    flipChar("right", "duo")
    setTimeout(() => {
        toggleAnimation("walk", "duo")
        fadeChar("jaz", -850, -290, 10, 30)
        fadeChar("pino", -650, -290, 10, 30)
        setTimeout(() => {
            slideChar("jaz", 1640, 150, 10000)
            slideChar("pino", 1840, 150, 10000)
            setTimeout(() => {
                hopChar("jaz", 300, 1200)
            }, 2500)
            setTimeout(() => {
                hopChar("pino", 300, 1400)
            }, 3500)
        }, 3000)
    }, 4000)



    setTimeout(() => {
        fadeChar("jaz", -830, 626, 10, 30)
        fadeChar("pino", -630, 626, 10, 30)
        setTimeout(() => {
            slideChar("jaz", 1690, 626, 15000)
            slideChar("pino", 1890, 626, 15000)
            setTimeout(() => {
                hopChar("jaz", 250, 800, true)
            }, 5000)
            setTimeout(() => {
                hopChar("pino", 250, 800, true)
            }, 7000)
        }, 300)
    }, 30000)


    setTimeout(() => {
        toggleAnimation("run", "duo")
        fadeChar("jaz", -830, 250, 10, 30)
        fadeChar("pino", -630, 250, 10, 30)
        setTimeout(() => {
            slideChar("jaz", 2000, 250, 8000)
            slideChar("pino", 1800, 250, 8000)
        }, 300)
        setTimeout(() => {
            hopChar("jaz", 50, 700)
            setTimeout(() => {
                hopChar("jaz", 50, 700)
            }, 1000)
            setTimeout(() => {
                hopChar("jaz", 50, 700)
            }, 2000)
            setTimeout(() => {
                hopChar("jaz", 50, 700)
            }, 3000)
            setTimeout(() => {
                hopChar("jaz", 50, 700)
            }, 4000)
            setTimeout(() => {
                hopChar("jaz", 50, 700)
            }, 5000)
            setTimeout(() => {
                hopChar("jaz", 50, 700)
            }, 6000)
            setTimeout(() => {
                hopChar("jaz", 50, 700)
            }, 7000)
            setTimeout(() => {
                hopChar("jaz", 50, 700)
            }, 8000)
        }, 300)
        setTimeout(() => {
            hopChar("pino", 50, 700)
            setTimeout(() => {
                hopChar("pino", 50, 700)
            }, 1000)
            setTimeout(() => {
                hopChar("pino", 50, 700)
            }, 2000)
            setTimeout(() => {
                hopChar("pino", 50, 700)
            }, 3000)
            setTimeout(() => {
                hopChar("pino", 50, 700)
            }, 4000)
            setTimeout(() => {
                hopChar("pino", 50, 700)
            }, 5000)
            setTimeout(() => {
                hopChar("pino", 50, 700)
            }, 6000)
            setTimeout(() => {
                hopChar("pino", 50, 700)
            }, 7000)
            setTimeout(() => {
                hopChar("pino", 50, 700)
            }, 8000)
        }, 700)
    }, 75000)




    setTimeout(() => {
        changeSize("npc", 1, .5)
        fadeChar("npc", 3750, -250, 2000, 3000)
        setTimeout(() => {
            hopChar("npc")
            sendToServer({ type: "fx", val: "ribbit.mp3" })
            setTimeout(() => {
                hopChar("npc")
            }, 800)
        }, 6000)
        setTimeout(() => {
            flipChar("left", "npc")
            setTimeout(() => {
                flipChar("left", "npc")
            }, 1000)
            setTimeout(() => {
                hopChar("npc")
                setTimeout(() => {
                    hopChar("npc")
                }, 800)
            }, 2000)
            setTimeout(() => {
                hopChar("npc")
                setTimeout(() => {
                    hopChar("npc")
                }, 800)
            }, 5000)
            setTimeout(() => {
                hopChar("npc")
                setTimeout(() => {
                    hopChar("npc")
                }, 800)
            }, 16000)
            setTimeout(() => {
                hopChar("npc")
                setTimeout(() => {
                    hopChar("npc")
                }, 800)
            }, 20000)
            setTimeout(() => {
                hopChar("npc")
                setTimeout(() => {
                    hopChar("npc")
                }, 800)
            }, 23000)
            setTimeout(() => {
                hopChar("npc")
                setTimeout(() => {
                    hopChar("npc")
                }, 800)
            }, 26000)
        }, 9000)
        setTimeout(() => {
            fadeChar("npc", -4000, 100, 5000, 3000)
        }, 36000)
    }, 114000)

    setTimeout(() => {
        toggleAnimation("front", "duo")
        jumpChar("pino", 3000, -225)
        fadeChar("jaz", 834, -150, 3000, 1000)
        setTimeout(
            () => {
                fadeChar("pino", 325, -225, 2900, 1000)
            }, 100
        )
        setTimeout(() => {
            hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (900 - 300 + 1)) + 300, true);
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 1000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 4000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 7000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 10000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 12000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 15000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 18000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 21000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 22000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 25000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 28000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 31000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 34000)
            setTimeout(() => {
                hopChar("jaz", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 37000)
        }, 300)
        setTimeout(() => {
            hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 2000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 5000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 8000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 11000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 14000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 17000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 20000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 23000)

            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 26000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 29000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 32000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 35000)
            setTimeout(() => {
                hopChar("pino", Math.floor(Math.random() * (300 - 100 + 1)) + 100, Math.floor(Math.random() * (1100 - 700 + 1)) + 300, true);
            }, 37500)
            setTimeout(() => {
                fadeChar("duo", 3000, 3000, 3000, 30)
            }, 40000)
        }, 700)
    }, 160000)



    setTimeout(() => {
        toggleAnimation("walk", "duo")
        changeSize("duo", 1, .2)
        setTimeout(() => {
            jumpChar("jaz", -1000, -700)
            jumpChar("pino", -800, -700)
        }, 100)
        setTimeout(() => {
            slideChar("jaz", 2000, -750, 15000)
            slideChar("pino", 1800, -750, 15000)
        }, 500)
    }, 215000)









}

waterfall()

