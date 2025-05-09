let multiplier = 1
const boatRockerEl = document.getElementById("boat-rocker")
const boatCtrEl = document.getElementById("boat-ctr")
textsArr = [
    "Oh! We aren’t alone here… Will it be friend or foe?",
    "...aahhhYARGHhhhh……guhh… it’s too late…",
];


function rats() {
    scene0boat()
    setTimeout(() => {
        scene1boat()
    }, 2000 * multiplier)


    setTimeout(() => {
        scene2boat()
    }, 7000 * multiplier)

    setTimeout(() => {
        scene3boat()
    }, 23000 * multiplier)

    setTimeout(() => {
        scene4()
    }, 33000 * multiplier)


}


function scene0boat() {
    toggleAnimation("front", "duo")
    changeDialogueSprite("rat/1");
    renderMap()
    fadeMap(1, 1)
    getInBoat(boatRockerEl)
    changeSize(boatCtrEl, 10, .2)
    setTimeout(() => {
        jumpChar(boatCtrEl, 0, 0)
    }, 100)
    changeSize("npc", 1, .8)
    jumpChar("npc", 500, 0)
    document.getElementById("npc").classList.add("float-only-rats")
}



function scene1boat() {
    flipChar("right", "pino")
    flipChar("right", "jaz")
    fadeChar(boatRockerEl, -300, 300, 50, 1000)
    setTimeout(() => {
        slideChar(boatRockerEl, -200, 300, 3000)
    }, 1000)
}

function scene2boat() {
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

function scene3boat() {
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





function scene4() {
    slideBoxY("sprite")
    setTimeout(() => {
        nextLine()
        sendToServer({ type: "fx", val: "rats.wav" })

    }, 750)
    setTimeout(() => {
        slideBoxY("none")
        document.getElementById("npc").classList.remove("float-only-rats")
    }, 10000)
}

rats()