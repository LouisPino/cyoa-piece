
textsArr = [
    "Look at all these wonderful rocks! We should spend some time admiring them.",
    "Oh boy! We did it! We found the cave. Let’s go check it out."
];

const rockFieldVidEl = document.getElementById("rockField-video")
const npcEl = document.getElementById("npc-size-ctr")

function rockField() {
    setTimeout(scene0, 100)
    setTimeout(scene1, 1000)
    setTimeout(scene2, 6000)
    setTimeout(scene3, 20000)
    setTimeout(scene4, 260000) // make me length of video + video start time
    setTimeout(scene5, 269000) // scene4 + 9000
}

function scene0() {
    jumpChar(npcEl, -1400, 100)
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
    flipChar("right", "duo")
    fadeChar("pino", locations.forestNorth.mapLocations.pino.x, locations.forestNorth.mapLocations.pino.y, 50, 1000)
    fadeChar("jaz", locations.forestNorth.mapLocations.jaz.x, locations.forestNorth.mapLocations.jaz.y, 50, 1000)
    setTimeout(() => {
        toggleAnimation("walk", "duo")
        slideChar("pino", locations.rockField.mapLocations.pino.x, locations.rockField.mapLocations.pino.y, 3000)
        slideChar("jaz", locations.rockField.mapLocations.jaz.x, locations.rockField.mapLocations.jaz.y, 3000)
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
        }, 10000)
    }, 12000)
}
function scene3() {
    //play video
    rockFieldVidEl.style.visibility = "visible"
    rockFieldVidEl.style.opacity = 1
    rockFieldVidEl.play()
    setTimeout(() => {
        changeBg("animated/cave.gif")
    }, 7000)
    videoAnimationPlaylist()
}
function scene4() {
    //after video
    rockFieldVidEl.style.opacity = 0
    setTimeout(() => {
        rockFieldVidEl.pause()
    }, 8000)
    slideBoxY("duo")
    setTimeout(nextLine, 750)
    setTimeout(() => {
        slideBoxY("none")
    }, 10000)

}
function scene5() {
    flipChar("right", "duo")
    changeSize("duo", 1, 1)
    jumpChar("duo", 0, 0)
    renderPino()
    renderJaz()
    fadeChar("pino", 0, 0, 50, 1000)
    fadeChar("jaz", 0, -0, 50, 1000)


    setTimeout(() => {
        toggleAnimation("run", "duo")
        slideChar("pino", 700, -375, 5000)
        slideChar("jaz", 300, -375, 5000)
        changeSize("duo", 5000, .01)
    }, 1000)
}



function videoAnimationPlaylist() {
    changeSize("duo", 1, .8)
    flipChar("right", "duo")
    setTimeout(() => {
        toggleAnimation("walk", "duo")
        fadeChar("jaz", -850, 200, 10, 30)
        fadeChar("pino", -650, 200, 10, 30)
        setTimeout(() => {
            toggleAnimation("walk", "duo")
            slideChar("jaz", 246, 50, 10000)
            slideChar("pino", 446, 50, 10000)
            setTimeout(() => {
                toggleAnimation("side", "duo")
            }, 10000)
        }, 300)
    }, 10000)
    setTimeout(() => {
        setTimeout(() => {
            flipChar("left", "duo")
        }, 1000)
        setTimeout(() => {
            flipChar("right", "duo")
        }, 6000)
        setTimeout(() => {
            toggleAnimation("front", "duo")
        }, 11000)
        setTimeout(() => {
            hopChar("duo")
            setTimeout(() => {
                hopChar("duo")
            }, 700)
            setTimeout(() => {
                hopChar("duo")
            }, 1400)
            setTimeout(() => {
                hopChar("duo")
            }, 2100)
            setTimeout(() => {
                hopChar("duo")
            }, 2800)
        }, 14000)
    }, 24300)
    setTimeout(() => {
        fadeChar("duo", 3000, 3000, 4000, 10)
    }, 39500)


    setTimeout(() => {
        slideChar("npc", 0, 0, 10000)
        setTimeout(() => {
            hopChar("npc")
            setTimeout(() => {
                hopChar("npc")
            }, 700)
            setTimeout(() => {
                flipChar("left", "npc")
            }, 1500)
            setTimeout(() => {
                flipChar("right", "npc")
            }, 3000)
        }, 11000)
        slideChar("npc", 2300, 120, 10000)
    }, 45000)


    setTimeout(() => {
        changeSize("duo", 1, .8)
        toggleAnimation("walk", "duo")
        flipChar("left", "duo")
        fadeChar("pino", 1800, -500, 10, 3000)
        fadeChar("jaz", 1600, -500, -20, 3000)
        setTimeout(() => {
            slideChar("pino", -750, 150, 20000)
            slideChar("jaz", -950, 120, 20000)
        }, 3000)
        setTimeout(() => {
            toggleAnimation("front", "duo")
        }, 30000)
    }, 91000)



    setTimeout(() => {
        slideChar("npc", 0, 0, 10000)
        setTimeout(() => {
            hopChar("npc")
            setTimeout(() => {
                hopChar("npc")
            }, 700)
            setTimeout(() => {
                flipChar("left", "npc")
            }, 1500)
            setTimeout(() => {
                flipChar("right", "npc")
            }, 2000)
        }, 11000)
        slideChar("npc", -1500, 120, 10000)
    }, 140000)


    setTimeout(() => {
        changeSize("duo", 1, .2)
        toggleAnimation("front", "duo")
        fadeChar("jaz", 362, -630, 10, 3000)
        fadeChar("pino", 762, -630, 10, 3000)
        setTimeout(() => { hopChar("duo", 100, 500, true) }, 3000)
        setTimeout(() => { hopChar("duo", 100, 500, true) }, 4000)
        setTimeout(() => { hopChar("duo", 100, 500, true) }, 5000)
        setTimeout(() => { hopChar("duo", 100, 500, true) }, 6000)
        setTimeout(() => { hopChar("duo", 100, 500, true) }, 7000)
        setTimeout(() => { hopChar("duo", 100, 500, true) }, 8000)
        setTimeout(() => { hopChar("duo", 100, 500, true) }, 9000)
        setTimeout(() => { hopChar("duo", 100, 500, true) }, 10000)
        setTimeout(() => { hopChar("duo", 100, 500, true) }, 11000)
        setTimeout(() => { hopChar("duo", 100, 500, true) }, 12000)
        setTimeout(() => { hopChar("duo", 100, 500, true) }, 13000)
        setTimeout(() => { hopChar("duo", 100, 500, true) }, 14000)
        setTimeout(() => { hopChar("duo", 100, 500, true) }, 15000)
        setTimeout(() => { hopChar("duo", 100, 500, true) }, 16000)
        setTimeout(() => { hopChar("duo", 100, 500, true) }, 17000)
        setTimeout(() => { hopChar("duo", 100, 500, true) }, 18000)
        setTimeout(() => {
            fadeChar("duo", 3000, 3000, 3000, 10)
        }, 16000)
    }, 192000)
}






rockField()
