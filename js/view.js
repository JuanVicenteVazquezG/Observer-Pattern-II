export class View {
    constructor(articles) {
        articles.addArticle(this.render);
    }

    render(articles) {
        document.querySelector('ul').innerHTML = articles.map((article) => `<li>${article}</li>`).join('');
    }
}