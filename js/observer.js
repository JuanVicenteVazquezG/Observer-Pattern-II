import Articles from './articles.js';
import View from './view.js';

document.onload = (function () {
    const articles = new Articles();
    const view = new View(articles);

    document.querySelector('button').addEventListener('click', () => {
        const input = document.querySelector('input');
        const article = input.value;
        articles.addArticle(article);

        document.querySelector('ul')
            .innerHTML = articles
                .map((article) => {
                    return `<li>${article}</li>`;
                })
                .join('');
    });





})();