const xEl = document.getElementById("bad-guy")
let xDown = null;
let yDown = null;

document.addEventListener("touchstart", function (evt) {
    if (fighting) {
        xDown = evt.touches[0].clientX;
        yDown = evt.touches[0].clientY;
    }
});

document.addEventListener("touchend", function (evt) {
    if (xDown === null || yDown === null) return;

    let xUp = evt.changedTouches[0].clientX;
    let yUp = evt.changedTouches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 20) {
            console.log("left");
            xEl.innerHTML = "YOU SMACKED ME";
            sendToServer({ type: "attack", val: "smack" })
        } else if (xDiff < -20) {
            console.log("right");
            xEl.innerHTML = "YOU SMACKED ME";
            sendToServer({ type: "attack", val: "smack" })
        }
    } else {
        if (yDiff > 20) {
            console.log("UP");
            xEl.innerHTML = "A FUCKING UPPPERCUT?";
            sendToServer({ type: "attack", val: "uppercut" })
        } else if (yDiff < -20) {
            console.log("DOWN");
            xEl.innerHTML = "WATCH THE HAIR ASSHOLE";
            sendToServer({ type: "attack", val: "smash" })
        }
    }

    xDown = null;
    yDown = null;
});


