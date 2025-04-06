function startVote(type, data) {
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "vote"))[0].content//get vote html
    let voteAImgEl = document.getElementById('vote-a-img')
    let voteBImgEl = document.getElementById('vote-b-img')
    let voteABgEl = document.getElementById('vote-a-bg')
    let voteBBgEl = document.getElementById('vote-b-bg')
    let prompt = document.getElementById('vote-banner-text')
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
            prompt.innerHTML = data.choicePrompts.mobile
            voteAImgEl.src = `/mobile/assets/vote/location/${data.choices[0]}/up.PNG`
            voteBImgEl.src = `/mobile/assets/vote/location/${data.choices[1]}/up.PNG`
            break
        case "character":
            prompt.innerHTML = data.choices[2]
            voteAImgEl.src = `/mobile/assets/vote/character/${data.choices[0]}/up.PNG`
            voteBImgEl.src = `/mobile/assets/vote/character/${data.choices[1]}/up.PNG`
            break
    }
}


function handleVote(vote) {
    sendToServer({ type: "vote", val: vote })
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "thank"))[0].content
}

function lookUp() {
    const imgEl = document.getElementById("thank-img")
    if (imgEl) {
        imgEl.src = "/mobile/assets/vote/LookUp.png"
    } else {
        const newBg = document.createElement("img")
        newBg.classList.add("complete-screen-img")
        newBg.style.zIndex = 100
        newBg.src = "/mobile/assets/vote/LookUp.png"
        mainEl.appendChild(newBg)
    }
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
    pColor: ["pino/color/A", "pino/color/B", "Pick a cat"],
    pHat: ["pino/hat/A", "pino/hat/B", "Which pattern?"],
    pDevice: ["pino/device/A", "pino/device/B", "Choose one"],
    pRobe: ["pino/robe/A", "pino/robe/B", "Green or purple?"],
    jColor: ["jaz/color/A", "jaz/color/B", "Pick a cat"],
    jCollar: ["jaz/collar/A", "jaz/collar/B", "Which one?"],
    jHat: ["jaz/hat/A", "jaz/hat/B", "Four or Two?"],
    jDevice: ["jaz/device/A", "jaz/device/B", "Choose a sound"]
}