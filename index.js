const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
const conn = require('./src/db/conn');

app.use(express.json());
app.use(cors());

conn();

const routes = require('./src/routes/router');
app.use('/api', routes);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
