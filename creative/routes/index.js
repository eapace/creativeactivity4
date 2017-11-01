var express = require('express');
var router = express.Router();
var fs = require('fs');
var https = require('https')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('weather.html', { root: 'public' });
});

router.get('/owlapi', function(req, res1, next) {
  const https = require('https');
  var result = '';

  https.get('https://owlbot.info/api/v1/dictionary/' + req.query.q, (res) => {
   // console.log('statusCode:', res.statusCode);
   // console.log('headers:', res.headers);

    var jsonresult = [];
    res.on('data', (d) => {
      process.stdout.write(d);
      result += d;
    })

  .on('end', (e) => {
    console.log(e);
   res1.status(200).json(JSON.parse(result));
   });
  });
 // console.log(JSON.parse(result));
});

module.exports = router;

