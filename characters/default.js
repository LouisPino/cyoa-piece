const characters = {
    wizard: {
        wizardFace: "",
        robe: "",
        hat: "",
        wizardDevice: ""
    },

    jester: {
        jesterFace: "",
        points: 0,
        color: "",
        jesterDevice: ""
    }
}

const skinOptions = {
    wizardFace: {
        prompt: "Pick your favorite cat",
        choices: [
            {
                label: "Gray",
                img: "https://www.rd.com/wp-content/uploads/2023/04/GettyImages-1212822618.jpg?fit=700,700"
            },
            {
                label: "Tuxedo",
                img: "https://rawznaturalpetfood.com/wp-content/uploads/tuxedo-cats.jpg"
            }],
        character: "wizard"
    },
    robe: {
        prompt: "Choose your favorite robe",
        choices: [
            {
                label: "Purple",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbu6ckPo5NMKXkEW9bGp7t7sVwl4TZyKarWA&s"
            },
            {
                label: "Green",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdHx95bIRcx3cyo3O8iMa6xvTQrWsBsHVfQ&s"
            }],
        character: "wizard"
    },
    hat: {
        choices: [
            {
                label: "Star",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbu6ckPo5NMKXkEW9bGp7t7sVwl4TZyKarWA&s"
            },
            {
                label: "Flower",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdHx95bIRcx3cyo3O8iMa6xvTQrWsBsHVfQ&s"
            }],
        prompt: "Pick between these patterns",
        character: "wizard"
    },
    wizardDevice: {
        choices: [
            {
                label: "Frog",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbu6ckPo5NMKXkEW9bGp7t7sVwl4TZyKarWA&s"
            },
            {
                label: "Panda",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdHx95bIRcx3cyo3O8iMa6xvTQrWsBsHVfQ&s"
            }],
        prompt: "Pick your favorite animal",
        character: "wizard"
    },
    jesterFace: {
        prompt: "Choose your favorite cat",
        choices: [
            {
                label: "Orange",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbu6ckPo5NMKXkEW9bGp7t7sVwl4TZyKarWA&s"
            },
            {
                label: "White",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdHx95bIRcx3cyo3O8iMa6xvTQrWsBsHVfQ&s"
            }],
        character: "jester"
    },
    points: {
        choices: [
            {
                label: "2",
                img: "https://www.handsoccupied.com/wp-content/uploads/2017/01/whatsnewhat1.jpg"
            },
            {
                label: "3",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kVEJWeGIDtaEzk8VvWX_Sflt8G9-st7JgA&s"
            },
            {
                label: "4",
                img: "https://i.etsystatic.com/27234842/r/il/0eaff2/4633347721/il_570xN.4633347721_gokd.jpg"
            },
            {
                label: "5",
                img: "https://i.etsystatic.com/5918183/r/il/418793/922998199/il_570xN.922998199_rcvr.jpg"
            },
            {
                label: "6",
                img: "https://www.mardigrasoutlet.com/media/catalog/product/cache/4/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/B/E/BE60702.jpg"
            }
        ],
        prompt: "Choose a number from 2 to 6",
        character: "jester"
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
            }],
        character: "jester"
    },
    jesterDevice: {
        prompt: "Which is more annoying?",
        choices: [
            {
                label: "Bells",
                img: ""
            },
            {
                label: "Horn",
                img: ""
            }],
        character: "jester"
    }
}

module.exports = [
    skinOptions, characters
]