let previousLocation = history.locationsVisited[history.locationsVisited.length - 2].name
let nameCall = ""
let newSprite = ""
let newSprite2 = ""
let npcBase = ""
const vsNpcBgEl = document.getElementById("vs-npc-bg");
const vsNpcNameEl = document.getElementById("vs-npc-name");
const vsNpcEl = document.getElementById("vs-npc");
const vsCharNameEl = document.getElementById("vs-char-name");
const vsCharBgEl = document.getElementById("vs-char-bg");
const vsLineEl = document.getElementById("vs-line");

if (checkHistory("rats")) {
    npcBase = "rat"
    nameCall = "scallywags!"
    newSprite = "rat/2"
    newSprite2 = "rat/3"
    vsNpcEl.src = "/display/assets/fight/vsNPCRats.PNG"
    vsNpcNameEl.src = "/display/assets/fight/vsNameRats.PNG"

} else if (checkHistory("bats")) {
    npcBase = "bat"
    nameCall = "scary bats!"
    newSprite = "bat/2"
    newSprite2 = "bat/3"
    vsNpcEl.src = "/display/assets/fight/vsNPCBat.PNG"
    vsNpcNameEl.src = "/display/assets/fight/vsNameBat.PNG"

} else if (checkHistory("isopods")) {
    npcBase = "isopod"
    nameCall = "icky bugs!"
    newSprite = "isopod/2"
    newSprite2 = "isopod/3"
    vsNpcEl.src = "/display/assets/fight/vsNPCIsopod.PNG"
    vsNpcNameEl.src = "/display/assets/fight/vsNameIsopod.PNG"

}

if (checkHistory("river")) {
    document.getElementById("boat-ctr-fight").style.visibility = "visible"
    locations.fight["voteVamp"] = "vampRiver.wav"
    vsNpcBgEl.src = "/display/assets/fight/vsNPCBgRiver.PNG"

} else {
    locations.fight["voteVamp"] = "vampCave.wav"
    vsNpcBgEl.src = "/display/assets/fight/vsNPCBgCave.PNG"

}


textsArr = [
    `Get ready to fight you ${nameCall}!`,
    "OUCH!!!!!",
    "Holy moly! What was that for? Do you do that regularly? Such rude behavior…I’m leaving.",
    "Oops….well… It looks like there was some loot left behind! Maybe we should grab something!",
    "Neat! What a cool souvenir. Ol’ Tilly is gonna get a kick out of this!",
    "According to our map, there is treasure to be found amidst the stars or deep in the ocean! The Grand Teleporter will bring us half way there……",
    "What about the other half?",
    "Let’s worry about that later. How about we go to [Opposite Weapon Location?]",
    "Ok!"
]



function fight() {
    flipChar("right", "duo")

    jumpChar("pino", 3650, 847)
    jumpChar("jaz", 6000, 847)
    changeDialogueSprite(newSprite)
    changeSize("duo", 1, 2)
    toggleAnimation("vs", "jaz")
    toggleAnimation("vs", "pino")
    jumpChar("npc", 550, 200)
    changeSize("npc", 1, .7)
    setTimeout(() => {
        jumpChar("pino", 365, 847)
        jumpChar("jaz", 600, 847)
    }, 200)

    if (checkHistory("river")) {
        changeBg("stills/riverFight.png")
    } else {
        changeBg("stills/caveFight.png")
    }
    renderPino()
    renderJaz()
    changeNPCSrc(`${npcBase}/full.png`)
    setTimeout(() => {
        setTimeout(() => {

            slideChar("pino", -3000, 847, 1000)
            slideChar("jaz", -3000, 847, 1000)
        }, 100)
        vsNpcBgEl.style.left = "2000px"
        vsNpcNameEl.style.left = "2000px"
        vsNpcEl.style.left = "2000px"
        vsLineEl.style.left = "2000px"
        vsCharBgEl.style.left = "-2000px"
        vsCharNameEl.style.left = "-2000px"
        setTimeout(() => {
            changeSize("duo", 1, 1)
            toggleAnimation("fightNeutral", "pino")
            toggleAnimation("fightNeutral", "jaz")
            setTimeout(() => {
                fadeChar("pino", -325, 300, 10, 200)
                fadeChar("jaz", -25, 300, 10, 200)
            }, 1000)
        }, 300)
    }, 3000)
    setTimeout(() => {
        slideBoxY("duo")
        setTimeout(nextLine, 750)
        setTimeout(() => {
            slideBoxY("none")
        }, 6000)
    }, 3000)
}

fight()