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
    setTimeout(() => {
        scene5()
    }, 38000 * multiplier)

}




// function scene0() {
//     changeDialogueSprite("rat/1");
//     renderMap()
//     fadeMap(1, 1)
//     toggleAnimation("side", "duo")
//     changeSize("duo", 1, .3)
//     changeSize("npc", 1, .8)
//     jumpChar("npc", 500, 0)
//     jumpChar("pino", 3000, 3000)
//     jumpChar("jaz", 3000, 3000)
//     document.getElementById("npc").classList.add("float-only-rats")
// }



// function scene1() {
//     renderPino()
//     renderJaz()
//     flipChar("right", "pino")
//     flipChar("right", "jaz")
//     fadeChar("pino", 75, 75, 50, 1000)
//     fadeChar("jaz", -225, 75, 50, 1000)
//     setTimeout(() => {
//         toggleAnimation("walk", "duo")
//         slideChar("pino", 300, 75, 3000)
//         slideChar("jaz", 0, 75, 3000)
//         setTimeout(() => {
//             toggleAnimation("side", "duo")
//         }, 3000)
//     }, 1000)
// }

// function scene2() {
//     fadeMap(0, 5000)
//     fadeChar("duo", 3000, 3000, 5000, 20)
//     setTimeout(() => {
//         slideBoxY("duo")
//     }, 5000)
//     setTimeout(() => {
//         nextLine()
//     }, 5750)
//     setTimeout(() => {
//         slideBoxY("none")
//     }, 13000)
// }


// function scene3() {
//     flipChar("right", "duo")
//     changeSize("duo", 1, .8)
//     setTimeout(() => {
//         jumpChar("pino", -700, 0)
//         jumpChar("jaz", -800, 0)
//         toggleAnimation("walk", "duo")
//         slideChar("pino", -50, 0, 1000)
//         slideChar("jaz", -150, 0, 1000)
//         setTimeout(() => {
//             toggleAnimation("side", "duo")
//             shakeChar("duo", 500, 10)
//         }, 1000)
//     }, 0)
//     setTimeout(() => {
//         toggleAnimation("walk", "duo")
//         slideChar("pino", 100, 0, 1000)
//         slideChar("jaz", 0, 0, 1000)
//         setTimeout(() => {
//             toggleAnimation("side", "duo")
//             shakeChar("duo", 500, 20)
//         }, 1000)
//     }, 2000)
//     setTimeout(() => {
//         toggleAnimation("walk", "duo")
//         slideChar("pino", 250, 0, 1000)
//         slideChar("jaz", 150, 0, 1000)
//         setTimeout(() => {
//             toggleAnimation("side", "duo")
//             shakeChar("duo", 500, 30)
//         }, 1000)
//     }, 4000)
//     setTimeout(() => {
//         toggleAnimation("walk", "duo")
//         slideChar("pino", 350, 0, 2000)
//         slideChar("jaz", 250, 0, 2000)
//         setTimeout(() => {
//             toggleAnimation("side", "duo")
//             shakeChar("duo", 1000, 40)
//         }, 2000)
//     }, 6000)
// }



function scene0boat() {
    toggleAnimation("front", "duo")
    changeDialogueSprite("rat/1");
    renderMap()
    fadeMap(1, 1)
    getInBoat(boatRockerEl)
    changeSize(boatCtrEl, 10, .2)
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
    }, 750)
}
function scene5() {
    slideBoxY("none")
    document.getElementById("npc").classList.remove("float-only-rats")
}

rats()