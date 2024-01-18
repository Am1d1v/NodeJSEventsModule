import EventEmitter from 'events';

class Post extends EventEmitter {
    constructor(author, text){
        super();
        this.author = author;
        this.text = text;
        this.likesQuantity
    }

    like(){
        this.likesQuantity += 1;
    }
}

const myPost = new Post('AuthorName', 'PostText');