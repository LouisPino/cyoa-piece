const wizard = {
    face: "",
    robe: "",
    hat: "",
}

const jester = {
    points: 0,
    color: "",
    device: ""
}

const wizardOptions = {
    face: ["grey", "tuxedo", "orange", "white"],
    robe: ["purple", "green"],
    hat: ["star", "flower"],
    device: ["frog", "panda"]
}

const jesterOptions = {
    points: [2, 3, 4, 5, 6],
    color: ["pink", "orange"],
    device: ["bells", "horn"]
}

module.exports = [
    wizard,
    wizardOptions,
    jester,
    jesterOptions
]