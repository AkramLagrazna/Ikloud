var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var stringify = require('stringify');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.cookies['user'] >= 0){
  // make an array of images
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Ikloud' });
  connection.connect(function(err) {
  if (err) throw err
  console.log('DB success');
  });
  var inputID = String(req.cookies['user']);
  connection.query('SELECT * FROM Image WHERE UserID = '+"'"+ inputID + "'" + ';', function(err,result) {
  var usrimg = [];
  for (i = 0; i < result.length; i++){
      console.log(i);
      usrimg.push(result[i].Url);
  };
  res.render('index', { 'images' : usrimg });

});
  // pass the array to pugs variables 


  } else {
    console.log('not logged in!');
    res.redirect('/auth');
    };
});

module.exports = router;
