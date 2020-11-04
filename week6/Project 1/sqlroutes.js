const express = require('express')
const mysql = require('mysql')
const sqlRouter = express.Router()

const db = mysql.createConnection({
    user: 'root',
    password: 'Lilbldjr1!',
    server: 'localhost', 
    port: 3306,
    database: 'bob_ross' ,
    parseJSON: true 
});

db.connect((err) =>{
if(err){
    console.log(err)
}
console.log('The connection to sql was successful')
})

sqlRouter.route('/').get((req, res) =>{
let sql = 'SELECT episode, title FROM elementsbyepisode' 

db.query(sql, (err, results) =>{
  if(err){
      console.log(err)
    throw err;
  }
 res.send(results)

})
})

module.exports = sqlRouter