const React = require('react');
var Default = require('./layouts/default');

class add extends React.Component {
  render() {

    let loginURL = `/login`;
    let registerURL = `/register`;
    let addURL = `/add`;

    return (

    <Default>
            <h1>New Clothes Form</h1>
            <h3>Please enter the details of the item of clothing you would like to add to your archive.</h3>

            <form enctype="multipart/form-data" action="/add" method="POST">

                <p>Item Name:</p>
                <input type="text" name="item_name" required/>

                <p>Brand:</p>
                <input type="text" name="item_brand"/>

                <p>Size:</p>
                <input type="text" name="item_size"/>

                <p>Color:</p>
                <input type="text" name="item_color"/>

                <p>Catergories:</p>
                <input type="text" name="item_catergories" required/>

                <p>Upload Your own picture</p>
                  <input type="file" name="image_file"/>

                <br/>
                <br/>

                <input type="submit" class="btn btn-primary"/>

                <input type="hidden" name="user_id" value={this.props.cookie}/>
                <input type="hidden" name="user_id" value={this.props.cookie}/>




            </form>

    </Default>

    );
  }
}

module.exports = add;



                // Use the above code to add the add in username and id everytime the user add an item.
