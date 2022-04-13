//require
var express = require('express')
var logger = require('morgan')
var mongoose = require('mongoose')

//connect to database
mongoose.connect("mongodb://localhost/sample",
(err) => {
console.log(err ? err : "Connected to database")
})

//instantiate the app

var app = express()

//middleware
app.use(logger('dev'))

//routes

app.get('/',(req,res) => {
  res.send('Welcome')
})
//error handler

app.use((req,res,next) => {
  res.send('page not found')
})
app.use((err,req,res,next) => {
  res.send(err)
})
//listener
app.listen(5000,() => {
  console.log('server listening on port 5k')
})