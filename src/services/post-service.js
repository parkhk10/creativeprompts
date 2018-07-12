import { Post } from '../models/post';

import firebaseReference from "../firebaseConfig"
import 'firebase/firestore'

export class PostsService {
	constructor(numPosts) {
		this.numPosts = numPosts
    }
    

	getPostsFromDB() {

        var posts = [];

        var data = firebaseReference.collection('days').get()
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
                //doc.id, doc.data().author);
              //console.log(posts);
            });
        
          })
          .catch(err => {
            console.log('Error getting documents', err);
          });

          return posts;
      

    
		// for (var i = 0; i < this.numPosts; i++) {
		// 	posts.push(new Post(title, author, contentText, null));
		// }

	}

}
