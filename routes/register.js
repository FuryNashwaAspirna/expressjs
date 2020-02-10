var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('register/index', { title: 'Page baru'});
});
module.exports = router;