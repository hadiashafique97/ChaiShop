const React = require("react");

class Show extends React.Component {
  render() {
    const { chai } = this.props
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="../styles/show.css"/>
        <h1>{chai.name} Show Page</h1>
        There is {chai.inventory} {chai.name} 's left <br></br>
        About: {chai.about}|
       <img src={chai.image+ ".jpg"}></img>
       <form action={`/chai/buy/${chai.id}?_method=PUT`} method="POST">
          <input type="submit" value=" Buy "/>
      </form>
        <nav> 
          <a href='/chai/'>Return to index</a>
        </nav>
      </div>
    )
  }
}
module.exports = Show
