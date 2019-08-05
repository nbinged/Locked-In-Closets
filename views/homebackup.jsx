const React = require('react');
var Default = require('./layouts/default');
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';

class home extends React.Component {
  render() {

    let addItemURL = `/add`;
    let addOutfitURL = `outift/add`;
    let editItemURL = `/edit`;
    let deleteItemURL = `/delete`;
    let itemUrl = `/item/`
    let clothesListing;

    let clothes = this.props.allclothes;
    let username = this.props.allclothes[0].username;

    if (clothes !== null ) {
        clothesListing = clothes.map(oneItem =>

            (<Col><div>
                <ul>

                <a href={'/item/'+oneItem.id}><img src ={oneItem.image_file}/></a>

                {oneItem.item_name}

                <Form action={itemUrl+oneItem.id+editItemURL} method="GET">
                <input type="submit" value="Edit Item"/>
                </Form>

                <Form action={itemUrl+oneItem.id+deleteItemURL} method="GET">
                <input type="submit" value="Delete Item"/>
                </Form>
            </ul>
            </div></Col>));

    } else {
        clothesListing = '';
    }

    return (

    <Default>
         <body>

         <Row>
            <Col className="home-bg">
            </Col>
         </Row>

         <Row className="welcome-text">
            <h2><strong>Welcome to your wardrobe, {username}.</strong></h2>
        </Row>

        <Form action="" className="welcome-buttons">

                <Button className="clothes" formaction={addItemURL} type={"submit"} color="success" size="lg">Add new Clothes</Button>

                <Button className="outfit" formaction={addOutfitURL} type={"submit"} color="success" size="lg">Create a new Outfit</Button>
        </Form>

        <Row>
                {clothesListing}
        </Row>

        </body>

    </Default>

  )};
}

module.exports = home;


