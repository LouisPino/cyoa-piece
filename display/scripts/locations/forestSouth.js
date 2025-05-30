textsArr = [
    "It looks like there's a fork in the road…"
];

const forestVidEl = document.getElementById("forest-video")
const forestStillEl = document.getElementById("forest-bg")

function forestSouth() {
    setTimeout(scene0, 100)
    setTimeout(scene1, 1000)
    setTimeout(scene2, 6000)
    setTimeout(scene3, 12000)
    setTimeout(scene4, 310000) // make me length of video + video start time
}

function scene0() {
    renderMap()
    fadeMap(1, 1)
    toggleAnimation("side", "duo")
    flipChar("left", "duo")
    changeSize("duo", 1, .3)
    jumpChar("pino", 3000, 3000)
    jumpChar("jaz", 3000, 3000)

}
function scene1() {
    renderPino()
    renderJaz()
    fadeChar("pino", locations.intro.mapLocations.pino.x, locations.intro.mapLocations.pino.y, 50, 1000)
    fadeChar("jaz", locations.intro.mapLocations.jaz.x, locations.intro.mapLocations.jaz.y, 50, 1000)
    setTimeout(() => {
        toggleAnimation("walk", "duo")
        slideChar("pino", locations.forestSouth.mapLocations.pino.x, locations.forestSouth.mapLocations.pino.y, 3000)
        slideChar("jaz", locations.forestSouth.mapLocations.jaz.x, locations.forestSouth.mapLocations.jaz.y, 3000)
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
}
function scene3() {
    //play video
    forestVidEl.style.visibility = "visible"
    forestVidEl.style.opacity = 1
    forestVidEl.play()
    videoAnimationPlaylist()

}
function scene4() {
    //after video
    forestVidEl.style.opacity = 0
    setTimeout(() => {
        forestVidEl.pause()
    }, 8000)
    setTimeout(() => {
        slideBoxY("duo")
        setTimeout(nextLine, 750)
        setTimeout(() => {
            slideBoxY("none")
        }, 8000)
    }, 1000)
}


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
            slideChar("jaz", 900, -400, 15000)
            slideChar("pino", 1150, -400, 15000)
            setTimeout(() => {
                slideChar("jaz", 2000, -400, 15000)
                slideChar("pino", 2250, -400, 15000)
            }, 15000)
        }, 3000)
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
            slideChar("pino", 1900, -42, 8000)
        }, 3000)
        setTimeout(() => {
            fadeChar("duo", 3000, 3000, 3000, 10)
        }, 30000)
    }, 286000)
}



forestSouth()