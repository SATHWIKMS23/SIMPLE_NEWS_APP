const API_KEY = 'e695193ccf7343da982216149b21a399'; // Replace with your NewsAPI key

async function loadCategory(category) {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=15&apiKey=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.articles);
  } catch (err) {
    console.error("Failed to load news:", err);
  }
}

function displayNews(articles) {
  const container = document.getElementById('news-container');
  container.innerHTML = '';

  articles.forEach(article => {
    const card = document.createElement('div');
    card.className = 'news-card';

    card.innerHTML = `
      <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="News Image">
      <div class="content">
        <h2>${article.title}</h2>
        <p>${article.description || 'No description available.'}</p>
      </div>
      <a href="${article.url}" target="_blank">Read More</a>
    `;

    container.appendChild(card);
  });
}

// Load default category on start
loadCategory('technology');
