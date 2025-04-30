const boatRockerEl = document.getElementById("boat-rocker")
const boatCtrEl = document.getElementById("boat-ctr")

function river() {
    changeSize(boatCtrEl, 1, .5)
    getInBoat(boatRockerEl)
    jumpChar(boatRockerEl, -50, 500)
    setTimeout(() => {
        slideChar(boatRockerEl, 300, 250, 1000)
    }, 5000)
    setTimeout(() => {
        toggleAnimation("side", "duo")
        slideChar(boatRockerEl, 2000, 200, 1000)
    }, 6000)
}





// river()