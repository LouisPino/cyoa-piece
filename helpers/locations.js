const locations = {
    kingdom: {
        paths: ["forestNorth", "forestSouth"],
        choicePrompt: "You encounter a cliff at the edge of the kingdom! What do you do?",
        choiceImg: "forestNorthCoice.jpg",
        choices: ["climb mountains", "swim in the ocean"],
        html: "kingdom"
    },
    forestNorth: {
        paths: ["cave", "river"],
        choicePrompt: "You've hit a fork in the road! Where will you go?",
        choices: ["Left", "Right"],
        html: "forestNorth"
    },
    forestSouth: {
        paths: ["river", "cave"],
        choicePrompt: "You've hit a fork in the road! Where will you go?",
        choices: ["Left", "Right"],
        html: "forestSouth"
    },
    cave: {
        paths: ["bats", "bugs"],
        choicePrompt: "",
        choices: ["Left", "Right"],
        html: "cave"
    },
    river: {
        paths: ["bugs", "fish"],
        choicePrompt: "",
        choices: ["", ""],
        html: "river"
    },
    bats: {
        paths: ["chatBats", "fightBats"],
        choicePrompt: "You've encountered a swarm of bats! Will you fight or try to talk it out?",
        choices: ["Left", "Right"],
        html: "bats"
    },
    bugs: {
        paths: ["chatBugs", "fightBugs"],
        choicePrompt: "You've hit a fork in the road! Where will you go?",
        choices: ["Left", "Right"],
        html: "bugs"
    },
    fish: {
        paths: ["chatFish", "fightFish"],
        choicePrompt: "You've hit a fork in the road! Where will you go?",
        choices: ["Left", "Right"],
        html: "fish"
    },
    mountains: ["", ""],
    cloud: ["", ""],
    ocean: ["", ""]
}

module.exports = locations