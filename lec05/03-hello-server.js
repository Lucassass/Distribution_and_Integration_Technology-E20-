setTimeout(require(),50000);
const { TIMEOUT } = require('dns');
const {createServer} = require('http');

let server = createServer((request, response) => {
    setTimeout(response(),50000);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!');
});
server.listen(8080);