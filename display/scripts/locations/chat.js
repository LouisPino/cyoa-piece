let previousLocation = history.locationsVisited[history.locationsVisited.length - 2].name
let newSprite = ""
let newSprite2 = ""
area = document.getElementById('word-area');
const boatRockerEl = document.getElementById("boat-rocker")
const boatCtrEl = document.getElementById("boat-ctr")
let npcBase = ""
if (checkHistory("rats")) {
    npcBase = "rat"
} else if (checkHistory("bats")) {
    npcBase = "bat"
} else if (checkHistory("isopods")) {
    npcBase = "isopod"
}

if (checkHistory("river")) {
    changeBg("animated/riverInterior.gif")
    document.getElementById("boat-ctr-chat").style.visibility = "visible"
    locations.isopods["voteVamp"] = "vampRiver.wav"


} else {
    changeBg("animated/caveInterior.gif")
    locations.isopods["voteVamp"] = "vampCave.wav"

}


const batIsoArr = [
    `Hey buddy, is everything all right? Is something on your mind?`,
    "AHHH!",
    "Sorry…I didn’t see you there. I’m feeling terribly nervous and stressed out right now.",
    "You see, there’s a local creative writing festival that I would like to join. But I’m too afraid to submit a project by myself. In fact, I haven’t even finished it!",
    " It’s mostly done, but each section is missing something. I have such a dreadful time trying to figure out what words would give these sections more …VA-VA-VOOM!",
    "Do you know what I mean?",
    "Say… you strike me as a great writer! Can you help me finish this?",
    // "Absolutely",
    " *gasp* This is it! The glorious final product I will use to enter the festival! Woohoo!",
    "To thank you for your help, let me give you some advice on the next leg of your travels...",
    "The GRAND TELEPORTER that you’re about to use is a little bit broken. It might separate the two of you if you go at the same time. ",
    "To get there successfully, make sure you jump in one at a time. Good luck!",
    "What a lovely experience. ",
    "According to our map, there is treasure to be found amidst the stars or deep in the ocean! The Grand Teleporter will bring us half way there……..",
    "What about the remaining half?",
    "Let’s worry about that later. How about we decide where we want to go?"
]

const ratsArr = [
    `Hey buddy, is everything all right? Is something on your mind?`,
    "AHHH!",
    "Sorry…We didn’t see you there. We’re feeling terribly nervous and stressed out right now.",
    "You see, there’s a local creative writing festival that we would like to join. But we are so indecisive that we haven’t been able to finish it!",
    "It’s mostly done, but each section is missing something. As mentioned, neither of us are very good at making decisions. That’s why there are so many words we need to fill in.",
    "Say… you strike us as someone who knows a lot of words. And as someone who can make decisions! Would you be able to help us finish this?",
    " *gasp* This is it! The glorious final product we will use to enter the festival! Thank you so much for your help! ",
    "To thank you for your help, let us give you some advice on the next leg of your travels...",
    "The GRAND TELEPORTER that you’re about to use is a little bit broken. It might separate the two of you if you go at the same time. ",
    "To get there successfully, make sure you jump in one at a time. Good luck!",
    "What a lovely experience. ",
    "According to our map, there is treasure to be found amidst the stars or deep in the ocean! The Grand Teleporter will bring us half way there……..",
    "What about the remaining half?",
    "Let’s worry about that later. How about we decide where we want to go?"
]

textsArr = previousLocation === "rats" ? ratsArr : batIsoArr


let baseSprite = previousLocation.slice(0, -1)
function chat() {
    if (previousLocation === "rats") {
        ratPlaylist()
    } else {
        batIsoPlaylist()
    }


    // madLib()
    //automatically goes to madlib then to chatPart2
}

function batIsoPlaylist() {
    scene0()
    setTimeout(scene1, 1000)
    setTimeout(scene2, 8000)
}

function ratPlaylist() {
    scene0()
    setTimeout(scene1, 1000)
    setTimeout(scene2rats, 8000)
}



function scene0() {
    toggleAnimation("side", "jaz")
    toggleAnimation("side", "pino")
    changeNPCSrc(`${previousLocation.slice(0, -1)}/full.png`)
    jumpChar("npc", 550, 0)
    changeSize("npc", 1, .7)
    jumpChar("pino", 250, -50)
    jumpChar("jaz", 200, -50)
    changeSize("duo", 1, .8)
    renderPino()
    renderJaz()
}


function scene1() {
    toggleAnimation("side", "duo")
    slideBoxY("duo")
    setTimeout(nextLine, 500)
    setTimeout(() => {
        fadeBox("none")
    }, 5000)
}
function scene2() {
    changeDialogueSprite(`${baseSprite}/2`)
    flipChar("left", "npc")
    setTimeout(() => {
        flipChar("right", "npc")
    }, 300)
    hopChar("npc", 200, 100)
    setTimeout(() => {
        toggleBox("sprite")
        sendToServer({ type: "fx", val: "wilhelm.wav" })
        setTimeout(nextLine, 500)
        setTimeout(() => {
            clearText()
            changeDialogueSprite(`${baseSprite}/4`)
            setTimeout(nextLine, 200)
        }, 3500)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 12000)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 27000)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 42000)
        setTimeout(() => {
            clearText()
            changeDialogueSprite(`${baseSprite}/5`)
            setTimeout(nextLine, 200)
        }, 46000)
        setTimeout(() => {
            fadeBox("none")
            madLib()
        }, 54000)
    }, 500)
}

