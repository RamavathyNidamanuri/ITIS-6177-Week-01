var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.send(' first express http server');
});

app.use(function(req, res, next) {
    res.status(404).send("404 error :)");
});

app.listen(3000, function () {
    console.log(' listening on port 3000.');
});