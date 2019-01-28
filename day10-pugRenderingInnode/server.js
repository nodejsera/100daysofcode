var pug = require('pug');
var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('hello-world', { value: 'attery'})
})
app.get('/new', function (req, res) {
    var title = "My page title";
    var heading = "My page heading comes here"
  res.render('interpolation', { title: title, heading:heading})
})

app.listen(3000);
console.log('Server listening at : 3000');