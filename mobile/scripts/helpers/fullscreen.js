

//TEST WITH JAZ, LEAVE IN FOR ANDROID USERS IF IT WORKS
// Select the element we want to make fullscreen.
// Often 'document.documentElement' or a specific element like a video container.
const elem = document.documentElement;
console.log("hit fullscreen js")
// // Cross-browser function for requesting fullscreen
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}


document.getElementById("fullscreenBtn").addEventListener("click", openFullscreen);
