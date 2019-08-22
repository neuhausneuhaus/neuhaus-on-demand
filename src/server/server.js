// import 'dotenv/config';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {pool, createTables} = require('./db/init');


const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

let port = process.env.PORT || 8181;

// "database up and running, captain."

//***ROUTES****

let apiRoutes = require("./routes/api-routes");
let meetRoutes = require("./routes/meet-routes");
app.use('/api', apiRoutes);
app.get('/', (req, res) => res.send('Portfolio will go here.'));
app.get('/meet', (req, res) => res.send('Kickass SIngle Page App for meetign selection goes here'));
app.use('/meet', meetRoutes);

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  // client.query('SELECT NOW()', (err, result) => {
  //   release()
  //   if (err) {
  //     return console.error('Error executing query', err.stack)
  //   }
  //   console.log(result.rows)
  // })
  createTables();
});


app.listen(port);

