const http = require('http');

const hostname = '192.168.29.11';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    let responseBody = 'Hello World\n';
    responseBody += 'Request method was: ' + req.method + '\n';
    responseBody += 'Request body was: ';
    res.write(responseBody);

    req.setEncoding('utf8');
    const requestChunks = [];
    req.on('data', chunk => {
        console.log('A chunk of data has arrived: ', chunk);
        requestChunks.push(chunk);
    });
    req.on('end', () => {
        const requestBody = requestChunks.join();
        console.log('Request has ended. Full request body: ', requestBody);
        res.write(requestBody);
        res.end('\n');
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// Test with: curl -d "name=john&age=29" -X POST -v 192.168.29.11:3000
