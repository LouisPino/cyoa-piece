
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
        currentLocation.voteVamp = "vampRiver.wav"
        currentLocation.bgName = "riverInterior"
    } else {
        changeBg("animated/caveInterior.gif")
        document.getElementById("teleporter").src = "/display/assets/locations/teleporter/cave.png"
        currentLocation.voteVamp = "vampCave.wav"
        currentLocation.bgName = "caveInterior"
        console.log(currentLocation)
        // locations.postChat.voteVamp = "vampCave.wav"
        // locations.postChat.bgName = "caveInterior"
        // console.log(locations.postChat)
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