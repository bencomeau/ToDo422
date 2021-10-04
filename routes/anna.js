var express = require('express');
var router = express.Router();

/* GET Anna page. */
router.get('/', function (req, res, next) {
  res.render('anna', { title: 'Anna', currentUrl: '/anna' });
});

module.exports = router;
