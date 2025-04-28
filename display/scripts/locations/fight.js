let previousLocation = history.locationsVisited[history.locationsVisited.length - 2].name
let nameCall = ""
let newSprite = ""
let newSprite2 = ""
if (previousLocation === "rats") {
    nameCall = "scallywags!"
    newSprite = "rat/bussin"
    newSprite2 = "rat/cry"
} else if (previousLocation === "bats") {
    nameCall = "scary bats!"
    newSprite = "bat/bussin"
    newSprite2 = "bat/cry"
} else if (previousLocation === "isopods") {
    newSprite = "isopod/senpai"
    nameCall = "icky bugs!"
    newSprite2 = "isopod/cry"
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
    changeSwipePrompt(swipeType)
    changeDialogueSprite(newSprite)
    toggleAnimation("fightNeutral", "jaz")
    toggleAnimation("fightNeutral", "pino")
    jumpChar("npc", 550, 200)
    changeSize("npc", 1, .7)
    jumpChar("pino", -200, 300)
    jumpChar("jaz", 50, 300)
    changeSize("duo", 1, 1)
    if (history.locationsVisited[history.locationsVisited.length - 2].name === "rats") {
        changeBg("animated/riverInterior.gif")
    } else {
        changeBg("animated/caveInterior.gif")
    }
    renderPino()
    renderJaz()
    changeNPCSrc(`${history.locationsVisited[history.locationsVisited.length - 2].name.slice(0, -1)}/full.png`)
    setTimeout(() => {
        slideBoxY("duo")
        setTimeout(nextLine, 750)
        setTimeout(() => {
            slideBoxY("none")
        }, 4000)
    }, 1000)
}

fight()