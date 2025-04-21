const dvdSpeedMax = 1
const dvdSpeed = 1
const options = {
    thermosphere: [{ name: "moon", data: "drum 1" }, { name: "aura", data: "synth 1" }, { name: "satellite", data: "drum 2" }],
    twilight: [{ name: "jelly", data: "drum 1" }, { name: "squid", data: "synth 1" }, { name: "eel", data: "drum 2" }]
}

function dvdBounce(location) {
    renderPino()
    renderJaz()
    toggleAnimation("dvd")
    let randNum = Math.floor(Math.random() * 3)
    const container = document.getElementById('dvd-container');
    const sprites = document.querySelectorAll('.char-div');
    // const sprites = document.querySelectorAll('.floater, .char-div');
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    sprites.forEach(sprite => {
        sprite.style.left = `${(((Math.random() * .5 + .2) * vw))}px`;
        sprite.style.top = `${(((Math.random() * .3 + .2) * vh))}px`;
        sprite.style.animation = "rotate360 5s linear infinite"
        // let dvdSpeed = Math.floor(Math.random() * dvdSpeedMax) + 1
        let dx = Math.random() < 0.5 ? dvdSpeed : -1 * dvdSpeed;
        let dy = Math.random() < 0.5 ? dvdSpeed : -1 * dvdSpeed;

        function animate() {
            let left = parseFloat(sprite.style.left);
            let top = parseFloat(sprite.style.top);

            const spriteWidth = sprite.offsetWidth;
            const spriteHeight = sprite.offsetHeight;
            const containerWidth = container.clientWidth;
            const containerHeight = container.clientHeight;

            const leftBoundary = left + dx;
            const rightBoundary = left + dx + spriteWidth;

            if (sprite.id === "pino-char") {
                if (leftBoundary < 0 || leftBoundary + spriteWidth / 2 > containerWidth) {
                    dx = -dx;
                }
            } else if (sprite.id === "jaz-char") {
                if (rightBoundary - spriteWidth / 2 < 0 || rightBoundary > containerWidth) {
                    dx = -dx;
                }
            } else {
                if (leftBoundary < 0 || rightBoundary > containerWidth) {
                    dx = -dx;
                }
            }

            if (top + dy < 0 || top + dy + spriteHeight > containerHeight) {
                dy = -dy;
            }

            left += dx;
            top += dy;

            sprite.style.left = `${left}px`;
            sprite.style.top = `${top}px`;
            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);




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
                const val = el.dataset.sample; // e.g., data-sample="drum 1"
                sendToServer({ type: "sample", val });
            });
        });
    });
}
