/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const SALT = "salt";
var sha256 = require('js-sha256');
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

//Adds the register page, form input data in to the database.


//////////////////////////////////////
//////////////MODELS//////////////////
//////////////////////////////////////

    let checkUserAccount = (username, callback) => {

        let query = 'SELECT username FROM users WHERE username = $1';
        let values = [username];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let registerUser = (username, password, callback) => {

        let query = 'INSERT INTO users (username, password) VALUES($1,$2) RETURNING username';
        let values = [username, password];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    return {

        checkUserAccount,
        registerUser
        // logInUser,
        // getAllUsers
    };
};