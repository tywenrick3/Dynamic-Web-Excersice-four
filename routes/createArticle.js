const express = require('express');

const router = express.Router();

//create form for sumbitting
const form = `
    <h1>Create Article</h1>
    <form action="/create/submit">
        <div style="
            display: flex; 
            flex-direction: column; 
            margin-bottom: 20px; 
            max-width: 325px;
        ">
            <label for="articleTitle">Article Title</label>
            <input 
                type="text" 
                name="articleTitle" 
                placeholder="type article title..." 
            />
            <label for="articleText">Article Text</label>
            <input 
                type="text" 
                name="articleText" 
                placeholder="type article text..." 
            />
            <label for="author">Author</label>
            <input 
                type="text" 
                name="author" 
                placeholder="author name..." 
            />
        </div>
        <button type="submit">Submit Article</button>
    </form>
`;
//Require Firebase
const firestore = require('firebase/firestore');
//Reference DB
const db = firestore.getFirestore();

//Serves web form for users
router.get('/', (req, res) => res.send(form));

// API Endpoint for sumbitting data through our form
router.get('/submit', (req, res) => {
	const queryParams = req.query; // Query params from URL
	const title = queryParams.articleTitle;
	const text = queryParams.articleText;
	const author = queryParams.author;

	// Create ID from title
	const idFromTitle = title.replace(/\s+/g, '-').toLowerCase();
	// Submit post to Firebase

	// If post successful, show
	console.log({ idFromTitle, title, text, author });

	res.send('???');
});

module.exports = router;
