const locations = {
  sandbox: {
    name: "sandbox",
    paths: ["sandbox", "sandbox"],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: ["sandbox", "sandbox"],
    transition: { type: "pixelate-no-blur", time: 1000 },
    html: {},
    voteBgBlur: "/display/assets/backgrounds/forestBLur.png",
  },


  welcome: {
    name: "welcome",
    paths: ["intro", "intro"],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: [
    ],
    html: {},
    transition: { type: "fade", time: 3000 },
  },
  intro: {
    name: "intro",
    paths: ["forestNorth", "forestSouth"],
    choicePrompts: {
      mobile: "How should they leave?",
      display: "How should they leave?",
    },
    choices: ["north", "south"],
    html: {},
    transition: { type: "pixelate-no-blur", time: 1000 },
    voteBgBlur: "/display/assets/backgrounds/forestBLur.png",
  },
  forestNorth: {
    name: "forestNorth",
    paths: ["rockField", "golems"],
    choicePrompts: {
      mobile: "Which way should they go?",
      display: "Which way should we go?",
    },
    choices: ["left", "right"],
    html: {},
    voteBg: "/display/assets/backgrounds/ForestTest.jpg",
    voteBgBlur: "/display/assets/backgrounds/forestBLur.png",
    transition: { type: "pixelate", time: 1000 },
  },
  rockField: {
    name: "rockField",
    paths: ["cave", "cave"],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: ["", ""],
    html: {},
    voteBg: "/display/assets/backgrounds/rock.jpg",
    voteBgBlur: "/display/assets/backgrounds/forestBLur.png",
    transition: { type: "pixelate", time: 1000 },
  },
  frogs: {
    name: "frogs",
    paths: ["cave", "cave"],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: ["", ""],
    html: {},
    voteBg: "/display/assets/backgrounds/ForestTest.jpg",
    voteBgBlur: "/display/assets/backgrounds/forestBLur.png",
    transition: { type: "pixelate", time: 1000 },
    voteBgBlur: "/display/assets/backgrounds/forestBLur.png",
  },
  waterfall: {
    name: "waterfall",
    paths: ["river", "river"],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: ["", ""],
    html: {},
    voteBg: "/display/assets/backgrounds/waterfall.jpg",
    voteBgBlur: "/display/assets/backgrounds/forestBLur.png",
    transition: { type: "pixelate", time: 1000 },
    voteBgBlur: "/display/assets/backgrounds/forestBLur.png",
  },
  forestSouth: {
    name: "forestSouth",
    paths: ["waterfall", "frogs"],
    choicePrompts: {
      mobile: "Which way should they go?",
      display: "Which way should we go?",
    },
    choices: ["Left", "Right"],
    html: {},
    transition: { type: "blur", time: 1000 },
    voteBgBlur: "/display/assets/backgrounds/forestBLur.png",
  },
  cave: {
    name: "cave",
    paths: ["bats", "isopods"],
    choicePrompts: {
      mobile: "Which way should they go?",
      display: "Which way should we go?",
    },
    choices: ["Left", "Right"],
    html: {},
    transition: { type: "blur", time: 1000 },
    voteBgBlur: "/display/assets/backgrounds/forestBLur.png",
  },
  river: {
    name: "river",
    paths: ["bats", "rats"],
    choicePrompts: {
      mobile: "Which way should they go?",
      display: "Which way should we go?",
    },
    choices: ["Left", "Right"],
    html: {},
    transition: { type: "fade", time: 2000 },
    voteBgBlur: "/display/assets/backgrounds/forestBLur.png",
  },
  chat: {
    name: "chat",
    paths: ["pacifistClouds", "pacifistShores"],
    choicePrompts: {
      mobile: "where should they travel?",
      display: " where should we travel?",
    },
    choices: ["space", "ocean"],
    html: {},
    movingSprites: true,
    transition: { type: "fade", time: 1000 },
    voteBgBlur: "/display/assets/backgrounds/forestBLur.png",
  },
  fight: {
    name: "fight",
    paths: ["clouds", "shores"],
    choicePrompts: {
      mobile: "Which loot should they take?",
      display: "Which loot should we take?",
    },
    choices: ["vacuum", "fork"],
    html: {},
    movingSprites: true,
    transition: { type: "fade", time: 1000 },
    voteBgBlur: "/display/assets/backgrounds/forestBLur.png",
  },
  isopods: {
    name: "isopods",
    paths: ["fight", "chat"],
    choicePrompts: {
      mobile: "What should they do?",
      display: "What do we do??",
    },
    choices: ["fight", "chat"],
    html: {},
    transition: { type: "pull", time: 2000 },
    voteBgBlur: "/display/assets/backgrounds/forestBLur.png",
  },
  rats: {
    name: "rats",
    paths: ["fight", "chat"],
    choicePrompts: {
      mobile: "What should they do?",
      display: "What do we do??",
    },
    choices: ["fight", "chat"],
    html: {},
    transition: { type: "fade", time: 1000 },
  },
  bats: {
    name: "bats",
    paths: ["fight", "chat"],
    choicePrompts: {
      mobile: "What should they do?",
      display: "What do we do??",
    },
    choices: ["fight", "chat"],
    html: {},
    movingSprites: true,
    transition: { type: "blur", time: 1000 },
    voteBgBlur: "/display/assets/backgrounds/forestBLur.png",
  },


  // act 2
  shores: {
    name: "shores",
    paths: ["fightShrimp", "explainShrimp"],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: ["fight", "chat"],
    html: {},
    transition: { type: "fade", time: 3000 },
  },
  clouds: {
    name: "clouds",
    paths: ["fightClouds", "explainClouds"],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: ["fight", "chat"],
    html: {},
    transition: { type: "fade", time: 3000 },

  },
  pacifistClouds: {
    name: "pacifistClouds",
    paths: ["thermosphere", "twilight"],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: ["space", "ocean"],

    html: {},
    transition: { type: "fade", time: 3000 },
  },
  pacifistShores: {
    name: "pacifistShores",
    paths: ["twilight", "twilight"],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: [

    ],
    html: {},
    transition: { type: "fade", time: 3000 },
  },
  fightClouds: {
    name: "fightClouds",
    paths: ["thermosphere", "thermosphere"],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: [

    ],
    html: {},
    transition: { type: "fade", time: 3000 },
  },
  explainClouds: {
    name: "explainClouds",
    paths: ["thermosphere", "thermosphere"],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: [

    ],
    html: {},
    transition: { type: "fade", time: 3000 },
  },
  fightShrimp: {
    name: "fightShrimp",
    paths: ["twilight", "twilight"],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: [

    ],
    html: {},
    transition: { type: "fade", time: 3000 },
  },
  explainShrimp: {
    name: "explainShrimp",
    paths: ["twilight", "twilight"],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: [

    ],
    html: {},
    transition: { type: "fade", time: 3000 },
  },
  thermosphere: {
    name: "thermosphere",
    paths: ["credits", "credits"],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: [

    ],
    html: {},
    transition: { type: "fade", time: 3000 },
  },
  twilight: {
    name: "twilight",
    paths: ["credits", "credits"],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: [

    ],
    html: {},
    transition: { type: "fade", time: 3000 },
  },

  credits: {
    name: "credits",
    paths: ["", ""],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: [
    ],
    html: {},
    transition: { type: "fade", time: 3000 },
  }
};

module.exports = locations;
