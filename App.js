'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var config              = require('./Config/config');
var app = express();
var apiRoutes = express.Router();

require('./Route/index')(apiRoutes);
require('./Config/mongoose');


app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json({limit: '10mb'}));
app.set('port', config.port);
app.use(apiRoutes);


var server = app.listen(app.get('port'),function(){
    var msg = 'Server listening on Port : ' + app.get('port');

    console.log(msg);
});

