export default class View {
    constructor(articles) {
        this.articles = articles;
        this.articles.addSubscriber(this.render);
    }

    render(articles) {
        document.querySelector('ul').innerHTML = articles.map((article) => `<li>${article}</li>`).join('');
    }
}