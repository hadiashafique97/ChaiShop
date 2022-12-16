const React = require("react")

class New extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="title">
          <h1>Add Your Chai</h1>
          </div>
         
        <link rel="stylesheet" type="text/css" href="../styles/new.css"/>
        
        <form className="form" action='/chai' method='POST'>
          <fieldset className="fieldset-container">
           
            <div className="input-container">
              <div className="cont-1">
         <input className="input" placeholder="Name" type='text' name='name' />
         <br></br>
          <div>
            <input className="input" placeholder="Inventory"  type='number' name='inventory'/>
            </div>
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
          <div className="submit-container">
          <input className="submit-button" type='submit' name='' value='Suggest Chai' /></div>
          </fieldset>
          
        </form>
        <div className="nav-container">
        <a href='/chai/'>Return to Menu</a>  <a href='/home'> Home </a>
       
        </div>
      </div>
    )
  }
}

module.exports = New
