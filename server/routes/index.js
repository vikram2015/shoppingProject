var express = require('express');
var router = express.Router();
var Product = require('../database/model/productModel')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('shop/index', { title: 'Shopping Cart'});
});

module.exports = router;
