let ipAddress;
let voteLength;
let winnerLength;
let promptLength;
let currentLocation;

let inDVD = false;
let history;
let textIdx = 0; // Index for texts array
let textsArr
let bossHealth


let swipeCount
let swipeCountTarget
let swipeType


let madlibWords = [{ word: "bird", type: "noun" }, { word: "Missouri", type: "noun" }, { word: "drink", type: "verb" }, { word: "devour", type: "verb" }, { word: "stinky", type: "adjective" }, { word: "exaggerated", type: "adjective" }]
const wordOrder = ["adjective", "adjective", "adjective", "celebrity", "adjective", "noun", "noun", "noun", "number", "musical instrument", "adjective", "noun", "noun", "noun", "adjective", "adjective", "noun", "noun", "hobby", "number", "number"]
let wordTypes
let madlibIdx = 0
let madlibbing = false

let socket

document.addEventListener("DOMContentLoaded", function () {
  const confetti = new JSConfetti();
  let locations;
  let extras;
  let scripts;
  let locationScripts;

  initializeWebSocket(location.hostname);
  function initializeWebSocket(ip) {
    socket = new WebSocket(`ws://${ip}:8000/display`);
    // Confirm connection success
    socket.onopen = function (e) {
      console.log("WebSocket connection established!");
    };

    // Run when message is received from server (Max -> Server -> Client)
    socket.onmessage = function (event) {
      let msg = JSON.parse(event.data);
      switch (msg.type) {
        case "ip-address":
          ipAddress = msg.data;
          break;
        case `initialFileServe`:
          voteLength = msg.data["voteLength"];
          winnerLength = msg.data["winnerLength"];
          promptLength = msg.data["promptLength"];
          swipeCountTarget = msg.data["swipeCountTarget"];
          locations = msg.data["locations"];
          extras = msg.data.extras;
          scripts = msg.data.scripts;
          locationScripts = msg.data["locationScripts"];
          wordTypes = msg.data["wordTypes"];
          storeCharacters(msg.data["characters"])
          break;
        case "section":
          inDVD = false;
          sectionChange(locations[msg.data.name]);
          currentLocation = msg.data;
          break;
        case "intermission":
          intermissionStart();
          break;
        case "triggerAttack":
          bossHealth = msg.data
          triggerAttack();
          break;
        case "swipeCount":
          swipeCount = msg.data
          incrementPower()
          break;
        case "swipeType":
          swipeType = msg.data
          changeSwipePrompt(swipeType)
          break;
        case "characterSelect":
          revealCharacter(msg.data);
          break;
        case "history":
          history = msg.data
          break;
        case "characters":
          switch (msg.route) {
            case "toggle-animation":
              let charName
              if (msg.data[1]) {
                charName = msg.data[1]
              } else {
                charName = "duo"
              }
              toggleAnimation(msg.data[0], charName);
              break;
            case "remove":
              if (msg.data[0] === "pino") {
                if (document.getElementById("pino-char")) {
                  document
                    .getElementById("pino-char")
                    .classList.remove("pino-dvd");
                  removePino();
                }
              } else if (msg.data[0] === "jaz") {
                if (document.getElementById("jaz-char")) {
                  document
                    .getElementById("jaz-char")
                    .classList.remove("jaz-dvd");
                  removeJaz();
                }
              }
              break;
            case "render":
              if (msg.data[0] === "pino") {
                renderPino();
              } else if (msg.data[0] === "jaz") {
                renderJaz();
              }
              break;
            case "reveal":
              revealCharacter(msg.data[0], extras, confetti);
              break;
            case "characterData":
              storeCharacters(msg.characters);
              break;
            case "jump":
              jumpChar(msg.data[0], msg.data[1], msg.data[2]);
              break;
            case "land":
              landChar(msg.data[0], msg.data[1], msg.data[2]);
              break;
            case "fade":
              fadeChar(
                msg.data[0],
                msg.data[1],
                msg.data[2],
                msg.data[3],
                msg.data[4]
              );
              break;
            case "slide":
              slideChar(msg.data[0], msg.data[1], msg.data[2], msg.data[3]);
              break;
            case "left":
              flipChar(msg.route, msg.data[0]);
              break;
            case "right":
              flipChar(msg.route, msg.data[0]);
              break;
            case "shake":
              shakeChar(msg.data[0], msg.data[1], msg.data[2]);
              break;
            case "hop":
              hopChar(msg.data[0], msg.data[1], msg.data[2], msg.data[3]);
              break;
            case "changeSize":
              changeSize(msg.data[0], msg.data[1], msg.data[2]);
              break;
            case "flyIn":
              flyInRotateChar(msg.data[0], msg.data[1], msg.data[2]);
              break;
            case "conga":
              congaLine(msg.data[0], msg.data[1], msg.data[2]);
              break;
          }
          break;
        case "vote":
          switch (msg.data.type) {
            case "skin":
              promptVote(mainEl, extras, msg.data, "skin");
              setTimeout(() => {
                displayVote(mainEl, extras, voteLength, msg.data, "skin");
                // toggleSkinHTML(msg.data.item);
              }, promptLength);
              break;
            case "path":
              const boatCtrEl = document.getElementById("boat-ctr");
              jumpChar(boatCtrEl, 3000, 3000)
              promptVote(mainEl, extras, msg.data, "path");
              setTimeout(() => {
                displayVote(mainEl, extras, voteLength, msg.data, "path");
              }, promptLength);
              break;
            case "vote-cast":
              flashCtrl(msg.data.choice);
              break;
            case "winner":
              displayChoice(msg.data.winner, confetti);
              break;
            case "skin-winner":
              displayChoice(msg.data.winner, confetti);
              break;
          }
          break;
        case "game-score":
          displayLeaderboard(msg.data);
          break;
        case "audience-sample":
          if (currentLocation.name === "twilight") {
            bubblePop()
          } else {
            lightPulse()
          }
          break;
        case "sandbox":
          if (msg.data.name === "next-line") {
            nextLine();
          } else if (msg.data.name === "change-bg") {
            changeBg(msg.data.value);
          } else if (msg.data.name === "dialogue-sprite") {
            changeDialogueSprite(msg.data.value);
          } else if (msg.data.name === "npc") {
            changeNPCSrc(msg.data.value);
          } else if (msg.data.name === "toggle-box") {
            toggleBox(msg.data.value, characters);
          } else if (msg.data.name === "slide-boxX") {
            slideBoxX(msg.data.value, characters);
          } else if (msg.data.name === "slide-boxY") {
            slideBoxY(msg.data.value, characters);
          } else if (msg.data.name === "fade-box") {
            fadeBox(msg.data.value, characters);
          } else if (msg.data.name === "clear-text") {
            clearText();
          } else if (msg.data.name === "location-banner") {
            locationBanner(msg.data.value);
          }
          break;
        case "map":
          switch (msg.route) {
            case "render":
              renderMap(characters.p.device)
              break
            case "remove":
              removeMap()
              break
            case "change":
              changeMapSrc(msg.data[0])
              break
            case "move":
              moveMap(msg.data[0], msg.data[1])
              break
            case "fade":
              fadeMap(msg.data[0])
              break
          }
          break;
        case "madlib":
          switch (msg.route) {
            case "word":
              madlibWords.push({ word: msg.data.word, type: msg.data.wordType })
              createFloatingWord(msg.data)
              break
            case "draw":
              displayWord(wordOrder[madlibIdx])
              break
            case "timer":
              madlibTimeChange(msg.data)
              break
            case "clear":
              madlibClearBoard()
              break
          }
          break;
      }
    };
  }

  function runSectionScript(scriptName) {
    const scriptObj = locationScripts.find(
      (script) => script.name === scriptName
    );
    if (!scriptObj) {
      console.error(`Script with name "${scriptName}" not found.`);
      return;
    }
    eval(scriptObj.content);
  }

  const mainEl = document.getElementById("display-main");
  function toggleHTML(section) {
    mainEl.innerHTML = section.html.display;
  }

  function sectionChange(section) {
    textIdx = 0
    sceneTransition(section.transition.type, section.transition.time);
    setTimeout(() => {
      if (section.name != "frogs" && section.name != "golems") {
        changeBg(`animated/${section.bgName}.gif`)
      } else {
        changeBg(`stills/${section.bgName}.png`)
      }
      toggleHTML(section);
      runSectionScript(section.name);
    }, section.transition.time / 2);
  }



});


function sendToServer(msg) {
  socket.send(JSON.stringify(msg));
}



function checkHistory(locationName) {
  return Object.values(history.locationsVisited).some(loc => loc.name === locationName);
}
