const React = require('react')


class Home extends React.Component {
    render() {
        
        return (
            <div>
                <nav class="nav-bar"><a href="/chai"> Menu </a>
            <a href="/chai/new"> Create New Chai</a></nav>
                <link rel="stylesheet" type="text/css" href="../styles/home.css"/>
            <h1>  Pit Stop Chai Shop</h1>
            <h3>A Place to come together</h3>
            <p>Welcome to the Pit Stop Chai Shop, where we offer a variety of different Chais(teas) from different regions to help bring us all together. You can navigate to our menu button to see which Chai's we offer , you can also hit the create new button if you would like to add your suggestion to our menu </p>
            
            
            </div>
        )
    }
}
 module.exports = Home