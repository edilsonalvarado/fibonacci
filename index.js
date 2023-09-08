require('dotenv').config();
const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/index.routes');
const path = require('path');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', apiRouter);

const publicDirectory = path.join(__dirname, './public/index.html');

app.get('*', function(req, res) {
    res.sendFile(publicDirectory);
});

app.listen(process.env.PORT, async () => {
    console.log(`Listening on port ${process.env.PORT}`);
});