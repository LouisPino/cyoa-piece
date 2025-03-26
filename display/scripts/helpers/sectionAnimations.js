function sceneTransition(type, time) {
    console.log(type, time);

    switch (type) {
        case "fade":
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
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
                overlay.style.opacity = 1; // Ensure it stays fully visible
            }, time * 0.4);

            // Fade out
            setTimeout(() => {
                overlay.style.opacity = 0;
            }, (time * 0.4 + time * 0.2));

            // Remove element after fade out
            setTimeout(() => {
                overlay.remove();
            }, time);
            break;
    }
}
