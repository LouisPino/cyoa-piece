
let zoneMap = {
    cave: "Cave",
    river: "River System"
}
let friendMap = {
    bats: "Bat friend",
    isopods: "Isopod cousin",
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


textsArr = [
    `Panicked, Jester Jaz drops the Extra Sharp Cocktail Fork and begins to grovel`,
    `Good move, buddy. You’ve got a bit of explaining to do, hurting our ${friendMap[friend]} from the ${zoneMap[checkHistory("river") ? "river" : "cave"]} and then abruptly barging into our neighborhood with a deadly weapon.`,
    `We gotta have a bit of a chat…`,
    `After a frank discussion and a bit more public shaming, Jeser Jaz is eventually forgiven.`,
    "The jester re-establishes contact with Wizard Pino! At this point, both of them are just a stone's throw away from treasure!",
    "Should they pursue the treasure in space? Or in the ocean?",
]


const threatBlackoutEl = document.getElementById("threatening-blackout")


function explainShrimp() {
    scene0()
    setTimeout(scene1, 500)
    setTimeout(scene2, 42000)
}


function scene0() {
    changeDialogueSprite(`shrimp/3`)
    toggleAnimation("weapon", "jaz")
    jumpChar("npc", 400, 0)
    changeSize("npc", 1, 1)
    jumpChar("jaz", 0, 50)
    changeSize("jaz", 1, 1)
    renderJaz()
}

function scene1() {
    slideBoxY("dialogue")
    setTimeout(nextLine, 500)
    setTimeout(() => {
        slideBoxY("none")
        const weaponEl = document.getElementById("jaz-weapon")
        setTimeout(() => {
            landCharBounce(weaponEl, 0, 375, 50)
            setTimeout(() => {
                weaponEl.remove()
                setTimeout(() => {
                    hopChar("jaz", 50, 200)
                    setTimeout(() => {
                        hopChar("jaz", 50, 200)
                    }, 201)
                    setTimeout(() => {
                        hopChar("jaz", 50, 200)
                    }, 402)
                    hopChar("jaz", 50, 200)
                    setTimeout(() => {
                        hopChar("jaz", 50, 200)
                    }, 601)
                    setTimeout(() => {
                        hopChar("jaz", 50, 200)
                    }, 802)
                }, 100)
            }, 1000)
        }, 1000)
    }, 8000)
    setTimeout(() => {
        slideBoxY("sprite")
        setTimeout(nextLine, 200)
    }, 12000)
    setTimeout(() => {
        clearText()
        setTimeout(nextLine, 200)
    }, 30000)

}

function scene2() {
    fadeBox("none")
    fadeChar("jaz", -2000, -2000, 1000, 10)
    fadeChar("npc", -2000, -2000, 1000, 10)
    threatBlackoutEl.style.opacity = 1
    setTimeout(() => {
        slideBoxY("dialogue")
        setTimeout(nextLine, 500)
    }, 1500)
    setTimeout(() => {
        clearText()
        setTimeout(nextLine, 500)
    }, 12000)
    setTimeout(() => {
        setTimeout(nextLine, 500)
    }, 22000)
    setTimeout(() => {
        slideBoxY("none")
    }, 30000)
}
explainShrimp()


