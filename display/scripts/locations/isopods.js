let multiplier = 1


textsArr = [
    "Oh! We aren’t alone here… Will it be friend or foe?",
    "...grrrrrgggg…….ugHHHHHGH… you…loser!!!",
];

let previousLocation = history.locationsVisited[history.locationsVisited.length - 2].name
const boatRockerEl = document.getElementById("boat-rocker")
const boatCtrEl = document.getElementById("boat-ctr")

function isopods() {
    if (previousLocation === "river") {
        changeBg(`animated/riverInterior.gif`)
        wetPlaylist()
        locations.isopods["voteVamp"] = "vampRiver.wav"
        locations.isopods["track"] = "trackRiver.wav"
        currentLocation.voteVamp = "vampRiver.wav"
        currentLocation.bgName = "riverInterior"

        sendToServer({ type: "track", val: "trackRiver.wav" })
    }
    else {
        changeBg(`animated/caveInterior.gif`)
        dryPlaylist()
        locations.isopods["voteVamp"] = "vampCave.wav"
        locations.isopods["track"] = "trackCave.wav"
        currentLocation.voteVamp = "vampCave.wav"
        currentLocation.bgName = "caveInterior"
        sendToServer({ type: "track", val: "trackCave.wav" })
    }
}

function scene0() {
    changeDialogueSprite("isopod/1");
    renderMap()
    fadeMap(1, 1)
    changeSize("duo", 1, .3)
    changeSize("npc", 1, .8)
    jumpChar("npc", 500, 0)
    jumpChar("pino", 3000, 3000)
    jumpChar("jaz", 3000, 3000)
    changeSize(boatCtrEl, 1, .2)
}
function scene1() {

    if (checkHistory("river")) {

    } else {
        toggleAnimation("side", "duo")
        flipChar("right", "pino")
        flipChar("right", "jaz")
        renderPino()
        renderJaz()
        fadeChar("pino", locations.cave.mapLocations.pino.x, locations.cave.mapLocations.pino.y, 50, 1000)
        fadeChar("jaz", locations.cave.mapLocations.jaz.x, locations.cave.mapLocations.jaz.y, 50, 1000)
        setTimeout(() => {
            toggleAnimation("walk", "duo")
            slideChar("pino", locations.cave.mapLocations.pino.x + 100, locations.cave.mapLocations.pino.y - 50, 3000)
            slideChar("jaz", locations.cave.mapLocations.jaz.x + 100, locations.cave.mapLocations.jaz.y - 50, 3000)
            setTimeout(() => {
                toggleAnimation("side", "duo")
            }, 3000)
        }, 1000)
    }
}

function scene2() {
    fadeMap(0, 5000)
    fadeChar("duo", 3000, 3000, 5000, 20)
    setTimeout(() => {
        slideBoxY("duo")
    }, 5000)
    setTimeout(() => {
        nextLine()
    }, 5750)
    setTimeout(() => {
        slideBoxY("none")
    }, 13000)
}

function scene3() {
    flipChar("right", "duo")
    changeSize("duo", 1, .8)
    setTimeout(() => {
        jumpChar("pino", -700, 0)
        jumpChar("jaz", -800, 0)
        toggleAnimation("walk", "duo")
        slideChar("pino", -50, 0, 1000)
        slideChar("jaz", -150, 0, 1000)
        setTimeout(() => {
            toggleAnimation("side", "duo")
            shakeChar("duo", 500, 10)
        }, 1000)
    }, 0)
    setTimeout(() => {
        toggleAnimation("walk", "duo")
        slideChar("pino", 100, 0, 1000)
        slideChar("jaz", 0, 0, 1000)
        setTimeout(() => {
            toggleAnimation("side", "duo")
            shakeChar("duo", 500, 20)
        }, 1000)
    }, 2000)
    setTimeout(() => {
        toggleAnimation("walk", "duo")
        slideChar("pino", 250, 0, 1000)
        slideChar("jaz", 150, 0, 1000)
        setTimeout(() => {
            toggleAnimation("side", "duo")
            shakeChar("duo", 500, 30)
        }, 1000)
    }, 4000)
    setTimeout(() => {
        toggleAnimation("walk", "duo")
        slideChar("pino", 350, 0, 2000)
        slideChar("jaz", 250, 0, 2000)
        setTimeout(() => {
            toggleAnimation("side", "duo")
            shakeChar("duo", 1000, 40)
        }, 2000)
    }, 6000)

}
function scene4() {
    slideBoxY("sprite")
    setTimeout(() => {
        nextLine()
        sendToServer({ type: "fx", val: "isopods.wav" })
    }, 750)
    setTimeout(() => {
        slideBoxY("none")
    }, 10000)
}




