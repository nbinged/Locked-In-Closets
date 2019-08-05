const React = require('react');
var RegisterPage = require('./layouts/register');
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

export default class register extends React.Component {
  render() {

    let registerURL = `/register`;
    let loginURL = `/login`;


    return (

<RegisterPage>

        <Container fluid>
        <Row>


        <Col xs="8" className="background-image">
            </Col>

        <Col xs="4" className="empty-background">

            <h2>Welcome to</h2>
            <h2><strong>Locked In Closets</strong></h2>

            <p>Make an account to create your own digital clothing archive</p>

            <br/>
            <br/>

            <h3>Sign In</h3>

    <Form method="POST" action={loginURL}>

        <FormGroup>
          <Label for="Username">Username:</Label>
          <Input type="text" name="username" required/>
        </FormGroup>

        <FormGroup>
          <Label for="Password">Password:</Label>
          <Input type="password" name="password" required/>
        </FormGroup>

        <Button type={"submit"} color="warning" size="lg" block>Sign up</Button>
      </Form>

            <br/>
            <br/>

        <h6>Already have an account? Login instead!</h6>

            <Form action={loginURL}>
            <Button type={"submit"} size="lg" >Login</Button>
            </Form>

      </Col>

    </Row>

    </Container>

</RegisterPage>

    );
  }
}

module.exports = register;