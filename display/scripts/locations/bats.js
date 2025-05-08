textsArr = [
    "Oh! We aren’t alone here… Will it be friend or foe?",
    "...SKREEEEEE……. aahHHHHGH…you’ll…fail….",
];

let multiplier = 1


function bats() {
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




function scene0() {
    changeDialogueSprite("bat/1");
    renderMap()
    fadeMap(1, 1)
    toggleAnimation("side", "duo")
    changeSize("duo", 1, .3)
    changeSize("npc", 1, .8)
    jumpChar("npc", 500, 100)
    jumpChar("pino", 3000, 3000)
    jumpChar("jaz", 3000, 3000)
}
function scene1() {
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
        slideChar("pino", 350, 0, 1000)
        slideChar("jaz", 250, 0, 1000)
        setTimeout(() => {
            toggleAnimation("side", "duo")
            shakeChar("duo", 1000, 40)
        }, 1000)
    }, 6000)

}
function scene4() {
    slideBoxY("sprite")
    setTimeout(() => {
        nextLine()
        sendToServer({ type: "fx", val: "batScreech.wav" })
    }, 750)
    setTimeout(() => {
        slideBoxY("none")
    }, 10000)
}


// bats()