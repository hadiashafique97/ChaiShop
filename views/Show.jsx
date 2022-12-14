const React = require("react");

class Show extends React.Component {
  render() {
    const { chai } = this.props
    return (
      <div>
        <h1>{chai.name} Show Page</h1>
        There is {chai.inventory} {chai.name} 's left <br></br>
        About: {chai.about}|
       <img src={chai.image+ ".jpg"}></img>
        <nav> 
          <a href='/chai/'>Return to index</a>
        </nav>
      </div>
    );
  }
}
module.exports = Show
