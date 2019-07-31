/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const SALT = "salt";
var sha256 = require('js-sha256');
module.exports = (dbPoolInstance) => {

//GETS ALL OF THE USERS CLOTHING ITEMS
    let getAllClothes = (user_id,callback) => {

        let query = 'SELECT * FROM clothing WHERE user_id = $1';
        let values = [user_id];

        dbPoolInstance.query(query,values, (error, queryResult) => {
            if (error) {

                // invoke callback function with results after query has executed
                callback(error, null);

            } else {

                // invoke callback function with results after query has executed

                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);

                } else {
                    callback(null, null);

                }
            }
        });
    };

//Adds a clothing item to the database.
    let addSingleClothing = (form, callback) => {
        let query = 'INSERT INTO clothing (user_id,item_name,item_brand,item_size,item_color,item_catergories,item_image_url) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *';
        let values = [form.user_id, form.name, form.brand, form.size, form.color, form.catergories, form.imageurl];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {

                // invoke callback function with results after query has executed
                callback(error, null);

            } else {

                // invoke callback function with results after query has executed

                if (queryResult.rows.length > 0) {
                    callback(null, true);
                } else {
                    callback(null, null);

                }
            }
        });
    }

    let viewSingleItem = (clothing_id, callback) => {
        let query = 'SELECT * FROM clothing WHERE id = $1';
        let values = [clothing.id];

        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows[0]);
                } else {
                    callback(null, null);

                }
            }
        });
    }

    let editSingleItem = (form, callback)=>{
        let query = 'UPDATE clothing SET (user_id, item_name, item_brand, item_size, item_color, item_catergories, item_image_url) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *';
        let values = [form.user_id, form.name, form.brand, form.size, form.color,form.catergories, form.imageurl];

        dbPoolInstance.query(query,values,(error, queryResult) => {
            if (error) {
                callback(error, null);
                console.log("Error")
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, true);
                } else {
                    callback(null, null);

                }
            }
        });
    }

    let deleteSingleItem = (clothing_id,callback)=>{
        let query = "DELETE FROM clothing WHERE id = $1";
        let values = [clothing_id];
        dbPoolInstance.query(query,values,(error, queryResult) => {
            if (error) {
                callback(error, null);
                console.log("Error")
            } else {

                    callback(null, true);
            }
        });
    }

    return {
        getAllClothes,
        addSingleClothing,
        viewSingleItem,
        editSingleItem,
        deleteSingleItem
    };
};