const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./Default.jsx')

class Edit extends React.Component{
  render() {
    const { chai } = this.props
    return (
      <DefaultLayout title="Edit Page">  
      <link rel="stylesheet" type="text/css" href="../styles/edit.css"/>   
          <form action={`/chai/${chai.id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={chai.name}/><br/>
          
         Inventory: <input type="number" name="inventory" defaultValue={chai.inventory}/><br/>
          
          About: <input type="text" name="about" defaultValue={chai.about}/><br/>
          
          Image: <input type="text" name="image" defaultValue={chai.image}/><br></br>
          
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit