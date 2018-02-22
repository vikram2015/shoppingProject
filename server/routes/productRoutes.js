/**
 * Created by vikram on 22/2/18.
 */


var express = require('express');
var router = express.Router();
var config = require('../../config/config');
var secretKey = config.secretKey;
var ProductController = require('../controller/productController')






//route for simple check
router.get('/',function (req, res, next) {
    res.render('shop/index', { title: 'Product Page'});
});


//route for saving the Products
router.post('/saveProducts',function(req,res){

    var imgPath = req.body.imgPath;
    var title = req.body.title;
    var description = req.body.description;
    var price = req.body.price;
    var parameters = {
        imgPath:imgPath,
        title:title,
        description:description,
        price:price
    }

    if(imgPath && title && description && price){
        ProductController.saveProducts(parameters)
            .then(function (response) {
                if(response){
                    res.json(response);
                }else{
                    res.json("Error Occur");
                }
            });
    }else{
        res.json("No Products Found To Save");
    }
});


//route for getting the Product
router.get('/getAllProduct',function (req, res, next) {
    ProductController.getProducts()
        .then(function (data) {
            console.log("data in routes")
            console.log(data)
            if(data){
                res.render('shop/product',{shoppingProducts:data});
            }else{
                res.json("Error occur");
            }
        });
});


//route for getting the selected product
router.get('/getSelectedProduct',function (req, res, next) {
    var selectedProduct = req.query.productName;
    if(selectedProduct){
        ProductController.getSelectedProduct(selectedProduct)
            .then(function (data) {
                if(data){
                    res.json(data);
                }else{
                    res.json("Error occur");
                }
            });
    }else{
        ProductController.getProducts()
            .then(function (data) {
                if(data){
                    res.json(data);
                }else{
                    res.json("Error occur");
                }
            });
    }

});


//route for Updating the Product
router.post('/updateProducts',function (req, res, next) {
    var imgPath = req.body.imgPath;
    var title = req.body.title;
    var description = req.body.description;
    var price = req.body.price;
    var id = req.body._id
    var selectedProduct = {
        _id:id,
        imgPath:imgPath,
        title:title,
        description:description,
        price:price
    }
    ProductController.updateProduct(selectedProduct)
        .then(function (data) {
            if(data){
                res.json(data);
            }else{
                res.json("Error occur");
            }
        });
});

//route for deleting the Product
router.post('/deleteProduct',function (req, res, next) {
    // var isDeleted = false;

    var imgPath = req.body.imgPath;
    var title = req.body.title;
    var description = req.body.description;
    var price = req.body.price;
    var isDeleted = req.body.isDeleted;
    var id = req.body._id
    var selectedProduct = {
        _id:id,
        imgPath:imgPath,
        title:title,
        description:description,
        isDeleted:isDeleted,
        price:price
    }
    ProductController.deleteProduct(selectedProduct)
        .then(function (data) {
            if(data){
                res.json(data);
            }else{
                res.json("Error occur");
            }
        });
});

module.exports = router;