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
    voteVamp: "pokemon.mp3",
    mapLocations: { pino: { x: 507, y: -286 }, jaz: { x: 203, y: -286 } }
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
    mapLocations: { pino: { x: 711, y: -493 }, jaz: { x: 407, y: -493 } }


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
    mapLocations: { pino: { x: 955, y: -338 }, jaz: { x: 651, y: -338 } }


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
    mapLocations: { pino: { x: 139, y: -229 }, jaz: { x: -165, y: -229 } }


  },
  golems: {
    name: "golems",
    paths: ["river", "river"],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: ["", ""],
    html: {},
    transition: { type: "pixelate", time: 1000 },
    bgName: "rock",
    mapLocations: { pino: { x: 857, y: -554 }, jaz: { x: 553, y: -554 } }

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
    mapLocations: { pino: { x: -39, y: -145 }, jaz: { x: -343, y: -145 } }

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
    mapLocations: { pino: { x: 260, y: -92 }, jaz: { x: -44, y: -92 } }

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
    mapLocations: { pino: { x: 861, y: -638 }, jaz: { x: 557, y: -638 } }


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
    mapLocations: { pino: { x: 234, y: 73 }, jaz: { x: -70, y: 73 } }

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
    transition: { type: "pixelate-no-blur", time: 500 },
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
    paths: ["pacifistClouds", "pacifistClouds"],
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
    paths: ["pacifistShores", "pacifistShores"],
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
    transition: { type: "fade", time: 2000 },

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
    mapLocations: { pino: { x: 234, y: 73 }, jaz: { x: -70, y: 73 } }
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
    mapLocations: { pino: { x: 861, y: -638 }, jaz: { x: 557, y: -638 } }

  },


  // act 2
  shores: {
    name: "shores",
    paths: ["fightShrimp", "explainShrimp"],
    choicePrompts: {
      mobile: "What should they do?",
      display: "What do I do?",
    },
    choices: ["fight", "chat"],
    html: {},
    transition: { type: "fade", time: 3000 },
    bgName: "shore",
    banner: "shore",
    mapLocations: { pino: { x: 932, y: -23 }, jaz: { x: 628, y: -23 } }

  },
  clouds: {
    name: "clouds",
    paths: ["fightClouds", "explainClouds"],
    choicePrompts: {
      mobile: "What should he do?",
      display: "What do I do?",
    },
    choices: ["fight", "chat"],
    html: {},
    transition: { type: "fade", time: 3000 },
    bgName: "clouds",
    banner: "clouds",
    mapLocations: { pino: { x: 346, y: -600 }, jaz: { x: 42, y: -600 } }

  },
  pacifistClouds: {
    bgName: "clouds",
    name: "pacifistClouds",
    paths: ["thermosphere", "thermosphere"],
    choicePrompts: {
      mobile: "",
      display: "",
    },
    choices: ["space", "ocean"],
    mapLocations: { pino: { x: 346, y: -600 }, jaz: { x: 42, y: -600 } },
    banner: "clouds",

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
    banner: "shore",

    html: {},
    transition: { type: "fade", time: 3000 },
    bgName: "shore",
    mapLocations: { pino: { x: 932, y: -23 }, jaz: { x: 628, y: -23 } }

  },
  fightClouds: {
    name: "fightClouds",
    paths: ["thermosphere", "twilight"],
    choicePrompts: {
      mobile: "Where should they go?",
      display: "Where should they go?",
    },
    choices: ["space", "ocean"],

    html: {},
    transition: { type: "fade", time: 3000 },
    bgName: "clouds",
    mapLocations: { pino: { x: 346, y: -600 }, jaz: { x: 42, y: -600 } },

  },
  explainClouds: {
    bgName: "clouds",
    name: "explainClouds",
    paths: ["thermosphere", "twilight"],
    choicePrompts: {
      mobile: "Where should they go?",
      display: "Where should they go?",
    },
    choices: ["space", "ocean"],

    html: {},
    transition: { type: "fade", time: 3000 },
    mapLocations: { pino: { x: 346, y: -600 }, jaz: { x: 42, y: -600 } },

  },
  fightShrimp: {
    name: "fightShrimp",
    paths: ["thermosphere", "twilight"],
    choicePrompts: {
      mobile: "Where should they go?",
      display: "Where should they go?",
    },
    choices: ["space", "ocean"],

    html: {},
    transition: { type: "fade", time: 3000 },
    bgName: "shore",
    mapLocations: { pino: { x: 932, y: -23 }, jaz: { x: 628, y: -23 } }

  },

  explainShrimp: {
    name: "explainShrimp",
    paths: ["thermosphere", "twilight"],
    choicePrompts: {
      mobile: "Where should they go?",
      display: "Where should they go?",
    },
    choices: ["space", "ocean"],

    html: {},
    transition: { type: "fade", time: 3000 },
    bgName: "shore",
    mapLocations: { pino: { x: 932, y: -23 }, jaz: { x: 628, y: -23 } }

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

    mapLocations: { pino: { x: 932, y: -23 }, jaz: { x: 628, y: -23 } }

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
    mapLocations: { pino: { x: 1271, y: 89 }, jaz: { x: 967, y: 89 } }

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
