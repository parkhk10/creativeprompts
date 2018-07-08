import { Post } from '../models/post';
import succulent_pic from '../img/succulent.jpeg';
import succulent_pots from '../img/succulent_pots.jpeg';
import mini_pots from '../img/mini_pots.jpeg';

export class SampleDataService {
	constructor(numPosts) {
		this.numPosts = numPosts
	}

	getPosts() {
		var title = "succulents are so cool";
		var author = "keren1";
		var contentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut. Orci sagittis eu volutpat odio blah blah blah blah blah";

		var title1 = "succulents are so cool but mangoes are cooler";
		var author1 = "keren2";
		var contentText1 = "Lorem ipsum dolor sit amet, hi my name is keren park and i like to eat mangoes yes i do very very much they are yummy and all sorts of delicious. i love mangoes so much i even wrote about it on this mysterious biography that junwon dug up from somewhere. Man mangoes are so delicious i can eat them all day every day and for every meal. I wonder if I will go to the grocery store and buy some mangoes so i can eat them fro breakfast lunch and dinner. Once again my name is keren park and i love mangoes very much so very much they are my life. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut. Orci sagittis blah blah blah blah blah";

		var title2 = "succulents are so cool and here is a pic";
		var author2 = "keren3";
		var contentImg2 = succulent_pic;
		var contentText2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut. Orci sagittis eu volutpat odio blah blah blah blah blah";

		var title3 = "Wow! Some succulents in a some little pots.";
		var author3 = "keren5";
		var contentImg3 = succulent_pots;
		var contentText3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut. Orci sagittis eu volutpat odio blah blah blah blah blah";

		var title4 = "this is kinda cool.";
		var author4 = "keren4";
		var contentImg4 = mini_pots;

		var title5 = "help my npm doesnt work";
		var author5 = "keren h. park";
		var contentText5 = "Lorem ipsum dolor sit amet, my name is keren park an my npm doesnt work i tried to do all kinds of commands with it and none of it actually did anything rip my life omg somebody help me pls consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut. Orci sagittis eu volutpat odio blah blah blah blah blah";

		var posts = [];
		// for (var i = 0; i < this.numPosts; i++) {
		// 	posts.push(new Post(title, author, contentText, null));
		// 	posts.push(new Post(title1, author1, contentText1, null));
		// 	posts.push(new Post(title2, author2, null, contentImg2));
		// }
		posts.push(new Post(title4, author4, null, contentImg4, new Date()));
		posts.push(new Post(title1, author1, contentText1, null, new Date()));
		posts.push(new Post(title, author, contentText, null, new Date()));
		posts.push(new Post(title2, author2, contentText2, contentImg2, new Date()));
		posts.push(new Post(title3, author3, contentText3, contentImg3, new Date()));
		posts.push(new Post(title5, author5, contentText5, null, new Date()));


		return posts;
	}

}
