const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

const indexRoute = require('./routes/index');

app.use('/', indexRoute);

app.listen(port, () => {
	console.log(`example app listening at port:${port}`);
});
