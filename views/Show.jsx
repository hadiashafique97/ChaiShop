const React = require("react");

class Show extends React.Component {
  render() {
    const { chai } = this.props
    const renderForm = ()=>{
      if(chai.inventory > 0){
        return <div className="buy-container"><form action={`/chai/buy/${chai.id}?_method=PUT`} method="POST">
        <input className="buy-button" type="submit" value=" Buy "/>
    </form>
    <h3>There is {chai.inventory} {chai.name} 's left</h3>
    </div>
      }else{
        return <h3 className="oos-container">Out Of Stock</h3>
      }
    }

    return (
      <div className="main-container">
        <link rel="stylesheet" type="text/css" href="../styles/show.css"/>
        <div className="title-container">
        <h1>{chai.name} </h1>
        </div>
       <br></br>
       <div className="text-container"> <h5>About:</h5><p> {chai.about}</p><br></br>
       <h5>Price:</h5> <p> {chai.price}</p></div>
       <div className="img-container"><img src={chai.image+ ".jpg"}></img></div>
       
       {renderForm()}
        <nav className="nav-container"> 
        <a href={`/chai/${chai.id}/edit`}>  Edit This Chai </a> 
          <a href='/chai/'> Return to Menu</a>
        </nav>
      </div>
    )
  }
}
module.exports = Show
