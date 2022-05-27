  const express = require('express')
  
  const app = express()
  const dotenv = require('dotenv')
  dotenv.config()
  console.log(process.env.PORT)
app.listen(process.env.PORT,()=>{
    console.log('Server is running on',+process.env.PORT)
})

