new QRCode(
    document.getElementById("qrcode1"),
    `http://${ipAddress}:8000`
);
new QRCode(
    document.getElementById("qrcode2"),
    `http://${ipAddress}:8000`
);
const pages = document.querySelectorAll("#intro-gif, #intro-qr-page, #intro-leaderboard");

let pageCounter = 0;
const loopTime = 4000; // Time per slide in ms

function switchPage() {
    const current = pages[pageCounter % pages.length];
    const next = pages[(pageCounter + 1) % pages.length];

    // Set active z-index for proper stacking
    current.classList.remove("active");
    current.classList.remove("slide-in");
    current.classList.add("slide-out");

    next.classList.remove("slide-out");
    next.classList.add("slide-in");
    next.classList.add("active");

    pageCounter++;
}

// Ensure the first image is on top
pages[0].classList.add("active");

// Start the carousel loop
setInterval(switchPage, loopTime);
