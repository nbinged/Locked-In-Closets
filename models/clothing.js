/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const SALT = "salt";
var sha256 = require('js-sha256');
module.exports = (dbPoolInstance) => {

//GETS ALL OF THE USERS CLOTHING ITEMS
    let getAllClothes = (username,callback) => {

        let query = 'SELECT * FROM clothing WHERE username = $1';
        let values = [username];

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
    let addSingleClothing = (form, cloud, callback) => {

        // For multer (form, cloud, image, callback)
        // console.log("Form which is req body: ", form)
        // console.log("Image name: ", typeof image)

        // let upload = image.replace('public/','')
        let cloudUrl = cloud

        let query = 'INSERT INTO clothing (user_id, username,item_name, item_brand, item_size, item_color, item_catergories, image_file) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *';
        let values = [form.user_id, form.username, form.item_name, form.item_brand, form.item_size, form.item_color, form.item_catergories, cloudUrl];

        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {

                // invoke callback function with results after query has executed
                callback(error, null);

            } else {

                // invoke callback function with results after query has executed

                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                    // console.log('model database');
                    console.log(queryResult.rows);

                } else {
                    callback(null, null);

                }
            }
        });
    }

    // let viewSingleItem = (clothing_id, callback) => {

    //     let clothing_id = clothing.id];
    //     let query = 'SELECT * FROM clothing WHERE id = $1';
    //     let values = [clothing.id];

    //     dbPoolInstance.query(query, (error, queryResult) => {
    //         if (error) {
    //             callback(error, null);
    //         } else {
    //             if (queryResult.rows.length > 0) {
    //                 callback(null, queryResult.rows[0]);
    //             } else {
    //                 callback(null, null);

    //             }
    //         }
    //     });
    // }

    let editSingleItem = (form, callback)=>{
        let query = 'INSERT INTO clothing (item_name,item_brand,item_size,item_color,item_catergories,image_file) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *';
        let values = [form.name, form.brand, form.size, form.color, form.catergories, form.image_file];

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
        // viewSingleItem,
        editSingleItem,
        deleteSingleItem

    };
};
