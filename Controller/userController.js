/**
 * Created by mac on 01/10/2018.
 */


var response = require('./index');
var mongoose = require('mongoose');
var objectId = mongoose.Types.ObjectId;
var models = require('../Model/index').allModels;
var userObj = models.UserModel;
var utils = require("../Helper/Utils");


exports.addUser = function (req, res) {

    var user = new userObj({
        userName: req.body.userName,
        mobileNo: req.body.mobileNo,
        emailAddress: req.body.emailAddress,
        password: utils.generatePasswordHash(req.body.password)
    });

    console.log(req.body);


    user.save(function (err, suc) {
        if (err) {

            if (11000 === err.code || 11001 === err.code) {
                response.send(400, {"data": "", "message": "User Creation Failed. User already exist."}, res);
            } else {
                response.send(400, {"data": "", "message": "User Creation Failed " + err}, res);
            }

        } else {
            response.send(200, {"data": suc, "message": "User Created Succesfully"}, res);
        }

    });
}

exports.deleteUser = function (req, res) {


    var validId = objectId.isValid(req.body.id);

    if (validId) {

        userObj.deleteOne({_id: objectId(req.body.id)}, function (err, suc) {


            if (suc.deletedCount > 0) {
                response.send(200, {"data": "", "message": "User deleted succesfully"}, res);
            } else {
                response.send(400, {"data": "", "message": "User ID does not exist"}, res);
            }


        })
    } else {
        response.send(400, {"data": "", "message": "User ID is Invalid"}, res);
    }
};

exports.updateUser = function (req, res) {


};
