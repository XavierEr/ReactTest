var express = require('express');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var customers = require('./routes/customers');
var accounts = require('./routes/accounts');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());

app.use('/', index);
app.use('/api/customers', customers);
app.use('/api/accounts', accounts);

app.use(express.static(__dirname + '/dist'));
// app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});