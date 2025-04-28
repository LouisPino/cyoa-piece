function river() {
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
        slideChar(boatRockerEl, 300, 250, 1000)
    }, 5000)
    setTimeout(() => {
        toggleAnimation("side", "duo")
        slideChar(boatRockerEl, 2000, 200, 1000)
    }, 6000)
}





// river()