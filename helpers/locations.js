const locations = {
    kingdom: {
        name: "kingdom",
        paths: ["forestNorth", "forestSouth"],
        choicePrompt: "You encounter a cliff at the edge of the kingdom! What do you do?",
        choiceImg: "forestNorthCoice.jpg",
        choices: ["climb mountains", "swim in the ocean"],
        html: {}
    },
    forestNorth: {
        name: "forestNorth",
        paths: ["cave", "river"],
        choicePrompt: "You've hit a fork in the road! Where will you go?",
        choices: ["Left", "Right"],
        html: {}
    },
    forestSouth: {
        name: "forestSouth",
        paths: ["river", "cave"],
        choicePrompt: "You've hit a fork in the road! Where will you go?",
        choices: ["Left", "Right"],
        html: {}

    },
    cave: {
        name: "cave",

        paths: ["bats", "bugs"],
        choicePrompt: "",
        choices: ["Left", "Right"],
        html: {}

    },
    river: {
        name: "river",

        paths: ["bugs", "fish"],
        choicePrompt: "",
        choices: ["", ""],
        html: {}

    },
    bats: {
        name: "bats",

        paths: ["chatBats", "fightBats"],
        choicePrompt: "You've encountered a swarm of bats! Will you fight or try to talk it out?",
        choices: ["Left", "Right"],
        html: {},
        movingSprites: true
    },
    bugs: {
        name: "bugs",

        paths: ["chatBugs", "fightBugs"],
        choicePrompt: "You've hit a fork in the road! Where will you go?",
        choices: ["Left", "Right"],
        html: {}

    },
    fish: {
        name: "fish",

        paths: ["chatFish", "fightFish"],
        choicePrompt: "You've hit a fork in the road! Where will you go?",
        choices: ["Left", "Right"],
        html: {}

    }
}

module.exports = locations