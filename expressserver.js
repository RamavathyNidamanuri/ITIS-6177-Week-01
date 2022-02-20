var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.send(' Hello World !!  ----first express http server');
    const { exec } = require("child_process");
   exec("start .", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
});

app.use(function(req, res, next) {
    res.status(404).send("404 error :)");
});

app.listen(3000, function () {
    console.log(' listening on port 3000.');
});