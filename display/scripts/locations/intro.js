
let multiplier = 1
let scene1length = 31000
let scene2length = 1000
let scene3length = 1000
let scene4length = 1000
let scene5length = 1000
let scene6length = 1000

const castleBackEl = document.getElementById("castle-back")
const tillyGifEl = document.getElementById("tilly-gif")
const castleFrontEl = document.getElementById("castle-front")
const yarnEl = document.getElementById("yarn")
const napsEl = document.getElementById("naps")
const guttersEl = document.getElementById("gutters")
const loafEl = document.getElementById("loaf")
const box1El = document.getElementById("box-1")
const box2El = document.getElementById("box-2")
const floppy1El = document.getElementById("floppy-1")
const deviceEl = document.getElementById("device")
const floppy2El = document.getElementById("floppy-2")
const mapBlackEl = document.getElementById("map-black-bg")
const tillyImgEl = document.getElementById("tilly-img")
const mapVideoEl = document.getElementById("map-video")

let textBodyEl = document.querySelector(".text-body")
deviceEl.src = `/display/assets/intro/device${characters.p.device}.png`

textsArr = [
    "Deep within the Sylvan Forest, there is a humble but well fed kingdom ruled by KING TILLY.",
    "King Tilly of TillyLand is a lover of loose string, long naps, and in his earlier years, ADVENTURING.",
    "These days, the king prefers to lounge in the comfort of his castle. However, this hasn’t stopped him from buying a rare treasure map or two…",
    "On a fine spring day, King Tilly comes across an ancient treasure map that can only be decoded by Ancient Wizard Technology. He decides to consult the local Ancient Wizard Technology Specialist, WIZARD PINO",
    "With the help of the wizard, the map begins to be decoded…",
    "Holy moly!! Look at all these paths! Is it possible that all these routes lead to treasure? Sounds like an adventure is brewing… preparations will have to be made before entering the unexplored realm of the Sylvan Forest",
    "Due to the potential dangers, King Tilly sends his strongest court jester, JESTER JAZ, to assist Wizard Pino",
    "The adventurers bid their sovereign farewell and begin to make their way out of the kingdom.",
];
removePino()
removeJaz()
function intro() {
    // textIdx = 6
    scene1()
    setTimeout(() => {
        scene2()
    }, 28000 * multiplier)

    setTimeout(() => {
        scene3()
    }, 44000 * multiplier)

    setTimeout(() => {
        scene4()
    }, 70000 * multiplier)

    setTimeout(() => {
        scene5()
    }, 95000 * multiplier)

    setTimeout(() => {
        scene6()
    }, 160000 * multiplier)

    setTimeout(() => {
        scene7()
    }, 175000 * multiplier)

    setTimeout(() => {
        scene8()
    }, 181000 * multiplier)
}



function scene1() {
    castleBackEl.style.visibility = "visible"
    castleFrontEl.style.visibility = "visible"
    tillyGifEl.style.visibility = "visible"
    setTimeout(() => {
        slideBoxY("dialogue")
    }, 5000)
    setTimeout(() => {
        nextLine()
    }, 6500)
    setTimeout(() => {
        slideBoxY("none")
    }, 20000)
}

function scene2() {
    changeBg("stills/cardboard.png")
    slideChar(castleBackEl, 1920, 0, 500)
    slideChar(castleFrontEl, 1920, 0, 500)
    slideChar(tillyGifEl, 1920, 0, 500)
    setTimeout(() => {

        castleBackEl.style.visibility = "hidden"
        castleFrontEl.style.visibility = "hidden"
        tillyGifEl.style.visibility = "hidden"
    }, 500)
    yarnEl.style.visibility = "visible"
    napsEl.style.visibility = "visible"
    guttersEl.style.visibility = "visible"

    setTimeout(() => {
        slideBoxY("dialogue")
    }, 1000)
    setTimeout(() => {
        nextLine()
    }, 2000)


    setTimeout(() => {
        yarnEl.style.transition = `left ${1000 * multiplier}ms`
        yarnEl.style.left = "0"
    }, 3750 * multiplier)
    setTimeout(() => {
        // yarnEl.style.left = "-800px"
    }, 5250 * multiplier)

    setTimeout(() => {
        napsEl.style.transition = `left ${1000 * multiplier}ms`
        napsEl.style.left = "0"
    }, 5000 * multiplier)
    setTimeout(() => {
        // napsEl.style.left = "800px"
    }, 6500 * multiplier)

    setTimeout(() => {
        guttersEl.style.transition = `top ${1000 * multiplier}ms`
        guttersEl.style.top = "0"
    }, 9500 * multiplier)
    setTimeout(() => {
        guttersEl.style.top = "900px"
        napsEl.style.left = "800px"
        yarnEl.style.left = "-800px"
        slideBoxY("none")
    }, 14000 * multiplier)
    setTimeout(() => {
    }, 13500 * multiplier)
}

