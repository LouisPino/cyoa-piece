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
    setTimeout(() => {
        slideChar(boatRockerEl, 300, 250, 5000)
    }, 4000)
    setTimeout(() => {
        toggleAnimation("side", "duo")
        slideChar(boatRockerEl, 2000, 200, 13000)
    }, 9000)
}





rats()