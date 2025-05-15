
let zoneMap = {
    cave: "Cave",
    river: "River System"
}
let friendMap = {
    bats: "Bat friend",
    isopods: "Isopod friend",
    rats: "Pie-Rat buddies"
}
let loserMap = {
    bats: "the innocent Bat",
    isopods: "the harmless Isopod",
    rats: "the gruff but gentle Pie-Rats"
}

let friend
if (checkHistory("rats")) {
    friend = "rats"

} else if (checkHistory("isopods")) {
    friend = "isopods"
} else {
    friend = "bats"
}




const threatBlackoutEl = document.getElementById("threatening-blackout")
const threatTextEl = document.getElementById("threatening-text")



textsArr = [
    `So you wanna fight, eh?`,
    "You REALLY wanna do this??",
    `We know how you bullied our ${friendMap[friend]} from the ${zoneMap[checkHistory("river") ? "river" : "cave"]}. You should be totally ashamed of yourself. Do you really think you can go around treating others like that? `,
    "Your bullying days are over! Unless you want your friend to perish…",
    "Still wanna fight?",
    `Wizard Pino, feeling deeply ashamed and embarrassed, apologizes to the Cloud Folk and ${loserMap[friend]}.`,
    "Following a stern lecture and a little bit more public shaming, Wizard Pino is eventually forgiven.",
    "The Cloud Folk lend Wizard Pino a communication device that re-establishes contact with Jester Jaz! ",
    "According to the map, treasure will be found at the next and final stop! First thing to do is to get our adventurers reunited.",
    "Should they pursue the treasure in space? Or in the ocean?",
]

function fightClouds() {
    scene0()
    setTimeout(scene1, 500)
    setTimeout(scene2, 30000)
    setTimeout(scene3, 49000)
    setTimeout(scene4, 60000)
}


function scene0() {
    flipChar("right", "duo")

    changeDialogueSprite(`cloud/1`)
    toggleAnimation("weapon", "pino")
    jumpChar("npc", 800, 0)
    changeSize("npc", 1, 1)
    jumpChar("pino", 0, 50)
    changeSize("pino", 1, 1)
    renderPino()
}


function scene1() {
    slideBoxY("sprite")
    setTimeout(nextLine, 500)
    setTimeout(() => {
        clearText()
        changeDialogueSprite(`cloud/2`)
        hopChar("npc", 200, 500)
        setTimeout(() => {
            hopChar("npc", 200, 500)
        }, 501)
        setTimeout(() => {
            hopChar("npc", 200, 500)
        }, 1002)
        setTimeout(nextLine, 200)
    }, 6000)
    setTimeout(() => {
        clearText()
        setTimeout(nextLine, 200)
    }, 13000)

}

function scene2() {
    clearText()
    setTimeout(nextLine, 500)
    setTimeout(() => {
        fadeBox("none")
        fadeChar("pino", -2000, -2000, 1000, 10)
        fadeChar("npc", -2000, -2000, 1000, 10)
        sendToServer({ type: "control", val: "fade-out" })

        threatBlackoutEl.style.opacity = 1
        setTimeout(() => {
            threatTextEl.style.left = 0
        }, 2000)
        setTimeout(() => { sendToServer({ type: "fx", val: "goat.mp3" }) }, 3200)
    }, 9000)
}

function scene3() {
    threatTextEl.style.left = "1920px"
    setTimeout(() => {
        slideBoxY("sprite")
        changeDialogueSprite(`cloud/3`)
        sendToServer({ type: "fx", val: "woosh.mp3" })

        setTimeout(nextLine, 500)
    }, 3000)
    setTimeout(() => {
        fadeBox("none")
    }, 9000)
}

function scene4() {
    toggleAnimation("froggy", "pino")
    changeSize("pino", 1, 1.2)
    setTimeout(() => {
        fadeChar("pino", 572, 41, 100, 5000)
    }, 100)
    setTimeout(() => {
        slideBoxY(`dialogue`)
        setTimeout(nextLine, 500)
    }, 8000)
    setTimeout(() => {
        clearText()
        setTimeout(nextLine, 500)
        sendToServer({ type: "control", val: "fade-in" })

    }, 20000)
    setTimeout(() => {
        setTimeout(nextLine, 500)
    }, 27000)
    setTimeout(() => {
        clearText()
        setTimeout(nextLine, 500)
    }, 38000)
    setTimeout(() => {
        setTimeout(nextLine, 500)
    }, 48000)
    setTimeout(() => {
        setTimeout(() => {
            slideBoxY("none")
        }, 500)
    }, 58000)
}

fightClouds()


