const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser')

app.set('json spaces', 2)
app.use(bodyParser.json())

//all route are prefix with '/api/v1'
app.use('/api/v1', router);

router.get('/', function (req, res, next) {
    
});

var server = app.listen('5000', function () {
    console.log('%s listening at %s', server.name, server.url);
  });