textsArr = [
    "Look at all these wonderful rocks! We should spend some time admiring them.",
    "Oh boy! We did it! We found the cave. Let’s go check it out."
];

const rockFieldVidEl = document.getElementById("rockField-video")

function rockField() {
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
        slideChar("pino", 900, -400, 3000)
        slideChar("jaz", 600, -400, 3000)
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
    rockFieldVidEl.style.visibility = "visible"
    rockFieldVidEl.style.opacity = 1
    rockFieldVidEl.play()
    setTimeout(() => {
        changeBg("animated/cave.gif")
    }, 7000)
}
function scene4() {
    //after video
    rockFieldVidEl.style.opacity = 0
    setTimeout(() => {
        rockFieldVidEl.pause()
    }, 5000)
    slideBoxY("duo")
    setTimeout(nextLine, 750)
    setTimeout(() => {
        slideBoxY("none")
    }, 5000)

}
function scene5() {

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

rockField()