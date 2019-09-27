"use strict";

var mongoose    = require('mongoose');
var connection = require("../Helper/Constants").mongoConnection;
var env = process.env.NODE_ENV || 'development';
var dbURI = connection;
// Mongoose connection events




// Mongoose connecting event
mongoose.connection.on('connecting', function () {

});

// Mongoose conneccted event
mongoose.connection.on('connected', function () {

    console.info('MongoDb connected to mlab ');

});

// Mongoose open event
mongoose.connection.once('open', function () { });

// Mongoose reconnected event
mongoose.connection.on('reconnected', function () {

    console.info('MongoDb reconnected ');
});

// Mongoose disconnected event
mongoose.connection.on('disconnected', function () {

    console.info('MongoDb disconnected');
});

// Mongoose error event
mongoose.connection.on('error', function (error) {

    console.error('MongoDb: ' + error);
    mongoose.disconnect();
});

// Mongoose SIGINT event
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        //   logger.info('Mongoose disconnected through app termination');
        console.info('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

// Create the database connection
mongoose.connect(
    dbURI,
    {autoReconnect : true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
);


module.exports.mongoClient = mongoose;
