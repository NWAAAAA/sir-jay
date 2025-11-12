// server.js
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 📰 Get Tech News Route
app.get("/technews", async (req, res) => {
  try {
    const response = await fetch("https://inshortsapi.vercel.app/news?category=technology");
    const data = await response.json();

    // Extract only key details
    const newsList = data.data.map((article) => ({
      title: article.title,
      content: article.content,
      imageUrl: article.imageUrl,
      readMoreUrl: article.readMoreUrl,
    }));

    res.json({ news: newsList });
  } catch (error) {
    console.error("Error fetching tech news:", error);
    res.status(500).json({ error: "Failed to fetch news." });
  }
});

app.listen(3000, () => console.log("✅ Server running on port 3000 (Tech News Mode)"));
