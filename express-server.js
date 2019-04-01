'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '192.168.29.11';

// App
const app = express();
app.get('/', (req, res) => {
    let responseBody = 'Hello World\n';
    responseBody += 'Request method was: ' + req.method + '\n';
    responseBody += 'Query string params were: ' + JSON.stringify(req.query);

    res.status(200).set('Content-Type', 'text/plain').send(responseBody + '\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
