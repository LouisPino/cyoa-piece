new QRCode(
    document.getElementById("qrcode1"),
    `http://${ipAddress}:8000`
);
new QRCode(
    document.getElementById("qrcode2"),
    `http://${ipAddress}:8000`
);

const pages = document.querySelectorAll("#intro-gif-page, #intro-qr-page, #intro-leaderboard");
const introGifEl = document.getElementById("intro-gif")
// const timings = [45000, 60000, 30000];
const timings = [3000, 3000, 3000];

let pageCounter = 0;
let gifCounter = 0;
const gifs = ["Cave", "Cloud", "Forest", "Ocean", "River", "Rock", "Shore", "Space", "Waterfall"]

function switchPage() {
    const current = pages[pageCounter % pages.length];
    const next = pages[(pageCounter + 1) % pages.length];
    // Transition handling
    current.classList.remove("active");
    current.classList.remove("slide-in");
    current.classList.add("slide-out");

    next.classList.remove("slide-out");
    next.classList.add("slide-in");
    next.classList.add("active");
    pageCounter++;
    if (pageCounter % 3 === 2) {
        introGifEl.src = `/display/assets/welcome/LocationGifs/${gifs[gifCounter % gifs.length]}.gif`
        gifCounter++;
    }

    // Set up the next switch based on the next page's timing
    setTimeout(switchPage, timings[pageCounter % pages.length]);
}

// Ensure the first page is visible
pages[0].classList.add("active");

// Start the carousel with the first timeout
setTimeout(switchPage, timings[0]);

slideBoxY("none")
changeBg("/stills/default.png")
toggleAnimation("run", "duo")
renderPino("welcome")
renderJaz("welcome")
jumpChar("duo", 450, 425)




gifRandomizer()