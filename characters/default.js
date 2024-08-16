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
                img: "https://www.shutterstock.com/shutterstock/photos/1924994678/display_1500/stock-vector-black-star-seamless-pattern-on-white-background-1924994678.jpg"
            },
            {
                label: "Flower",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfI2f-0vcyxOVHZsdGchgfjfZ_HByBcyw2g&s"
            }],
        prompt: "Pick between these patterns",
        character: "wizard"
    },
    wizardDevice: {
        choices: [
            {
                label: "Frog",
                img: "https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2.jpg"
            },
            {
                label: "Panda",
                img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSU5JTuNNiASNlAUwaojYTBtQ8GNJ58yfaPI3x1__F8cEIJPXmj"
            }],
        prompt: "Pick your favorite animal",
        character: "wizard"
    },
    jesterFace: {
        prompt: "Choose your favorite cat",
        choices: [
            {
                label: "Orange",
                img: "https://www.rover.com/blog/wp-content/uploads/cat-breathing-fast-orange-kitten-960x540.jpg"
            },
            {
                label: "White",
                img: "https://static-cdn.jtvnw.net/jtv_user_pictures/e169dea3-4d46-4a1b-9fed-cdd6843ea742-profile_image-300x300.png"
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
                img: "https://i.etsystatic.com/13860675/r/il/f9b75e/3019682734/il_fullxfull.3019682734_kxi9.jpg"
            },
            {
                label: "Orange",
                img: "https://insertface.com/fb/2322/orange-jester-costume-face-2322296-xofhz-fb.jpg"
            }],
        character: "jester"
    },
    jesterDevice: {
        prompt: "Which is more annoying?",
        choices: [
            {
                label: "Bells",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEHb8X3ugssy16bJZ-ZyNBLjN0SYhy761Kw&s"
            },
            {
                label: "Horn",
                img: "https://archaeology.org/wp-content/uploads/2018/12/Trenches-Medieval-Drinking-Horn.jpg"
            }],
        character: "jester"
    }
}

module.exports = [
    skinOptions, characters
]