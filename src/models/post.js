export class Post {
	constructor(title, author, contentText) {
		this.title = title;
		this.author = author;
		this.contentText = contentText;
		this.timestamp = new Date().toUTCString();
	}
}
