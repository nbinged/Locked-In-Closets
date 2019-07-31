var sha256 = require('js-sha256');
// var cloudinary = require('cloudinary');
// var configForCloudinary = require("../config.json");
// cloudinary.config(configForCloudinary);

const SALT = "salt";

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let showRegisterControllerCallback = (request, response) => {
      response.render('register');
    };

    let registerControllerCallback = (request, response) => {
        let username = request.body.username;
        let password = sha256(request.body.password);
        db.users.checkUserAccount(username,(error, callback) => {
            if (callback) {
                response.redirect('/?err=register');
            }
            else {
                db.users.registerUser(username, password,(error, callback) => {
                    if (callback) {
                        response.cookie('logged_in', sha256(callback[0].username+"logged in"+SALT));
                        response.cookie('username', callback[0].username);
                        response.redirect('/home');
                    }
                    else {
                        response.redirect('/?err=server');
                    }
                });
            }
        });
    };


    // let logout = (request, response) => {
    //   response.clearCookie('user_id');
    //   response.clearCookie('loggedin');
    //   response.redirect('/login');
    // };

    // let redirect = (request, response) => {
    //   response.redirect('/home');
    // };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {

        showRegister: showRegisterControllerCallback,
        register: registerControllerCallback


        // login: loginControllerCallback,
        // logout_user: logoutUserControllerCallback,
        // add_Item: addItemControllerCallback,
        // single_user: singleUserControllerCallback,
        // edit_Item: editItemControllerCallback,
        // delete_Item: deleteItemControllerCallback,
    };

}