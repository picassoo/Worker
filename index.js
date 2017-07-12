var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.get('/',function (req,res) {
   res.send("hello world")
});
/*
app.set('view engine', 'jade');
app.get('/', function(req, res) {
    res.sendFile('view/page.html', {root:__dirname+"/"})
});

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/view/page.html'));
});
 */
app.listen(6000);
console.log("Server Running on port 6000");