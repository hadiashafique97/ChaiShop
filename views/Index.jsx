const React = require('react')

class Index extends React.Component {
    render() {
        const { allChai } = this.props
        
        return (
            <div className='main'>
                <link rel="stylesheet" type="text/css" href="../styles/index.css"/>
               <h1> Types of Chai </h1>
               <div className= "list-container">
                <ul>
                 {allChai.map((chai, i)=> { 
                 return ( 
                 <li>
                    <a href={`/chai/${chai.id}`}>{chai.name.charAt(0).toUpperCase()+ chai.name.slice(1)}</a>
                    <div className='delete-container'>
                    { <form action={`/chai/${chai._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" /></form> } 
                  </div>
                </li>
                
                 )
                 })}
                </ul>

                
                </div>
            </div>
        )
    }
}


 module.exports = Index



