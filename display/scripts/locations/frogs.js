textsArr = [
    "*ribbit ribbit*",
    "We are humble frogs!",
    "*croak* It’s not often we get visitors… especially such aromatic ones…",
    "*slurp*",
    "Could we interest you in some…*ribbit*",
    "…interpretive dance? *ribbit ribbit*",
    "… Please, take a moment to watch our performance…",
    "*croak* Thanks for your time, friend… Let us help you with your adventure! *ribbit* Hop over here…",
    "We think this portal will take you where you need to go next *ribbit ribbit*",
];


let multiplier = 1


function frogs() {
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
    }, 62000 * multiplier)

    setTimeout(() => {
        scene6()
    }, 64000 * multiplier) //make me 60000 after dance

    setTimeout(() => {
        scene7()
    }, 85000 * multiplier) //make me 60000 after dance


}




function scene0() {
    changeDialogueSprite("frog/1");
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
        toggleAnimation("walk", "duo")
        setTimeout(() => {

            slideChar("pino", 750, -400, 3000)
            slideChar("jaz", 450, -400, 3000)
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
        locationBanner("waterfall")
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
            hopChar("duo")
        }, 1000)
    }, 0)
}

function scene4() {
    slideBoxX("sprite")
    setTimeout(nextLine, 50)//ribbit
    setTimeout(() => {
        clearText()
        setTimeout(nextLine, 50) //we are humble
    }, 4000)
    setTimeout(() => {
        clearText()
        setTimeout(nextLine, 50) // not often
    }, 9000)
    setTimeout(() => {
        changeDialogueSprite("frog/2")
        clearText()
        setTimeout(nextLine, 50) // lurp
    }, 18000)
    setTimeout(() => {
        changeDialogueSprite("frog/3")
        clearText()
        setTimeout(nextLine, 50)//could we
    }, 21500)
    setTimeout(() => {
        changeDialogueSprite("frog/4")
        clearText()
        setTimeout(nextLine, 50) //interpretive
    }, 28000)
    setTimeout(() => {
        clearText()
        setTimeout(nextLine, 50)//please
    }, 34000)
}

function scene5() {
    slideBoxX("none")
    // DANCE
}
function scene6() {
    fadeChar("pino", 450, 0, 1000, 1000)
    fadeChar("jaz", 350, 0, 1000, 1000)
    jumpChar("npc", 1500, 100)
    //hop frog in
    hopChar("npc")
    slideChar("npc", 500, 100, 3000)
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
        slideChar("npc", -150, 200, 2800)
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
        toggleAnimation("walk", "duo")
        slideChar("pino", 50, 0, 2000)
        slideChar("jaz", -250, 0, 2000)
        setTimeout(() => {
            toggleAnimation("front", "duo")
        }, 2000)
    }, 16000)
}

function scene7() {
    //hop frog to portal
    document.getElementById("waterfall-portal-front").style.zIndex = 150
    slideBoxX("sprite")
    setTimeout(nextLine, 200)

    setTimeout(() => {
        clearText()
        slideBoxX("none")
    }, 10000)

    //flush
    setTimeout(() => {
        changeSize("duo", 1800, .3)
        slideChar("pino", 50, 600, 1800)
        slideChar("jaz", -450, 600, 1800)
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




    //hop away
    setTimeout(() => {
        flipChar("left", "npc")
        setTimeout(() => {
            flipChar("right", "npc")
        }, 1500)
        setTimeout(() => {
            hopChar("npc")
            slideChar("npc", 1500, 200, 2800)
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
        }, 3000)
    }, 14000)


}


frogs()



//6 dialogue
//7 walk into portal