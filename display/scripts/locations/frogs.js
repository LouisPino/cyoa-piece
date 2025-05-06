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

let mapBorderEl = document.createElement("img");
mapBorderEl.src = `/display/assets/map/${characters.p.device}.PNG`

mapBorderEl.classList.add("complete-screen-img");
const frogVideoEl = document.getElementById("frog-video")


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
    }, 241000 * multiplier)

    setTimeout(() => {
        scene7()
    }, 265000 * multiplier)


    // dance()
}




function scene0() {
    changeDialogueSprite("frog/1");
    renderMap()
    fadeMap(1, 1)
    toggleAnimation("front", "duo")
    changeSize("duo", 1, .3)
    changeSize("npc", 1, .8)
    jumpChar("npc", 500, 100)
    jumpChar("pino", 3000, 3000)
    jumpChar("jaz", 3000, 3000)
}
function scene1() {
    renderPino()
    renderJaz()
    fadeChar("pino", locations.forestSouth.mapLocations.pino.x, locations.forestSouth.mapLocations.pino.y, 50, 1000)
    fadeChar("jaz", locations.forestSouth.mapLocations.jaz.x, locations.forestSouth.mapLocations.jaz.y, 50, 1000)
    setTimeout(() => {
        toggleAnimation("walk", "duo")
        flipChar("left", "duo")
        slideChar("pino", locations.frogs.mapLocations.pino.x, locations.frogs.mapLocations.pino.y, 3000)
        slideChar("jaz", locations.frogs.mapLocations.jaz.x, locations.frogs.mapLocations.jaz.y, 3000)
        setTimeout(() => {
            toggleAnimation("side", "duo")
        }, 3000)
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
            hopChar("duo", 200, 700, true)
            setTimeout(() => { toggleAnimation("side", "duo") }, 750)
        }, 1000)
    }, 0)
}

function scene4() {
    slideBoxX("sprite")
    setTimeout(nextLine, 50)//ribbit
    sendToServer({ type: "fx", val: "ribbit.mp3" })

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
        sendToServer({ type: "fx", val: "slurp.mp3" })

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
        sendToServer({ type: "fx", val: "ribbit.mp3" })
        setTimeout(nextLine, 50) //interpretive
    }, 28000)
    setTimeout(() => {
        clearText()
        setTimeout(nextLine, 50)//please
    }, 34000)
}

function scene5() {
    slideBoxX("none")
    fadeChar("pino", 3000, 3000, 1000, 1000)
    fadeChar("jaz", 3000, 3000, 1000, 1000)
    setTimeout(() => {
        // dance()
        frogVideoEl.style.visibility = "visible"
        frogVideoEl.style.opacity = 1
        frogVideoEl.play()
    }, 1000)
    // DANCE
}
function scene6() {
    frogVideoEl.pause()
    frogVideoEl.style.opacity = 0
    setTimeout(() => {
        frogVideoEl.style.visibility = "hidden"
        frogVideoEl.pause()

    }, 8000)
    fadeChar("pino", 450, 0, 1000, 1000)
    fadeChar("jaz", 350, 0, 1000, 1000)
    jumpChar("npc", 0, 100)
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
        }, 13000)
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
    }, 19000)
}

function scene7() {
    //hop frog to portal
    document.getElementById("waterfall-portal-front").style.zIndex = 150
    slideBoxX("sprite")
    setTimeout(nextLine, 200)

    setTimeout(() => {
        clearText()
        slideBoxX("none")
    }, 12000)

    //flush
    setTimeout(() => {
        changeSize("duo", 1800, .3)
        slideChar("pino", 50, 600, 1800)
        slideChar("jaz", -450, 600, 1800)
        sendToServer({ type: "fx", val: "pipe.mp3" })

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
    }, 13000)




    //hop away
    setTimeout(() => {
        flipChar("left", "npc")
        setTimeout(() => {
            flipChar("right", "npc")
        }, 1500)
        setTimeout(() => {
            hopChar("npc")
            sendToServer({ type: "fx", val: "ribbit.mp3" })

            slideChar("npc", 1500, 200, 2800)
            setTimeout(() => {
                hopChar("npc")

            }, 700)
            hopChar("npc")
            sendToServer({ type: "fx", val: "ribbit.mp3" })

            setTimeout(() => {
                hopChar("npc")
            }, 1400)

            hopChar("npc")
            setTimeout(() => {
                hopChar("npc")
            }, 2100)
            sendToServer({ type: "fx", val: "ribbit.mp3" })

        }, 3000)
    }, 16000)


}




