const express = require('express');

const router = express.Router();

const firestore = require('firebase/firestore');

const db = firestore.getFirestore();

//Get article by ID
router.get('/:id', (req, res) => {
	const postId = req.params.id;

	res.send();
});

router.get('/', (req, res) => {
	res.send([{ message: `Please include an ID` }]);
});

module.exports = router;
