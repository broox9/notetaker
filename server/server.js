var express = require('express');
var ejs = require('ejs');

var app = express();

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));


app.get('profile/:username', function (req, res) {
  // res.render('index.html');
});

app.get('/', function (req, res) {
  // res.render('index.html');
});

var server = app.listen('3009', function() {
  console.log('Notetaker listening on 3009');
});
