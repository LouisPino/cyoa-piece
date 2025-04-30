// Optimized Floating Words Animation

const maxWords = 30;
const words = []; // active DOM elements
const velocities = []; // animation velocities
let animationId = null;
let area;
let displayLineup = [];
let displaying = false;
function createFloatingWord(word) {
    if (!area) return;

    if (displaying) {
        displayLineup.push(word);
        return;
    }

    if (madlibbing === false) {
        displayLineup.push(word);
        return;
    }

    let p;
    if (words.length >= maxWords) {
        p = words.shift();
        velocities.shift();
    } else {
        p = document.createElement('p');
        p.className = 'floating-word';
        p.style.position = 'absolute';
        area.appendChild(p);
    }

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

    if (madlibIdx === wordTypes.length) {
        movePastMadlib()
        return
    }

    setTimeout(resetWords, 3000)
    madlibIdx++


    displaying = true;

    const thoughtBubbleEl = document.getElementById("thought-bubble");
    const speechBubbleEl = document.getElementById("speech-bubble");

    thoughtBubbleEl.style.opacity = 0;
    speechBubbleEl.style.opacity = 1;

    const matchingObjects = madlibWords.filter(w => w.type === type);
    if (matchingObjects.length === 0) return;

    const selectedWord = matchingObjects[Math.floor(Math.random() * matchingObjects.length)];
    const selectedP = words.find(p => p.innerText === selectedWord.word);

    for (let p of words) {
        if (p === selectedP) {
            const centerX = (area.clientWidth - p.offsetWidth * 2) / 2;
            const centerY = (area.clientHeight - p.offsetHeight * 2) / 2;

            p.style.transition = 'transform 1s ease';
            p.style.zIndex = 1000;
            p.style.transform = `translate(${centerX}px, ${centerY}px) rotate(0deg) scale(5)`;
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
    if (history.locationsVisited[history.locationsVisited.length - 2].name === "rats") {
        window.chatPart2rats()
    } else {
        window.chatPart2()
    }
    madlibbing = false
}




function madlibTimeChange(time) {
    madlibbing = true
    if (document.getElementById("madlib-timer")) {
        document.getElementById("madlib-timer").innerText = time === 0 ? time : ""
    }
}