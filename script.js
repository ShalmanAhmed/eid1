// Hide animation after 3 seconds
setTimeout(() => {
  document.getElementById("animation").style.display = "none";
}, 3000);

// Get friend's name from URL
// Example: index.html?name=Rahim
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

if (name) {
  document.getElementById("friendName").innerText = "Dear " + name;
}

const flowerButton = document.getElementById("flowerBtn");

if (flowerButton) {
  flowerButton.addEventListener("click", () => {
    const targetName = name ? encodeURIComponent(name) : "";
    const targetUrl = targetName
      ? `animation.html?name=${targetName}`
      : "animation.html";
    window.location.href = targetUrl;
  });
}