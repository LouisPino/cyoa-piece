
textsArr = [
    `You have received the `,
    "VAPOR VORTEX VACUUM!"
]



function postFightVacuum() {
    setTimeout(() => {

        slideBoxY("dialogue")
        setTimeout(nextLine, 500)
        setTimeout(nextLine, 2000)
    }, 5000)
}


postFightVacuum()