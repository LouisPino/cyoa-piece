function dvdBounce() {
    const container = document.getElementById('container');
    const sprites = document.querySelectorAll('.sprite');
    // For each sprite, initialize its position and velocity, then start its own animation loop.
    sprites.forEach(sprite => {
        // For the red sprite, set a different initial position.
        if (sprite.classList.contains('red')) {
            sprite.style.left = '400px';
            sprite.style.top = '300px';
        } else {
            // Default starting position for other sprites.
            sprite.style.left = sprite.style.left || '0px';
            sprite.style.top = sprite.style.top || '0px';
        }

        // Randomly assign a horizontal and vertical velocity (in pixels per frame)
        let dx = Math.random() < 0.5 ? 2 : -2;
        let dy = Math.random() < 0.5 ? 2 : -2;

        // Define the animation function for this sprite
        function animate() {
            // Get current position as numbers
            let left = parseFloat(sprite.style.left);
            let top = parseFloat(sprite.style.top);

            // Dimensions of the sprite
            const spriteWidth = sprite.offsetWidth;
            const spriteHeight = sprite.offsetHeight;

            // Container dimensions
            const containerWidth = container.clientWidth;
            const containerHeight = container.clientHeight;

            // Check horizontal boundaries: bounce off left or right wall
            if (left + dx < 0 || left + dx + spriteWidth > containerWidth) {
                dx = -dx;
            }
            // Check vertical boundaries: bounce off top or bottom wall
            if (top + dy < 0 || top + dy + spriteHeight > containerHeight) {
                dy = -dy;
            }

            // Update positions
            left += dx;
            top += dy;

            // Apply new positions
            sprite.style.left = `${left}px`;
            sprite.style.top = `${top}px`;
            sprite.style.transform = dx < 0 ? "scaleX(-1)" : "scaleX(1)";

            // Continue the animation loop
            requestAnimationFrame(animate);
        }

        // Start the animation loop for this sprite
        requestAnimationFrame(animate);
    });
}

// Usage:

