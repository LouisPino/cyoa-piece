const dvdSpeedMax = 2

function dvdBounce() {
    const container = document.getElementById('dvd-container');
    const sprites = document.querySelectorAll('.floater');
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    sprites.forEach(sprite => {
        sprite.style.left = `${(((Math.random() * .5 + .2) * vw))}px`;
        sprite.style.top = `${(((Math.random() * .3 + .2) * vh))}px`;

        let dvdSpeed = Math.floor(Math.random() * dvdSpeedMax) + 1
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
        const floaterEls = document.querySelectorAll(".floater")
        floaterEls.forEach((el) => {
            el.addEventListener("click", () => {
                console.log(el)
                const val = el.dataset.sample; // e.g., data-sample="drum 1"
                sendToServer({ type: "sample", val });
            });
        });
    });
}


