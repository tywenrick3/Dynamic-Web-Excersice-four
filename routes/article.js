const express = require('express');

const router = express.Router();

const firestore = require('firebase/firestore');

const db = firestore.getFirestore();

//Get article by ID
router.get('/:id', (req, res) => {
	const postId = req.params.id;
	const blogpost = firestore.getDoc(firestore.doc(db, 'blogposts', postId));

	blogpost
		.then((response) => {
			const post = response.data();
			if (post) return res.send(post);
			return res.send(`No doc`);
		})
		.catch((error) => {
			res.send(`error: ${error}`);
		});
	res.send();
});

router.get('/', (req, res) => {
	res.send([{ message: `Please include an ID` }]);
});

module.exports = router;
