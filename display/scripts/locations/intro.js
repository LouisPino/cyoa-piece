
let multiplier = 1
let scene1length = 1000
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


deviceEl.src = `/display/assets/intro/device${characters.p.device}.png`





function intro() {
    scene1()

    setTimeout(() => {
        scene2()
    }, 1000 * multiplier)

    setTimeout(() => {
        scene3()
    }, 3000 * multiplier)

    setTimeout(() => {
        scene4()
    }, 5000 * multiplier)

    setTimeout(() => {
        scene5()
    }, 6000 * multiplier)

    setTimeout(() => {
        scene6()
    }, 7000 * multiplier)

    setTimeout(() => {
        scene7()
    }, 10000 * multiplier)



}


intro()




function scene1() {
    toggleBox("none")
    castleBackEl.style.visibility = "visible"
    castleFrontEl.style.visibility = "visible"
    tillyGifEl.style.visibility = "visible"
}

function scene2() {
    castleBackEl.style.visibility = "hidden"
    castleFrontEl.style.visibility = "hidden"
    tillyGifEl.style.visibility = "hidden"
    yarnEl.style.visibility = "visible"
    napsEl.style.visibility = "visible"
    guttersEl.style.visibility = "visible"

    setTimeout(() => {
        yarnEl.style.transition = `left ${300 * multiplier}ms`
        yarnEl.style.left = "0"
    }, 100 * multiplier)
    setTimeout(() => {
        yarnEl.style.left = "-800px"
    }, 500 * multiplier)

    setTimeout(() => {
        napsEl.style.transition = `left ${300 * multiplier}ms`
        napsEl.style.left = "0"
    }, 600 * multiplier)
    setTimeout(() => {
        napsEl.style.left = "800px"
    }, 1100 * multiplier)

    setTimeout(() => {
        guttersEl.style.transition = `top ${300 * multiplier}ms`
        guttersEl.style.top = "0"
    }, 1200 * multiplier)
    setTimeout(() => {
        guttersEl.style.top = "800px"
    }, 1700 * multiplier)
}

function scene3() {
    yarnEl.style.visibility = "hidden"
    napsEl.style.visibility = "hidden"
    guttersEl.style.visibility = "hidden"
    changeBg("cardboard.jpg")

    loafEl.style.visibility = "visible"
    box1El.style.visibility = "visible"
    box2El.style.visibility = "visible"

    setTimeout(() => {
        landCharBounce(box1El, 0, 0, -900)
    }, 300 * multiplier)
    setTimeout(() => {

        landCharBounce(box2El, 0, 0, -900)
    }, 900 * multiplier)

}

function scene4() {
    loafEl.style.visibility = "hidden"
    box1El.style.visibility = "hidden"
    box2El.style.visibility = "hidden"
    jumpChar("pino", 800, 0)
    renderPino()
    toggleAnimation("map", "pino")
    floppy1El.style.visibility = "visible"
}

function scene5() {
    floppy1El.style.visibility = "hidden"
    removePino()
    toggleAnimation("front", "pino")
    deviceEl.style.visibility = "visible"
    floppy2El.style.visibility = "visible"
    mapBlackEl.style.visibility = "visible"

}

function scene6() {
    deviceEl.style.visibility = "hidden"
    floppy2El.style.visibility = "hidden"
    mapBlackEl.style.visibility = "hidden"

    castleBackEl.style.visibility = "visible"
    tillyImgEl.style.visibility = "visible"
    castleFrontEl.style.visibility = "visible"
    jumpChar("pino", 0, 0)
    renderPino()
    renderJaz()
    jumpChar("jaz", 2000, 0)
    setTimeout(() => {
        flyInRotateChar("jaz", 0, 0)
    }, 500)
}

function scene7() {
    toggleAnimation("walk", "duo")
    flipChar("left", "duo")
    slideChar("duo", -900, 0, 3000)
    tillyImgEl.style.transition = `left ${3000 * multiplier}ms`
    tillyImgEl.style.left = "200px"
}