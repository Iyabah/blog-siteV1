
const dotenv = require('dotenv');
const knex = require('knex');

dotenv.config();

console.log(process.env.DB_USER);  
console.log(process.env.DB_PASSWORD);  
console.log(process.env.DB_NAME);  

const db = knex({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
});

module.exports = db;  
