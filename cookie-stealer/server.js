const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const u = url.parse(req.url, true);
    console.log(u.query);
    res.end();
}).listen(9666);
