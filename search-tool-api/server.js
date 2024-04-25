const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

if (!API_KEY || !API_URL) {
  console.error('API_KEY or API_URL is not provided');
  process.exit(1);
}

app.use(cors());

app.get('/api/search', async (req, res) => {
  const searchTerm = req.query.q;
  try {
    const response = await fetch(
      `${API_URL}?q=${searchTerm}&api-key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data from Guardian API');
    }

    const data = await response.json();

    const articles = data.response.results.map((article) => ({
      id: article.id,
      sectionId: article.sectionId,
      sectionName: article.sectionName,
      title: article.webTitle,
      url: article.webUrl,
      publicationDate: article.webPublicationDate,
    }));

    res.json({ results: articles });
  } catch (error) {
    console.error('Error fetching data from Guardian API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
