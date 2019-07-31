// var multer = require('multer');
// var upload = multer({ dest: './uploads/' });

module.exports = (app, allModels) => {


    /*
     *  =========================================
     *  =========================================
     *  =========================================
     *  =========================================
     *    ALL ROUTES FOR CONTROLLER
     *  =========================================
     *  =========================================
     *  =========================================
     */

    // require the controller
    const controllerCallbacks = require('./controllers/catalog')(allModels);

    app.get('/register', controllerCallbacks.showRegister);
    app.post('/register', controllerCallbacks.register);

    app.get('/login', controllerCallbacks.showlogin);
    app.post('/login', controllerCallbacks.login);
};