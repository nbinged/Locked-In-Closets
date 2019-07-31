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
                        response.redirect('/?err=register');
                    }
                });
            }
        });
    };

    let showLoginControllerCallback = (request, response) => {
      response.render('login');
    };

    let loginControllerCallback = (request, response) => {
        let username = request.body.username;
        let password = sha256(request.body.password);
        db.users.checkUserAccount(username,(error, callback) => {
            if (callback) {
                db.users.logInUser(username, password,(error, callback) => {
                    if (callback) {
                        response.cookie('logged_in', sha256(callback[0].username+"logged in"+SALT));
                        response.cookie('username', callback[0].username);
                        response.redirect('/home');
                        console.log('logged in')
                    }
                    else {
                        response.redirect('/?err=login');
                    }
                });
            }
            else {
                response.redirect('/?err=login')
            }
        });
    };

    let logoutControllerCallback = (request, response) => {
        res.clearCookie('logged_in');
        res.clearCookie('username');
        res.redirect('/login');
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {

        showRegister: showRegisterControllerCallback,
        register: registerControllerCallback,

        showlogin: showLoginControllerCallback,
        login: loginControllerCallback,
        logout: logoutControllerCallback
    };

}