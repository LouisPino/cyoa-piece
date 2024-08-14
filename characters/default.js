const wizard = {
    face: "",
    robe: "",
    hat: "",
    device: ""
}

const jester = {
    face: "",
    points: 0,
    color: "",
    device: ""
}

const wizardOptions = {
    face: {
        prompt: "Pick your favorite cat",
        choices: [
            {
                label: "Gray",
                img: ""
            },
            {
                label: "Tuxedo",
                img: ""
            }]
    },
    robe: {
        prompt: "Choose your favorite robe",
        choices: [
            {
                label: "Purple",
                img: ""
            },
            {
                label: "Green",
                img: ""
            }]
    },
    hat: {
        choices: [
            {
                label: "Star",
                img: ""
            },
            {
                label: "Flower",
                img: ""
            }],
        prompt: "Pick between these patterns"
    },
    device: {
        choices: [
            {
                label: "Frog",
                img: ""
            },
            {
                label: "Panda",
                img: ""
            }],
        prompt: "Pick your favorite animal"
    }
}

const jesterOptions = {
    face: {
        prompt: "Choose your favorite cat",
        choices: [
            {
                label: "Orange",
                img: ""
            },
            {
                label: "White",
                img: ""
            }]
    },
    points: {
        choices: [
            {
                label: "2",
                img: ""
            },
            {
                label: "3",
                img: ""
            },
            {
                label: "4",
                img: ""
            },
            {
                label: "5",
                img: ""
            },
            {
                label: "6",
                img: ""
            }
        ],
        prompt: "Choose a numnber from 2 to 6"
    },
    color: {
        prompt: "Choose your favorite color",
        choices: [
            {
                label: "Pink",
                img: ""
            },
            {
                label: "Orange",
                img: ""
            }]
    },
    device: {
        prompt: "Which is more annoying?",
        choices: [
            {
                label: "Bells",
                img: ""
            },
            {
                label: "Horn",
                img: ""
            }]
    }
}

module.exports = [
    wizard,
    wizardOptions,
    jester,
    jesterOptions
]