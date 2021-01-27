const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {

res.send('Hello World from Express server.');
});

app.get('demo',(req,res) => {

	res.set('x-full-stack','for-life');
	res.status(418);
	res.send('customer headers');


});

app.listen(port,() => {console.log('app is running on port ',port)});
