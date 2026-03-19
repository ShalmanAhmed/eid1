const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const toName = document.getElementById("toName");
const stage = document.getElementById("flowerStage");
const playAgain = document.getElementById("playAgain");

if (name && toName) {
  toName.textContent = `For ${name}`;
}

function burstFlowers(centerX, centerY, count = 28) {
  const petals = ["🌸", "🌺", "🌼", "🌷", "💮"];

  for (let i = 0; i < count; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.textContent = petals[Math.floor(Math.random() * petals.length)];

    const angle = (Math.PI * 2 * i) / count;
    const distance = 110 + Math.random() * 160;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance - (Math.random() * 65 + 20);

    petal.style.setProperty("--x", `${centerX}px`);
    petal.style.setProperty("--y", `${centerY}px`);
    petal.style.setProperty("--dx", `${dx}px`);
    petal.style.setProperty("--dy", `${dy}px`);
    petal.style.setProperty("--rot", `${Math.floor(Math.random() * 360)}deg`);
    petal.style.setProperty("--size", `${22 + Math.floor(Math.random() * 20)}px`);
    petal.style.animationDelay = `${Math.random() * 220}ms`;

    stage.appendChild(petal);
    setTimeout(() => petal.remove(), 1900);
  }
}

function playShow() {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  burstFlowers(centerX, centerY, 36);

  setTimeout(() => {
    burstFlowers(centerX * 0.36, centerY * 0.42, 22);
  }, 350);

  setTimeout(() => {
    burstFlowers(centerX * 1.64, centerY * 0.48, 22);
  }, 700);
}

playShow();

if (playAgain) {
  playAgain.addEventListener("click", playShow);
}
