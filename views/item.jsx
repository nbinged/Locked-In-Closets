const React = require('react');
var Default = require('./layouts/default');


class item extends React.Component {
  render() {

    let addItemURL = `/add`;
    let editItemURL = `/edit`;
    let deleteItemURL = `/delete`;

    let requestedclothes = this.props.allclothes;
    console.log(requestedclothes);

    return (

        <Default>
             <body>

                <h1>Here is your item</h1>

                <img src ={requestedclothes.image_file}/>

                <br/>

                <li>Name: {requestedclothes.item_name}</li>
                <li>Brand: {requestedclothes.item_brand}</li>
                <li>Size: {requestedclothes.item_size}</li>
                <li>Color: {requestedclothes.item_color}</li>
                <li>Catergory: {requestedclothes.item_catergories}</li>

                <br/>

                <form action={requestedclothes.id+editItemURL}>
                    <button type={"submit"}>Edit this item</button>
                </form>

                <form action={requestedclothes.id+deleteItemURL}>
                    <button type={"submit"}>Delete this item</button>
                </form>

            </body>
        </Default>

  )};
}

module.exports = item;
                    // {clothesListing}

