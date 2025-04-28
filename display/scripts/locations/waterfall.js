const boatRockerEl = document.getElementById("boat-rocker")


textsArr = [
    "Look at this beautiful waterfall! Let’s take a moment to enjoy the sounds.",
    "Oh boy! We did it! We found the river system. Let’s go check it out."
];

const waterfallVidEl = document.getElementById("waterfall-video")

function waterfall() {
    jumpChar(boatRockerEl, -1000, 300)
    setTimeout(scene0, 100)
    setTimeout(scene1, 1000)
    setTimeout(scene2, 6000)
    setTimeout(scene3, 20000)
    setTimeout(scene4, 45000) // make me length of video + video start time
    setTimeout(scene5, 51000) // scene4 + 6000
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
    fadeChar("pino", 500, -400, 50, 1000)
    fadeChar("jaz", 200, -400, 50, 1000)
    setTimeout(() => {
        toggleAnimation("walk", "duo")
        flipChar("left", "duo")
        slideChar("pino", 0, -400, 3000)
        slideChar("jaz", -300, -400, 3000)
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
    }, 5000)
    slideBoxY("duo")
    setTimeout(nextLine, 750)
    setTimeout(() => {
        slideBoxY("none")
    }, 5000)

}
function scene5() {
    getInBoat()
    slideChar(boatRockerEl, 3000, 300, 4000)
}

waterfall()


function getInBoat() {
    removePino()
    removeJaz()
    toggleAnimation("front", "duo")
    jumpChar(boatRockerEl, -1000, 300)
    pinoCharSizeCtr.style.left = "20%"
    pinoCharSizeCtr.style.top = "-5%"
    jazCharSizeCtr.style.left = "30%"
    jazCharSizeCtr.style.top = "-5%"
    pinoCharSizeCtr.classList.add("float-only")
    jazCharSizeCtr.classList.add("float-only")
    renderJaz("river")
    renderPino("river")
}