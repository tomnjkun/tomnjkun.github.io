const fs = require("fs");
const http = require("http");

const express = require('express')
const app = express()
const port = 3000



http.createServer({
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
},app).listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req,res)=>{
  res.send("Hello from express server.")
})