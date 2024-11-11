const express = require('express')
require('dotenv').config()
const app = express()

const port = process.env.PORT;


app.get('/',(req , res)=>{
    res.send('hello social media app');
})
app.listen(port,()=>{
    console.log(`app listing on port ${port}`);
})