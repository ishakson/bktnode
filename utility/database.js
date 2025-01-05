const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'node_app',
    password: 'Qawsed.1'
});

module.exports = connection.promise();
