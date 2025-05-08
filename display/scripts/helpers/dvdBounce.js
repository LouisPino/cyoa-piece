const dvdSpeed = 1
function dvdBounce() {
  inDVD = true;
  removePino();
  removeJaz();
  pinoDiv.appendChild(pinoFaceLine)
  pinoDiv.appendChild(pinoBodyLine)
  pinoDiv.appendChild(pinoRobe)
  pinoDiv.appendChild(pinoHands)
  pinoDiv.appendChild(pinoHat)
  pinoDiv.appendChild(pinoFace)
  document.body.appendChild(pinoDiv)

  jazDiv.appendChild(jazFaceLine)
  jazDiv.appendChild(jazBody)
  jazDiv.appendChild(jazCollarLine)
  jazDiv.appendChild(jazCollar)
  jazDiv.appendChild(jazHat)
  jazDiv.appendChild(jazFace)
  document.body.appendChild(jazDiv)

  const container = document.getElementById("dvd-container");
  const sprites = document.querySelectorAll(".char-div");

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  sprites.forEach((sprite) => {
    if (sprite.id === "pino-char") {
      sprite.style.position = "absolute"
      sprite.style.left = `${0.6 * vw}px`;
      sprite.style.top = `${0.5 * vh}px`;
      sprite.classList.add("pino-dvd");
    } else {
      sprite.style.position = "absolute"
      sprite.style.left = `${0.1 * vw}px`;
      sprite.style.top = `${0.1 * vh}px`;
      sprite.classList.add("jaz-dvd");
    }

    let dx = Math.random() < 0.5 ? dvdSpeed : -1 * dvdSpeed;
    let dy = Math.random() < 0.5 ? dvdSpeed : -1 * dvdSpeed;

    function animate() {
      let left = parseFloat(sprite.style.left);
      let top = parseFloat(sprite.style.top);

      const spriteWidth = sprite.offsetWidth;
      const spriteHeight = sprite.offsetHeight;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const leftBoundary = left + dx;
      const rightBoundary = left + dx + spriteWidth;



      if (leftBoundary - 100 < 0 || rightBoundary + 100 > containerWidth) {
        dx = -dx;
      }

      if (top + dy < 0 || top + dy + spriteHeight + 100 > containerHeight - 200) {
        dy = -dy;
      }

      left += dx;
      top += dy;

      sprite.style.left = `${left}px`;
      sprite.style.top = `${top}px`;
      if (inDVD) {
        requestAnimationFrame(animate);
      } else {
        sprites.forEach((sprite) => {
          sprite.classList.remove("pino-dvd");
          sprite.classList.remove("jaz-dvd");
          sprite.style.left = `0`;
          sprite.style.top = `0`;
        })
        pinoDiv.remove()
        jazDiv.remove()
        removePino();
        removeJaz();
        return;
      }
    }
    requestAnimationFrame(animate);

  });











  toggleAnimation("dvd");
  setTimeout(() => {
    dvdHop(pinoDiv)
  }, 2000);
  setTimeout(() => {
    dvdHop(jazDiv)
  }, 8000);
  setTimeout(() => {
    dvdHop(pinoDiv)
  }, 18000);
  setTimeout(() => {
    dvdHop(jazDiv)
  }, 30000);
  setTimeout(() => {
    dvdHop(pinoDiv)
  }, 40000);
  setTimeout(() => {
    dvdHop(jazDiv)
  }, 50000);
  setTimeout(() => {
    dvdHop(pinoDiv)
  }, 60000);
  setTimeout(() => {
    dvdHop(jazDiv)
  }, 70000);
  setTimeout(() => {
    dvdHop(pinoDiv)
  }, 80000);
  setTimeout(() => {
    dvdHop(jazDiv)
  }, 90000);
  setTimeout(() => {
    dvdHop(pinoDiv)
  }, 100000);
  setTimeout(() => {
    dvdHop(jazDiv)
  }, 1100000);
  setTimeout(() => {
    dvdHop(pinoDiv)
  }, 130000);
  setTimeout(() => {
    dvdHop(jazDiv)
  }, 150000);
  setTimeout(() => {
    dvdHop(pinoDiv)
  }, 170000);
  setTimeout(() => {
    dvdHop(jazDiv)
  }, 190000);

}


function dvdHop(char) {
  // Remove animation from all img elements inside jazDiv
  if (currentLocation.name === "twilight") {
    stopRotate(char)
    setTimeout(() => {
      startRotate(char)
    }, 5000);
  }
  hopChar(char, 400, 5000);
}


function stopRotate(char) {
  char.querySelectorAll('img').forEach(img => {
    img.style.animation = 'none';
  });
}

function startRotate(char) {
  char.querySelectorAll('img').forEach(img => {
    img.style.animation = 'rotate360 15s linear infinite';
  });
}






function lightPulse() {
  const x = Math.random() * (1600 - 300) + 300;
  const y = Math.random() * (800 - 200) + 200;

  const dot = document.createElement("div");
  dot.className = "light-pulse";
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  document.body.appendChild(dot);

  setTimeout(() => {
    dot.remove();
  }, 300);
}







const activeBubbles = [];

function bubblePop() {
  const x = Math.random() * (1600 - 300) + 300;
  const y = Math.random() * (800 - 200) + 200;
  const hue = Math.floor(Math.random() * 360);

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/display/assets/locations/bubble.gif", true);
  xhr.responseType = "blob";
  xhr.onload = function () {
    const blobUrl = URL.createObjectURL(xhr.response);

    const bubble = document.createElement("img");
    bubble.src = blobUrl;
    bubble.className = "bubble-pop";
    bubble.style.position = "absolute";
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    bubble.style.pointerEvents = "none";
    bubble.style.filter = `grayscale(1) sepia(1) hue-rotate(${hue}deg) saturate(5)`;
    bubble.style.zIndex = 1000;

    document.body.appendChild(bubble);
    activeBubbles.push(bubble);

    setTimeout(() => {
      if (bubble.parentElement) {
        bubble.remove();
        URL.revokeObjectURL(blobUrl); // free memory
      }
      const index = activeBubbles.indexOf(bubble);
      if (index !== -1) {
        activeBubbles.splice(index, 1);
      }
    }, 1000);
  };
  xhr.send();
}
