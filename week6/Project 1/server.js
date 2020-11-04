const express = require('express');
const app = express();
const mysql = require('mysql')

 
app.use(express.json())

app.use('/seasons', require('./sqlroutes'))

 app.use((err, req, res,next)=> {
  return res.send({errMsg: err.message})
})


const port  = 6000;
app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
})