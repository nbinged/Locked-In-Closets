const React = require('react');
var Default = require('./layouts/default');
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardTitle, CardText, CardImg, ListGroup, ListGroupItem } from 'reactstrap';

class Delete extends React.Component {
  render() {

    let props = this.props.allclothes;
    let urlItem = '/item/';
    let urlDelete = '/delete?_';
    let urlEdit = '/edit?_';
    let id = parseInt(props.id);
    let put = 'method=DELETE'

    // console.log('HELLO FROM EDIT JSXXXXXXXXXXXXXXXXXXXX',this.props.allclothes)

    return (

    <Default>
        <body>

            <Row>
                <Col sm="12" md={{ size: 6, offset: 4 }}>

                <img className="item-image" src ={props.image_file}/>

                <div className="request-text"><h2>Are you sure you would like to delete <strong>{props.item_name}</strong>?</h2>
                </div>

             <br/>


             <ListGroup>
                    <ListGroupItem>
                        <strong>Item Name:</strong> {props.item_name}
                    </ListGroupItem>

                    <ListGroupItem>
                        <strong>Brand:</strong> {props.item_brand}
                    </ListGroupItem>

                    <ListGroupItem>
                        <strong>Size:</strong> {props.item_size}
                    </ListGroupItem>

                    <ListGroupItem>
                        <strong>Color:</strong> {props.item_color}
                    </ListGroupItem>

                    <ListGroupItem>
                        <strong>Catergory:</strong> {props.item_catergories}
                    </ListGroupItem>
              </ListGroup>

                    <br/>

                <Form action={urlItem + id + urlDelete + put} method="POST">

                <Button className="item-buttons" type={"submit"} color="danger" size="lg">Delete this item</Button>

                </Form>

                        </Col>
                    </Row>

            </body>
    </Default>

    );
  }
}

module.exports = Delete;