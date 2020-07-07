var express = require('express');
var router = express.Router();
var funs = require('../fun.js');
var mysql = require('mysql');


/* GET home page. */
router.post('/', function(req, res, next) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'Ikloud' });
    connection.connect(function(err) {
    if (err) throw err
    console.log('DB connection success!');
    });
  connection.query('SELECT * FROM User WHERE email = email AND password = password', [req.body.email,req.body.password] , function(err,result) {
    if (err) throw err;
    if (results[0].id =! NULL ) {
      res.cookie(logged_id, results[0].id); 
      return res.redirect('/');
    } 
})});

module.exports = router;
