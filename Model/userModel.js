'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    userName: {
        type: String,

        // required: 'Please enter User name '
    },
    mobileNo: {
        type: String

        //  required: 'Please enter Mobile Number '
    },
    emailAddress: {
        type: String,
        unique : true
        //  required: 'Please enter Email Address '
    },

    password :{
        type : String
    },

    isDeleted : {
        type : Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);


