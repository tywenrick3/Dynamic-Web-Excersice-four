const express = require('express');

const app = express();
//set port dynamically with heroku
const port = process.env.PORT || 4000;

//import firebase
const firebase = require('firebase/app');
//get config object so we can communicate w firebase
const firebaseConfig = {
	apiKey: 'AIzaSyDm3xHRLuZQM_oKZvFIASMiiIaq8vgdhwA',
	authDomain: 'exercise-four-dynamic-web.firebaseapp.com',
	projectId: 'exercise-four-dynamic-web',
	storageBucket: 'exercise-four-dynamic-web.appspot.com',
	messagingSenderId: '213278170925',
	appId: '1:213278170925:web:38b99252c6282c71a07da4',
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Routes for directing user to correct place
const indexRoute = require('./routes/index');
const articleRoute = require('./routes/article');
const createArticleRoute = require('./routes/createArticle');

app.use('/', indexRoute);
app.use('/article', articleRoute);
app.use('/create', createArticleRoute);

app.listen(port, () => {
	console.log(`example app listening at port:${port}`);
});
