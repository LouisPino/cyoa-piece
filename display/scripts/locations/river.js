const boatRockerEl = document.getElementById("boat-rocker")
const boatCtrEl = document.getElementById("boat-ctr")
const riverVideoEl = document.getElementById("river-video")
textsArr = [
    "It looks like there's a fork in the river…"
];


function river() {
    changeSize(boatCtrEl, 1, .2)
    jumpChar(boatRockerEl, -5000, 500)
    setTimeout(scene0, 100)
    setTimeout(scene1, 1000)
    setTimeout(scene2, 8000)
    setTimeout(scene3, 14000)
    setTimeout(scene4, 244000) //244000


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
            flipChar("left", "duo")
            slideChar("pino", locations.river.mapLocations.pino.x, locations.river.mapLocations.pino.y, 3000)
            slideChar("jaz", locations.river.mapLocations.jaz.x, locations.river.mapLocations.jaz.y, 3000)
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
    changeSize(boatCtrEl, 1, .4)

    videoAnimationPlaylist()

}
function scene4() {
    //after video
    // riverVideoEl.style.opacity = 0
    setTimeout(() => {
        riverVideoEl.pause()
    }, 8000)
    setTimeout(() => {
        slideBoxY("duo")
        setTimeout(nextLine, 750)
        setTimeout(() => {
            slideBoxY("none")
        }, 9000)
    }, 1000)
}

function videoAnimationPlaylist() {
    setTimeout(() => {
        fadeChar(boatRockerEl, -1350, 150, 10, 30)
        setTimeout(() => {
            slideChar(boatRockerEl, 1640, -150, 10000)
        }, 3000)
    }, 2000)



    setTimeout(() => {
        fadeChar(boatRockerEl, -1314, 700, 10, 1000)
        setTimeout(() => {
            changeSize(boatCtrEl, 20000, .1)
            slideChar(boatRockerEl, 100, -200, 10000)
        }, 1300)
        setTimeout(() => {
            changeSize(boatCtrEl, 20000, .1)
            slideChar(boatRockerEl, 300, -400, 5000)
        }, 11300)
        setTimeout(() => {
            fadeChar(boatCtrEl, 2000, 2000, 3000, 10)
            slideChar(boatRockerEl, 300, -400, 5000)
        }, 11300)
    }, 70000)


    setTimeout(() => {
        changeSize(boatCtrEl, 1, .7)
        fadeChar(boatRockerEl, -1350, -50, 10, 30)
        setTimeout(() => {
            changeSize(boatCtrEl, 20000, .2)
            slideChar(boatRockerEl, 1600, -250, 30000)
        }, 300)
    }, 128000)

    setTimeout(() => {
        changeSize(boatCtrEl, 1, .1)
        fadeChar(boatRockerEl, 0, -800, 10, 30)
        setTimeout(() => {
            changeSize(boatCtrEl, 30000, 1)
            slideChar(boatRockerEl, 0, 1200, 40000)
        }, 300)
    }, 187000)

}

river()