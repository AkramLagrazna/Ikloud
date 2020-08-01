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
    console.log('DB success');
    });
    var inputEmail = String(req.body.user);
    var inputPass = String(req.body.password);
    console.log('SELECT ID FROM Users WHERE Email = '+"'"+ inputEmail +"'"+' AND Pass ='+"'"+ inputPass +"'"+' ;');
    connection.query('SELECT ID FROM Users WHERE Email = '+"'"+ inputEmail +"'"+' AND Pass ='+"'"+ inputPass +"'"+' ;', [req.body.email,req.body.password] , function(err,result) {
    var ID = result[0].ID;
    console.log(ID);
    if (ID >= 0) {
      res.cookie('user', ID );
      return res.redirect('/');
    } 
    if (err) {
      console.log('RETRY!');
      return res.redirect('/auth');
    };
  })});

module.exports = router;
