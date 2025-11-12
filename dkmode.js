const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }

  localStorage.setItem("dark-mode", body.classList.contains("dark-mode"));
});

window.addEventListener("load", () => {
  if (localStorage.getItem("dark-mode") === "true") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  }
});