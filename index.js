require('dotenv').config()
const express = require('express')// module js
// import express from 'express'; 
const app = express()
const port = 4000

app.get('/', (req, res) => { // we'll give callback at '/' or home route
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => { 
    res.send('Hello twitter!')
  })

  app.get('/chai', (req, res) => { 
    res.send('<h3>this is chaiii</h3>')
  })
  

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)
  }) // after 1st line, write this.for deploying in production

// firstly, install package.json using "npm init"... set the descriptions for it
// create a index.js folder
// install express using "npm i express"
// install dotenv (a package)... using "npm i dotenv"... that is for imp cradentials and sepecific port no.
// create a new fie names dotenv