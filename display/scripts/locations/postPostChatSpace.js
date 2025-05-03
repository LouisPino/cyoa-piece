function postPostChatSpace() {
    if (checkHistory("river")) {
        document.getElementById("teleporter").src = "/display/assets/locations/teleporter/river.png"
        changeBg("animated/riverInterior.gif")
    } else {
        changeBg("animated/caveInterior.gif")
        document.getElementById("teleporter").src = "/display/assets/locations/teleporter/cave.png"
    }
    setTimeout(() => {
        changeSize("duo", 1, .7)
        toggleAnimation("front", "duo")
        jumpChar("duo", 2000, 2000)
        renderPino()
        renderJaz()
        fadeChar("pino", 575, 0, 10, 5000)
        fadeChar("jaz", 325, 0, 10, 5000)
        setTimeout(() => {
            document.getElementById("teleporter-beam").style.visibility = "visible"
            sendToServer({ type: "fx", val: "aura.wav" })
        }, 4000)
        setTimeout(() => {
            slideChar("jaz", 325, -1000, 9000)
            setTimeout(() => {
                slideChar("pino", 425, -1000, 9000)
                startFlipping(10000, "pino")
            }, 6000)
            startFlipping(10000, "jaz")
        }, 8000)
        setTimeout(() => {
            sendToServer({ type: "fx", val: 0 })
            document.getElementById("teleporter-beam").style.visibility = "hidden"
        }, 28000)
    }, 350)
}



function startFlipping(duration = 9000) {
    let direction = "left";
    const target = "duo";

    const interval = setInterval(() => {
        flipChar(direction, target);
        direction = direction === "left" ? "right" : "left";
    }, 200);

    // Stop the interval after the specified duration
    setTimeout(() => {
        clearInterval(interval);
    }, duration);
}


postPostChatSpace()