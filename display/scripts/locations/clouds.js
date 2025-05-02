textsArr = [
    `This is nice!`,
    "???",
    "Jester Jaz? Where did you go? ",
    "HellooooooooooOOOOOo? Are you there?",
    "Halt!! You shall go no further",
    "Do you have any idea what you’re holding? You’re a menace! And a dangerous one too!",
    "What do you have to say for yourself?",
]


function clouds() {
    scene0()
    setTimeout(scene1, 100)
    setTimeout(scene2, 8000)
    setTimeout(scene3, 16000)
    setTimeout(scene4, 39000)


}


function scene0() {
    renderMap()
    changeSize("duo", 1, .3)
    flipChar("right", "duo")
    fadeMap(1, 1)
    toggleAnimation("front", "duo")
    jumpChar("pino", 3000, 3000)
    jumpChar("pino", 3000, 3000)
    jumpChar("npc", 1500, 0)
    changeDialogueSprite("cloud/1")

}

function scene1() {
    renderPino()
    setTimeout(() => {
        if (checkHistory("river")) {
            fadeChar("pino", locations.river.mapLocations.pino.x, locations.river.mapLocations.pino.y, 50, 1000)
            setTimeout(() => {
                flipChar("left", "pino")
                slideChar("pino", locations.clouds.mapLocations.pino.x, locations.clouds.mapLocations.pino.y, 3000)
                setTimeout(() => {
                    flipChar("right", "pino")
                }, 300)
                setTimeout(() => {
                    flipChar("left", "pino")
                }, 600)
                setTimeout(() => {
                    flipChar("right", "pino")
                }, 900)
                setTimeout(() => {
                    flipChar("left", "pino")
                }, 1200)
                setTimeout(() => {
                    flipChar("right", "pino")
                }, 1500)
                setTimeout(() => {
                    flipChar("left", "pino")
                }, 1800)
                setTimeout(() => {
                    flipChar("right", "pino")
                }, 2100)
                setTimeout(() => {
                    flipChar("left", "pino")
                }, 2400)
                setTimeout(() => {
                    flipChar("right", "pino")
                }, 2700)
            }, 3000)
        } else {
            fadeChar("pino", locations.cave.mapLocations.pino.x, locations.cave.mapLocations.pino.y, 50, 1000)
            setTimeout(() => {
                flipChar("left", "pino")
                slideChar("pino", locations.clouds.mapLocations.pino.x, locations.clouds.mapLocations.pino.y, 3000)
                setTimeout(() => {
                    flipChar("right", "pino")
                }, 300)
                setTimeout(() => {
                    flipChar("left", "pino")
                }, 600)
                setTimeout(() => {
                    flipChar("right", "pino")
                }, 900)
                setTimeout(() => {
                    flipChar("left", "pino")
                }, 1200)
                setTimeout(() => {
                    flipChar("right", "pino")
                }, 1500)
                setTimeout(() => {
                    flipChar("left", "pino")
                }, 1800)
                setTimeout(() => {
                    flipChar("right", "pino")
                }, 2100)
                setTimeout(() => {
                    flipChar("left", "pino")
                }, 2400)
                setTimeout(() => {
                    flipChar("right", "pino")
                }, 2700)
            }, 3000)
        }

    }, 1000)
}

function scene2() {
    fadeMap(0, 5000)
    fadeChar("pino", -850, 0, 5000, 20)
    setTimeout(() => {
        locationBanner(currentLocation.banner)
    }, 5000)
}

function scene3() {
    changeSize("pino", 1, 1)
    setTimeout(() => {
        toggleAnimation("weapon", "pino")
        landChar("pino", 100, 0, -1000)
    }, 100)
    setTimeout(() => {
        slideBoxX("pino")
        setTimeout(nextLine, 500)
    }, 3500)
    setTimeout(() => {
        clearText()
        setTimeout(nextLine, 200)
        setTimeout(() => { flipChar("left", "pino") }, 1000)
        setTimeout(() => { flipChar("right", "pino") }, 2000)
        setTimeout(() => { flipChar("left", "pino") }, 4500)
        setTimeout(() => { flipChar("right", "pino") }, 5500)
    }, 7000)
    setTimeout(() => {
        clearText()
        setTimeout(nextLine, 200)
    }, 12000)
    setTimeout(() => {
        clearText()
        setTimeout(nextLine, 200)
    }, 17000)
    setTimeout(() => {
        clearText()
        slideBoxX("none")
    }, 22000)
}

function scene4() {
    slideChar("npc", 350, 0, 1000)
    setTimeout(() => {
        hopChar("npc")
    }, 1000)
    setTimeout(() => {
        toggleBox("sprite")
        setTimeout(nextLine, 200)
    }, 1400)
    setTimeout(() => {
        clearText()
        setTimeout(nextLine, 200)
    }, 5500)
    setTimeout(() => {
        clearText()
        setTimeout(nextLine, 200)
    }, 13000)
    setTimeout(() => {
        clearText()
        slideBoxX("none")
    }, 18000)
}


// clouds()