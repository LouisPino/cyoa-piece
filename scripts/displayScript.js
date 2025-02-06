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
        case "game-score":
          displayLeaderboard(msg.data);
          break;
      }
    };
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


  function revealCharacter(charObj) {
    mainEl.innerHTML = extras.filter(
      (extra) => extra.name === "characterReveal"
    )[0].content;
    const asset1El = document.getElementById("asset-1");
    const asset2El = document.getElementById("asset-2");
    const asset3El = document.getElementById("asset-3");
    const asset4El = document.getElementById("asset-face");
    const assetsEl = document.querySelector(".skin-assets")
    if (Object.keys(charObj)[0] === "jesterFace") {
      setTimeout(() => {
        asset1El.src = charObj.color.img
        asset1El.style.left = "0px"
        asset1El.style.opacity = 1
      }, 1000)
      setTimeout(() => {
        asset2El.src = charObj.points.img
        asset2El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset2El.getBoundingClientRect().width / 2)}px`
        asset2El.style.opacity = 1
      }, 2000)
      setTimeout(() => {
        asset3El.src = charObj.jesterDevice.img
        asset3El.style.left = `${assetsEl.getBoundingClientRect().width - asset3El.getBoundingClientRect().width}px`
        asset3El.style.opacity = 1
      }, 3000)
      setTimeout(() => {
        asset4El.src = charObj.jesterFace.img
        asset4El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset4El.getBoundingClientRect().width / 2)}px`
        asset4El.style.opacity = 1
      }, 4000)
      setTimeout(() => {
        asset1El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset4El.getBoundingClientRect().width / 2)}px`
        asset1El.style.bottom = "75%"
      }, 5000)
      setTimeout(() => {
        asset2El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset4El.getBoundingClientRect().width / 2)}px`
        asset2El.style.bottom = "75%"
      }, 6000)
      setTimeout(() => {
        asset3El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset4El.getBoundingClientRect().width / 2)}px`
        asset3El.style.bottom = "75%"
      }, 7000)

      setTimeout(() => {
        let newJester = "https://cdn-images.dzcdn.net/images/artist/7d241d43d2b13779977b6331205bc68d/1900x1900-000000-80-0-0.jpg"
        flashImages([asset1El, asset2El, asset3El], asset4El, newJester)
      }, 8000)
    } else {
      setTimeout(() => {
        asset1El.src = charObj.robe.img
        asset1El.style.left = "0px"
        asset1El.style.opacity = 1
      }, 1000)
      setTimeout(() => {
        asset2El.src = charObj.hat.img
        asset2El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset2El.getBoundingClientRect().width / 2)}px`
        asset2El.style.opacity = 1
      }, 2000)
      setTimeout(() => {
        asset3El.src = charObj.wizardDevice.img
        asset3El.style.left = `${assetsEl.getBoundingClientRect().width - asset3El.getBoundingClientRect().width}px`
        asset3El.style.opacity = 1
      }, 3000)
      setTimeout(() => {
        asset4El.src = charObj.wizardFace.img
        asset4El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset4El.getBoundingClientRect().width / 2)}px`
        asset4El.style.opacity = 1
      }, 4000)
      setTimeout(() => {
        asset1El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset4El.getBoundingClientRect().width / 2)}px`
        asset1El.style.bottom = "75%"
      }, 5000)
      setTimeout(() => {
        asset2El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset4El.getBoundingClientRect().width / 2)}px`
        asset2El.style.bottom = "75%"
      }, 6000)
      setTimeout(() => {
        asset3El.style.left = `${(assetsEl.getBoundingClientRect().width / 2) - (asset4El.getBoundingClientRect().width / 2)}px`
        asset3El.style.bottom = "75%"
      }, 7000)

      setTimeout(() => {
        let newChar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsLq8jGXoZygQoBD47jVCzB-5nIPLIWGG_A&s"
        flashImages([asset1El, asset2El, asset3El], asset4El, newChar)
      }, 8000)

    }
  }

  function toggleSkinHTML(item) {
    mainEl.innerHTML = extras.filter(
      (extra) => extra.name === "character"
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
    toggleHTML(section);
    let textEls = document.querySelectorAll(".text")
    let texts = []
    let textBodyEl = document.querySelector(".text-body")
    for (el of textEls) {
      texts.push(el.innerText)
      el.remove()
    }
    let i = 0; // Index for texts array

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

  const voteLength = 3000;
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

  function flashImages(assetsArr, oldImage, newImage) {
    let i = 50;
    let oldSrc = oldImage.src;

    function flash() {
      const flashTime = i > 45 ? i * 16 : i ** 2 / 10
      if (i > 1) {
        setTimeout(() => {
          for (const asset of assetsArr) {
            asset.style.transition = "0s";
            asset.style.opacity = i % 2 === 0 ? "0" : "1";
          }
          oldImage.src = i % 2 === 0 ? newImage : oldSrc;
          i--;

          // Recursive call
          flash();
        }, flashTime); // Increasing delay as i decreases
      }
    }

    // Start the recursive flashing
    flash();
  }


});