let previousLocation = history.locationsVisited[history.locationsVisited.length - 2].name
let newSprite = ""
let newSprite2 = ""
area = document.getElementById('word-area');


const batIsoArr = [
    `Hey buddy, is everything all right? Is something on your mind?`,
    "AHHH!",
    "Sorry…I didn’t see you there. I’m feeling terribly nervous and stressed out right now.",
    "You see, there’s a local creative writing festival that I would like to join. But I’m too afraid to submit a project by myself. In fact, I haven’t even finished it!",
    " It’s mostly done, but each section is missing something. I have such a dreadful time trying to figure out what words would give these sections more …VA-VA-VOOM!",
    "Do you know what I mean?",
    "Say… you strike me as a great writer! Can you help me finish this?",
    "Absolutely",
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
    scene0()
    // if (previousLocation === "rats") {
    //     ratPlaylist()
    // } else {
    //     batIsoPlaylist()
    // }

    madLib()
}

function batIsoPlaylist() {
    setTimeout(scene1, 1000)
    setTimeout(scene2, 16000)
    // chatPart2()
}

function ratPlaylist() {
    setTimeout(scene1, 1000)
    setTimeout(scene2rats, 16000)
    // chatPart2()
}



function scene0() {
    toggleAnimation("walk", "jaz")
    toggleAnimation("walk", "pino")
    changeNPCSrc(`${previousLocation.slice(0, -1)}/full.png`)

    jumpChar("npc", 550, 0)
    changeSize("npc", 1, .7)
    jumpChar("pino", -800, -50)
    jumpChar("jaz", -850, -50)
    changeSize("duo", 1, .8)
    if (history.locationsVisited[history.locationsVisited.length - 3].name === "river") {
        changeBg("animated/riverInterior.gif")
    } else {
        changeBg("animated/caveInterior.gif")
    }
    renderPino()
    renderJaz()

}

function scene1() {
    slideChar("pino", 250, -50, 5000)
    slideChar("jaz", 200, -50, 5000)
    setTimeout(() => {
        toggleAnimation("side", "duo")
        slideBoxY("duo")
        setTimeout(nextLine, 500)
        setTimeout(() => {
            fadeBox("none")
        }, 8000)
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
        }, 51000)
    }, 500)
}

function chatPart2() {
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

function chatPart2rats() {
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

function setMadlibStage() {
    document.getElementById("black-overlay").style.opacity = 1;
    setTimeout(() => {
        toggleAnimation("madlib", "duo")
        changeNPCSrc(`${baseSprite}/madlib.gif`)
        changeSize("npc", 1, 1)
        jumpChar("npc", 0, 0)
        changeSize("duo", 1, 1.7)
        writingGifEl.style.visibility = "visible"
        thoughtBubbleEl.style.visibility = "visible"
    }, 3000)
    setTimeout(() => {
        jumpChar("pino", 400, 750)
        jumpChar("jaz", 650, 750)
        document.getElementById("black-overlay").style.opacity = 0;
    }, 3100)
}


// Start animation loop
animateWords();



createFloatingWord("hello");
createFloatingWord("world");
createFloatingWord("adventure");


chat()



