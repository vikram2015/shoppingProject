/**
 * Created by vikram on 21/2/18.
 */


var Product = require('../database/model/productModel');
var mongoose = require('mongoose');

/*mongoose.connect('mongodb://localhost:27017/NewShoppingCart');
mongoose.connection.on('connected',function (err) {
    if(err){
        console.log("Error occur"+err);
    }else{
        console.log("connected to port 27017");
    }
})*/

var Products = [
    new Product({
        imgPath:'http://www.bollywoodlife.com/wp-content/uploads/2016/08/Kareena.jpg',
        title:'New Product',
        description:'Hi buddy this is new in market',
        price:20
    }),
    new Product({
        imgPath:'https://www.gta5-mods.com/misc/gta-online-missions-for-sp',
        title:'New Product',
        description:'Hi buddy this is new in market',
        price:20
    }),
    new Product({
        imgPath:'http://www.bollywoodlife.com/wp-content/uploads/2016/08/Kareena.jpg',
        title:'New Product',
        description:'Hi buddy this is new in market',
        price:20
    }),
    new Product({
        imgPath:'http://www.bollywoodlife.com/wp-content/uploads/2016/08/Kareena.jpg',
        title:'New Product',
        description:'Hi buddy this is new in market',
        price:20
    })
];

/*var done = 0;
for(var i=0;i<Products.length;i++){
    Products[i].save(function (err, result) {
        if(err){
            console.log(err+"Error occur")
        }
        done++;
        if(done === Products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}*/