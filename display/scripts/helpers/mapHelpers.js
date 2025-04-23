let mapSrc;
let mapBorder;

function renderMap(border) {
    mapBorder = border
    if (document.getElementById("map")) {
        return
    }
    if (!mapSrc) {
        mapSrc = "/display/assets/map/map.PNG"; // default
    }

    let mapEl;
    let mapBorderEl = document.createElement("img");
    mapBorderEl.src = `/display/assets/map/${border}.PNG`

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
        renderMap(mapBorder);
    }
}

function moveMap(x, y) {
    const mapEl = document.getElementById("map")
    const mapBorderEl = document.getElementById("map-border")
    mapEl.style.left = `${x}px`;
    mapEl.style.top = `${y}px`;
    mapBorderEl.style.left = `${x}px`;
    mapBorderEl.style.top = `${y}px`;
}

function fadeMap(opacity) {
    const mapEl = document.getElementById("map")
    const mapBorderEl = document.getElementById("map-border")
    mapEl.style.opacity = `${opacity}`
    mapBorderEl.style.opacity = `${opacity}`
}