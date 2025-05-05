function postPostChatOcean() {
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
        fadeChar("pino", 575, 75, 10, 5000)
        fadeChar("jaz", 325, 75, 10, 5000)

        setTimeout(() => {
            document.getElementById("teleporter-beam").style.visibility = "visible"
            sendToServer({ type: "fx", val: "aura.wav" })
        }, 8000)
        setTimeout(() => {
            slideChar("jaz", 325, -1000, 9000)
            setTimeout(() => {
                slideChar("pino", 575, -1000, 9000)
                startFlipping(10000, "pino")
            }, 6000)
            startFlipping(10000, "jaz")
        }, 12000)
        setTimeout(() => {
            sendToServer({ type: "fx", val: 0 })
            document.getElementById("teleporter-beam").style.visibility = "hidden"
        }, 32000)
    }, 350)
}



function startFlipping(duration = 20000, target) {
    let direction = "left";

    const interval = setInterval(() => {
        flipChar(direction, target);
        direction = direction === "left" ? "right" : "left";
    }, 200);

    // Stop the interval after the specified duration
    setTimeout(() => {
        clearInterval(interval);
    }, duration);
}



postPostChatOcean()