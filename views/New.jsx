const React = require("react")

class New extends React.Component {
  render() {
    return (
      <div>
        
        <link rel="stylesheet" type="text/css" href="../styles/new.css"/>
        
        <form action='/chai' method='POST'>
          <fieldset className="fieldset-container">
            <legend><h1>Add your Chai</h1></legend>
            <div className="input-container">
              <div className="cont-1">
         <input className="input" placeholder="Name" type='text' name='name' />
         
          
            <input className="input" placeholder="Inventory"  type='number' name='inventory'/>
          <br />
          </div>
          <div  className="cont-3" >
            <input  id="about"className="input" placeholder="About" type='text' name='about'/>
          <br />
          </div>
            <div className="cont-4">
              <input className="input" placeholder="Image"  type='text' name='image'/>
          <br />
          </div>
           <div className="cont-5">
            <input className="input" placeholder="Price"  type='text' name='price'/>
          <br />
          </div>
          </div>
          <input className="submit-button" type='submit' name='' value='Suggest Chai' />
          </fieldset>
          
        </form>
        <div className="nav-container">
        <a href='/chai/'>Return to Menu</a> <br></br>
        <a href='/home'> Home </a>
        </div>
      </div>
    )
  }
}

module.exports = New
