let previousLocation = history.locationsVisited[history.locationsVisited.length - 2].name
let nameCall = ""
let newSprite = ""
let newSprite2 = ""
let npcBase = ""


if (checkHistory("rats")) {
    npcBase = "rat"
    nameCall = "scallywags!"
    newSprite = "rat/2"
    newSprite2 = "rat/3"
} else if (checkHistory("bats")) {
    npcBase = "bat"
    nameCall = "scary bats!"
    newSprite = "bat/2"
    newSprite2 = "bat/3"
} else if (checkHistory("isopods")) {
    npcBase = "isopod"
    nameCall = "icky bugs!"
    newSprite = "isopod/2"
    newSprite2 = "isopod/3"
}

if (checkHistory("river")) {
    document.getElementById("boat-ctr-fight").style.visibility = "visible"
    locations.fight["voteVamp"] = "vampRiver.wav"

} else {
    locations.fight["voteVamp"] = "vampCave.wav"

}


textsArr = [
    `Get ready to fight you ${nameCall}`,
    "OUCH!!!!!",
    "Holy moly! What was that for? Do you do that regularly? Such rude behavior…I’m leaving",
    "Oops….well… It looks like there was some loot left behind! Maybe we should grab something",
    "Neat! What a cool souvenir. Ol’ Tilly is gonna get a kick out of this!",
    "According to our map, there is treasure to be found amidst the stars or deep in the ocean! The Grand Teleporter will bring us half way there……..",
    "What about the other half?",
    "Let’s worry about that later. How about we go to [Opposite Weapon Location?]",
    "Ok!"
]



function fight() {
    changeDialogueSprite(newSprite)
    toggleAnimation("fightNeutral", "jaz")
    toggleAnimation("fightNeutral", "pino")
    jumpChar("npc", 550, 200)
    changeSize("npc", 1, .7)
    jumpChar("pino", -325, 300)
    jumpChar("jaz", -25, 300)
    changeSize("duo", 1, 1)
    if (checkHistory("river")) {
        changeBg("stills/riverFight.png")
    } else {
        changeBg("stills/caveFight.png")
    }
    renderPino()
    renderJaz()
    changeNPCSrc(`${npcBase}/full.png`)
    setTimeout(() => {
        slideBoxY("duo")
        setTimeout(nextLine, 750)
        setTimeout(() => {
            slideBoxY("none")
        }, 4000)
    }, 1000)
}

fight()