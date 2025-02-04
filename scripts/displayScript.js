document.addEventListener("DOMContentLoaded", function () {
  let locations;
  let extras;
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
          // initializeWebSocket(ipAddress);
          break;
        case `htmlFiles`:
          locations = msg.data["locations"];
          extras = msg.data.extras;
          break;
        case "section":
          sectionChange(locations[msg.data.name]);
          if (msg.data.name === "welcome") {
            new QRCode(
              document.getElementById("qrcode"),
              `http://${ipAddress}:8000`
            );
          }
          break;
        case "intermission":
          intermissionStart();
          break;
        case "badguy":
          punchBadGuy(msg.data);
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
      }
    };
  }

  const mainEl = document.getElementById("display-main");

  function toggleHTML(section) {
    mainEl.innerHTML = section.html.display;
  }

  function toggleSkinHTML(item) {
    mainEl.innerHTML = extras.filter(
      (extra) => extra.name === "skin"
    )[0].content;
    const choice1El = document.getElementById("skin-choice1");
    const choice2El = document.getElementById("skin-choice2");
    const choice3El = document.getElementById("skin-choice3");
    const choice4El = document.getElementById("skin-choice4");
    const choice5El = document.getElementById("skin-choice5");
    const promptEl = document.getElementById("skin-prompt");
    choice1El.src = item.choices[0].img;
    choice2El.src = item.choices[1].img;
    choice3El.src = item.choices[2] ? item.choices[2].img : "";
    choice4El.src = item.choices[3] ? item.choices[3].img : "";
    choice5El.src = item.choices[4] ? item.choices[4].img : "";
    promptEl.innerHTML = item.prompt;
  }

  function sectionChange(section) {
    console.log(section)
    toggleHTML(section);
    setCharacterSprites(section.movingSprites);
  }

  function displaySkinChoice(item, winner) {
    const choice1El = document.getElementById("skin-choice1");
    choice1El.src = item.choices[winner].img;
    choice1El.classList.add("skin-winner");
    const choice2El = document.getElementById("skin-choice2");
    const choice3El = document.getElementById("skin-choice3");
    const choice4El = document.getElementById("skin-choice4");
    const choice5El = document.getElementById("skin-choice5");
    choice2El.remove();
    choice3El.remove();
    choice4El.remove();
    choice5El.remove();
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

  function intermissionStart() {
    console.log("it is intermission now");
  }

  function punchBadGuy(badguyhealth) {
    let guyEl = document.getElementById("bad-guy")
    if (badguyhealth < 4) {
      guyEl.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4ZdHAZCyp05x-CkfDVdtzuRY0b0mJ40izg&s"
    }
    if (badguyhealth < 1) {
      guyEl.src = "https://cdn.dribbble.com/users/2194692/screenshots/4931328/media/2be30908d56c5cc3e6a3bb3090bed0d0.jpg"
    }
  }

  const voteLength = 100;
  const votePrompt = document.createElement("h1");
  function promptVote() {
    votePrompt.classList.add("vote-prompt");
    votePrompt.innerText = `VOTE!! ${voteLength / 1000}`;
    let seconds = voteLength / 1000 - 1;
    mainEl.appendChild(votePrompt);
    const countdown = setInterval(() => {
      votePrompt.innerText = `VOTE!! ${seconds}`;
      seconds -= 1;
      if (seconds < 0) {
        clearInterval(countdown);
      }
    }, 1000);
  }
});
