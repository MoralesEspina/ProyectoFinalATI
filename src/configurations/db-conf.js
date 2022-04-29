const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'dcrhg4kh56j13bnu.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'p2gw4tgv07ls7g0p',
    password: 'dtzmenhf7rzyz8sl',
    database: 'ukb31e48e98dbr2g',
    multipleStatements: true
  });

  mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('Ahora estamos en Linea :D');
    }
  });

  module.exports = mysqlConnection;