const React = require('react');
var Default = require('./layouts/default');

class login extends React.Component {
  render() {

    let loginURL = `/login`;
    let registerURL = `/register`;


    return (

    <Default>
            <h1>Welcome back to Catalog</h1>
            <h3>Please log in to access your digital clothing archive.</h3>

            <form method="POST" action={loginURL}>
                <p>Name:</p>
                <input type={"text"} name={"username"} required/>
                <p>Password:</p>
                <input type={"password"} name={"password"} required/>
                <br/>
                <br/>
                <input type="submit" value="Log In"/>
            </form>
            <br/>


            <p>Dont have an account? Create one instead!</p>
            <form action={registerURL}>
                <button type={"submit"}>Register</button>
            </form>
    </Default>

    );
  }
}

module.exports = login;