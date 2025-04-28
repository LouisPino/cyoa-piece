
textsArr = [
    `You have received the `,
    "EXTRA SHARP COCKTAIL FORK!"
]


function postFightFork() {
    setTimeout(() => {

        slideBoxY("dialogue")
        setTimeout(nextLine, 500)
        setTimeout(nextLine, 2000)
    }, 5000)

}


postFightFork()