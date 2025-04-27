let multiplier = 1

textsArr = [
    "Oh! We aren’t alone here… Will it be friend or foe?",
    "...aahhhYARGHhhhh……guhh… it’s too late…",
];


function rats() {
    const boatRockerEl = document.getElementById("boat-rocker")
    toggleAnimation("front", "duo")
    jumpChar(boatRockerEl, -50, 500)
    pinoCharSizeCtr.style.left = "20%"
    pinoCharSizeCtr.style.top = "-5%"
    jazCharSizeCtr.style.left = "30%"
    jazCharSizeCtr.style.top = "-5%"
    pinoCharSizeCtr.classList.add("float-only")
    jazCharSizeCtr.classList.add("float-only")
    renderJaz("river")
    renderPino("river")
    // setTimeout(() => {
    //     slideChar(boatRockerEl, 300, 250, 5000)
    // }, 4000)
    // setTimeout(() => {
    //     toggleAnimation("side", "duo")
    //     slideChar(boatRockerEl, 2000, 200, 13000)
    // }, 9000)

    scene1()
    setTimeout(() => {
        scene2()
    }, 28000 * multiplier)

    setTimeout(() => {
        scene3()
    }, 44000 * multiplier)

    setTimeout(() => {
        scene4()
    }, 44000 * multiplier)

}



function scene1() {
}

function scene2() {

}

function scene3() {

}

function scene4() {

}


rats()


//render map, render Isopod behind map, fade in guys, mive guys

//fade out map, fade in duo box, add text, fade out box

//boat in guys from top to center to meet rats, in a start, stop, shake pattern to show fear

//sprite box up, next line