function dance() {
    document.getElementById("waterfall-portal-back").style.visibility = "hidden";
    document.getElementById("waterfall-portal-front").style.visibility = "hidden";
    // document.body.appendChild(mapBorderEl)
    setTimeout(congaLine(1, 5, 10), 0)
    setTimeout(() => sceneOne(), 100);
    setTimeout(() => {
        congaLine(1, 20, 20); // Spiral draws attention to start
    }, 65000);

    setTimeout(() => sceneTwo(), 70000);
    setTimeout(() => {
        congaLine(1, 50, 10); // Spiral draws attention to start
    }, 122000);
    setTimeout(() => sceneThree(), 127000);
    setTimeout(() => {
        congaLine(1, 10, 30); // Spiral draws attention to start
    }, 183000);
    setTimeout(() => sceneFour(), 188000);
    setTimeout(() => {
        changeNPCSrc("frog/full.gif")
        congaLine(1, 50, 10); // start fresh with correct center
    }, 244000);
    setTimeout(() => {
        sceneFive()
        setTimeout(endDance, 35000);
    }, 250000);
}

function endDance() {
    document.getElementById("waterfall-portal-back").style.visibility = "visible";
    document.getElementById("waterfall-portal-front").style.visibility = "visible";
    // mapBorderEl.removeChild()
    congaLine(0)
    setTimeout(scene6, 500)
    setTimeout(scene7, 21500)
}


function sceneOne() {

    setTimeout(() => {
        spiralOut(15000); // Spiral draws attention to start
    }, 0);

    setTimeout(() => {
        changeNPCSrc("frog/full.gif")

        rightToLeft(-300); // Sweep left across mid-screen
    }, 15000);
    setTimeout(() => {
        bottomToTop(200); // Pop from bottom to top, slightly right
    }, 25000);
    setTimeout(() => {
        changeNPCSrc("frog/full.png")

        slideChar("npc", -600, 400, 7000); // Sweep left across bottom
    }, 35000);
    setTimeout(() => {
        slideChar("npc", 800, -400, 7000); // Sweep right across top
    }, 45000);
    setTimeout(() => {
        bottomToTop(-500); // End with a high-speed bottom-left pop
    }, 53000);
}

function sceneTwo() {
    changeNPCSrc("frog/full.gif")
    setTimeout(() => {
        snakePath(15000)
    }, 200)
    setTimeout(() => {
        slideChar("npc", -1000, 100, 7000); // Full slide left
    }, 15000);
    setTimeout(() => {
        bottomToTop(200); // Strong vertical pop
    }, 23000);
    setTimeout(() => {
        rightToLeft(0); // Strong lateral sweep
    }, 30000);
    setTimeout(() => {
        slideChar("npc", 2000, 600, 6000); // Sweep to upper right
    }, 40000);
    setTimeout(() => {
        bottomToTop(300); // Re-emerge dramatically
    }, 48000);
}


function sceneThree() {
    changeNPCSrc("frog/full.png")

    setTimeout(() => {
        rightToLeft(100); // Strong horizontal sweep at bottom
    }, 1000);
    setTimeout(() => {
        slideChar("npc", -1000, 500, 8000); // Big move to top-right
    }, 10000);
    setTimeout(() => {
        bottomToTop(-300); // Come up on far left
    }, 20000);
    setTimeout(() => {
        slideChar("npc", 0, 200, 7000); // Long sweep left
    }, 28000);
    setTimeout(() => {
        bottomToTop(0); // Vertical pop for punch
    }, 37000);
    setTimeout(() => {
        slideChar("npc", 600, -200, 6000); // Move back right
    }, 44000);
    setTimeout(() => {
        rightToLeft(-200); // Final glide left
    }, 51000);
}


function sceneFour() {
    setTimeout(() => {
        figureEight(15000); // Central, fluid pattern
    }, 1000);
    setTimeout(() => {
        slideChar("npc", -800, -400, 8000); // Big sweep to upper-left
    }, 15000);
    setTimeout(() => {
        bottomToTop(400); // Re-enter from below at far right
    }, 24000);
    setTimeout(() => {
        slideChar("npc", 600, 500, 7000); // Sweep across bottom
    }, 32000);
    setTimeout(() => {
        rightToLeft(300); // Mid-height lateral glide
    }, 40000);
    setTimeout(() => {
        slideChar("npc", -100, -300, 6000); // Sharp diagonal up-left
    }, 48000);
}




function sceneFive() {
    changeNPCSrc("frog/full.gif")

    setTimeout(() => {
        // Move horizontally from left to right (1st row)
        topToBottom(0);
    }, 1000); // Wait for 5 seconds before starting horizontal movement
    setTimeout(() => {
        // Move horizontally from left to right (1st row)
        rightToLeft(0);
    }, 5000); // Wait for 5 seconds before starting horizontal movement

    setTimeout(() => {
        // Move vertically from top to bottom (2nd column)
        leftToRight(100);
    }, 10000); // After 10 seconds, move vertically to the second row

    setTimeout(() => {
        // Move horizontally from left to right (2nd row)
        rightToLeft(200);
    }, 15000); // Wait for the vertical move to complete, then move horizontally

    setTimeout(() => {
        // Move vertically from top to bottom (3rd column)
        leftToRight(300);
    }, 20000); // After 20 seconds, move vertically to the third row

    setTimeout(() => {
        // Move horizontally from left to right (3rd row)
        rightToLeft(400);
    }, 25000); // Wait for the vertical movement to finish before starting the final horizontal move
}



frogs()
