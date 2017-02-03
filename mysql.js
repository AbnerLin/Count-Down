var mysql = require('mysql');

var db = null;
function pool() {
  if(!db) {
    db = mysql.createConnection({
      host: 'localhost',
      user: 'set by yourself',
      password: 'set by yourself'
    });
  }
  db.query('USE MESSAGE_BOARD')
  return db;
}

module.exports = pool;
