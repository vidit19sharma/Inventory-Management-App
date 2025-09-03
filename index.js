const express = require('express');

const server = express();

//just adding middleware for get req
server.get('/',(req,res)=>{
    res.send("Welcome to The Inventory App");
})

server.listen(3300,()=>{
    console.log("server is listening at port 3300")
})