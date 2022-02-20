const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!!!');
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
server.listen(port, hostname, () => {
  console.log(`Server is running on port`, port);
});