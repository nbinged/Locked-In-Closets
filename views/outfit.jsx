const React = require('react');
var Default = require('./layouts/default');
import { Container, Row, Col } from 'reactstrap';

class outfit extends React.Component {
  render() {

    let addItemURL = `/add`;
    let editItemURL = `/edit`;
    let deleteItemURL = `/delete`;
    let itemUrl = `/item/`
    let clothesListing;

    let clothes = this.props.allclothes;

    if (clothes !== null ) {
        clothesListing = clothes.map(oneItem =>
            (<Col><div>
                <ul>

                <a href={'/item/'+oneItem.id}><img src ={oneItem.image_file}/></a>

                {oneItem.item_name}

                <form action={itemUrl+oneItem.id+editItemURL} method="GET">
                <input type="submit" value="Edit Item"/>
                </form>

                <form action={itemUrl+oneItem.id+deleteItemURL} method="GET">
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

            <h1>Here are your outfits</h1>

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

module.exports = outfit;


