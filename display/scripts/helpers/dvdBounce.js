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

    let dx = Math.random() < 0.5 ? dvdSpeed : dvdSpeed;
    let dy = Math.random() < 0.5 ? dvdSpeed : dvdSpeed;

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
}