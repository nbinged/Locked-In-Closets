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
    let addSingleClothing = (form, cloud, cookies, callback) => {

        // For multer (form, cloud, image, callback)
        // console.log("Form which is req body: ", form)
        // console.log("Image name: ", typeof image)

        // let upload = image.replace('public/','')
        let cloudUrl = cloud;

        let query = 'INSERT INTO clothing (user_id, username,item_name, item_brand, item_size, item_color, item_catergories, image_file) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *';
        let values = [cookies.userID,cookies.username,form.item_name, form.item_brand, form.item_size, form.item_color, form.item_catergories, cloudUrl];

        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {

                // invoke callback function with results after query has executed
                callback(error, null);
                console.log('error')

            } else {

                // invoke callback function with results after query has executed

                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                    // console.log('model database');
                    console.log(queryResult.rows);
                    console.log('it works')

                } else {
                    callback(null, null);

                }
            }
        });
    }

    let viewSingleItem = (clothing_id, callback) => {

        let query = 'SELECT * FROM clothing WHERE id = $1';
        let values = [clothing_id];

        dbPoolInstance.query(query,values, (error, queryResult) => {
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

/////////////////////////////
/////DONT TOUCH ABOVE ITEMS//
/////////////////////////////

    let viewEditSingleItem = (clothing_id, callback)=>{

        let query = 'SELECT * FROM clothing WHERE id = $1';
        let values = [clothing_id];

        // console.log('idddddddddddddddddddddddddddddddd',request.params.id);

        dbPoolInstance.query(query,values, (error, queryResult) => {
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

    return {
        getAllClothes,
        addSingleClothing,
        viewSingleItem,
        viewEditSingleItem,

        ////DONT EDIT ANYTHING ABOVE///////
        editSingleItem,
        // deleteSingleItem
    };
};


    // let editSingleItem = (form, itemID, callback)=>{

    //     let query = 'UPDATE clothing SET VALUES (item_name, item_brand, item_size, item_color, item_catergories, image_file) WHERE id = $7 RETURNING *';

    //     let values = [form.item_name, form.item_brand, form.item_size, form.item_color, form.item_catergories, form.image_file, itemID];

    //     dbPoolInstance.clothing.editSingleItem(request.body, urlID,(error, callback) => {

    //                 let data = {
    //                             allclothes : callback
    //                                 }

    //                 response.render('item', data);
    //             });
    // }

    // let deleteSingleItem = (clothing_id,callback)=>{
    //     let query = "DELETE * FROM clothing WHERE id = $1";
    //     let values = [clothing_id];
    //     dbPoolInstance.query(query,values,(error, queryResult) => {
    //         if (error) {
    //             callback(error, null);
    //             console.log("Error")
    //         } else {

    //                 callback(null, true);
    //         }
    //     });
    // }