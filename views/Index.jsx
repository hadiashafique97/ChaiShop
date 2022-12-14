const React = require('react')

class Index extends React.Component {
    render() {
        const { allChai } = this.props
        
        return (
            <div>
                <link rel="stylesheet" type="text/css" href="../styles/index.css"/>
               <h1> See All Types of Chai </h1>
               <div class= "mylist">
                <ul>
                 {allChai.map((chai, i)=> { 
                 return ( 
                 <li>
                    <a href={`/chai/${chai.id}`}>{chai.name.charAt(0).toUpperCase()+ chai.name.slice(1)}</a>
                    <a href={`/chai/${chai.id}/edit`}>  (Edit This Chai)</a>
                    { <form action={`/chai/${chai._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" /></form> } 
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



