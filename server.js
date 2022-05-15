const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const route = require('./routers/index.js')


const db = require('./model/db');
db.connect();



const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})