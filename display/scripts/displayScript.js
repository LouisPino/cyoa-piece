let ipAddress;
let voteLength
let winnerLength
let promptLength
document.addEventListener("DOMContentLoaded", function () {
  let locations;
  let extras;
  let scripts;
  let locationScripts;
  let characters = {
    pino: {

    },
    jaz: {
      hat: 3
    }
  }
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
          voteLength = msg.data["voteLength"]
          winnerLength = msg.data["winnerLength"]
          promptLength = msg.data["promptLength"]
          locations = msg.data["locations"];
          extras = msg.data.extras;
          scripts = msg.data.scripts;
          locationScripts = msg.data["locationScripts"]
          break;
        case "section":
          sectionChange(locations[msg.data.name]);
          break;
        case "intermission":
          intermissionStart();
          break;
        case "bossHealth":
          punchBadGuy(msg.data);
          break;
        case "character":
          revealCharacter(msg.data);
          break;
        case "vote":
          switch (msg.data.type) {
            case "skin":
              promptVote(mainEl, extras)
              setTimeout(() => {
                displayVote(mainEl, extras, voteLength);
                toggleSkinHTML(msg.data.item);
              }, promptLength)
              break;
            case "skinChoice":
              displaySkinChoice(msg.data.item, msg.data.winner);
              break;
            case "path":
              promptVote(mainEl, extras, msg.data.currentLocation)
              setTimeout(() => {
                displayVote(mainEl, extras, voteLength, msg.data.currentLocation);
              }, promptLength)
              break;
            case "vote-cast":
              flashCtrl(msg.data.choice)
              break;
            case "winner":
              displayWinner(msg.data.winner, extras, mainEl, msg.data.currentLocation)
              break;
          }
          break;
        case "game-score":
          displayLeaderboard(msg.data);
          break;
        case "sandbox":
          if (msg.data.name === "next-line") {
            nextLine()
          }
          else if (msg.data.name === "change-bg") {
            changeBg(msg.data.value)
          }
          else if (msg.data.name === "dialogue-sprite") {
            changeDialogueSprite(msg.data.value)
          }
          else if (msg.data.name === "toggle-box") {
            toggleBox(msg.data.value, characters)
          }
          else if (msg.data.name === "slide-boxX") {
            slideBoxX(msg.data.value, characters)
          }
          else if (msg.data.name === "slide-boxY") {
            slideBoxY(msg.data.value, characters)
          }
          else if (msg.data.name === "fade-box") {
            fadeBox(msg.data.value, characters)
          }
          else if (msg.data.name === "clear-text") {
            clearText()
          }
          else if (msg.data.name === "location-banner") {
            locationBanner(msg.data.value)
          }
          break;
      }
    };
  }

  // function runSetupScript(scriptName) {
  //   const scriptObj = scripts.find(script => script.name === scriptName);
  //   if (!scriptObj) {
  //     console.error(`Script with name "${scriptName}" not found.`);
  //     return;
  //   }
  //   const scriptTag = document.createElement('script');
  //   scriptTag.textContent = scriptObj.content;
  //   document.head.appendChild(scriptTag);
  // }

  function runSectionScript(scriptName) {
    const scriptObj = locationScripts.find(script => script.name === scriptName);
    if (!scriptObj) {
      console.error(`Script with name "${scriptName}" not found.`);
      return;
    }
    eval(scriptObj.content)
  }


  const mainEl = document.getElementById("display-main");
  function toggleHTML(section) {
    mainEl.innerHTML = section.html.display;
  }


  function sectionChange(section) {
    toggleHTML(section);
    let textEls = document.querySelectorAll(".text")
    let texts = [
      // ENTER YOUR SCENE'S TEXT HERE AS AN ARRAY OF STRINGS ONE PER LINE
      "*grumble grumble*",
      " We… are the golems…Made of earth and mud…",
      "*grumble* … you…you… YOU . . .  ",
      "have come by at the perfect moment! *grumble*",
      "We were just about to rehearse for the Sylvan Forest dance recital *grumble grumble*",
      "Please, take a moment to watch our performance…",
      "*grumble* Thank you for your time… Let us help you with your journey…*grumble* come over here…",
      "We think this portal will take you where you need to go next…."
    ]
    const textBodyEl = document.querySelector(".text-body")
    // for (el of textEls) {
    //   texts.push(el.innerText)
    //   el.remove()
    // }
    runSectionScript(section.name)
    // typeTextAutomatic(texts, textBodyEl);
    typeTextManual(texts, textBodyEl);
    setCharacterSprites(section.movingSprites);
  }



  function setCharacterSprites(moving) {
    const wizardEl = document.getElementById("wizardSprite");
    const jesterEl = document.getElementById("jesterSprite");
    if (moving) {
      if (wizardEl) {
        wizardEl.src = "../characters/wizard.gif";
      }
      if (jesterEl) {
        jesterEl.src = "../characters/jester.gif";
      }
    } else {
      if (wizardEl) {
        wizardEl.src = "../characters/wizard.jpg";
      }
      if (jesterEl) {
        jesterEl.src = "../characters/jester.jpg";
      }
    }
  }

  // function intermissionStart() {
  //   console.log("it is intermission now");
  // }

  //health is in %
  function punchBadGuy(bossHealth) {
    let healthBar = document.getElementById("health-bar")
    healthBar.style.width = bossHealth * 100 + "%"
    if (bossHealth === 0) {
      healthBar.style.width = "0"
    }
  }
});