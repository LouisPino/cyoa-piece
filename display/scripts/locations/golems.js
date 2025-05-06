textsArr = [
    "*grumble grumble*",
    "We… are the golems…Made of earth and mud…",
    "*grumble* … you…you… YOU . . .",
    "have come by at the perfect moment! *grumble*",
    "We were just about to rehearse for the Sylvan Forest dance recital *grumble grumble*",
    "Please, take a moment to watch our performance…",
    "*grumble* Thank you for your time… Let us help you with your journey…*grumble* come over here…",
    "We think this portal will take you where you need to go next…",
];

const golemVideoEl = document.getElementById("golem-video")

let multiplier = 1

let mapBorderEl = document.createElement("img");
mapBorderEl.src = `/display/assets/map/${characters.p.device}.PNG`

mapBorderEl.classList.add("complete-screen-img");


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
    }, 70000 * multiplier)

    setTimeout(() => {
        scene6()
    }, 250000 * multiplier)
    setTimeout(() => {
        scene7()
    }, 275000 * multiplier)
    //6 and 7 called at end dance

    // dance()
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
    fadeChar("pino", locations.forestNorth.mapLocations.pino.x, locations.forestNorth.mapLocations.pino.y, 50, 1000)
    fadeChar("jaz", locations.forestNorth.mapLocations.jaz.x, locations.forestNorth.mapLocations.jaz.y, 50, 1000)
    setTimeout(() => {
        toggleAnimation("walk", "duo")
        setTimeout(() => {
            slideChar("pino", locations.golems.mapLocations.pino.x, locations.golems.mapLocations.pino.y, 3000)
            slideChar("jaz", locations.golems.mapLocations.jaz.x, locations.golems.mapLocations.jaz.y, 3000)
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
            hopChar("duo", 200, 700, true)
            setTimeout(() => { toggleAnimation("side", "duo") }, 750)
        }, 1000)
    }, 0)
}

function scene4() {
    slideBoxX("sprite")
    setTimeout(nextLine, 500)
    sendToServer({ type: "fx", val: "grumble.wav" })

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
    fadeChar("pino", 3000, 3000, 1000, 1000)
    fadeChar("jaz", 3000, 3000, 1000, 1000)
    setTimeout(() => {
        // dance()
        golemVideoEl.style.visibility = "visible"
        golemVideoEl.style.opacity = 1
        golemVideoEl.play()
    }, 1000)
    // DANCE
}

function scene6() {
    golemVideoEl.style.opacity = 0
    setTimeout(() => {
        golemVideoEl.style.visibility = "hidden"
        golemVideoEl.pause()

    }, 8000)
    fadeChar("pino", 450, 0, 1000, 1000)
    fadeChar("jaz", 350, 0, 1000, 1000)
    jumpChar("npc", 1500, 100)
    slideChar("npc", 500, 100, 3000)

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
    }, 19000)
}

function scene7() {
    document.getElementById("rock-portal-front").style.zIndex = 150
    slideBoxX("sprite")
    setTimeout(nextLine, 200)

    setTimeout(() => {
        clearText()
        slideBoxX("none")
    }, 12000)

    //flush
    setTimeout(() => {
        changeSize("duo", 1800, .3)
        slideChar("pino", 525, 300, 1800)
        slideChar("jaz", 100, 300, 1800)
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




    //slide away
    setTimeout(() => {
        flipChar("left", "npc")
        setTimeout(() => {
            flipChar("right", "npc")
        }, 1500)
        setTimeout(() => {
            flipChar("left", "npc")
            slideChar("npc", 1500, 200, 2800)
            sendToServer({ type: "fx", val: "grumble.wav" })

        }, 3000)
    }, 16000)
}





function dance() {
    document.getElementById("rock-portal-back").style.visibility = "hidden";
    document.getElementById("rock-portal-front").style.visibility = "hidden";
    // document.body.appendChild(mapBorderEl)


    setTimeout(congaLine(1, 5, 10), 0)
    setTimeout(() => sceneOne(), 100);
    setTimeout(() => {

        congaLine(1, 20, 20); // Spiral draws attention to start
    }, 65000);

    setTimeout(() => sceneTwo(), 70000);
    setTimeout(() => {
        changeNPCSrc("golem/full.png")

        congaLine(1, 50, 10); // Spiral draws attention to start
    }, 122000);
    setTimeout(() => sceneThree(), 127000);
    setTimeout(() => {
        congaLine(1, 10, 30); // Spiral draws attention to start
    }, 183000);
    setTimeout(() => sceneFour(), 188000);
    setTimeout(() => {
        congaLine(1, 50, 10); // start fresh with correct center
    }, 244000);
    setTimeout(() => {
        sceneFive()
        setTimeout(endDance, 35000);
    }, 250000);
}

function endDance() {
    document.getElementById("rock-portal-back").style.visibility = "visible";
    document.getElementById("rock-portal-front").style.visibility = "visible";
    // mapBorderEl.remove()
    congaLine(0)
    setTimeout(scene6, 500)
    setTimeout(scene7, 21500)
}


function sceneOne() {

    setTimeout(() => {
        spiralOut(15000); // Spiral draws attention to start
    }, 0);

    setTimeout(() => {
        changeNPCSrc("golem/full.gif")

        rightToLeft(-300); // Sweep left across mid-screen
    }, 15000);
    setTimeout(() => {
        bottomToTop(200); // Pop from bottom to top, slightly right
    }, 25000);
    setTimeout(() => {
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
    setTimeout(() => {
        changeNPCSrc("golem/full.gif")

        snakePath(15000)
    }, 200)
    setTimeout(() => {
        changeNPCSrc("golem/full.png")

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
    setTimeout(() => {
        rightToLeft(100); // Strong horizontal sweep at bottom
    }, 1000);
    setTimeout(() => {
        changeNPCSrc("golem/full.gif")

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
        changeNPCSrc("golem/full.png")

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
    changeNPCSrc("golem/full.gif")

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

golems()
