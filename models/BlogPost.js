let postIdCounter = 1;

class BlogPost{

    constructor(title, content, author) {
        this.id = postIdCounter++;
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = new Date();
    }
}

module.exports = BlogPost;