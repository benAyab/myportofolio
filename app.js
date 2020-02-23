var express = require('express');
var app = express();
var join = require('path').join;
const port = process.env.PORT || 5000;

app.use('/images', express.static('images'));
app.use('/css', express.static('css'));

app.get('/', (req, res) =>{
    res.sendFile(join(__dirname, 'navbar.html'))
});
app.listen(port, ()=>{console.log("Server running at : ", port)});