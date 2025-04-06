let ipAddress;
let voteLength;
let winnerLength;
let promptLength;
let currentLocation;
let inDVD = false;
document.addEventListener("DOMContentLoaded", function () {
  const confetti = new JSConfetti();
  let locations;
  let extras;
  let scripts;
  let locationScripts;

  initializeWebSocket(location.hostname);
  function initializeWebSocket(ip) {
    const socket = new WebSocket(`ws://${ip}:8000/display`);
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
          locations = msg.data["locations"];
          extras = msg.data.extras;
          scripts = msg.data.scripts;
          locationScripts = msg.data["locationScripts"];
          break;
        case "section":
          inDVD = false;
          sectionChange(locations[msg.data.name]);
          currentLocation = msg.data;
          break;
        case "intermission":
          intermissionStart();
          break;
        case "bossHealth":
          punchBadGuy(msg.data);
          break;
        case "characterSelect":
          revealCharacter(msg.data);
          break;
        case "characters":
          switch (msg.route) {
            case "toggle-animation":
              toggleAnimation(msg.data[0]);
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
            case "shake":
              shakeChar(msg.data[0], msg.data[1]);
              break;
            case "hop":
              hopChar(msg.data[0]);
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
        case "sandbox":
          if (msg.data.name === "next-line") {
            nextLine();
          } else if (msg.data.name === "change-bg") {
            changeBg(msg.data.value);
          } else if (msg.data.name === "dialogue-sprite") {
            changeDialogueSprite(msg.data.value);
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

  let textBodyEl;
  function sectionChange(section) {
    sceneTransition(section.transition.type, section.transition.time);
    setTimeout(() => {
      toggleHTML(section);
      runSectionScript(section.name);
      textBodyEl = document.querySelector(".text-body");
      typeTextManual(texts, textBodyEl);
    }, section.transition.time / 2);
    let texts = [
      // ENTER YOUR SCENE'S TEXT HERE AS AN ARRAY OF STRINGS ONE PER LINE
      "*grumble grumble*",
      " We… are the golems…Made of earth and mud…",
      "*grumble* … you…you… YOU . . .  ",
      "have come by at the perfect moment! *grumble*",
      "We were just about to rehearse for the Sylvan Forest dance recital *grumble grumble*",
      "Please, take a moment to watch our performance…",
      "*grumble* Thank you for your time… Let us help you with your journey…*grumble* come over here…",
      "We think this portal will take you where you need to go next….",
    ];
  }

  //health is in %
  function punchBadGuy(bossHealth) {
    let healthBar = document.getElementById("health-bar");
    healthBar.style.width = bossHealth * 100 + "%";
    if (bossHealth === 0) {
      healthBar.style.width = "0";
    }
  }
});
