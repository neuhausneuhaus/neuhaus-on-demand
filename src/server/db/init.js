const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();


const isProd = process.env.NODE_ENV === 'production';


const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: 'localhost',
  database: process.env.DATABASE,
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
  ssl:true
});

// pool.on('connect', async () => {
//   console.log('pg db up and running, captain.');
//   await createTables();
// });

const createTables = () => {
  const queryText = 
  `CREATE TABLE IF NOT EXISTS
  applicant(
    applicant_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
  );
  CREATE TABLE IF NOT EXISTS
  meeting(
    meeting_id SERIAL PRIMARY KEY,
    applicant_id integer NOT NULL REFERENCES applicant(applicant_id),
    gcalid VARCHAR(100),
    addedtoneuhauscal boolean NOT NULL DEFAULT FALSE
  );`

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      // pool.end(() => console.log('pool has ended'));
    })
    .catch((err) => {
      console.log(err);
      pool.end(() => console.log('pool has ended'));
    })
};

module.exports = {pool, createTables};

require('make-runnable');