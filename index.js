const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {

res.send('Hello World fron ExpressJS');
});

app.listen(port,() => {console.log('app is running on port ',port)});
