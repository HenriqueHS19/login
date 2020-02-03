const express = require('express');
const cors = require('cors');
const script = require('./database/script');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

//create tables in database
script.createTables();

app.listen(3333);