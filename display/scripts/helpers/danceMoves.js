
function leftToRight(y = Math.floor(Math.random() * (200 - (-400) + 1)) + (-400)) {
    const el = document.getElementById("npc-size-ctr");
    el.style.position = "absolute";
    el.style.top = `${y}px`;
    el.style.left = `-1000px`;

    let start = -1000;
    let end = 1500;
    let duration = 5000;
    let startTime = null;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let percent = Math.min(progress / duration, 1);
        let currentLeft = start + (end - start) * percent;
        el.style.left = `${currentLeft}px`;

        if (percent < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

function topToBottom(x = Math.floor(Math.random() * (800 - (-800) + 1)) + (-800)) {
    const el = document.getElementById("npc-size-ctr");
    el.style.position = "absolute";
    el.style.left = `${x}px`;
    el.style.top = `-800px`;

    let start = -800;
    let end = 1000;
    let duration = 5000;
    let startTime = null;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let percent = Math.min(progress / duration, 1);
        let currentTop = start + (end - start) * percent;
        el.style.top = `${currentTop}px`;

        if (percent < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

function bottomToTop(x = Math.floor(Math.random() * (800 - (-800) + 1)) + (-800)) {
    const el = document.getElementById("npc-size-ctr");
    el.style.position = "absolute";
    el.style.left = `${x}px`;
    el.style.top = `1500px`;

    let start = 1500;
    let end = -1000;
    let duration = 5000;
    let startTime = null;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let percent = Math.min(progress / duration, 1);
        let currentTop = start + (end - start) * percent;
        el.style.top = `${currentTop}px`;

        if (percent < 1) {
            requestAnimationFrame(animate);
        }

        // Add hops and flips based on time intervals
        if (progress > 1000) hopChar("npc");
        if (progress > 2000) flipChar("up", "npc");
        if (progress > 3000) flipChar("down", "npc");
        if (progress > 4000) hopChar("npc");
    }

    requestAnimationFrame(animate);
}

function rightToLeft(y = Math.floor(Math.random() * (200 - (-400) + 1)) + (-400)) {
    const el = document.getElementById("npc-size-ctr");
    el.style.position = "absolute";
    el.style.top = `${y}px`;
    el.style.left = `1500px`;

    let start = 1500;
    let end = -1300;
    let duration = 5000;
    let startTime = null;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let percent = Math.min(progress / duration, 1);
        let currentLeft = start + (end - start) * percent;
        el.style.left = `${currentLeft}px`;

        if (percent < 1) {
            requestAnimationFrame(animate);
        }

        // Add hops and flips based on time intervals
        if (progress > 1000) hopChar("npc");
        if (progress > 2000) flipChar("right", "npc");
        if (progress > 3000) flipChar("left", "npc");
        if (progress > 4000) hopChar("npc");
    }

    requestAnimationFrame(animate);
}

function diagonal(direction = "bottomRight") {
    const el = document.getElementById("npc-size-ctr");
    el.style.position = "absolute";

    let start = { x: 0, y: 0 };
    let end = { x: 0, y: 0 };

    switch (direction) {
        case "topLeft":
            start = { x: 1500, y: 1000 };
            end = { x: -800, y: -600 };
            break;
        case "topRight":
            start = { x: -800, y: 1000 };
            end = { x: 1500, y: -600 };
            break;
        case "bottomLeft":
            start = { x: 1500, y: -600 };
            end = { x: -800, y: 1000 };
            break;
        case "bottomRight":
        default:
            start = { x: -800, y: -600 };
            end = { x: 1500, y: 1000 };
            break;
    }

    el.style.left = `${start.x}px`;
    el.style.top = `${start.y}px`;

    let duration = 5000;
    let startTime = null;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let percent = Math.min(progress / duration, 1);

        el.style.left = `${start.x + (end.x - start.x) * percent}px`;
        el.style.top = `${start.y + (end.y - start.y) * percent}px`;

        if (percent < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}



function figureEight(duration = 5000) {
    const steps = 200;
    let step = 0;
    const radius = 300;
    const el = document.getElementById("npc-size-ctr");
    el.style.position = "absolute";

    // Center of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const interval = setInterval(() => {
        const t = (step / steps) * Math.PI * 2;
        const x = radius * Math.sin(t);
        const y = radius * Math.sin(t) * Math.cos(t); // ∞-shaped

        el.style.left = `${centerX + x}px`;
        el.style.top = `${centerY + y}px`;

        step++;
        if (step > steps) clearInterval(interval);
    }, duration / steps);
}
function snakePath(duration = 5000) {
    const steps = 200;
    let step = 0;
    const maxY = -700;
    const amplitude = 100;
    const el = document.getElementById("npc-size-ctr");
    el.style.position = "absolute";

    const rect = el.getBoundingClientRect();
    const centerX = window.innerWidth / 2 - rect.width / 2;
    const centerY = window.innerHeight / 2 - rect.height / 2;

    const interval = setInterval(() => {
        const t = (step / steps) * Math.PI * 4;
        const x = amplitude * Math.sin(t);
        const y = (step / steps) * maxY;

        el.style.left = `${centerX + x}px`;
        el.style.top = `${centerY + y}px`;

        step++;
        if (step > steps) clearInterval(interval);
    }, duration / steps);
}

function spiralOut(duration = 5000) {
    const steps = 300;
    let step = 0;
    const centerX = 0;
    const centerY = 0;
    const maxRadius = 400;
    const el = document.getElementById("npc-size-ctr");
    el.style.position = "absolute";

    const interval = setInterval(() => {
        const angle = (Math.PI * 6) * (step / steps); // 3 full spins
        const radius = (maxRadius * step) / steps;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        el.style.left = `${x}px`;
        el.style.top = `${y}px`;

        step++;
        if (step > steps) clearInterval(interval);
    }, duration / steps);
}