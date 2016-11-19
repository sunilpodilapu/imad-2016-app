var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool =request('pg').Pool;
var config=
{
    user:'sunilpodilapu',
    databse:'sunilpodilapu',
    host:'db.hasura-app.io',
    port:'5432',
    password:process.env.DB-PASSWORD
};
var Pool=new Pool('config')

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('ui/code2',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'code2.html'));
});

  app.get('/ui/Tic Tac Toe',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'TIC TAC TOE.html'));
});

  app.get('/ui/Tic-Tac-Toe AI',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'TIC-TAC-TOE AI.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/rose2.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'rose2.png'));
});

app.get('/ui/mountain.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'mountain.png'));
});

app.get('/ui/jasmine.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jasmine.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
