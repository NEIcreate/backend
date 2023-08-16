const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express(express)
require('dotenv').config()
const task_route = require('../Route/taskroute')
const cors = require('cors')


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors(
    {origin:['http://localhost:3000']}
))
app.use(task_route)


app.get('/', (req,res) =>{
    res.send('This is our server page')
})

mongoose
.connect(process.env.MONGO_URL)
.then(() =>{
    app.listen(5000,() =>{
        console.log(`server running on port 5000}`)
    })
})
.catch((err) => console.log(err))
