const React = require('react');

class login extends React.Component {
  render() {

    let addItemURL = `/add`;
    let editItemURL = `/edit`;
    let deleteItemURL = `/delete`;

    let clothes = this.props.allclothes;

    if (clothes.length > 0 ) {
        let clothesListing = clothes.map(oneItem => (<li>{oneItem.item_name}</li>));
    } else {
        let clothesListing = '';
    }

    return (

    <default>
         <body>

            <h1>Welcome to your wardrobe</h1>

          <ul>
            {clothesListing}
          </ul>

            <form action={addItemURL}>
                <button type={"submit"}>Add new clothes</button>
            </form>

            <br/>

        </body>
    </default>

  )};
}

module.exports = login;