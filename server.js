const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
    //res.sendStatus(500)  //also one of the ways to send Status codes
    //res.status(500).send("There is an error on a server")  //sending status code with custom message
    //res.status(200).json({message: "hi"})
    //res.json({message: "hi"}) //the default is 200, so we do not need to use status code explicitly
    res.download("server.js") //DOWNLOADING FILES
})

app.listen(3000, () => console.log("Server runs on port 3000"))