let express = require('express');

let app = express();

let router = express.Router();

//all route are prefix with '/api/v1'
app.use('/api/v1', router);

router.get('/', function (req, res, next) {
    
});

var server = app.listen('5000', function () {
    console.log('%s listening at %s', server.name, server.url);
  });