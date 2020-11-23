'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    let responseBody = 'Hello World\n';
    responseBody += 'Request method was: ' + req.method + '\n';
    responseBody += 'Query string params were: ' + JSON.stringify(req.query);

    res.status(200).set('Content-Type', 'text/plain').send(responseBody + '\n');
});

app.post('/', (req, res) => {
    console.log(`Request body is: ${JSON.stringify(req.body)}`);

    const responseBody = {
        message: 'Hello World! We received your request!',
        requestMethodWas: req.method,
        requestBodyWas: req.body
    };

    res.send(responseBody); // sets automatically content-type to application/json when an object is received
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

/**
 * Test from exterior with:
 * curl -v -X POST -d "name=john&age=29" 192.168.29.11:3000
 * curl -v "192.168.29.11:8080?hello=world&aaa=123"
 */
