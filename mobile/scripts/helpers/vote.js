function startVote(type, data) {
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "vote"))[0].content//get vote html
    let voteAImgEl = document.getElementById('vote-a-img')
    let voteBImgEl = document.getElementById('vote-b-img')
    let voteABgEl = document.getElementById('vote-a-bg')
    let voteBBgEl = document.getElementById('vote-b-bg')
    let prompt = document.getElementById('vote-banner-text')
    // prompt.innerHTML = data.choicePrompt
    voteAImgEl.addEventListener('click', () => handleVote("choice1"));
    voteBImgEl.addEventListener('click', () => handleVote("choice2"));
    voteAImgEl.addEventListener("touchstart", () => {
        voteAImgEl.src = voteAImgEl.src.replace("up", "down");
        voteABgEl.src = voteABgEl.src.replace("up", "down");
    });
    voteAImgEl.addEventListener("mouseup", () => {
        voteAImgEl.src = voteAImgEl.src.replace("down", "up");
        voteABgEl.src = voteABgEl.src.replace("down", "up");
    });


    voteBImgEl.addEventListener("touchstart", () => {
        voteBImgEl.src = voteBImgEl.src.replace("up", "down");
        voteBBgEl.src = voteBBgEl.src.replace("up", "down");
    });

    voteAImgEl.addEventListener("mouseup", () => {
        voteBImgEl.src = voteBImgEl.src.replace("down", "up");
        voteBBgEl.src = voteBBgEl.src.replace("down", "up");
    });


    switch (type) {
        case "section":
            voteAImgEl.src = `/mobile/assets/vote/location/${data.choices[0]}/up.PNG`
            voteBImgEl.src = `/mobile/assets/vote/location/${data.choices[1]}/up.PNG`
            break
        case "character":
            voteAImgEl.src = `/mobile/assets/vote/character/${data.choices[0]}/up.PNG`
            voteBImgEl.src = `/mobile/assets/vote/character/${data.choices[1]}/up.PNG`
            break
    }
}



function startSkinVote(item) {
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "character"))[0].content
    const choice1El = document.getElementById("skin-choice1")
    const choice2El = document.getElementById("skin-choice2")
    choice1El.src = item.choices[0].img
    choice2El.src = item.choices[1].img

    choice1El.addEventListener('click', () => handleVote("choice1"));
    choice2El.addEventListener('click', () => handleVote("choice2"));
}


function handleVote(vote) {
    sendToServer({ type: "vote", val: vote })
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "thank"))[0].content
}

function lookUp() {
    const imgEl = document.getElementById("thank-img")
    imgEl.src = "/mobile/assets/vote/LookUp.png"
    console.log("hit lookup")
}

function flashOnce(voteEls) {
    voteEls.forEach((el) => {
        setTimeout(() => {
            el.src = el.src.replace("up", "down");
        }, flashTime / 2);

        setTimeout(() => {
            el.src = el.src.replace("down", "up"); // Change back if needed
        }, flashTime);
    });

}

const skinChoices = {
    pRobe: ["pino/robe/A", "pino/robe/B"],
    pHat: ["pino/hat/A", "pino/hat/B"],
    pColor: ["pino/color/A", "pino/color/B"],
    pDevice: ["pino/device/A", "pino/device/B"],
    jCollar: ["jaz/collar/A", "jaz/collar/B"],
    jHat: ["jaz/hat/A", "jaz/hat/B"],
    jColor: ["jaz/color/A", "jaz/color/B"],
    jDevice: ["jaz/device/A", "jaz/device/B"]
}