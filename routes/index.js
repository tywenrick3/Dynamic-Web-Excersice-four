const express = require('express');

const router = express.Router();

const firebase = require('firebase/firestore/lite'); // fix
//init Firestore Database
const db = firebase.getFirestore(); // fix
const blogposts = db.collection('blogposts'); //fix

//Get all articles from firebase
router.get('/', (req, res) => {
	const blogpostsArray = [];

	res.send(blogpostsArray);
});

module.exports = router;
