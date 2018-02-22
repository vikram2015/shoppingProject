/**
 * Created by vikram on 20/2/18.
 */


var ProductModel = require('../model/productModel');
var Promise = require('promise');
var config = require('../../../config/config');
var secretKey = config.secretKey;

//for saving all the Products in Database
var saveNewProducts =function (parameter) {
    return new Promise(function (resolve, reject) {

        var newProductRecord = new ProductModel(parameter);

        newProductRecord.save(function (err, products) {
            if(err){
                resolve({success:false,MSG:"Error occur during saving",error:err});
            }else{
                resolve({success:true,MSG:"Products saved successfully",products:products});
            }
        });
    });
};


//for getting all the products From Database
var getAllProduct = function () {
    return new Promise(function (resolve, reject) {

        ProductModel.find({isDeleted:false}).exec(function (err, products) {
            if(err){
                resolve({success:false,MSG:"Error occur",error:err});
            }else{
                resolve({success:true,MSG:"Products Found",products:products});
            }
        });
    });
};


//for getting Selected Products From Database
var getAllSelectedProduct = function (query) {
    return new Promise(function (resolve, reject) {

        ProductModel.findOne(query).exec(function (err, product) {
            if(err){
                resolve({success:false,MSG:"Error occur",error:err});
            }else{
                resolve({success:true,MSG:" Selected Product Found",products:product});
            }
        });
    });
};



//for updating selected Products In Database
var updateSelectedProducts = function (query, id) {

    return new Promise(function (resolve, reject) {
        ProductModel.update({_id:id},query).exec(function (err, product) {
            if(err){
                resolve({success:false,MSG:"Error occur During Update",error:err});
            }else{
                resolve({success:true,MSG:"Selected Skill Updated",products:product});
            }
        });
    });
};


module.exports = {
    saveNewProduct:saveNewProducts,
    getAllProduct:getAllProduct,
    getAllSelectedProduct:getAllSelectedProduct,
    updateSelectedProducts:updateSelectedProducts
}
