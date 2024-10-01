document.addEventListener('DOMContentLoaded', () => {
    const data = {
        status: "ok",
        totalResults: 4030,
        articles: [
            {
                source: { id: null, name: "New Atlas" },
                author: "Loz Blain",
                title: "Bigger, stronger, smarter GR-2 humanoid also gets major hand upgrades",
                description: "One of the more interesting and unique robots in the emerging humanoid space has received an unexpected upgrade. Shanghai's Fourier Intelligence has just launched the GR-2 – taller, heavier, smarter, more dextrous and much stronger than the GR-1.Continue Read…",
                url: "https://newatlas.com/ai-humanoids/fourier-gr-2-humanoid-robot/",
                urlToImage: "https://assets.newatlas.com/dims4/default/f5e6e44/2147483647/strip/true/crop/3369x1769+0+63/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fdd%2Ff4%2Fb0ec9f0242bb9b5ba7a68817ad87%2Fc054022c288c4e58de81ff610d6f4c0b.jpg&na.image_optimisation=0",
                publishedAt: "2024-10-01T05:21:58Z",
                content: "One of the more interesting and unique robots in the emerging humanoid space has received an unexpected upgrade. Shanghai's Fourier Intelligence has just launched the GR-2 taller, heavier, smarter, m… [+4353 chars]"
            }
        ]
    };

    const fetchNewsBtn = document.getElementById('fetchBtn');
    const newsContainer = document.getElementById('newsContainer');
    let articles = data.articles;  // Use the articles directly from the data variable

    function renderRandomArticle() {
        newsContainer.innerHTML = ''; 
        if (articles.length > 0) {
            const randomIndex = Math.floor(Math.random() * articles.length);
            const article = articles[randomIndex];
            const articleElement = document.createElement('div');
            articleElement.className = 'news-item';
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <img src="${article.urlToImage}" alt="${article.title}">
                <p><a href="${article.url}" target="_blank">Read more</a></p>
            `;
            newsContainer.appendChild(articleElement);
        } else {
            newsContainer.innerHTML = '<p>No articles available.</p>';
        }
    }

    fetchNewsBtn.addEventListener('click', renderRandomArticle);  // Trigger renderRandomArticle on button click
});
