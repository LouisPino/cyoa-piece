textsArr = [
    "*grumble grumble*",
    " We… are the golems…Made of earth and mud…",
    " *grumble* … you…you… YOU . . .",
    " have come by at the perfect moment! *grumble*",
    "We were just about to rehearse for the Sylvan Forest dance recital *grumble grumble*",
    " Please, take a moment to watch our performance…",
    "*grumble* Thank you for your time… Let us help you with your journey…*grumble* come over here…",
    "We think this portal will take you where you need to go next…",
];


let multiplier = 1


function golems() {
    scene0()
    setTimeout(() => {
        scene1()
    }, 2000 * multiplier)


    setTimeout(() => {
        scene2()
    }, 7000 * multiplier)

    setTimeout(() => {
        scene3()
    }, 17000 * multiplier)

    setTimeout(() => {
        scene4()
    }, 20000 * multiplier)
    setTimeout(() => {
        scene5()
    }, 65000 * multiplier)
    setTimeout(() => {
        scene6()
    }, 70000 * multiplier) //make me 60000 after dance
    setTimeout(() => {
        scene7()
    }, 91000 * multiplier)


}




function scene0() {
    changeDialogueSprite("golem/2");
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
    renderPino()
    renderJaz()
    fadeChar("pino", 500, -400, 50, 1000)
    fadeChar("jaz", 200, -400, 50, 1000)
    setTimeout(() => {
        flipChar("left", "duo")
        toggleAnimation("walk", "duo")
        setTimeout(() => {

            slideChar("pino", 200, -400, 3000)
            slideChar("jaz", -100, -400, 3000)
            setTimeout(() => {
                toggleAnimation("side", "duo")
            }, 3000)
        }, 200)
    }, 1000)

}

function scene2() {
    fadeMap(0, 5000)
    fadeChar("duo", 3000, 3000, 5000, 20)
    setTimeout(() => {
        locationBanner("rock")
    }, 3000)
}

function scene3() {
    flipChar("right", "duo")
    changeSize("duo", 1, .8)
    setTimeout(() => {
        jumpChar("pino", -700, -50)
        jumpChar("jaz", -800, -50)
        toggleAnimation("walk", "duo")
        slideChar("pino", 450, 0, 1000)
        slideChar("jaz", 350, 0, 1000)
        setTimeout(() => {
            toggleAnimation("side", "duo")
            hopChar("duo", 200, 700, true)
        }, 1000)
    }, 0)
}

function scene4() {
    slideBoxX("sprite")
    setTimeout(nextLine, 500)
    setTimeout(() => {
        changeDialogueSprite("golem/1")
        clearText()
        setTimeout(nextLine, 500)
    }, 5000)
    setTimeout(() => {
        changeDialogueSprite("golem/3")
        clearText()
        setTimeout(nextLine, 500)
    }, 15000)
    setTimeout(() => {
        changeDialogueSprite("golem/4")
        clearText()
        setTimeout(nextLine, 500)
    }, 21000)
    setTimeout(() => {
        changeDialogueSprite("golem/3")
        clearText()
        setTimeout(nextLine, 500)
    }, 31000)
    setTimeout(() => {
        changeDialogueSprite("golem/4")
        clearText()
        setTimeout(nextLine, 500)
        setTimeout(() => {
            clearText()
            slideBoxX("none")
        }, 5000)
    }, 41000)
}
function scene5() {
    clearText()

    slideBoxX("none")
    // DANCE
}

function scene6() {
    fadeChar("pino", 450, 0, 1000, 1000)
    fadeChar("jaz", 350, 0, 1000, 1000)
    jumpChar("npc", 1500, 100)
    //hop frog in
    slideChar("npc", 500, 100, 3000)

    setTimeout(() => {
        slideBoxX("sprite")
        setTimeout(nextLine, 50)
        setTimeout(() => {
            clearText()
            slideBoxX("none")
        }, 10000)
    }, 5000)

    setTimeout(() => {
        hopChar("npc")
        slideChar("npc", 250, 250, 2800)
        setTimeout(() => {
            hopChar("npc")
        }, 700)
        hopChar("npc")
        setTimeout(() => {
            hopChar("npc")
        }, 1400)
        hopChar("npc")
        setTimeout(() => {
            hopChar("npc")
        }, 2100)

        flipChar("left", "duo")
        toggleAnimation("front", "duo")
        slideChar("pino", 525, 50, 2000)
        slideChar("jaz", 175, 50, 2000)
    }, 16000)
}

function scene7() {
    document.getElementById("rock-portal-front").style.zIndex = 150
    slideBoxX("sprite")
    setTimeout(nextLine, 200)

    setTimeout(() => {
        clearText()
        slideBoxX("none")
    }, 10000)

    //flush
    setTimeout(() => {
        changeSize("duo", 1800, .3)
        slideChar("pino", 525, 300, 1800)
        slideChar("jaz", 100, 300, 1800)
        flipChar("left", "duo")
        setTimeout(() => {
            flipChar("right", "duo")
        }, 200)
        setTimeout(() => {
            flipChar("left", "duo")
        }, 400)
        setTimeout(() => {
            flipChar("right", "duo")
        }, 600)
        setTimeout(() => {
            flipChar("left", "duo")
        }, 800)
        setTimeout(() => {
            flipChar("right", "duo")
        }, 1000)
        setTimeout(() => {
            flipChar("left", "duo")
        }, 1200)
        setTimeout(() => {
            flipChar("right", "duo")
        }, 1400)
        setTimeout(() => {
            flipChar("left", "duo")
        }, 1600)
    }, 11000)




    //slide away
    setTimeout(() => {
        flipChar("left", "npc")
        setTimeout(() => {
            flipChar("right", "npc")
        }, 1500)
        setTimeout(() => {
            flipChar("left", "npc")
            slideChar("npc", 1500, 200, 2800)
        }, 3000)
    }, 14000)
}


golems()