const boatRockerEl = document.getElementById("boat-rocker")
const boatCtrEl = document.getElementById("boat-ctr")
const riverVideoEl = document.getElementById("river-video")
textsArr = [
    "It looks like there's a fork in the road…"
];


function river() {
    changeSize(boatCtrEl, 1, .2)
    jumpChar(boatRockerEl, -5000, 500)
    setTimeout(scene0, 100)
    setTimeout(scene1, 1000)
    setTimeout(scene2, 8000)
    setTimeout(scene3, 14000)
    setTimeout(scene4, 30000)


}

function scene0() {
    renderMap()
    fadeMap(1, 1)
    toggleAnimation("front", "duo")


}

function scene1() {

    toggleAnimation("front", "duo")
    if (checkHistory("golems")) {
        changeSize("duo", 1, .3)
        renderPino()
        renderJaz()
        fadeChar("pino", locations.golems.mapLocations.pino.x, locations.golems.mapLocations.pino.y, 50, 1000)
        fadeChar("jaz", locations.golems.mapLocations.jaz.x, locations.golems.mapLocations.jaz.y, 50, 1000)
        setTimeout(() => {
            slideChar("pino", locations.river.mapLocations.pino.x, locations.river.mapLocations.pino.y, 3000)
            slideChar("jaz", locations.river.mapLocations.jaz.x, locations.river.mapLocations.jaz.y, 3000)
        }, 3000)
    } else {
        getInBoat(boatRockerEl)
        setTimeout(() => {
            fadeChar(boatRockerEl, -600, 0, 1000, 1000)
        }, 200)
        setTimeout(() => {
            slideChar(boatRockerEl, -300, 300, 3000)
        }, 3000)
    }
}
function scene2() {
    fadeMap(0, 5000)
    if (checkHistory("golems")) {
        fadeChar("duo", 3000, 3000, 5000, 2000)
    } else {
        fadeChar(boatRockerEl, 3000, 3000, 5000, 2000)
    }
    setTimeout(() => {
        locationBanner(currentLocation.banner)
    }, 5000)
}
function scene3() {
    //play video
    getInBoat(boatRockerEl)
    riverVideoEl.style.visibility = "visible"
    riverVideoEl.style.opacity = 1
    riverVideoEl.play()
    setTimeout(() => { slideChar(boatRockerEl, 0, 0, 300), 500 })
}
function scene4() {
    //after video
    riverVideoEl.style.opacity = 0
    setTimeout(() => {
        riverVideoEl.pause()
    }, 8000)
    setTimeout(() => {
        slideBoxY("duo")
        setTimeout(nextLine, 750)
        setTimeout(() => {
            slideBoxY("none")
        }, 5000)
    }, 1000)
}






river()