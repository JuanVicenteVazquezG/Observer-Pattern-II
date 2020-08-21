import Articles from './articles.js';
import View from './view.js';

document.onload = (function init() {
    const articles = new Articles();
    const view = new View(articles);

    articles.addSubscriber((articles) => alert(`Article ${articles[articles.length - 1]} was added!!!`));
    document.querySelector('button').addEventListener('click', () => {
        const input = document.querySelector('input');
        const article = input.value;
        articles.addArticle(article);
    });
})();

