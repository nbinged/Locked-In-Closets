const React = require('react');
var Default = require('./layouts/default');

class Delete extends React.Component {
  render() {

    let props = this.props.allclothes;
    let urlItem = '/item/';
    let urlDelete = '/delete?_';
    let id = parseInt(props.id);
    let put = 'method=DELETE'

    return (

    <Default>
            <h1>Delete Clothes Form</h1>
            <h3>Are you sure you would like to delete this item?</h3>

            <form enctype="multipart/form-data" action={urlItem + id + urlDelete + put } method="POST">

                <img src ={props.image_file}/>

                <p>Item Name:</p>
                <p>{props.item_name}</p>

                <p>Brand:</p>
                <p>{props.item_brand}</p>

                <p>Size:</p>
                <p>{props.item_size}</p>

                <p>Color:</p>
                <p>{props.item_color}</p>

                <p>Catergories:</p>
                <p>{props.item_catergories}</p>

                <br/>
                <br/>

                <input type="submit" class="btn btn-primary"/>

            </form>

    </Default>

    );
  }
}

module.exports = Delete;