var express = require('express');

const app = express();

const port = 3000;
app.use('/', express.static('public'));

app.listen(port, function() {
	console.log("Server Started at port 3000");
});
