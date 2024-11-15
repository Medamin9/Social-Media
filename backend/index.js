const express = require('express')
require('dotenv').config()
const cors = require('cors');

const app = express()

const mongoose = require('mongoose')
// pour lire les console.logs dans les fcts 
app.use(express.json())

app.use(cors())
const port = process.env.PORT;
const urlDb = process.env.CONNECTION_STRING;
mongoose.connect(urlDb, 
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    }
)
//tester la connexion
const db = mongoose.connection;
db.on("error",console.error.bind(console, "connection error:"))
db.once("open", function(){
    console.log("Data Base connected successfully ✅")
})

app.get('/',(req , res)=>{
    res.send('hello social media app');
})


const userRoutes = require('./routes/user.router') 
app.use('/users',userRoutes)


app.listen(port,()=>{
    console.log(`app listing on port ${port} 😊`);
}) 