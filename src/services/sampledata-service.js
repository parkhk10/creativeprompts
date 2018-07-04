import { Post } from '../models/post';

export class SampleDataService {
	constructor(numPosts) {
		this.numPosts = numPosts
	}

	getPosts() {
		var title = "succulents are so cool";
		var author = "keren1";
		var contentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut. Orci sagittis eu volutpat odio blah blah blah blah blah";
		var posts = [];
		for (var i = 0; i < this.numPosts; i++) {
			posts.push(new Post(title, author, contentText));
		}
		return posts;
	}
	
}