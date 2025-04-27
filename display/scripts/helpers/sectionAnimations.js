function sceneTransition(type, time) {
    switch (type) {
        case "fade":
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.zIndex = 1000;
            overlay.style.width = "100vw";
            overlay.style.height = "100vh";
            overlay.style.backgroundColor = "black";
            overlay.style.opacity = 0;
            overlay.style.transition = `opacity ${time * 0.4}ms ease-in-out`;
            overlay.style.pointerEvents = "none";
            document.body.appendChild(overlay);

            // Fade in
            setTimeout(() => {
                overlay.style.opacity = 1;
            }, 10);

            // Hold
            setTimeout(() => {
                overlay.style.opacity = 1;
            }, time * 0.4);

            // Fade out
            setTimeout(() => {
                overlay.style.opacity = 0;
            }, time * 0.6);

            // Remove element after fade out
            setTimeout(() => {
                overlay.remove();
            }, time);
            break;

        case "pixelate":
            squareTransition(time)
        case "blur":
            const blurOverlay = document.createElement("div");
            blurOverlay.style.position = "fixed";
            blurOverlay.style.top = 0;
            blurOverlay.style.left = 0;
            blurOverlay.style.width = "100vw";
            blurOverlay.style.height = "100vh";
            // blurOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            blurOverlay.style.pointerEvents = "none";
            blurOverlay.style.zIndex = 9999;
            blurOverlay.style.transition = `backdrop-filter ${time * 0.4}ms ease-in-out, opacity ${time * 0.4}ms ease-in-out`;
            blurOverlay.style.backdropFilter = "blur(0px)";
            blurOverlay.style.opacity = 0;
            document.body.appendChild(blurOverlay);

            // Blur in
            setTimeout(() => {
                blurOverlay.style.backdropFilter = "blur(100px)";
                blurOverlay.style.opacity = 1;
            }, 10);

            // Hold
            setTimeout(() => {
                blurOverlay.style.backdropFilter = "blur(100px)";
                blurOverlay.style.opacity = 1;
            }, time * 0.4);

            // Blur out
            setTimeout(() => {
                blurOverlay.style.backdropFilter = "blur(0px)";
                blurOverlay.style.opacity = 0;
            }, time * 0.6);

            // Remove element after transition
            setTimeout(() => {
                blurOverlay.remove();
            }, time);
            break;
        case "pixelate-no-blur":
            squareTransition(time)
            break;
        case "pull":
            pull(time)
            break
    }
}



function squareTransition(time) {
    // Create container overlay
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100vw";
    container.style.height = "100vh";
    container.style.pointerEvents = "none";
    container.style.zIndex = "9999";
    container.style.overflow = "hidden"; // prevent any overflow
    document.body.appendChild(container);

    // Define grid: 16 columns of squares
    const numColumns = 16;
    const boxSize = window.innerWidth / numColumns;
    const numRows = Math.ceil(window.innerHeight / boxSize);
    const squares = [];

    // Create grid of squares
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numColumns; col++) {
            const square = document.createElement("div");
            square.style.position = "absolute";
            square.style.width = `${boxSize}px`;
            square.style.height = `${boxSize}px`;
            square.style.left = `${col * boxSize}px`;
            square.style.top = `${row * boxSize}px`;
            square.style.backgroundColor = "black";
            square.style.opacity = "0";
            square.style.transition = "opacity 200ms ease-in-out";
            container.appendChild(square);
            squares.push(square);
        }
    }

    // Create a random order for the squares
    const order = Array.from({ length: squares.length }, (_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
    }

    // Schedule each square's appearance and disappearance.
    // Fade in: staggered over the first half of the total time.
    // Fade out: reverse order, staggered over the second half.
    squares.forEach((square, idx) => {
        const rank = order.indexOf(idx);
        const appearDelay = (rank * (time / 2.25)) / squares.length;
        setTimeout(() => {
            square.style.opacity = "1";
        }, appearDelay);

        const disappearDelay = time / 2.25 + ((squares.length - 1 - rank) * (time / 2.25)) / squares.length;
        setTimeout(() => {
            square.style.opacity = "0";
        }, disappearDelay);
    });

    // Remove the container after the full time has elapsed.
    setTimeout(() => {
        container.remove();
    }, time);
}



