// news.js
async function loadNews() {
  const container = document.getElementById("news-container");
  container.innerHTML = "<p>Loading news...</p>";

  try {
    const apiKey = "3caba74b35b4465391bb6f1c951e90e3"; // Replace with your NewsAPI.org key
    const url = `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=5&apiKey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.articles || data.articles.length === 0) {
      container.innerHTML = "<p>No news available.</p>";
      return;
    }

    container.innerHTML = data.articles.map(article => `
      <div class="news-card">
        ${article.urlToImage ? `<img src="${article.urlToImage}" alt="News Image" class="news-img">` : ""}
        <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
        <p>${article.description || ""}</p>
        <p><small>Source: ${article.source.name}</small></p>
      </div>
    `).join("");

    // Apply dark mode styles if active
    if (document.body.classList.contains("dark-mode")) {
      document.querySelectorAll(".news-card").forEach(card => {
        card.classList.add("dark-card");
      });
    }

  } catch (error) {
    console.error(error);
    container.innerHTML = "<p>Failed to load news. Please try again later.</p>";
  }
}

loadNews();

// Optional: Listen for theme changes from dkmode.js
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.querySelectorAll(".news-card").forEach(card => {
    card.classList.toggle("dark-card");
  });
});
