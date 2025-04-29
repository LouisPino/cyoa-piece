

const maxWords = 15;
const words = []; // track active word elements
const velocities = []; // track x, y, and rotation speed for each word
let animationId = null; // To store the requestAnimationFrame ID

let area
let displayLineup = []
let displaying = false
function createFloatingWord(word) {
    if (!area) { return }

    if (displaying) {
        displayLineup.push(word);
        return;
    }

    const p = document.createElement('p');
    p.className = 'floating-word';
    p.innerText = word.word;
    p.dataset.type = word.type

    const posX = Math.random() * (area.clientWidth - 100);
    const posY = Math.random() * (area.clientHeight - 50);

    p.style.left = `${posX}px`;
    p.style.top = `${posY}px`;

    area.appendChild(p);

    const velocity = {
        x: (Math.random() * 2 + 0.5) * (Math.random() < 0.5 ? 1 : -1),
        y: (Math.random() * 2 + 0.5) * (Math.random() < 0.5 ? 1 : -1),
        angle: 0,
        rotationSpeed: (Math.random() * 0.5 + 0.1) * (Math.random() < 0.5 ? 1 : -1)
    };

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

        if (x <= 0 || x >= area.clientWidth - p.offsetWidth) {
            vel.x *= -1;
            x = Math.max(0, Math.min(area.clientWidth - p.offsetWidth, x));
        }
        if (y <= 0 || y >= area.clientHeight - p.offsetHeight) {
            vel.y *= -1;
            y = Math.max(0, Math.min(area.clientHeight - p.offsetHeight, y));
        }

        p.style.left = `${x}px`;
        p.style.top = `${y}px`;

        vel.angle += vel.rotationSpeed;
        p.style.transform = `rotate(${vel.angle}deg)`
    }

    animationId = requestAnimationFrame(animateWords);
}
function displayWord(type) {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }

    displaying = true;

    const thoughtBubbleEl = document.getElementById("thought-bubble");
    const speechBubbleEl = document.getElementById("speech-bubble");

    thoughtBubbleEl.style.opacity = 0;
    speechBubbleEl.style.opacity = 1;

    // Pick from all available source words (not DOM)
    const matchingObjects = madlibWords.filter(w => w.type === type);
    if (matchingObjects.length === 0) return;

    const selectedWord = matchingObjects[Math.floor(Math.random() * matchingObjects.length)];

    // Find matching <p> element in DOM
    const selectedP = words.find(p => p.innerText === selectedWord.word);

    for (let p of words) {
        if (p === selectedP) {
            p.style.display = 'block';
            p.style.zIndex = 1000;

            const centerX = (area.clientWidth - p.offsetWidth * 2) / 2;
            const centerY = (area.clientHeight - p.offsetHeight * 2) / 2;

            p.style.transition = 'all 1s ease';
            p.style.left = `${centerX}px`;
            p.style.top = `${centerY}px`;
            p.style.transform = `rotate(0deg) scale(2)`;
        } else {
            p.style.display = 'none';
        }
    }
}


function resetWords() {
    displaying = false;

    const thoughtBubbleEl = document.getElementById("thought-bubble");
    const speechBubbleEl = document.getElementById("speech-bubble");

    speechBubbleEl.style.opacity = 0;
    thoughtBubbleEl.style.opacity = 1;

    for (let obj of displayLineup) {
        createFloatingWord(obj);
    }

    displayLineup = [];

    // Reset each word's style and reapply rotation from velocity
    for (let i = 0; i < words.length; i++) {
        const p = words[i];
        const vel = velocities[i];

        p.style.display = 'block';
        p.style.transition = '';
        p.style.zIndex = '';

        // Only apply rotation (no scale)
        p.style.transform = `rotate(${vel.angle}deg)`;
    }

    animateWords();
}
