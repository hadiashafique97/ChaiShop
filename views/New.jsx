const React = require("react")

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Add your Chai</h1>
        <link rel="stylesheet" type="text/css" href="../styles/new.css"/>
        <form action='/chai' method='POST'>
          Name: <input type='text' name='name' />
          <br />
          Inventory: <input type='number' name='inventory'/>
          <br />
          About: <input type='text' name='about'/>
          <br />
          Img url: <input type='text' name='image'/>
          <br />
          <input class="newbutton" type='submit' name='' value='Create Chai' />
        </form>
      </div>
    )
  }
}

module.exports = New
