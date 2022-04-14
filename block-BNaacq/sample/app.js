var express = require("express");
var app = express();

var mongoose = require("mongoose");

mongoose.connect( "mongodb://localhost/sample", (err)=>{
    console.log( err ? err : "conntected true" );
});

app.listen(5000, ()=>{
    console.log("server listening on port 5k");
});

