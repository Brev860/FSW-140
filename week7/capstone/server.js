const express = require('express')
const app = express()
const port = 80

app.use(express.json())

app.use('/footballPlayers', require('./sqlroutes'))
app.use('/footballCoaches', require('./coachroute'))
app.use('/Leaders', require('./Leaders'))

app.listen(port, ()=>{
    console.log(`App is running on Port ${port}`)
})

