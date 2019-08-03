const React = require('react');
var Default = require('./layouts/default');

class edit extends React.Component {
  render() {

    let props = this.props.allclothes;
    console.log('propppppppppppppppppsssssssssss',props)

    return (

    <Default>
            <h1>Edit Clothes Form</h1>
            <h3>Please enter the details of the item of clothing you would like to edit.</h3>

            <form enctype="multipart/form-data" action="/add" method="POST">

                <input type="hidden" name="user_id" value={props.userID}/>

                <input type="hidden" name="username" value={props.username}/>

                <p>Item Name:</p>
                <input type="text" name="item_name" value={props.item_name}/>

                <p>Brand:</p>
                <input type="text" name="item_brand" value={props.item_brand}/>

                <p>Size:</p>
                <input type="text" name="item_size" value={props.item_size}/>

                <p>Color:</p>
                <input type="text" name="item_color" value={props.item_color}/>

                <p>Catergories:</p>
                <input type="text" name="item_catergories" value={props.item_catergories} />

                <p>Upload Your own picture</p>
                  <input type="text" name="image_file" value={props.image_file}/>

                <br/>
                <br/>

                <input type="submit" class="btn btn-primary"/>

            </form>

    </Default>

    );
  }
}

module.exports = edit;