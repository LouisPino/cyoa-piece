
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
    setTimeout(scene4, 320000) // make me length of video + video start time
    setTimeout(scene5, 329000) // scene4 + 9000
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


function videoAnimationPlaylist() {

    changeSize("duo", 1, .8)
    flipChar("left", "duo")
    setTimeout(() => {
        toggleAnimation("side", "duo")
        fadeChar("duo", 550, 1000, 10, 3000)
        setTimeout(() => {
            changeSize("duo", 30000, .5)

            toggleAnimation("walk", "duo")
            slideChar("jaz", 375, -265, 30000)
            slideChar("pino", 575, -265, 30000)
        }, 3000)
        setTimeout(() => {
            fadeChar("duo", 3000, 3000, 3000, 10)
        }, 33000)
    }, 30000)



    setTimeout(() => {
        changeSize("duo", 1, .8)
        flipChar("right", "duo")
        toggleAnimation("side", "duo")

        fadeChar("jaz", -550, 800, 10, 3000)
        fadeChar("pino", -300, 850, 10, 3000)
        setTimeout(() => {
            toggleAnimation("walk", "duo")
            changeSize("duo", 15000, .4)
            slideChar("jaz", 500, -300, 15000)
            slideChar("pino", 750, -300, 15000)
        }, 3000)
        setTimeout(() => {
            fadeChar("duo", 3000, 3000, 3000, 10)
        }, 18000)
    }, 180000)


    setTimeout(() => {
        changeSize("duo", 1, .8)
        flipChar("right", "duo")
        toggleAnimation("side", "duo")
        fadeChar("jaz", -850, -42, 10, 3000)
        fadeChar("pino", -1050, -42, 10, 3000)
        setTimeout(() => {
            toggleAnimation("walk", "duo")
            slideChar("jaz", 1950, -42, 8000)
            slideChar("pino", 1750, -42, 8000)
        }, 3000)
        setTimeout(() => {
            fadeChar("duo", 3000, 3000, 3000, 10)
        }, 30000)
    }, 286000)
}