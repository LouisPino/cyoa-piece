let mapSrc;
let mapBorder;

function renderMap() {
    if (document.getElementById("map")) {
        return
    }
    if (!mapSrc) {
        mapSrc = "/display/assets/map/map.PNG"; // default
    }

    let mapEl;
    let mapBorderEl = document.createElement("img");
    mapBorderEl.src = `/display/assets/map/${characters.p.device}.PNG`

    if (mapSrc.match(/\.(mp4|webm|ogg)$/i)) {
        mapEl = document.createElement("video");
        mapEl.src = mapSrc;
        mapEl.autoplay = true;
        mapEl.loop = true;
        mapEl.muted = true;
    } else {
        mapEl = document.createElement("img");
        mapEl.src = mapSrc;
    }

    mapEl.classList.add("complete-screen-img");
    mapEl.id = "map";
    mapBorderEl.classList.add("complete-screen-img");
    mapBorderEl.id = "map-border";
    document.body.append(mapEl);
    document.body.append(mapBorderEl);
}

function removeMap() {
    const mapEl = document.getElementById("map");
    const mapBorderEl = document.getElementById("map-border");
    mapEl?.remove();
    mapBorderEl?.remove();
}

function changeMapSrc(newSrc) {
    mapSrc = `/display/assets/map/${newSrc}`;
    convertMap(mapSrc);
}

function convertMap() {
    const existingMap = document.getElementById("map");
    if (existingMap) {
        removeMap();
        renderMap();
    }
}
function moveMap(x, y, time) {
    const mapEl = document.getElementById("map");
    const mapBorderEl = document.getElementById("map-border");

    if (!mapEl || !mapBorderEl) {
        console.warn("moveMap: map or border not found");
        return;
    }

    mapEl.style.transition = `left ${time}ms ease, top ${time}ms ease`;
    mapBorderEl.style.transition = `left ${time}ms ease, top ${time}ms ease`;

    mapEl.style.left = `${x}px`;
    mapEl.style.top = `${y}px`;
    mapBorderEl.style.left = `${x}px`;
    mapBorderEl.style.top = `${y}px`;
}


function fadeMap(opacity, time) {
    const mapEl = document.getElementById("map");
    const mapBorderEl = document.getElementById("map-border");

    if (!mapEl || !mapBorderEl) {
        console.warn("fadeMap: map or border not found");
        return;
    }

    mapEl.style.transition = `opacity ${time}ms ease`;
    mapBorderEl.style.transition = `opacity ${time}ms ease`;

    mapEl.style.opacity = `${opacity}`;
    mapBorderEl.style.opacity = `${opacity}`;
}
