var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Using Express' });
});

module.exports = router;
<h1>So many assignmets</h1>