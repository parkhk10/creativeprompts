import { Post } from '../models/post';

import firebaseReference from "../firebaseConfig"
import 'firebase/firestore';

export class DataService {
	constructor() {
	}
		
	getPostsFromDB() {

		var posts = [];

		var data = firebaseReference.collection('posts').get()
		.then(snapshot => {
			snapshot.forEach(doc => {
				posts.push(
					new Post(doc.data().title, 
									doc.data().author, 
									doc.data().contentText, 
									doc.data().contentImage, 
									doc.data().timeStamp
					)
				);   
			});
		})
		.catch(err => {
			console.log('Error getting documents', err);
		});

		return posts;
	}

	createPost(post) {
		firebaseReference.collection('posts').add({
			author: post.author,
			title: post.title,
			contentText: post.contentText,
			timeStamp: post.timestamp,
		})
		.then(function(docRef) {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch(function(error) {
			console.error("Error adding document: ", error);
		});
	}

}
