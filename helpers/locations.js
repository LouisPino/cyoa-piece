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
    // choicePrompts: {
    //   mobile: "",
    //   display: "",
    // },
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
    transition: { type: "pixelate-no-blur", time: 8000 },
    bgName: "forest",
    voteVamp: "vampForest.wav",
    track: "sylvan-game.wav",

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
    transition: { type: "fade", time: 5000 },
    banner: "forest",
    voteVamp: "vampForest.wav",
    track: "trackForest.wav",
    mapLocations: { pino: { x: 651, y: -420 }, jaz: { x: 351, y: -420 } }


  },
  rockField: {
    name: "rockField",
    paths: ["cave", "cave"],
    // choicePrompts: {
    //   mobile: "",
    //   display: "",
    // },
    choices: ["", ""],
    html: {},
    bgName: "rock",
    track: "trackRocks.wav",

    transition: { type: "blur", time: 2000 },
    banner: "rock",
    mapLocations: { pino: { x: 955, y: -338 }, jaz: { x: 651, y: -338 } },
    voteVamp: "vampRocks.wav",


  },
  frogs: {
    name: "frogs",
    paths: ["cave", "cave"],
    // choicePrompts: {
    //   mobile: "",
    //   display: "",
    // },
    choices: ["", ""],
    html: {},
    transition: { type: "blur", time: 2000 },
    bgName: "waterfall",
    track: "trackWaterfall.wav",
    mapLocations: { pino: { x: 115, y: -245 }, jaz: { x: -186, y: -245 } }


  },
  golems: {
    name: "golems",
    paths: ["river", "river"],
    // choicePrompts: {
    //   mobile: "",
    //   display: "",
    // },
    choices: ["", ""],
    html: {},
    transition: { type: "blur", time: 2000 },
    bgName: "rock",
    track: "trackRocks.wav",

    mapLocations: { pino: { x: 973, y: -554 }, jaz: { x: 673, y: -554 } },
    voteVamp: "vampRocks.wav",

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

    transition: { type: "blur", time: 2000 },
    bgName: "waterfall",
    banner: "waterfall",
    mapLocations: { pino: { x: -58, y: -357 }, jaz: { x: -358, y: -357 } },
    voteVamp: "vampWaterfall.wav",
    track: "trackWaterfall.wav",


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
    transition: { type: "fade", time: 5000 },
    bgName: "forest",
    banner: "forest",
    mapLocations: { pino: { x: 448, y: -78 }, jaz: { x: 148, y: -92 } },
    voteVamp: "vampForest.wav",
    track: "trackForest.wav",


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
    transition: { type: "pull", time: 2000 },
    bgName: "cave",
    banner: "cave",
    mapLocations: { pino: { x: 820, y: -620 }, jaz: { x: 520, y: -620 } },
    voteVamp: "vampCave.wav",
    track: "trackCave.wav",


  },
  river: {
    name: "river",
    paths: ["isopods", "rats"],
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
    mapLocations: { pino: { x: 128, y: 66 }, jaz: { x: -172, y: 66 } },
    voteVamp: "vampRiver.wav",
    track: "trackRiver.wav",

  },
  chat: {
    name: "chat",
    paths: ["postChat", "postChat"],
    // choicePrompts: {
    //   mobile: "where should they travel?",
    //   display: " where should we travel?",
    // },
    choices: ["space", "ocean"],
    html: {},
    transition: { type: "blur", time: 1000 },
    voteVamp: "vampRiver.wav",

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
    track: "pokemonBattle.wav",
    transition: { type: "pixelate-no-blur", time: 500 },
    voteVamp: "vampCave.wav",

  },
  postFightVacuum: {
    name: "postFightVacuum",
    paths: ["clouds", "clouds"],
    // choicePrompts: {
    //   mobile: "Which loot should they take?",
    //   display: "Which loot should we take?",
    // },
    choices: ["vacuum", "fork"],
    html: {},
    transition: { type: "blur", time: 1000 },
    track: "weapon.wav"

  },
  postFightFork: {
    name: "postFightFork",
    paths: ["shores", "shores"],
    // choicePrompts: {
    //   mobile: "Which loot should they take?",
    //   display: "Which loot should we take?",
    // },
    choices: ["vacuum", "fork"],
    html: {},
    transition: { type: "blur", time: 1000 },
    track: "weapon.wav"

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
    voteVamp: "vampRiver.wav",

  },
  postPostChatSpace: {
    name: "postPostChatSpace",
    paths: ["pacifistClouds", "pacifistClouds"],
    // choicePrompts: {
    //   mobile: "Which loot should they take?",
    //   display: "Which loot should we take?",
    // },
    choices: ["vacuum", "fork"],
    html: {},
    transition: { type: "pixelate-no-blur", time: 1000 },
    track: "teleporter.wav"

  },
  postPostChatOcean: {
    name: "postPostChatOcean",
    paths: ["pacifistShores", "pacifistShores"],
    // choicePrompts: {
    //   mobile: "Which loot should they take?",
    //   display: "Which loot should we take?",
    // },
    choices: ["vacuum", "fork"],
    html: {},
    transition: { type: "pixelate-no-blur", time: 1000 },
    track: "teleporter.wav"
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
    transition: { type: "pixelate-no-blur", time: 1000 },
    voteVamp: "vampRiver.wav",

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
    transition: { type: "pixelate-no-blur", time: 1000 },
    bgName: "riverInterior",
    mapLocations: { pino: { x: 234, y: 73 }, jaz: { x: -70, y: 73 } },
    voteVamp: "vampRiver.wav",
    track: "trackRiver.wav"

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
    transition: { type: "pixelate-no-blur", time: 1000 },
    bgName: "caveInterior",
    mapLocations: { pino: { x: 861, y: -638 }, jaz: { x: 557, y: -638 } },
    voteVamp: "vampCave.wav",
    track: "trackCave.wav"

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
    transition: { type: "fade", time: 8000 },
    bgName: "shore",
    banner: "shore",
    mapLocations: { pino: { x: 881, y: -15 }, jaz: { x: 581, y: -15 } },
    voteVamp: "vampShores.wav",
    track: "trackShores.wav"

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
    transition: { type: "fade", time: 8000 },
    bgName: "clouds",
    banner: "clouds",
    mapLocations: { pino: { x: 365, y: -669 }, jaz: { x: 65, y: -669 } },
    voteVamp: "vampClouds.wav",
    track: "trackClouds.wav"

  },
  pacifistClouds: {
    bgName: "clouds",
    name: "pacifistClouds",
    paths: ["thermosphere", "thermosphere"],
    // choicePrompts: {
    //   mobile: "",
    //   display: "",
    // },
    choices: ["space", "ocean"],
    mapLocations: { pino: { x: 346, y: -600 }, jaz: { x: 42, y: -600 } },
    banner: "clouds",
    track: "trackClouds.wav",

    html: {},
    transition: { type: "fade", time: 8000 },
  },
  pacifistShores: {
    name: "pacifistShores",
    paths: ["twilight", "twilight"],
    // choicePrompts: {
    //   mobile: "",
    //   display: "",
    // },
    choices: [

    ],
    banner: "shore",

    html: {},
    transition: { type: "fade", time: 8000 },
    bgName: "shore",
    mapLocations: { pino: { x: 932, y: -23 }, jaz: { x: 628, y: -23 } },
    track: "trackShores.wav"

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
    transition: { type: "pixelate", time: 2000 },
    bgName: "clouds",
    mapLocations: { pino: { x: 346, y: -600 }, jaz: { x: 42, y: -600 } },
    voteVamp: "vampClouds.wav",
    track: "trackClouds.wav"

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
    transition: { type: "pixelate", time: 2000 },
    mapLocations: { pino: { x: 346, y: -600 }, jaz: { x: 42, y: -600 } },
    voteVamp: "vampClouds.wav",
    track: "trackClouds.wav"

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
    transition: { type: "pixelate", time: 2000 },
    bgName: "shore",
    mapLocations: { pino: { x: 932, y: -23 }, jaz: { x: 628, y: -23 } },
    voteVamp: "vampShores.wav",
    track: "trackShores.wav"

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
    transition: { type: "pixelate", time: 2000 },
    bgName: "shore",
    mapLocations: { pino: { x: 932, y: -23 }, jaz: { x: 628, y: -23 } },
    voteVamp: "vampShores.wav",
    track: "trackShores.wav"

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
    transition: { type: "fade", time: 5000 },
    bgName: "space",
    banner: "space",

    mapLocations: { pino: { x: -77, y: -750 }, jaz: { x: -377, y: -750 } },
    track: "trackSpace.wav"

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
    transition: { type: "fade", time: 5000 },
    bgName: "ocean",
    banner: "ocean",
    mapLocations: { pino: { x: 1300, y: 80 }, jaz: { x: 1000, y: 80 } },
    track: "trackOcean.wav"
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
    transition: { type: "fade", time: 10000 },
    track: "sylvan-game.wav"
  }
};

module.exports = locations;
