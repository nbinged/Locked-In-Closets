const React = require('react');
var LoginPage = require('./layouts/login');
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

export default class login extends React.Component {
  render() {

    let loginURL = `/login`;
    let registerURL = `/register`;


    return (

<LoginPage>

        <Container fluid>
        <Row>


        <Col xs="8" className="background-image">
            </Col>

        <Col xs="4" className="empty-background">

        <h2>Welcome back to</h2>
        <h2><strong>Locked In Closets</strong></h2>

        <p>Please log in to access your digital clothing archive.</p>

        <br/>
        <br/>

        <h3>Log In</h3>

    <Form method="POST" action={loginURL}>

        <FormGroup>
          <Label for="Username">Username:</Label>
          <Input type="text" name="username" required/>
        </FormGroup>

        <FormGroup>
          <Label for="Password">Password:</Label>
          <Input type="password" name="password" required/>
        </FormGroup>

        <Button type={"submit"} color="success" size="lg" block>Log In</Button>
      </Form>

            <br/>
            <br/>

        <h6>Dont have an account? Create one instead!</h6>

            <Form action={registerURL}>
            <Button type={"submit"} size="lg">Register</Button>
            </Form>

      </Col>

    </Row>

    </Container>

</LoginPage>

    );
  }
}

module.exports = login;