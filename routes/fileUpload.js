var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var imgur = require('imgur');
var mysql = require('mysql');

/* GET home page. */
router.post('/', function(req, res, next) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'Ikloud' });
    connection.connect(function(err) {
        if (err) {
            console.log('qope');
        };    console.log('DB connection success!');
    });
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      // lal
      imgur.uploadFile(files.filetoupload.path)
      .then(function (json) {
           connection.query('INSERT INTO Image (Url,UserID) VALUES ( '+"'"+json.data.link+"'"+','+ req.cookies['user'] +') ;' , function(err,result) {
            /*
            if (err) {
                console.log('qope');
            };
            */
        });
    });
    return res.redirect('http://localhost:8000/');
    });
});


module.exports = router;
