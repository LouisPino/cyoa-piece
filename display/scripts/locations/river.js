function river() {
    toggleAnimation("front", "duo")
    pinoCharSizeCtr.style.left = "20%"
    pinoCharSizeCtr.style.top = "-5%"
    jazCharSizeCtr.style.left = "30%"
    jazCharSizeCtr.style.top = "-5%"
    pinoCharSizeCtr.classList.add("float-only")
    jazCharSizeCtr.classList.add("float-only")
    renderJaz("river")
    renderPino("river")
    setTimeout(() => {
        console.log(document.getElementById("boat-rocker"))
        slideChar(document.getElementById("boat-rocker"), 2000, 500, 13000)
    }, 4000)
}





river()