var sha256 = require('js-sha256');
var cloudinary = require('cloudinary');
var configForCloudinary = require("../config.json")

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

                        let hashedCookie = sha256(callback[0].username+'logged_in'+SALT);
                        response.cookie('logged_in', hashedCookie);
                        response.cookie('username', callback[0].username);
                        response.redirect('/home');
                        console.log('User is logged in')
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

    let homepageControllerCallback = (request, response) => {
        let cookieName = request.cookies.username;
        let storedCookie = request.cookies.logged_in;

        if (storedCookie === undefined) {
            response.send('please log in!')

        } else {
            db.clothing.getAllClothes(cookieName, (error, callbackdata) => {
                if (error) {
                    console.log("error in getting file", error);

                } else {

                    let sessionCookieCheck = sha256(cookieName+'logged_in'+SALT)

                    if ( storedCookie === sessionCookieCheck ) {
                            let data = {
                                allclothes : callbackdata
                            }
                            response.render('home', data);

                    } else {
                        response.send('Username or password is wrong')
                    }
                }

            });
        };
    };

    let showItemControllerCallback = (request, response) => {
        let cookieName = request.cookies.username;
        let storedCookie = request.cookies.logged_in;

        if (storedCookie === undefined) {
            response.send('please log in!')


            } else {

                    let sessionCookieCheck = sha256(cookieName+'logged_in'+SALT)

                    if ( storedCookie === sessionCookieCheck ) {
                         response.render('add');
                    }

                        else {
                            response.send('Something went wrong')
                        }
                }
    };

    let addItemControllerCallback = (request, response) => {
        let cookieName = request.cookies.username;
        let storedCookie = request.cookies.logged_in;

        if (storedCookie === undefined) {
            response.send('please log in!')

        } else {
            db.clothing.addSingleClothing(cookieName, (error, callback) => {
                if (error) {
                    console.log("error in getting file", error);

                } else {

                    let sessionCookieCheck = sha256(cookieName+'logged_in'+SALT)

                    if ( storedCookie === sessionCookieCheck ) {

                         let data = {
                                allclothes : callback
                            }

                            response.render('add', data);

                    } else {
                        response.send('Username or password is wrong')
                    }
                }
            });
        };
    };

    let logoutControllerCallback = (request, response) => {
        response.clearCookie('logged_in');
        response.clearCookie('username');
        response.redirect('/login');
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
        logout: logoutControllerCallback,

        homepage: homepageControllerCallback,

        showAddItem: showItemControllerCallback,
        addItem: addItemControllerCallback
    };

}