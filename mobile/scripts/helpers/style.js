/////////////////////Style
function adjustHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
function adjustWidth() {
    const vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
}

window.addEventListener('resize', adjustHeight);
adjustHeight(); // Initial adjustment

window.addEventListener('resize', adjustWidth);
adjustWidth(); // Initial adjustment