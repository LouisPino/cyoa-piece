
textsArr = [
    "What a lovely experience!",
    "According to our map, there is treasure to be found amidst the stars or deep in the ocean! The Grand Teleporter will bring us half way there……",
    "What about the remaining half?",
    "Let’s worry about that later. How about we decide where we want to go?"
]


function postChat() {
    if (checkHistory("river")) {
        document.getElementById("teleporter").src = "/display/assets/locations/teleporter/river.png"
        changeBg("animated/riverInterior.gif")
        locations.postChat["voteVamp"] = "vampRiver.wav"

    } else {
        changeBg("animated/caveInterior.gif")
        document.getElementById("teleporter").src = "/display/assets/locations/teleporter/cave.png"
        locations.postChat["voteVamp"] = "vampCave.wav"

    }

    slideBoxY("duo")
    setTimeout(nextLine, 1500)
    setTimeout(() => {
        clearText()
        setTimeout(nextLine, 200)
    }, 6000)
    setTimeout(() => {
        clearText()
        toggleBox("jaz")
        setTimeout(nextLine, 200)
    }, 24000)
    setTimeout(() => {
        clearText()
        toggleBox("pino")
        setTimeout(nextLine, 200)
    }, 30000)
    setTimeout(() => {
        fadeBox("none")
    }, 40000)



}


postChat()