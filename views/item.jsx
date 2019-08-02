const React = require('react');
var Default = require('./layouts/default');
import { Container, Row, Col } from 'reactstrap';

class item extends React.Component {
  render() {

    let addItemURL = `/add`;
    let editItemURL = `/edit`;
    let deleteItemURL = `/delete`;
    let clothesListing;

    let clothes = this.props.allclothes;

        clothesListing = clothes.map(oneItem =>

            (<Col><div>
                <ul>
                {oneItem.item_name}
                <img src ={oneItem.image_file}/>

                <form action={editItemURL} method="GET">
                <input type="submit" value="Edit Item"/>
                </form>

                <form action={deleteItemURL} method="GET">
                <input type="submit" value="Delete Item"/>
                </form>
            </ul>
            </div></Col>));

    return (

    <Default>
         <body>

            <h1>Welcome to your wardrobe</h1>

        <Row>
                {clothesListing}
        </Row>

            <br/>

            <form action={editItemURL}>
                <button type={"submit"}>Edit this item</button>
            </form>

            <form action={deleteItemURL}>
                <button type={"submit"}>Delete this item</button>
            </form>

        </body>
    </Default>

  )};
}

module.exports = item;