// Optimized Floating Words Animation
const wordHistory = []; // stores all words ever added

const maxWords = 30;
const words = []; // active DOM elements
const velocities = []; // animation velocities
let animationId = null;
let area;
let displayLineup = [];
let displaying = false;






function createFloatingWord(word) {
    if (!area) return;

    wordHistory.push(word); // Save it to history always

    if (displaying || madlibbing === false) {
        displayLineup.push(word);
        return;
    }

    // Maintain only 30 visual words
    let p;
    if (words.length >= maxWords) {
        // Remove oldest visual word
        const oldP = words.shift();
        velocities.shift();
        area.removeChild(oldP);
    }

    p = document.createElement('p');
    p.className = 'floating-word';
    p.style.position = 'absolute';
    area.appendChild(p);

    p.innerText = word.word;
    p.dataset.type = word.type;

    const posX = Math.random() * (area.clientWidth - 100);
    const posY = Math.random() * (area.clientHeight - 50);
    p.style.transform = `translate(${posX}px, ${posY}px) rotate(0deg)`;

    const velocity = {
        x: (Math.random() * 0.5 + 0.1) * (Math.random() < 0.5 ? 1 : -1),
        y: (Math.random() * 0.5 + 0.1) * (Math.random() < 0.5 ? 1 : -1),
        angle: 0,
        rotationSpeed: (Math.random() * 0.2 + 0.05) * (Math.random() < 0.5 ? 1 : -1)
    };

    words.push(p);
    velocities.push(velocity);
}


function animateWords() {
    const width = area.clientWidth;
    const height = area.clientHeight;

    for (let i = 0; i < words.length; i++) {
        const p = words[i];
        const vel = velocities[i];

        const currentTransform = p.style.transform.match(/translate\((.*?)px, (.*?)px\)/);
        let x = parseFloat(currentTransform?.[1] || 0);
        let y = parseFloat(currentTransform?.[2] || 0);

        x += vel.x;
        y += vel.y;

        if (x <= 0 || x >= width - p.offsetWidth) {
            vel.x *= -1;
            x = Math.max(0, Math.min(width - p.offsetWidth, x));
        }
        if (y <= 0 || y >= height - p.offsetHeight) {
            vel.y *= -1;
            y = Math.max(0, Math.min(height - p.offsetHeight, y));
        }

        vel.angle += vel.rotationSpeed;
        p.style.transform = `translate(${x}px, ${y}px) rotate(${vel.angle}deg)`;
    }
    animationId = requestAnimationFrame(animateWords);
}

function displayWord(type) {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }

    if (madlibIdx === wordOrder.length) {
        movePastMadlib();
        return;
    }

    setTimeout(resetWords, 3000);
    madlibIdx++;
    displaying = true;

    const thoughtBubbleEl = document.getElementById("thought-bubble");
    const speechBubbleEl = document.getElementById("speech-bubble");

    thoughtBubbleEl.style.opacity = 0;
    speechBubbleEl.style.opacity = 1;

    // Match from full history
    const matchingObjects = wordHistory.filter(w => w.type === type);
    if (matchingObjects.length === 0) return;

    const selectedWord = matchingObjects[Math.floor(Math.random() * matchingObjects.length)];

    // Check if it’s already on screen
    let selectedP = words.find(p => p.innerText === selectedWord.word);

    if (!selectedP) {
        // Create and track it like any other word
        selectedP = document.createElement('p');
        selectedP.className = 'floating-word';
        selectedP.style.position = 'absolute';
        selectedP.innerText = selectedWord.word;
        selectedP.dataset.type = selectedWord.type;

        const posX = Math.random() * (area.clientWidth - 100);
        const posY = Math.random() * (area.clientHeight - 50);
        selectedP.style.transform = `translate(${posX}px, ${posY}px) rotate(0deg)`;

        area.appendChild(selectedP);

        // Add to tracking arrays so it behaves like any other
        words.push(selectedP);
        velocities.push({
            x: (Math.random() * 0.5 + 0.1) * (Math.random() < 0.5 ? 1 : -1),
            y: (Math.random() * 0.5 + 0.1) * (Math.random() < 0.5 ? 1 : -1),
            angle: 0,
            rotationSpeed: (Math.random() * 0.2 + 0.05) * (Math.random() < 0.5 ? 1 : -1)
        });

        // Maintain max word count
        if (words.length > maxWords) {
            const oldP = words.shift();
            velocities.shift();
            area.removeChild(oldP);
        }
    }

    for (let p of words) {
        if (p !== selectedP) {
            p.style.display = 'none';
        }
    }

    const centerX = (area.clientWidth - selectedP.offsetWidth * 2) / 2;
    const centerY = (area.clientHeight - selectedP.offsetHeight * 2) / 2;

    selectedP.style.transition = 'transform 1s ease';
    selectedP.style.zIndex = 1000;
    selectedP.style.transform = `translate(${centerX}px, ${centerY}px) rotate(0deg) scale(5)`;
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

    for (let i = 0; i < words.length; i++) {
        const p = words[i];
        const vel = velocities[i];
        p.style.display = 'block';
        p.style.transition = '';
        p.style.zIndex = '';
        const currentTransform = p.style.transform.match(/translate\((.*?)px, (.*?)px\)/);
        let x = parseFloat(currentTransform?.[1] || 0);
        let y = parseFloat(currentTransform?.[2] || 0);
        p.style.transform = `translate(${x}px, ${y}px) rotate(${vel.angle}deg)`;
    }

    animateWords();
}



function movePastMadlib() {
    const thoughtBubbleEl = document.getElementById("thought-bubble");
    const speechBubbleEl = document.getElementById("speech-bubble");
    const writingGifEl = document.getElementById("writing-gif");
    const wordAreaEl = document.getElementById("word-area");
    const timerEl = document.getElementById("madlib-timer");
    thoughtBubbleEl.remove()
    speechBubbleEl.remove()
    writingGifEl.remove()
    wordAreaEl.remove()
    timerEl.remove()
    if (checkHistory("rats")) {
        window.chatPart2rats()
    } else {
        window.chatPart2()
    }
    madlibbing = false
}




function madlibTimeChange(time) {
    madlibbing = true
    const timerEl = document.getElementById("madlib-timer")
    if (timerEl) {
        timerEl.innerHTML = time != 0 ? time : ""
    }
}

function madlibClearBoard() {
    const wordAreaEl = document.getElementById("word-area");

    // Remove all floating word elements
    wordAreaEl.innerHTML = "";

    // Clear DOM tracking arrays
    words.length = 0;
    velocities.length = 0;

    // Optionally, also clear displayLineup if needed
    displayLineup.length = 0;
}
