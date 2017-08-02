const express = require('express')
const     app = express()

app.use("/assets", express.static("public") )

app.get("/", (req, res)=> res.sendFile(__dirname + "/public/index.html") )

app.listen( 3001, _ => console.log(`on port 3001`) )
