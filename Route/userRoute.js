


module.exports.userRoutes = function(app,requiresToken) {
    var userController = require('../Controller/userController');

    app.post('/adduser',userController.addUser);
    app.delete('/deleteuser',userController.deleteUser);
    app.post('/updateuser',userController.updateUser);

};
