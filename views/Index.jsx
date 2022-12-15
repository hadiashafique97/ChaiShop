const React = require('react')

class Index extends React.Component {
    render() {
        const { allChai } = this.props
        
        return (
            <div className='main'>
                <link rel="stylesheet" type="text/css" href="../styles/index.css"/>
               <h1> Types of Chai </h1>
               <div className= "index-container">
                <ul className="list-container">
                 {allChai.map((chai, i)=> { 
                 return ( 
                 <li>
                    <a href={`/chai/${chai.id}`}>{chai.name.charAt(0).toUpperCase()+ chai.name.slice(1)}</a>
                    
                    { <form action={`/chai/${chai._id}?_method=DELETE`} method="POST">
    
                    
                  <input className= "button"type="submit" value="DELETE" />
                  
                  </form> } 
                  
                </li>
                
                 )
                 })}
                </ul>
                 <div className= "nav-container">
                <a className="button"href='/home'> Home </a>
                <a className="button" href="/chai/new"> Create New Chai</a>
                </div>
                </div>
            </div>
        )
    }
}


 module.exports = Index



