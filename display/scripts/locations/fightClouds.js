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
    rats: "the gruff but kind Pie-Rats"
}

let friend
if (checkHistory("rats")) {
    friend = "rats"

} else if (checkHistory("isopods")) {
    friend = "isopods"
} else {
    friend = "bats"
}


textsArr = [
    `So you wanna fight, eh?`,
    "You REALLY wanna do this??",
    `We know how you bullied our ${friendMap[friend]} from the ${zoneMap[checkHistory("river") ? "river" : "cave"]}. You should be totally ashamed of yourself. Do you really think you can go around treating others like that? `,
    "Your bullying days are over. Unless you want your friend to perish…",
    "Still wanna fight?",
    `Wizard Pino, feeling deeply ashamed and embarrassed, apologizes to the Cloud Folk and ${loserMap[friend]}.`,
    "Following a stern lecture and a little bit more public shaming, Wizard Pino is eventually forgiven.",
    "The Cloud Folk lend Wizard Pino a communication device  re-establishes contact with Jester Jaz! ",
    "According to the map, treasure will be found at the next and final stop! First thing to do is to get our adventurers reunited.",
    "Should they pursue the treasure in space? Or in the ocean?",

]

const threatBlackoutEl = document.getElementById("threatening-blackout")
const threatTextEl = document.getElementById("threatening-text")




function fightClouds() {
    scene0()
    setTimeout(scene1, 500)
    setTimeout(scene2, 28000)
    setTimeout(scene3, 40000)

}


function scene0() {
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
        setTimeout(nextLine, 200)
    }, 4000)
    setTimeout(() => {
        clearText()
        setTimeout(nextLine, 200)
    }, 10000)

}

function scene2() {
    clearText()
    setTimeout(nextLine, 500)
    setTimeout(() => {
        fadeBox("none")
        threatBlackoutEl.style.opacity = 1
        setTimeout(() => { threatTextEl.style.left = 0 }, 1000)
        setTimeout(() => { sendToServer({ type: "fx", val: "wilhelm" }) }, 1500)
    }, 6500)
}

function scene3() {
    threatTextEl.style.left = "1920px"
    setTimeout(() => {
        fadeBox("sprite")
        changeDialogueSprite(`cloud/3`)
        setTimeout(nextLine, 500)
    }, 500)
}

fightClouds()


