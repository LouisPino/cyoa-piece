let ipAddress;
const promptVoteTime = 3000
const voteLength = 10000 - promptVoteTime
document.addEventListener("DOMContentLoaded", function () {
  let locations;
  let extras;
  let scripts;
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
          locations = msg.data["locations"];
          extras = msg.data.extras;
          scripts = msg.data.scripts;
          // for (script of scripts) {
          //   // run helper function declarations
          // //   if (["characterSelectAnimation", "qrcode.min.js", "voteHelpers"].includes(script.name))
          // //     runSetupScript(script.name)
          // // }
          break;
        case "section":
          sectionChange(locations[msg.data.name]);
          break;
        case "intermission":
          intermissionStart();
          break;
        case "badguy":
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
              }, promptVoteTime)
              break;
            case "skinChoice":
              displaySkinChoice(msg.data.item, msg.data.winner);
              break;
            case "path":
              promptVote(mainEl, extras)
              setTimeout(() => {
                displayVote(mainEl, extras, voteLength);
              }, promptVoteTime)
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
    const scriptObj = scripts.find(script => script.name === scriptName);
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
    let texts = []
    const textBodyEl = document.querySelector(".text-body")
    for (el of textEls) {
      texts.push(el.innerText)
      el.remove()
    }
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

  function punchBadGuy(badguyhealth) {
    let guyEl = document.getElementById("bad-guy")
    if (badguyhealth < 4) {
      guyEl.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4ZdHAZCyp05x-CkfDVdtzuRY0b0mJ40izg&s"
    }
    if (badguyhealth < 1) {
      guyEl.src = "https://cdn.dribbble.com/users/2194692/screenshots/4931328/media/2be30908d56c5cc3e6a3bb3090bed0d0.jpg"
    }
  }


});