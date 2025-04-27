new QRCode(
    document.getElementById("qrcode1"),
    `http://${ipAddress}:8000`
);
new QRCode(
    document.getElementById("qrcode2"),
    `http://${ipAddress}:8000`
);

const pages = document.querySelectorAll("#intro-gif-page, #intro-qr-page, #intro-leaderboard");
// const timings = [45000, 60000, 30000];
const timings = [2000, 1000, 1000];

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

slideBoxY("none")
changeBg("/stills/default.png")
toggleAnimation("run", "duo")
renderPino("welcome")
renderJaz("welcome")
jumpChar("duo", 500, 475)

const fieldsPino = ["color", "hat", "robe"]
const fieldsJaz = ["color", "hat", "collar"]
function gifRandomizer() {
    setInterval(() => {
        const randomFieldPino = fieldsPino[Math.floor(Math.random() * fieldsPino.length)];
        const randomFieldJaz = fieldsJaz[Math.floor(Math.random() * fieldsJaz.length)];

        if (randomFieldPino === "color") {
            characters.p["color"] = characters.p["color"] === 'A' ? 'B' : 'A';
            characters.p["face"] = characters.p["face"] === 'A' ? 'B' : 'A';
            characters.p["faceline"] = characters.p["faceline"] === 'A' ? 'B' : 'A';
            characters.p["hands"] = characters.p["hands"] === 'A' ? 'B' : 'A';
        } else {
            characters.p[randomFieldPino] = characters.p[randomFieldPino] === 'A' ? 'B' : 'A';
        }
        if (randomFieldJaz === "color") {
            characters.j["color"] = characters.j["color"] === 'A' ? 'B' : 'A';
            characters.j["face"] = characters.j["face"] === 'A' ? 'B' : 'A';
            characters.j["faceline"] = characters.j["faceline"] === 'A' ? 'B' : 'A';
            characters.j["hands"] = characters.j["hands"] === 'A' ? 'B' : 'A';
        } else {
            characters.p[randomFieldJaz] = characters.p[randomFieldJaz] === 'A' ? 'B' : 'A';
        }
        toggleAnimation("run", "duo")
    }, 300)
}
gifRandomizer()