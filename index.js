const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const conn = require('./src/db/conn');

app.use(express.json());
app.use(cors());

conn();

const routes = require('./src/routes/router');
app.use('/api', routes);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
