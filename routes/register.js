var express = require('express');
var router = express.Router();
var mysql = require('mysql');


/* GET home page. */
router.post('/', function(req, res, next) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'Ikloud' });
    connection.connect(function(err) {
    if (err) throw err
    console.log('DB connection success!');
    });
    var inputEmail = String(req.body.email);
    var inputPass = String(req.body.password);
  connection.query('INSERT INTO Users (Email,Pass) VALUES ( '+"'"+ inputEmail +"'"+','+"'"+ inputPass +"'"+') ;', [req.body.email,req.body.password] , function(err,result) {
    if (err) throw err;
    return res.redirect('/');
    } 
)});

module.exports = router;
