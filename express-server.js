'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '192.168.29.11';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
