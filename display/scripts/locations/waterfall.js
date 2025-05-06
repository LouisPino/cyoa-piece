const boatRockerEl = document.getElementById("boat-rocker")


textsArr = [
    "Look at this beautiful waterfall! Let’s take a moment to enjoy the sounds.",
    "Oh boy! We did it! We found the River System. Let’s go check it out."
];

const waterfallVidEl = document.getElementById("waterfall-video")

function waterfall() {
    jumpChar(boatRockerEl, -1000, 300)
    setTimeout(scene0, 100)
    setTimeout(scene1, 1000)
    setTimeout(scene2, 6000)
    setTimeout(scene3, 20000)
    setTimeout(scene4, 145000) // make me length of video + video start time
    setTimeout(scene5, 154000) // scene4 + 9000
    setTimeout(scene6, 167000)


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
    fadeChar("pino", locations.forestSouth.mapLocations.pino.x, locations.forestSouth.mapLocations.pino.y, 50, 1000)
    fadeChar("jaz", locations.forestSouth.mapLocations.jaz.x, locations.forestSouth.mapLocations.jaz.y, 50, 1000)
    setTimeout(() => {
        toggleAnimation("walk", "duo")
        flipChar("left", "duo")
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
    setTimeout(() => {
        changeBg("animated/river.gif")
    }, 7000)
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
    slideChar(boatRockerEl, 3000, 300, 4000)
    sendToServer({ type: "fx", val: "boat.wav" })
}
function scene6() {
    getOutBoat(boatRockerEl)
    // slideChar("duo", 0, 0, 4000)
}

waterfall()

