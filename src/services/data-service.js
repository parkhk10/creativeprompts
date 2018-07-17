import { Post } from '../models/post';

import firebaseReference from "../firebaseConfig";
import 'firebase/firestore';

export class DataService {
	constructor() {}

  getPromptsFromDB(state) {
      firebaseReference.collection('days')
      .limit(1) //only get the first prompt from the database
      .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              this.displayPromptsFromDB(doc.data().prompt, state)
            }
          })
        }) 
          .catch(err => {
            console.log('Error getting documents', err);
          });

  }

  //sets the prompt's state to the same one as DB
  displayPromptsFromDB(prompt, state) {
    state.setState({
      title: prompt
    });
  }

  updatePromptsFromDB(state, state_title) {
    firebaseReference.collection('days').doc(state_title).delete(); //deletes the old state
    this.getPromptsFromDB(state); //gets the new one
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
