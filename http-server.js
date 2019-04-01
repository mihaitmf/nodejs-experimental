const http = require('http');
const url = require('url');

const hostname = '192.168.29.11';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;

    if (req.method === 'GET') {
        res.setHeader('Content-Type', 'text/plain');

        const urlParts = url.parse(req.url, true);

        let responseBody = 'Hello World\n';
        responseBody += 'Request method was: ' + req.method + '\n';
        responseBody += 'Query string params were: ' + JSON.stringify(urlParts.query);

        res.end(responseBody + '\n');

        return;
    }

    res.setHeader('Content-Type', 'application/json');

    req.setEncoding('utf8');
    const requestChunks = [];
    req.on('data', chunk => {
        console.log('A chunk of data has arrived: ', chunk);
        requestChunks.push(chunk);
    });

    req.on('end', () => {
        const fullRequestBody = requestChunks.join();
        console.log('Request has ended. Full request body: ', fullRequestBody);

        const responseBody = {
            message: 'Hello World! We received your request!',
            requestMethodWas: req.method,
            requestBodyWas: fullRequestBody
        };

        res.write(JSON.stringify(responseBody));
        res.end('\n');
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// Test with: curl -d "name=john&age=29" -X POST -v 192.168.29.11:3000