function scene0wet() {
    changeDialogueSprite("isopod/1");
    renderMap()
    fadeMap(1, 1)
    changeSize("npc", 1, .8)
    jumpChar("npc", 500, 0)
    toggleAnimation("front", "duo")
    getInBoat(boatRockerEl)
    changeSize(boatCtrEl, 10, .2)
    setTimeout(() => { jumpChar(boatCtrEl, 0, 0) }, 100)
    document.getElementById("npc").classList.add("float-only-rats")

}

function scene1wet() {

    toggleAnimation("front", "duo")
    getInBoat(boatRockerEl)
    setTimeout(() => {
        fadeChar(boatRockerEl, -200, 300, 1000, 1000)
    }, 800)
    setTimeout(() => {
        slideChar(boatRockerEl, -100, 300, 3000)
    }, 3000)
}

function scene2wet() {
    fadeMap(0, 5000)
    fadeChar(boatRockerEl, 3000, 3000, 5000, 20)
    setTimeout(() => {
        slideBoxY("duo")
    }, 5000)
    setTimeout(() => {
        nextLine()
    }, 5750)
    setTimeout(() => {
        slideBoxY("none")
    }, 13000)
}

function scene3wet() {
    toggleAnimation("side", "duo")
    changeSize(boatCtrEl, 1, .2)
    getInBoat(boatRockerEl)
    setTimeout(() => {
        jumpChar(boatRockerEl, 0, -700)
        slideChar(boatRockerEl, -100, -400, 1000)
        changeSize(boatCtrEl, 1000, .3)
        setTimeout(() => {
            shakeChar("duo", 500, 10)
        }, 1000)
    }, 0)
    setTimeout(() => {
        slideChar(boatRockerEl, -200, -300, 1000)
        changeSize(boatCtrEl, 1000, .35)

        setTimeout(() => {
            shakeChar("duo", 500, 20)
        }, 1000)
    }, 2000)
    setTimeout(() => {
        slideChar(boatRockerEl, -300, -100, 1000)
        changeSize(boatCtrEl, 1000, .43)

        setTimeout(() => {
            shakeChar("duo", 500, 30)
        }, 1000)
    }, 4000)
    setTimeout(() => {
        slideChar(boatRockerEl, -350, 200, 2000)
        changeSize(boatCtrEl, 2000, .55)

        setTimeout(() => {
            toggleAnimation("side", "duo")
            shakeChar("duo", 1000, 40)
        }, 2000)
    }, 6000)
}





function scene4wet() {
    slideBoxY("sprite")
    setTimeout(() => {
        nextLine()
        sendToServer({ type: "fx", val: "isopods.wav" })

    }, 750)
    setTimeout(() => {
        slideBoxY("none")
        document.getElementById("npc").classList.remove("float-only-rats")
    }, 10000)
}




function dryPlaylist() {
    scene0()
    setTimeout(() => {
        scene1()
    }, 2000 * multiplier)


    setTimeout(() => {
        scene2()
    }, 7000 * multiplier)

    setTimeout(() => {
        scene3()
    }, 23000 * multiplier)

    setTimeout(() => {
        scene4()
    }, 33000 * multiplier)
}
function wetPlaylist() {
    scene0wet()
    setTimeout(() => {
        scene1wet()
    }, 2000 * multiplier)


    setTimeout(() => {
        scene2wet()
    }, 7000 * multiplier)

    setTimeout(() => {
        scene3wet()
    }, 23000 * multiplier)

    setTimeout(() => {
        scene4wet()
    }, 33000 * multiplier)
}


isopods()
