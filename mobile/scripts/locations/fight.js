let xDown = null;
let yDown = null;

document.addEventListener("touchstart", function (evt) {
    if (fighting) {
        xDown = evt.touches[0].clientX;
        yDown = evt.touches[0].clientY;
    }
    evt.preventDefault(); // Prevent scrolling
}, { passive: false })

document.addEventListener("touchend", function (evt) {
    if (xDown === null || yDown === null) return;
    let xUp = evt.changedTouches[0].clientX;
    let yUp = evt.changedTouches[0].clientY;
    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 20) {
            sendToServer({ type: "attack", val: "left" })
        } else if (xDiff < -20) {
            sendToServer({ type: "attack", val: "right" })
        }
    } else {
        if (yDiff > 20) {
            sendToServer({ type: "attack", val: "up" })

        } else if (yDiff < -20) {
            sendToServer({ type: "attack", val: "down" })

        }
    }
    xDown = null;
    yDown = null;
    evt.preventDefault(); // Prevent scrolling
}, { passive: false });


