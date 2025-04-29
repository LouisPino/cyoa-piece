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
    transition: { type: "fade", time: 100 },
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
    bgName: "forest",
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
    bgName: "forest",
    transition: { type: "pixelate", time: 1000 },
    banner: "forest",

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
    bgName: "rock",

    transition: { type: "pixelate", time: 1000 },
    banner: "rock",

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
    transition: { type: "pixelate", time: 1000 },
    bgName: "waterfall",


  },
  golems: {
    name: "golems",
    paths: ["cave", "cave"],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: ["", ""],
    html: {},
    transition: { type: "pixelate", time: 1000 },
    bgName: "rock",
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

    transition: { type: "pixelate", time: 1000 },
    bgName: "waterfall",
    banner: "waterfall",

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
    bgName: "forest",
    banner: "forest",

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
    bgName: "cave",
    banner: "cave",


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
    bgName: "river",
    banner: "river",

  },
  chat: {
    name: "chat",
    paths: ["postChat", "postChat"],
    choicePrompts: {
      mobile: "where should they travel?",
      display: " where should we travel?",
    },
    choices: ["space", "ocean"],
    html: {},
    transition: { type: "fade", time: 1000 },
  },
  fight: {
    name: "fight",
    paths: ["postFightVacuum", "postFightFork"],
    choicePrompts: {
      mobile: "Which loot should they take?",
      display: "Which loot should we take?",
    },
    choices: ["vacuum", "fork"],
    html: {},
    transition: { type: "pixelate-no-blur", time: 5000 },
  },
  postFightVacuum: {
    name: "postFightVacuum",
    paths: ["clouds", "clouds"],
    choicePrompts: {
      mobile: "Which loot should they take?",
      display: "Which loot should we take?",
    },
    choices: ["vacuum", "fork"],
    html: {},
    transition: { type: "pixelate-no-blur", time: 1000 },
  },
  postFightFork: {
    name: "postFightFork",
    paths: ["shores", "shores"],
    choicePrompts: {
      mobile: "Which loot should they take?",
      display: "Which loot should we take?",
    },
    choices: ["vacuum", "fork"],
    html: {},
    transition: { type: "pixelate-no-blur", time: 1000 },
  },
  postChat: {
    name: "postChat",
    paths: ["postPostChatSpace", "postPostChatOcean"],
    choicePrompts: {
      mobile: "where should they travel?",
      display: "where should we travel??",
    },
    choices: ["space", "ocean"],
    html: {},
    transition: { type: "pixelate-no-blur", time: 1000 },
  },
  postPostChatSpace: {
    name: "postPostChatSpace",
    paths: ["clouds", "clouds"],
    choicePrompts: {
      mobile: "Which loot should they take?",
      display: "Which loot should we take?",
    },
    choices: ["vacuum", "fork"],
    html: {},
    transition: { type: "pixelate-no-blur", time: 1000 },
  },
  postPostChatOcean: {
    name: "postPostChatOcean",
    paths: ["shores", "shores"],
    choicePrompts: {
      mobile: "Which loot should they take?",
      display: "Which loot should we take?",
    },
    choices: ["vacuum", "fork"],
    html: {},
    transition: { type: "pixelate-no-blur", time: 1000 },
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
    bgName: "riverInterior",

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
    transition: { type: "blur", time: 1000 },
    bgName: "caveInterior",

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
    bgName: "shore",
    banner: "shore",

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
    bgName: "clouds",
    banner: "clouds",



  },
  pacifistClouds: {
    bgName: "clouds",
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
    bgName: "shore",

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
    bgName: "clouds",

  },
  explainClouds: {
    bgName: "clouds",
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
    bgName: "shore",

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
    bgName: "shore",

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
    bgName: "space",
    banner: "space",


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
    bgName: "ocean",
    banner: "ocean",

  },

  credits: {
    name: "credits",
    paths: ["credits", "credits"],
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
