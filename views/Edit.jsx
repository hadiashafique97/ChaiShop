const React = require('react');
// As you can see we are using the app layout
// const DefaultLayout = require('./Default.jsx')

class Edit extends React.Component {
  render() {
    const { chai } = this.props
    return (
      <div className='main'>

        <div className="title">
          <h1>Edit Your Chai</h1>
        </div>
        <link rel="stylesheet" type="text/css" href="/styles/edit.css" />


        <form action={`/chai/${chai.id}?_method=PUT`} method="POST">
          <fieldset className="fieldset-container">

          <div className="input-container">
              <div className="cont-1">
         <input className="input" placeholder="Name" type='text' name='name' defaultValue={chai.name}  />
         <br></br>
         
          <div>

            <input className="input" placeholder="Inventory" defaultValue={chai.inventory}  type='number' name='inventory'/>
            </div>
          <br />
          </div>
          <div  className="cont-3" >
            <input  id="about"className="input" placeholder="About" type='text' name='about'defaultValue={chai.about}/>
          <br />
          </div>
            <div className="cont-4">
              <input className="input" placeholder="Image"  type='text' name='image'defaultValue={chai.image}/>
          <br />
          </div>
           <div className="cont-5">
            <input className="input" placeholder="Price"  type='text' name='price' defaultValue={chai.price}/>
          <br />
          </div>
          </div>
          <div className="submit-container">
          <input className="submit-button" type='submit' name='' value='Submit Change' /></div>
          </fieldset>
        </form>
        <div className="nav-container">
        <a href='/chai/'>Menu</a>  <a href='/home'> Home </a> 
       
        </div>
        <div className='copyright'>
            <span>&copy; Hadia Shafique</span>
            </div>
      </div>
    )
  }
}
module.exports = Edit