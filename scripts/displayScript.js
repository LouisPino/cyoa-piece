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
      }
    };
  }

  const mainEl = document.getElementById("display-main");

  function toggleHTML(section) {
    mainEl.innerHTML = section.html.display;
  }

  function revealCharacter(charObj){
    mainEl.innerHTML = extras.filter(
      (extra) => extra.name === "characterReveal"
    )[0].content; 
    const asset1El = document.getElementById("asset-1");
    const asset2El = document.getElementById("asset-2");
    const asset3El = document.getElementById("asset-3");
    const asset4El = document.getElementById("asset-face");
    if(Object.keys(charObj)[0] === "jesterFace"){
      console.log("hit")
      asset1El.src = "https://upload.wikimedia.org/wikipedia/commons/c/c0/Heinrich_Vogtherr_d._J._Schalksnarr.JPG"
      asset2El.src = "https://media.istockphoto.com/id/507272482/vector/jolly-jester.jpg?s=612x612&w=0&k=20&c=3Ow0ZHBOzUVUbA9GhqH9PfUqshXugy97C-_zRnfoPgs="
      asset3El.src = "https://www.themarysue.com/wp-content/uploads/2023/10/Pomni-and-The-Amazing-Digital-Circus-Cast.jpg"
      asset4El.src = "https://preview.redd.it/i-did-not-know-this-existed-pomni-man-v0-yakskg9za90c1.jpg?auto=webp&s=6a30097d5f20a9b97c8509a7dd6aa3fd849bb9d7"
    }else{
      asset1El.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7b114df6-2cc6-4298-8a2f-6406f7c47dbe/d9680ro-37d1f758-bbd2-4197-95ba-4bc9757018b2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdiMTE0ZGY2LTJjYzYtNDI5OC04YTJmLTY0MDZmN2M0N2RiZVwvZDk2ODByby0zN2QxZjc1OC1iYmQyLTQxOTctOTViYS00YmM5NzU3MDE4YjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HSocytwWC9zg5o7EszEWlFv0vvT1AUzxyhtj5TuII80"
      asset2El.src = "https://helloartsy.com/wp-content/uploads/kids/mythology/how-to-draw-a-wizard/how-to-draw-a-wizard-step-9.jpg"
      asset3El.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Albus_Dumbledore.jpg/149px-Albus_Dumbledore.jpg"
      asset4El.src = "https://happygoducky.com.au/cdn/shop/products/WoodentoyWizardCopy_d213175d-c794-4b82-bd81-f3f71ccfdeaa.jpg?v=1665574664"

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

  const voteLength = 1000;
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
