//require
var express = require('express')
var logger = require('morgan')
var mongoose = require('mongoose')
var User = require("./models/user");

//connect to database
mongoose.connect("mongodb://localhost/sample",
(err) => {
console.log(err ? err : "Connected to database")
})

//instantiate the app

var app = express()

//middleware
app.use(logger('dev'))
app.use(express.json());

//routes

app.post('/user',(req,res,next) => {
  //capture the data
  // console.log(req.body);
  //save the data to database
  User.create(req.body,(err,user) => {
    //console.log(err,user)
    console.log(err);
    res.json(user);
  })
})

//use Model.find

app.get( '/user', ( req, res )=>{
  User.find({}, (err,user)=>{
      console.log(err);
      res.json( { user: user } );
  });
});

//on GET request on '/users/:id' route, fetch a user

app.get( '/user/:id', ( req, res )=>{
  var id = req.params.id;
  User.findById( id, (err,user)=>{
      console.log(err);
      res.json(user);
  })
});

//Update a user
//on PUT request on '/users/:id', update a user

app.put( '/user/:id', ( req, res )=>{
  var id = req.params.id;
  User.findByIdAndUpdate(id, res.body, {new: true}, (err,userUpdated)=>{
      console.log(err);
      res.json(userUpdated);
  })
} )

//delete a user using Model.findByIdAndDelete()
//on DELETE request on '/users/:id'

app.delete( '/user/:id', ( req, res )=>{
  User.findByIdAndDelete( req.params.id, (err,deleted)=>{
      console.log(err);
      res.send(`deleted ${deleted.name}`);
  })
})


//listener
app.listen(5000,() => {
  console.log('server listening on port 5k')
})