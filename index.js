const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 6000;

app.use(bodyParser.json());
app.use(cors());

let copiedData = "";

app.post('/api/data', (req, res) => {
    copiedData = req.body.data;
    console.log(`Data received: ${copiedData}`);
    res.sendStatus(200);
});

app.get('/api/data', (req, res) => {
    res.send( copiedData );
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