window.chatPart2 = function () {
    scene0()
    toggleAnimation("side", "duo")
    jumpChar("pino", 250, -50)
    jumpChar("jaz", 200, -50)
    changeDialogueSprite(`${baseSprite}/6`)
    hopChar("npc", 200, 100)
    setTimeout((
        hopChar("npc", 200, 100)
    ), 500)
    setTimeout((
        hopChar("npc", 200, 100)
    ), 1000)
    setTimeout((
        hopChar("npc", 200, 100)
    ), 1500)
    setTimeout(() => {
        toggleBox("sprite")
        setTimeout(nextLine, 500)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 10000)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 20000)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
            setTimeout(() => {
                fadeBox("none")
            }, 7000)
        }, 35000)

    }, 500)
}


// rats

function scene2rats() {
    changeDialogueSprite(`${baseSprite}/2`)
    flipChar("left", "npc")
    setTimeout(() => {
        flipChar("right", "npc")
    }, 300)
    hopChar("npc", 200, 100)
    setTimeout(() => {
        toggleBox("sprite")
        setTimeout(nextLine, 500)
        setTimeout(() => {
            clearText()
            changeDialogueSprite(`${baseSprite}/4`)
            setTimeout(nextLine, 200)
        }, 3500)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 12000)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 27000)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 42000)
        setTimeout(() => {
            fadeBox("none")
            madLib()
        }, 53000)
    }, 500)
}

window.chatPart2rats = function () {
    scene0()
    toggleAnimation("side", "duo")
    jumpChar("pino", 250, -50)
    jumpChar("jaz", 200, -50)
    changeDialogueSprite(`${baseSprite}/6`)
    hopChar("npc", 200, 100)
    setTimeout((
        hopChar("npc", 200, 100)
    ), 500)
    setTimeout((
        hopChar("npc", 200, 100)
    ), 1000)
    setTimeout((
        hopChar("npc", 200, 100)
    ), 1500)
    setTimeout(() => {
        toggleBox("sprite")
        setTimeout(nextLine, 500)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 10000)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
        }, 20000)
        setTimeout(() => {
            clearText()
            setTimeout(nextLine, 200)
            setTimeout(() => {
                fadeBox("none")
            }, 7000)
        }, 35000)
    }, 500)
}




function madLib() {
    sendToServer({ type: "madlib", msg: "start" })
    setMadlibStage()
}

const writingGifEl = document.getElementById("writing-gif")
const thoughtBubbleEl = document.getElementById("thought-bubble")
const speechBubbleEl = document.getElementById("speech-bubble")

const votePromptHtml = `<img class="complete-screen-img" id="vote-prompt" src="/display/assets/vote/VotePrompt.png" />`
const votePromptEl = document.createElement("img")
votePromptEl.classList.add("complete-screen-img")
votePromptEl.id = "vote-prompt2"
votePromptEl.src = "/display/assets/vote/VotePrompt.png"
votePromptEl.style.zIndex = 3000


function setMadlibStage() {
    document.getElementById("black-overlay").style.opacity = 1;
    setTimeout(() => {
        toggleAnimation("madlib", "duo")
        changeNPCSrc(`${baseSprite}/madlib.gif`)
        changeSize("npc", 1, 1)
        jumpChar("npc", 0, 0)
        changeSize("duo", 1, 1.7)
        sendToServer({ type: "fx", val: "jeopardy.mp3" })
        setTimeout(() => { sendToServer({ type: "fx", val: "jeopardy.mp3" }) }, 30000)

        writingGifEl.style.visibility = "visible"
        thoughtBubbleEl.style.opacity = 1
        document.body.appendChild(votePromptEl)
        setTimeout(() => {
            votePromptEl.style.visibility = "hidden"
        }, 700)
        setTimeout(() => {
            votePromptEl.style.visibility = "visible"
        }, 1000)
        setTimeout(() => {
            votePromptEl.style.visibility = "hidden"
        }, 1700)
        setTimeout(() => {
            votePromptEl.style.visibility = "visible"
        }, 2000)
        setTimeout(() => {
            votePromptEl.style.visibility = "hidden"
        }, 2700)
        setTimeout(() => {
            votePromptEl.style.visibility = "visible"
        }, 3000)
        setTimeout(() => {
            votePromptEl.style.visibility = "hidden"
        }, 3700)
        setTimeout(() => {
            votePromptEl.style.visibility = "visible"
        }, 4000)
        setTimeout(() => {
            votePromptEl.style.visibility = "hidden"
        }, 4700)
        setTimeout(() => {
            votePromptEl.style.visibility = "visible"
        }, 5000)
        setTimeout(() => {
            votePromptEl.style.visibility = "hidden"
        }, 5700)


        for (word of madlibWords) {
            createFloatingWord(word)
        }
    }, 3000)
    setTimeout(() => {
        jumpChar("pino", 400, 750)
        jumpChar("jaz", 650, 750)
        document.getElementById("madlib-timer").style.visibility = "visible"
        document.getElementById("black-overlay").style.opacity = 0;
    }, 3100)
}


// Start animation loop
animateWords();

chat()


