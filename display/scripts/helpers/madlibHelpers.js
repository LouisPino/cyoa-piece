

const maxWords = 15;
const words = []; // track active word elements
const velocities = []; // track x, y, and rotation speed for each word
let area

function createFloatingWord(word) {
    if (!area) { return }
    const p = document.createElement('p');
    p.className = 'floating-word';
    p.innerText = word;

    // Random initial position inside area
    const posX = Math.random() * (area.clientWidth - 100); // leave some margin
    const posY = Math.random() * (area.clientHeight - 50);

    p.style.left = `${posX}px`;
    p.style.top = `${posY}px`;

    area.appendChild(p);

    // Set random velocity and rotation speed
    const velocity = {
        x: (Math.random() * 2 + 0.5) * (Math.random() < 0.5 ? 1 : -1), // 0.5 to 2.5 px/frame
        y: (Math.random() * 2 + 0.5) * (Math.random() < 0.5 ? 1 : -1),
        angle: 0,
        rotationSpeed: (Math.random() * 0.5 + 0.1) * (Math.random() < 0.5 ? 1 : -1) // degrees/frame
    };

    // Manage max 15 words
    if (words.length >= maxWords) {
        const oldWord = words.shift();
        area.removeChild(oldWord);
        velocities.shift();
    }

    words.push(p);
    velocities.push(velocity);
}

// Animate
function animateWords() {
    for (let i = 0; i < words.length; i++) {
        const p = words[i];
        const vel = velocities[i];

        let x = parseFloat(p.style.left);
        let y = parseFloat(p.style.top);

        x += vel.x;
        y += vel.y;

        // Bounce off edges
        if (x <= 0 || x >= area.clientWidth - p.offsetWidth) {
            vel.x *= -1;
            x = Math.max(0, Math.min(area.clientWidth - p.offsetWidth, x));
        }
        if (y <= 0 || y >= area.clientHeight - p.offsetHeight) {
            vel.y *= -1;
            y = Math.max(0, Math.min(area.clientHeight - p.offsetHeight, y));
        }

        // Update position
        p.style.left = `${x}px`;
        p.style.top = `${y}px`;

        // Update rotation
        vel.angle += vel.rotationSpeed;
        p.style.transform = `rotate(${vel.angle}deg)`;
    }

    requestAnimationFrame(animateWords);
}
