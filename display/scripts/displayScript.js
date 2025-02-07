document.addEventListener("DOMContentLoaded", function () {
  let locations;
  let extras;
  let scripts;
  let ipAddress;
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
          getAndRunScript("characterSelectAnimation")
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
              promptVote();
              toggleSkinHTML(msg.data.item);
              break;
            case "skinChoice":
              displaySkinChoice(msg.data.item, msg.data.winner);
              break;
            case "path":
              promptVote();
              break;
          }
          break;
        case "game-score":
          displayLeaderboard(msg.data);
          break;
      }
    };
  }

  function getAndRunScript(scriptName) {
    const scriptObj = scripts.filter(script => script.name === scriptName)[0];
    eval(scriptObj.content);
  }


  const mainEl = document.getElementById("display-main");

  function toggleHTML(section) {
    mainEl.innerHTML = section.html.display;
  }

  function displayLeaderboard(scores) {
    const leaderboardEl = document.querySelector(".leaderboard")
    leaderboardEl.innerHTML = ""
    let scoreEls = []
    for (score of scores) {
      const scoreEl = document.createElement("div")
      scoreEl.innerHTML = `${score.name} - ${score.score}`
      scoreEl.classList.add("display-score")
      scoreEls.push(scoreEl)
    }

    for (el of scoreEls) {
      leaderboardEl.appendChild(el)
    }

  }




  function sectionChange(section) {
    toggleHTML(section);
    let textEls = document.querySelectorAll(".text")
    let texts = []
    let textBodyEl = document.querySelector(".text-body")
    for (el of textEls) {
      texts.push(el.innerText)
      el.remove()
    }
    let i = 0; // Index for texts array
    getAndRunScript(section.name)

    function typeText() {
      if (i < texts.length) {
        const text = texts[i];
        let j = 0; // Index for characters in the current text

        function typeCharacter() {
          if (j < text.length) {
            textBodyEl.innerHTML += text[j];
            j++;
            setTimeout(typeCharacter, 50); // Type the next character
          } else {
            textBodyEl.innerHTML += "<br>"; // Add a line break after the text
            i++;
            setTimeout(typeText, 1000); // Move to the next text
          }
        }

        typeCharacter(); // Start typing the current text
      }
    }

    typeText(); // Start typing texts
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

  const voteLength = 10000;
  function promptVote() {
    let seconds = voteLength / 1000 - 1;
    mainEl.innerHTML = extras.filter(
      (extra) => extra.name === "vote"
    )[0].content;
    const countdown = setInterval(() => {
      // votePrompt.innerText = `VOTE!! ${seconds}`;
      seconds -= 1;
      if (seconds < 0) {
        clearInterval(countdown);
      }
    }, 1000);
  }



});