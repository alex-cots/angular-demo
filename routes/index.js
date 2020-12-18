var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
})

router.post('/', function (req, res) {
  receivedName = req.body['name'];
  res.send({receivedName: receivedName});
})

module.exports = router;
