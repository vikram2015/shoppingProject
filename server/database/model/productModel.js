/**
 * Created by vikram on 20/2/18.
 */


var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({


    id:{
        type:Object
    },
    imgPath:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    isDeleted:{
        type:Boolean,
        required:false,
        default:false
    }

});

module.exports = mongoose.model('shopping',ProductSchema);