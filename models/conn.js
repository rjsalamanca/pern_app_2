const pgp = require('pg-promise')({
    query: e => {
        console.log('QUERY: ', e.query);
    }
});

const options = {
    host: 'localhost',
    database: 'yelpcopy',
    user: 'rjs'
}

const db = php(options)

module.exports = db;