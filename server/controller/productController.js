/**
 * Created by vikram on 20/2/18.
 */

var ProductOperation = require('../database/operation/productOperation');
var Promise = require('promise');

//for saving the Products
var saveProducts = function (parameter) {
    return new Promise(function (resolve, reject) {
        if(parameter && parameter.title){
            ProductOperation.saveNewProduct(parameter)
                .then(function (responses) {
                    resolve(responses);
                });
        }else{
            resolve("No data to save");
        }
    });
};

//for getting the Products
var getProducts = function () {
    return new Promise(function (resolve, reject) {
        ProductOperation.getAllProduct()
            .then(function (allProducts) {
                if(allProducts){
                    resolve(allProducts)
                }else{
                    resolve("Error in fetching the data");
                }
            });
    });
};

//for getting the selected Product
var getSelectedProducts = function (selectedProduct) {
    return new Promise(function (resolve, reject) {
        if(selectedProduct){
            var query = {
                title:selectedProduct,
                isDeleted:false
            }
            ProductOperation.getAllSelectedProduct(query)
                .then(function (allProducts) {
                    if(allProducts){
                        resolve(allProducts)
                    }else{
                        resolve("Error in fetching the Products");
                    }
                });
        }else{
            ProductOperation.getAllProduct()
                .then(function (allProducts) {
                    if(allProducts){
                        resolve(allProducts)
                    }else{
                        resolve("Error in fetching the data");
                    }
                });
        }
    });
};

//for updating the Products
var updateProducts = function (selectedProducts) {
    var query = {
        imgPath:selectedProducts.imgPath,
        title:selectedProducts.title,
        description:selectedProducts.description,
        price:selectedProducts.price
    }
    var id = selectedProducts._id;
    return new Promise(function (resolve, reject) {
        ProductOperation.updateSelectedProducts(query, id)
            .then(function (allProducts) {
                if(allProducts){
                    resolve(allProducts)
                }else{
                    resolve("Error in Updating the Products");
                }
            });
    });
};


//for delete the Products
var deleteProducts = function (selectedProduct) {
    var query = {
        title:selectedProduct.title,
        isDeleted:selectedProduct.isDeleted,
    }
    var id = selectedProduct._id;
    return new Promise(function (resolve, reject) {
        ProductOperation.updateSelectedProducts(query, id)
            .then(function (allProduct) {
                if(allProduct){
                    resolve(allProduct)
                }else{
                    resolve("Error in Updating the Products");
                }
            });
    });
};


module.exports = {
    saveProducts:saveProducts,
    getProducts:getProducts,
    getSelectedProduct:getSelectedProducts,
    updateProduct:updateProducts,
    deleteProduct:deleteProducts
}