function squareTransitionNoBlur(time) {
    // Create container overlay
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100vw";
    container.style.height = "100vh";
    container.style.pointerEvents = "none";
    container.style.zIndex = "9999";
    container.style.overflow = "hidden"; // ensure squares don't overflow
    document.body.appendChild(container);

    // Define grid: 16 columns of squares
    const numColumns = 16;
    const boxSize = window.innerWidth / numColumns;
    const numRows = Math.ceil(window.innerHeight / boxSize);
    const squares = [];

    // Create grid of squares
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numColumns; col++) {
            const square = document.createElement("div");
            square.style.position = "absolute";
            square.style.width = `${boxSize}px`;
            square.style.height = `${boxSize}px`;
            square.style.left = `${col * boxSize}px`;
            square.style.top = `${row * boxSize}px`;
            square.style.backgroundColor = "black";
            square.style.opacity = "0";
            square.style.transition = "opacity 200ms ease-in-out";
            container.appendChild(square);
            squares.push(square);
        }
    }

    // Create a random order for the squares to appear
    const order = Array.from({ length: squares.length }, (_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
    }

    // Schedule each square's appearance and disappearance.
    squares.forEach((square, idx) => {
        const rank = order.indexOf(idx);
        // Fade in staggered over the first half of the total time.
        const appearDelay = (rank * (time / 2)) / squares.length;
        setTimeout(() => {
            square.style.opacity = "1";
        }, appearDelay);

        // Fade out in reverse order over the second half.
        const disappearDelay = time / 2 + ((squares.length - 1 - rank) * (time / 2)) / squares.length;
        setTimeout(() => {
            square.style.opacity = "0";
        }, disappearDelay);
    });

    // Remove the container after the full time has elapsed.
    setTimeout(() => {
        container.remove();
    }, time);
}

function pull(time) {
    toggleAnimation("walk");
    changeSize("duo", 1, 1)
    flipChar("right", "duo")
    renderPino();
    renderJaz();

    // Create the overlay
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.zIndex = "50";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "black";
    overlay.style.transition = `transform ${time}ms linear`;
    // Start completely offscreen to the left by an extra 19vw
    overlay.style.transform = "translateX(-119vw)";
    document.body.appendChild(overlay);

    // Position the character divs relative to the viewport.
    // pinoDiv will appear 19vw to the left of overlay's left edge.
    // jazDiv will appear 19vw to the right of overlay's right edge.
    if (pinoDiv && jazDiv) {
        pinoDiv.style.position = "fixed";
        jazDiv.style.position = "fixed";

        // pinoDiv: starting 19vw to the left of the overlay’s left edge.
        // Overlay's left edge (after transform) is at -119vw.
        // So pinoDiv is placed at -119vw - 19vw = -138vw.
        pinoDiv.style.left = "calc(-100vw - 40vw)"; // -138vw
        pinoDiv.style.top = "200px";
        pinoDiv.style.transform = "translateY(-50%)"; // initial vertical centering

        // jazDiv: starting 19vw to the right of the overlay’s right edge.
        // With overlay starting at -119vw and width 100vw, its right edge is at -19vw.
        // 19vw to the right means 0vw.
        jazDiv.style.left = "-40vw";
        jazDiv.style.top = "200px";
        jazDiv.style.transform = "translateY(-50%)";

        // Ensure they animate along with the overlay.
        pinoDiv.style.transition = `transform ${time}ms linear`;
        jazDiv.style.transition = `transform ${time}ms linear`;
    }

    // Force reflow so the browser registers the initial positions.
    overlay.getBoundingClientRect();

    // Animate overlay and characters together
    requestAnimationFrame(() => {
        // Move overlay from -119vw to 119vw (a total shift of 238vw)
        overlay.style.transform = "translateX(119vw)";
        if (pinoDiv && jazDiv) {
            // Apply the same 238vw translation to both characters.
            pinoDiv.style.transform = "translateY(-50%) translateX(238vw)";
            jazDiv.style.transform = "translateY(-50%) translateX(238vw)";
        }
    });

    // Clean up after the animation
    setTimeout(() => {
        overlay.remove();
        pinoDiv.style.position = "absolute";
        jazDiv.style.position = "absolute";
        jazDiv.style.left = "0vw";
        jazDiv.style.top = "0px";
        jazDiv.style.transform = "translateY(0) translateX(0)";
        pinoDiv.style.left = "0vw";
        pinoDiv.style.top = "0px";
        pinoDiv.style.transform = "translateY(0) translateX(0)";
        removePino();
        removeJaz();
    }, time);
}
