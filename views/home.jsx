const React = require('react');
var Default = require('./layouts/default');
import { Container, Row, Col } from 'reactstrap';

class login extends React.Component {
  render() {

    let addItemURL = `/add`;
    let editItemURL = `/edit`;
    let deleteItemURL = `/delete`;
    let clothesListing;

    let clothes = this.props.allclothes;

    if (clothes !== null ) {
        clothesListing = clothes.map(oneItem =>
            (<Col><div>
                <ul>

                <a href={'/item/'+oneItem.id}><img src ={oneItem.image_file}/></a>

                {oneItem.item_name}

                <form action={editItemURL} method="GET">
                <input type="submit" value="Edit Item"/>
                </form>

                <form action={deleteItemURL} method="GET">
                <input type="submit" value="Delete Item"/>
                </form>
            </ul>
            </div></Col>));

    } else {
        clothesListing = '';
    }

    return (

    <Default>
         <body>

            <h1>Welcome to your wardrobe</h1>

        <Row>
                {clothesListing}
        </Row>

            <br/>

            <form action={addItemURL}>
                <button type={"submit"}>Add new clothes</button>
            </form>


        </body>
    </Default>

  )};
}

module.exports = login;


