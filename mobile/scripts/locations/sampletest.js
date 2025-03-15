const audio = new Audio('/mobile/assets/game/sylvan-game.mp3');
audio.preload = 'auto';
audio.load();


let btnEl1 = document.querySelector(".sample-btn1")
btnEl1.addEventListener("click", () => {
    audio.play()
    sendToServer({ type: "sample", val: "drum 1" });
})
let btnEl2 = document.querySelector(".sample-btn2")
btnEl2.addEventListener("click", () => {
    audio.pause()
    sendToServer({ type: "sample", val: "drum 2" })
})
let btnEl3 = document.querySelector(".sample-btn3")
btnEl3.addEventListener("click", () => { sendToServer({ type: "sample", val: "drum 3" }) })
let btnEl4 = document.querySelector(".sample-btn4")
btnEl4.addEventListener("click", () => { sendToServer({ type: "sample", val: "synth 1" }) })

