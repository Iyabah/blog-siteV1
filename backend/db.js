const knex = require('knex');

const db = knex({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password:' ',
        database: 'blogbd',
    },
});

module.exports = db;