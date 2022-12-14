const React = require('react')


class Home extends React.Component {
    render() {
        
        return (
            <div className='main'>
                <link rel="stylesheet" type="text/css" href="../styles/home.css"/>
            <h1>  Pit Stop Chai Shop</h1>
            <div className="img-container" >
            <div className='img one'></div>
            <div className='img two' ></div>
            <div className='img three'></div>
            <div className='img four'></div>
            {/* <img src= "https://thumbs.dreamstime.com/b/indian-chai-worker-pouring-some-tea-11744234.jpg" alt= "pic2"></img>
            <img src= "	https://images.news18.com/ibnlive/uploads/2022/10/shutterstock_1706805625.jpg" alt= "pic3"></img>
            <img src= "https://i.pinimg.com/736x/d8/8a/a7/d88aa78547772f056740505199f37f0a.jpg" alt= "pic4"></img> */}
            </div>
            <div className ="text-container">
            <h3>A place to come together</h3>
            <p>Welcome to the Pit Stop Chai Shop, where we offer a variety of different Chais(teas) from different regions to help bring us all together. You can navigate to our menu button to see which Chai's we offer. You can also hit the create new button if you would like to add your suggestion to our menu.</p>
            </div>
            <div class="nav-container">
               <a href="/chai"> Menu </a>
            <a href="/chai/new"> Create New Chai</a>
            </div>
            </div>
        )
    }
}
 module.exports = Home