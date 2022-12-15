const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./Default.jsx')

class Edit extends React.Component{
  render() {
    const { chai } = this.props
    return (
      <DefaultLayout title="Edit Chai">  
      
      <link rel="stylesheet" type="text/css" href="/styles/edit.css"/>   
      <div className='main-container'>
      <div className='form-container'>
          <form action={`/chai/${chai.id}?_method=PUT`} method="POST">
            <div className='name-container'>
          Name: <input type="text" name="name" defaultValue={chai.name}/><br/>
          </div>
          <div className='inven-container'>
         Inventory: <input type="number" name="inventory" defaultValue={chai.inventory}/><br/>
          </div>
          <div className='about-container'>
          About: <input type="text" name="about" defaultValue={chai.about}/><br/>
          </div>
          <div className='image-container'>
          Image: <input type="text" name="image" defaultValue={chai.image}/><br></br>
          </div>
          <div className='price-container'>
          Price: <input type="text" name="price" defaultValue={chai.price}/><br></br>
          </div>
          <div className="submit-button"><input type="submit" value="Submit Changes"/></div>
          
      </form>
      </div>
      <a href='/home'> Home </a>
      </div>
      </DefaultLayout>
    )
  }
}
module.exports= Edit