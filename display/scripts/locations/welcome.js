new QRCode(
    document.getElementById("qrcode1"),
    `http://${ipAddress}:8000`
);
new QRCode(
    document.getElementById("qrcode2"),
    `http://${ipAddress}:8000`
);

const pages = document.querySelectorAll("#intro-gif, #intro-qr-page, #intro-leaderboard");
const timings = [45000, 60000, 30000];

let pageCounter = 0;

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

    // Set up the next switch based on the next page's timing
    setTimeout(switchPage, timings[pageCounter % pages.length]);
}

// Ensure the first page is visible
pages[0].classList.add("active");

// Start the carousel with the first timeout
setTimeout(switchPage, timings[0]);