function scene3() {
    yarnEl.style.visibility = "hidden"
    napsEl.style.visibility = "hidden"
    guttersEl.style.visibility = "hidden"

    loafEl.style.visibility = "visible"
    landChar(loafEl, 0, 0, -900)

    box1El.style.visibility = "visible"
    box2El.style.visibility = "visible"

    setTimeout(() => {
        landCharBounce(box1El, 0, 0, -900)
    }, 1500 * multiplier)
    setTimeout(() => {

        landCharBounce(box2El, 0, 0, -900)
    }, 3000 * multiplier)
    setTimeout(() => {
        slideBoxY("dialogue")
    }, 8000 * multiplier)
    setTimeout(() => {
        nextLine(
        )
    }, 8400 * multiplier)
    setTimeout(() => {
        slideBoxY("none")
    }, 24000 * multiplier)
}

function scene4() {
    loafEl.style.visibility = "hidden"
    box1El.style.visibility = "hidden"
    box2El.style.visibility = "hidden"
    jumpChar("pino", 10000, -15000)
    renderPino()
    changeSize("pino", 1, .8)
    toggleAnimation("map", "pino")


    setTimeout(() => {
        slideBoxY("dialogue")
    }, 300)


    setTimeout(() => {
        nextLine()
    }, 600)
    setTimeout(() => {
        floppy1El.style.visibility = "visible"
        fadeChar(floppy1El, 0, -225, 10, 2000)
    }, 5000)
    setTimeout(() => {
        fadeChar("pino", 1000, -150, 10, 2000)
    }, 13000)
    setTimeout(() => {
        fadeChar("pino", 5000, -5000, 5000, 2000)
        fadeChar(floppy1El, 5000, -5000, 5000, 2000)
        fadeBox("none")
    }, 20000)
}

function scene5() {
    floppy1El.style.visibility = "hidden"
    removePino()
    deviceEl.style.visibility = "visible"
    floppy2El.style.visibility = "visible"
    mapBlackEl.style.visibility = "visible"
    setTimeout(() => {
        hopChar(floppy2El)
        floppy2El.style.transition = "transform 500ms ease-in-out";
        floppy2El.style.transform = "rotate(-450deg)";
    }, 500)
    setTimeout(() => {
        slideChar(floppy2El, 300, 0, 2000)
    }, 2000)
    setTimeout(() => {
        mapVideoEl.style.visibility = "visible"
        let flickerTime = 0;
        let interval = 500; // start slow
        let flickerDuration = 10000; // total time in ms
        let startTime = Date.now();

        const flickerInterval = setInterval(() => {
            // Toggle opacity between 0 and 1
            mapVideoEl.style.opacity = mapVideoEl.style.opacity === "1" ? "0" : "1";
            flickerTime = Date.now() - startTime;

            // Gradually decrease interval to increase flicker speed
            if (interval > 50) interval -= 30;

            // After 10 seconds, stop flickering and fade in permanently
            if (flickerTime >= flickerDuration) {
                clearInterval(flickerInterval);
                mapVideoEl.style.transition = "opacity 2s ease";
                mapVideoEl.style.opacity = "1";
            }
        }, interval);
        slideBoxY("dialogue")
        setTimeout(nextLine, 500)
    }, 4000);
    setTimeout(() => {
        mapVideoEl.play()
        slideBoxY("none")
    }, 14000);
    setTimeout(() => {
        slideBoxY("dialogue")
        setTimeout(nextLine, 500)
    }, 42000);

}

function scene6() {
    changeBg("animated/forest.gif")

    mapVideoEl.style.opacity = "0"

    toggleAnimation("front", "duo")
    changeSize("duo", 1, .8)
    deviceEl.style.visibility = "hidden"
    floppy2El.style.visibility = "hidden"
    mapBlackEl.style.visibility = "hidden"

    castleBackEl.style.visibility = "visible"
    tillyImgEl.style.visibility = "visible"
    castleFrontEl.style.visibility = "visible"
    jumpChar(castleBackEl, 0, 0)
    jumpChar(tillyImgEl, 0, 0)
    jumpChar(castleFrontEl, 0, 0)
    jumpChar("duo", 2000, 0)
    fadeChar("pino", -75, 0, 1, 3000)
    renderPino()
    renderJaz()
    setTimeout(() => {
        // slideBoxY("dialogue")
    }, 500 * multiplier)
    setTimeout(() => {
        clearText()
        nextLine(
        )
    }, 900 * multiplier)
    setTimeout(() => {
        slideBoxY("none")
        flyInRotateChar("jaz", 0, 0)
    }, 10000)
    setTimeout(() => {
        hopChar("jaz")
    }, 13000)
}

function scene7() {
    toggleAnimation("walk", "duo")
    flipChar("left", "duo")
    slideChar("duo", -900, 0, 3000)
    tillyImgEl.style.transition = `left ${3000 * multiplier}ms`
    tillyImgEl.style.left = "200px"
}

function scene8() {
    // fade in map then add box w text
    renderMap(characters.p.device)
    // Defer the opacity change just a tick to let the initial render take effect
    setTimeout(() => {
        fadeMap(1, 10000);
    }, 50);
    setTimeout(() => {
        slideBoxY("dialogue")
    }, 10000)


    setTimeout(() => {
        nextLine()
    }, 10600)


    setTimeout(() => {
        slideBoxY("none")

    }, 17500)
}






slideBoxY("none")
intro()
