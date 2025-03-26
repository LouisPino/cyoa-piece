const locations = {
  sandbox: {
    name: "sandbox",
    paths: ["sandbox", "sandbox"],
    choicePrompt:
      "sandbox",
    choices: ["sandbox", "sandbox"],
    transition: { type: "pixelate-no-blur", time: 1000 },
    html: {},
  },
  intro: {
    name: "intro",
    paths: ["forestNorth", "forestSouth"],
    choicePrompt:
      "You encounter a cliff at the edge of the kingdom! What do you do?",
    choices: ["north", "south"],
    html: {},
    transition: { type: "pixelate-no-blur", time: 3000 }
  },
  kingdom: {
    name: "kingdom",
    paths: ["forestNorth", "forestSouth"],
    choicePrompt:
      "You encounter a cliff at the edge of the kingdom! What do you do?",
    choices: ["north", "south"],
    html: {},
    transition: { type: "jump", time: 0 }

  },
  forestNorth: {
    name: "forestNorth",
    paths: ["cave", "river"],
    choicePrompt: "You've hit a fork in the road! Where will you go?",
    choices: ["cave", "river"],
    html: {},
    voteBg: "/display/assets/backgrounds/ForestTest.jpg",
    voteBgBlur: "/display/assets/backgrounds/forest.png",
    transition: { type: "pixelate", time: 5000 }

  },
  forestSouth: {
    name: "forestSouth",
    paths: ["river", "cave"],
    choicePrompt: "You've hit a fork in the road! Where will you go?",
    choices: ["Left", "Right"],
    html: {},
    transition: { type: "blur", time: 1000 }

  },
  cave: {
    name: "cave",
    paths: ["bats", "bugs"],
    choicePrompt: "Should we go right or left?",
    choices: ["Left", "Right"],
    html: {},
    transition: { type: "blur", time: 1000 }

  },
  river: {
    name: "river",
    paths: ["bugs", "fish"],
    choicePrompt: "Should we go right or left?",
    choices: ["Left", "Right"],
    html: {}, transition: { type: "pull", time: 3000 }

  },
  bats: {
    name: "bats",
    paths: ["chatBats", "fightBats"],
    choicePrompt:
      "Sensing hostility!! They get defensive. Do we fight them or try to talk to them? ",
    choices: ["Chat", "Fight"],
    html: {},
    movingSprites: true, transition: { type: "blur", time: 1000 }

  },
  batMadlib: {
    name: "batMadlib",
    paths: ["chatBats", "fightBats"],
    choicePrompt:
      "Sensing hostility!! They get defensive. Do we fight them or try to talk to them? ",
    choices: ["Chat", "Fight"],
    html: {},
    movingSprites: true, transition: { type: "fade", time: 3000 }

  },
  bugs: {
    name: "bugs",
    paths: ["chatBugs", "fightBugs"],
    choicePrompt:
      "Sensing hostility!! They get defensive. Do we fight them or try to talk to them? ", choices: ["Chat", "Fight"],
    choices: ["Chat", "Fight"],
    html: {}, transition: { type: "pull", time: 6000 }

  },
  fish: {
    name: "fish",
    paths: ["chatFish", "fightFish"],
    choicePrompt:
      "Sensing hostility!! They get defensive. Do we fight them or try to talk to them? ", choices: ["Chat", "Fight"],
    choices: ["Chat", "Fight"],
    html: {}, transition: { type: "fade", time: 3000 }

  },
  chatFish: {
    name: "chatFish",
    paths: ["pacifist", "pacifist"],
    choicePrompt: "The creatures open up to you on how they’re really nervous and stressed out. They’re having difficulty writing a story for their local creative writing festival. Can you help them? ",
    choices: ["Left", "Right"],
    html: {}, transition: { type: "fade", time: 3000 }

  },
  fightFish: {
    name: "fightFish",
    paths: ["spaceBuff", "oceanBuff"],
    choicePrompt: "A rousing battle between the adventurers and the creature!! (ouch dude what the heck was that for, I’m leaving). Two pieces of loot (that provide buffs) are available but only one can be taken. What will you choose?",
    choices: ["Space Weapon", "Ocean Weapon"],
    html: {}, transition: { type: "fade", time: 3000 }

  },
  chatBats: {
    name: "chatBats",
    paths: ["pacifist", "pacifist"],
    choicePrompt: "The creatures open up to you on how they’re really nervous and stressed out. They’re having difficulty writing a story for their local creative writing festival. Can you help them? ",
    choices: ["Left", "Right"],
    html: {}, transition: { type: "fade", time: 3000 }

  },
  fightBats: {
    name: "fightBats",
    paths: ["spaceBuff", "oceanBuff"],
    choicePrompt: "A rousing battle between the adventurers and the creature!! (ouch dude what the heck was that for, I’m leaving). Two pieces of loot (that provide buffs) are available but only one can be taken. What will you choose?",
    choices: ["Space Weapon", "Ocean Weapon"],
    html: {}, transition: { type: "fade", time: 3000 }

  },
  chatBugs: {
    name: "chatBugs",
    paths: ["pacifist", "pacifist"],
    choicePrompt: "The creatures open up to you on how they’re really nervous and stressed out. They’re having difficulty writing a story for their local creative writing festival. Can you help them?",
    choices: ["Left", "Right"],
    html: {}, transition: { type: "fade", time: 3000 }

  },
  fightBugs: {
    name: "fightBugs",
    paths: ["spaceBuff", "oceanBuff"],
    choicePrompt: "A rousing battle between the adventurers and the creature!! (ouch dude what the heck was that for, I’m leaving). Two pieces of loot (that provide buffs) are available but only one can be taken. What will you choose?",
    choices: ["Space Weapon", "Ocean Weapon"],
    html: {}, transition: { type: "fade", time: 3000 }

  },
  spaceBuff: {
    name: "spaceBuff",
    paths: ["fightSpace", "explainSpace"],
    choicePrompt: "Do you choose to fight the Cloud folk? Or will you try to explain yourself?",
    choices: ["Fight", "Explain yourself"],
    html: {}, transition: { type: "fade", time: 3000 }

  },
  oceanBuff: {
    name: "oceanBuff",
    paths: ["fightOcean", "explainOcean"],
    choicePrompt: "Do you choose to fight the Merfolk? Or will you try to explain yourself?",
    choices: ["Fight", "Explain yourself"],
    html: {},
  },
  pacifist: {
    name: "pacifist",
    paths: ["thermosphere", "mesopelagic"],
    choicePrompt: "Now at The Grand Teleporter. Where should our adventurers meet up?",
    choices: ["To the THERMOSPHERE, amidst the Aurora Borealis.", "To the MESOPELAGIC ZONE, the ocean's twilight zone."],
    html: {}, transition: { type: "fade", time: 3000 }

  },
  fightSpace: {
    name: "fightSpace",
    paths: ["thermosphere", "mesopelagic"],
    choicePrompt: "Where should the adventurers meet up with each other? Neither have any idea where the treasure might be but they’ll try to follow through for the heck of it.",
    choices: ["To the THERMOSPHERE, amidst the Aurora Borealis.", "To the MESOPELAGIC ZONE, the ocean's twilight zone."],
    html: {}, transition: { type: "fade", time: 3000 }

  },
  explainSpace: {
    name: "explainSpace",
    paths: ["thermosphere", "mesopelagic"],
    choicePrompt: "You've hit a fork in the road! Where will you go?",
    choices: ["To the THERMOSPHERE, amidst the Aurora Borealis.", "To the MESOPELAGIC ZONE, the ocean's twilight zone."],
    html: {}, transition: { type: "fade", time: 3000 }

  },
  fightOcean: {
    name: "fightOcean",
    paths: ["thermosphere", "mesopelagic"],
    choicePrompt: "Where should the adventurers meet up with each other? Neither have any idea where the treasure might be but they’ll try to follow through for the heck of it.",
    choices: ["To the THERMOSPHERE, amidst the Aurora Borealis.", "To the MESOPELAGIC ZONE, the ocean's twilight zone."],
    html: {}, transition: { type: "fade", time: 3000 }

  },
  explainOcean: {
    name: "explainOcean",
    paths: ["thermosphere", "mesopelagic"],
    choicePrompt: "You've hit a fork in the road! Where will you go?",
    choices: ["To the THERMOSPHERE, amidst the Aurora Borealis.", "To the MESOPELAGIC ZONE, the ocean's twilight zone."],
    html: {}, transition: { type: "fade", time: 3000 }

  },
  thermosphere: {
    name: "thermosphere",
    paths: ["thermosphere", "mesopelagic"],
    choicePrompt: "You've hit a fork in the road! Where will you go?",
    choices: ["To the THERMOSPHERE, amidst the Aurora Borealis.", "To the MESOPELAGIC ZONE, the ocean's twilight zone."],
    html: {}, transition: { type: "fade", time: 3000 }

  },
  mesopelagic: {
    name: "mesopelagic",
    paths: ["thermosphere", "mesopelagic"],
    choicePrompt: "You've hit a fork in the road! Where will you go?",
    choices: ["To the THERMOSPHERE, amidst the Aurora Borealis.", "To the MESOPELAGIC ZONE, the ocean's twilight zone."],
    html: {}, transition: { type: "fade", time: 3000 }

  },
  sampletest: {
    name: "sampletest",
    paths: ["thermosphere", "mesopelagic"],
    choicePrompt: "You've hit a fork in the road! Where will you go?",
    choices: ["To the THERMOSPHERE, amidst the Aurora Borealis.", "To the MESOPELAGIC ZONE, the ocean's twilight zone."],
    html: {}, transition: { type: "fade", time: 3000 }

  },
  welcome: {
    name: "welcome",
    paths: ["thermosphere", "mesopelagic"],
    choicePrompt: "You've hit a fork in the road! Where will you go?",
    choices: ["To the THERMOSPHERE, amidst the Aurora Borealis.", "To the MESOPELAGIC ZONE, the ocean's twilight zone."],
    html: {}, transition: { type: "fade", time: 3000 }

  }
};

module.exports = locations;
