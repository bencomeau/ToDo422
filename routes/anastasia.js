var express = require('express');
var router = express.Router();

/* GET Anastasia page. */
router.get('/', function (req, res, next) {
  res.render('anastasia', { title: 'Anastasia', currentUrl: '/anastasia' });
});

module.exports = router;
