export class Articles{
    constructor(){
        this.articles = ['apple', orange];
        this.subscribers =[];
    }
    
    addArticle (article){
        this.articles.push(article);
        this.notifySubscribers();
    }

    addSubscriber(callback){
        this.subscribers.push(callback);
    }

    notifySubscribers(){
        this.subscribers.forEach((subscriber)=>{
            subscriber(this.articles);
        });
    }
}