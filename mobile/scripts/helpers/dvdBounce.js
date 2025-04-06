function dvdBounce() {
    const container = document.getElementById('dvd-container');
    const sprites = document.querySelectorAll('.floater');

    sprites.forEach(sprite => {
            sprite.style.left = `${Math.floor(Math.random() * (100))}%`;
            sprite.style.top = `${Math.floor(Math.random() * (100))}%`;


        let dx = Math.random() < 0.5 ? 2 : -2;
        let dy = Math.random() < 0.5 ? 2 : -2;

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
    });
}
