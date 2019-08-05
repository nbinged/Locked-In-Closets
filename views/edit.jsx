const React = require('react');
var Default = require('./layouts/default');
import { Container, Row, Col } from 'reactstrap';

class edit extends React.Component {
  render() {

    let props = this.props.allclothes;
    let urlItem = '/item/';
    let urlEdit = '/edit?';
    let id = parseInt(props.id);
    let put = '_method=PUT';

    return (

    <Default>

        <Container>

            <h1>Edit Clothes Form</h1>
            <h3>Please enter the details of the item of clothing you would like to edit.</h3>

                <img src ={props.image_file}/>

            <form action={urlItem + id + urlEdit + put } method="POST">

                <p>Item Name:</p>
                <input type="text" name="item_name" defaultValue={props.item_name}/>

                <p>Brand:</p>
                <input type="text" name="item_brand" defaultValue={props.item_brand}/>

                <p>Size:</p>
                <input type="text" name="item_size" defaultValue={props.item_size}/>

                <p>Color:</p>
                <input type="text" name="item_color" defaultValue={props.item_color}/>

                <p>Catergories:</p>
                <input type="text" name="item_catergories" defaultValue={props.item_catergories} />

                <p>Change the picture</p>
                <input type="text" name="image_file" defaultValue={props.image_file} />

                <br/>
                <br/>

                <input type="submit" class="btn btn-primary"/>

            </form>
        </Container>

    </Default>

    );
  }
}

module.exports = edit;