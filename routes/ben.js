var express = require('express');
var router = express.Router();

/* GET Ben page. */
router.get('/', function (req, res, next) {
  res.render('ben', { title: 'Ben', currentUrl: '/ben' });
});

module.exports = router;
