const React = require("react")

class New extends React.Component {
  render() {
    return (
      <div>
        
        <link rel="stylesheet" type="text/css" href="../styles/new.css"/>
        
        <form action='/chai' method='POST'>
          <fieldset>
            <legend><h1>Add your Chai</h1></legend>
          <label>Name:</label> <input type='text' name='name' />
          <br />
          <label>Inventory:</label> <input type='number' name='inventory'/>
          <br />
          <label>About:</label>  <input type='text' name='about'/>
          <br />
          <label>Img url:</label> <input type='text' name='image'/>
          <br />
          <input class="newbutton" type='submit' name='' value='Suggest Chai' />
          </fieldset>
        </form>
        <a href='/chai/'>Return to Menu</a>
      </div>
    )
  }
}

module.exports = New
