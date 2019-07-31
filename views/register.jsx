const React = require('react');

class register extends React.Component {
  render() {

    let registerURL = `/register`;
    let loginURL = `/login`;


    return (

    <default>
            <h1>Welcome to Catalog</h1>
            <h3>Create your account to make your own digital clothing archive</h3>

            <form method="POST" action={registerURL}>
                <p>Name:</p>
                <input type={"text"} name={"username"} required/>
                <p>Password:</p>
                <input type={"password"} name={"password"} required/>
                <br/>
                <br/>
                <input type="submit" value="Sign up"/>
            </form>
            <br/>
            <p>Already have an account? Login instead</p>
            <form action={loginURL}>
                <button type={"submit"}>Login</button>
            </form>
    </default>

    );
  }
}

module.exports = register;