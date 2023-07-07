const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World: Welcome from the server!');
});

app.get('/about', (req, res) => {
    res.send('About : Welcome from the server!');
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
})