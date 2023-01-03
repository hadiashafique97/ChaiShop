require("dotenv").config()
const mongoose = require("mongoose")

// global config
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const Chai = require("./models/chai")
// My chai array that contributes to the database 
// const allMyChai = [
//         { name: "Masala Chai", inventory: 28, about: "Indian / Pakistani Beverage that is made with spices, sugar and milk", image : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Masala_Chai.JPG/640px-Masala_Chai" },
//         { name: "Kashmiri Chai", inventory: 32, about: "This Chai is typically referred to as the pink tea because of its color, made with green tea leaves giving it a savory taste ", image : 	"https://www.flourandspiceblog.com/wp-content/uploads/2022/10/IMG_8782-2" },
//         { name: "Kehwa", inventory: 17, about: "A refreshing tea without milk served with saffron, cinnamon, and cardamom also originating in Kashmir", image :"	https://img-global.cpcdn.com/recipes/3b78564d1f87e899/400x400cq70/photo"  },
//         { name: "Elaichi Chai", inventory: 28, about: "The highlight of this chai will have to be the overpowering flavor of cardamom which is where it gets its name" , image :"	https://www.tarladalal.com/members/9306/procstepimgs/elaichi-tea-(10)-9-188639" },

//     ]
//connecting to Mongo
mongoose.connect(mongoURI)
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

// Connection Error/ Success 
db.on("error", (err) => console.log(err.message + " is mongod not running?"))
db.on("open", () => console.log("mongo connected: ", mongoURI))
db.on("close", () => console.log("mongo disconnected"))

// all my .use 
// app.use(express.static('public'))
app.use(express.static(__dirname + '/public'))
app.use(methodOverride('_method'))

app.use((req, res, next) => {
  console.log("I run for all routes")
  next()
})
// to catch any discrepency errors 
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({
  extended: true
}))
mongoose.set("strictQuery", true)

// my view engine 
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('/', (req, res) => {
  res.render('Home')
})
// INDEX //

app.get("/chai", (req, res) => {
  Chai.find({}, (error, allChai) => {
    res.render("Index", {
      allChai: allChai, // getting all Chais from db to pass as props
    })
  })
})




//NEW//
app.get("/chai/new", (req, res) => {
  res.render("New")
})
//DELETE//
app.delete('/chai/:id', (req, res) => {

  Chai.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/chai')
  })
})



//UPDATE//
app.put('/chai/buy/:id', (req, res) => {
  Chai.findById(req.params.id, (err, foundChai) => {
    let newItem = foundChai
    newItem.inventory = newItem.inventory - 1

    Chai.findByIdAndUpdate(req.params.id, newItem, (err, foundChai) => {
      console.log('updated Chai')
      res.redirect(`/chai/${req.params.id}`)
    })
  })
})

app.put('/chai/:id', (req, res) => {
  Chai.findByIdAndUpdate(req.params.id, req.body, (err, allChai) => {
    console.log(req.body)

    res.redirect(`/chai/${req.params.id}`) // redirecting to show page 
  })
})


//CREATE//
app.post("/chai", (req, res) => {

  let chaiBody = req.body
  Chai.create(chaiBody, (error, createdChai) => {
    res.redirect("/chai")
  })
})

//EDIT//
app.get('/chai/:id/edit', (req, res) => {
  Chai.findById(req.params.id, (err, foundChai) => { //find the fruit
    if (!err) {
      res.render(
        'Edit',
        {
          chai: foundChai //pass in the found fruit so we can prefill the form
        }
      );
    } else {
      res.send({ msg: err.message })
    }
  })
})




//SHOW//

app.get("/chai/:id", function (req, res) {
  Chai.findById(req.params.id, (err, foundChai) => {
    res.render("Show", {
      chai: foundChai,
    })
  })
})





//Uploading my chai array to the database 

// Chai.insertMany(allMyChai)
//     // if database transaction succeeds
//     .then((chai) => {
//         console.log(chai)
//     })
//     // if database transaction fails
//     .catch((error) => {
//         console.log(error)
//     })
//     // close db connection either way
//     .finally(() => {
//         db.close()
//     })






app.listen(port, function () {
  console.log('Hello')
})