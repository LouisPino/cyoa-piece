textsArr = [
    `This is nice!`,
    "???",
    "Wizard Pino? Where did you go? ",
    "HellooooooooooOOOOOo? Are you there?",
    "Halt!! You shall go no further",
    "Do you have any idea what you’re holding? You’re a menace! And a dangerous one too!",
    "What do you have to say for yourself?",
]



function shores() {
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
    jumpChar("jaz", 3000, 3000)
    jumpChar("npc", 1500, 0)
    changeDialogueSprite("shrimp/1")

}

function scene1() {
    renderJaz()
    setTimeout(() => {
        if (checkHistory("river")) {
            fadeChar("jaz", locations.river.mapLocations.jaz.x, locations.river.mapLocations.jaz.y, 50, 1000)
            setTimeout(() => {
                flipChar("left", "jaz")

                slideChar("jaz", locations.shores.mapLocations.jaz.x, locations.shores.mapLocations.jaz.y, 3000)
                setTimeout(() => {
                    flipChar("right", "jaz")
                }, 300)
                setTimeout(() => {
                    flipChar("left", "jaz")
                }, 600)
                setTimeout(() => {
                    flipChar("right", "jaz")
                }, 900)
                setTimeout(() => {
                    flipChar("left", "jaz")
                }, 1200)
                setTimeout(() => {
                    flipChar("right", "jaz")
                }, 1500)
                setTimeout(() => {
                    flipChar("left", "jaz")
                }, 1800)
                setTimeout(() => {
                    flipChar("right", "jaz")
                }, 2100)
                setTimeout(() => {
                    flipChar("left", "jaz")
                }, 2400)
                setTimeout(() => {
                    flipChar("right", "jaz")
                }, 2700)
            }, 3000)
        } else {
            fadeChar("jaz", locations.cave.mapLocations.jaz.x, locations.cave.mapLocations.jaz.y, 50, 1000)
            setTimeout(() => {
                flipChar("left", "jaz")
                slideChar("jaz", locations.shores.mapLocations.jaz.x, locations.shores.mapLocations.jaz.y, 3000)
                setTimeout(() => {
                    flipChar("right", "jaz")
                }, 300)
                setTimeout(() => {
                    flipChar("left", "jaz")
                }, 600)
                setTimeout(() => {
                    flipChar("right", "jaz")
                }, 900)
                setTimeout(() => {
                    flipChar("left", "jaz")
                }, 1200)
                setTimeout(() => {
                    flipChar("right", "jaz")
                }, 1500)
                setTimeout(() => {
                    flipChar("left", "jaz")
                }, 1800)
                setTimeout(() => {
                    flipChar("right", "jaz")
                }, 2100)
                setTimeout(() => {
                    flipChar("left", "jaz")
                }, 2400)
                setTimeout(() => {
                    flipChar("right", "jaz")
                }, 2700)
            }, 3000)
        }

    }, 1000)
}

function scene2() {
    fadeMap(0, 5000)
    fadeChar("jaz", -850, 0, 5000, 20)
    setTimeout(() => {
        locationBanner(currentLocation.banner)
    }, 5000)
}

function scene3() {
    changeSize("jaz", 1, 1)
    setTimeout(() => {
        toggleAnimation("weapon", "jaz")
        landChar("jaz", 100, 0, -1000)
    }, 100)
    setTimeout(() => {
        slideBoxX("jaz")
        setTimeout(nextLine, 500)
    }, 3500)
    setTimeout(() => {
        clearText()
        setTimeout(nextLine, 200)
        setTimeout(() => { flipChar("left", "jaz") }, 1000)
        setTimeout(() => { flipChar("right", "jaz") }, 2000)
        setTimeout(() => { flipChar("left", "jaz") }, 4500)
        setTimeout(() => { flipChar("right", "jaz") }, 5500)
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
        sendToServer({ type: "fx", val: "shrimp.wav" })

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


// shores()