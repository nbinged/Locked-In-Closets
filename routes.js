var multer = require('multer');
var upload = multer({ dest: './uploads/' });

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

    app.get('/home', controllerCallbacks.homepage);

    app.get('/add', controllerCallbacks.showAddItem);
    app.post('/add', controllerCallbacks.addItem);
    app.post('/add',upload.single('image_file'),controllerCallbacks.addItem);
};