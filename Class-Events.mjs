import EventEmitter from 'events';

class Post extends EventEmitter {
    constructor(author, text){
        super();
        this.author = author;
        this.text = text;
        this.likesQuantity = 0;
    }

    // Increase likesQuantity by 1;
    like(){
        this.likesQuantity += 1;
        this.emit('likedPost');
    }
}

const myPost = new Post('AuthorName', 'PostText');

myPost.on('likedPost', () => {
    console.log(`Someone liked your post. Total likes on this post: ${myPost.likesQuantity}`);
});

console.log(myPost.author);
console.log(myPost.text);
console.log(myPost.likesQuantity);

myPost.like();
console.log(myPost.likesQuantity);
