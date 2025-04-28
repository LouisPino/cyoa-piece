let multiplier = 1


textsArr = [
    "Oh! We aren’t alone here… Will it be friend or foe?",
    "...grrrrrgggg…….ugHHHHHGH… you…loser!!!",
];

let previousLocation = history.locationsVisited[history.locationsVisited.length - 2].name


function isopods() {
    if (previousLocation === "river") {
        changeBg(`animated/riverInterior.gif`)
    }
    else if (previousLocation === "cave") {
        changeBg(`animated/caveInterior.gif`)
    }
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
    setTimeout(() => {
        scene5()
    }, 38000 * multiplier)

}


function scene0() {
    changeDialogueSprite("isopod/angry");
    renderMap()
    fadeMap(1, 1)
    toggleAnimation("side", "duo")
    changeSize("duo", 1, .3)
    changeSize("npc", 1, .8)
    jumpChar("npc", 500, 0)
    jumpChar("pino", 3000, 3000)
    jumpChar("jaz", 3000, 3000)
}
function scene1() {
    renderPino()
    renderJaz()
    if (previousLocation === "river") {
        flipChar("right", "pino")
        flipChar("right", "jaz")
        fadeChar("pino", 75, 75, 50, 1000)
        fadeChar("jaz", -225, 75, 50, 1000)
        setTimeout(() => {
            toggleAnimation("walk", "duo")
            slideChar("pino", 300, 75, 3000)
            slideChar("jaz", 0, 75, 3000)
            setTimeout(() => {
                toggleAnimation("side", "duo")
            }, 3000)
        }, 1000)
    } else if (previousLocation === "cave") {
        flipChar("left", "pino")
        flipChar("left", "jaz")
        fadeChar("pino", 800, -450, 50, 1000)
        fadeChar("jaz", 500, -450, 50, 1000)
        setTimeout(() => {
            toggleAnimation("walk", "duo")
            slideChar("pino", 600, -450, 3000)
            slideChar("jaz", 300, -450, 3000)
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
        console.log("FADE DUO")
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
    }, 750)
}
function scene5() {
    slideBoxY("none")
}

isopods()



