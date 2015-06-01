var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');
var db = require('../mysql.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var connection = db();
  connection.query('SELECT content, FROM_UNIXTIME(UNIX_TIMESTAMP(time)) as time FROM MESSAGE', function(error, results) {
    if(error)
      throw error;
    console.log(results);    
    results.forEach(function(item) {
      item.time = dateFormat(item.time, "yyyy-mm-dd HH:MM");
    });
    res.render('index', {title: 'Yuntech - MIS', message: results});
  });
});

module.exports = router;
