
const options = {
    thermosphere: [{ name: "moon", data: "drum" }, { name: "aura", data: "synth" }, { name: "satellite", data: "gran" }],
    twilight: [{ name: "jelly", data: "drum" }, { name: "squid", data: "synth" }, { name: "eel", data: "gran" }]
}
function soundIcons(location) {
    const options = {
        thermosphere: [{ name: "moon", data: "drum" }, { name: "aura", data: "synth" }, { name: "satellite", data: "gran" }],
        twilight: [{ name: "jelly", data: "drum" }, { name: "squid", data: "synth" }, { name: "eel", data: "gran" }]
    }

    let randNum = Math.floor(Math.random() * 3)


    let voteAImgEl = document.getElementById('sound-icon-1')
    let voteBImgEl = document.getElementById('sound-icon-2')
    let voteABgEl = document.getElementById('sound-icon-bg-1')
    let voteBBgEl = document.getElementById('sound-icon-bg-2')
    voteAImgEl.addEventListener("touchstart", () => {
        voteAImgEl.src = voteAImgEl.src.replace("up", "down");
        voteABgEl.src = voteABgEl.src.replace("up", "down");
    });
    voteAImgEl.addEventListener("mouseup", () => {
        voteAImgEl.src = voteAImgEl.src.replace("down", "up");
        voteABgEl.src = voteABgEl.src.replace("down", "up");
    });


    voteBImgEl.addEventListener("touchstart", () => {
        voteBImgEl.src = voteBImgEl.src.replace("up", "down");
        voteBBgEl.src = voteBBgEl.src.replace("up", "down");
    });

    voteBImgEl.addEventListener("mouseup", () => {
        voteBImgEl.src = voteBImgEl.src.replace("down", "up");
        voteBBgEl.src = voteBBgEl.src.replace("down", "up");
    });


    voteAImgEl.src = `/mobile/assets/vote/soundIcons/left/${options[location][randNum]["name"]}/up.png`
    voteAImgEl.dataset.sample = options[location][randNum]["data"]
    voteBImgEl.src = `/mobile/assets/vote/soundIcons/right/${options[location][(randNum + 1) % 3]["name"]}/up.png`
    voteBImgEl.dataset.sample = options[location][(randNum + 1) % 3]["data"]



    const soundIconEls = document.querySelectorAll(".sound-icon")
    soundIconEls.forEach((el) => {
        el.addEventListener("click", () => {
            const val = el.dataset.sample; // e.g., data-sample="drum"
            sendToServer({ type: "sample", val });
        });
    });
}




