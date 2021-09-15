const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
    //res.sendStatus(500)  //also one of the ways to send Status codes
    res.status(500).send("There is an error on a server")  //sending status code with custom message
})

app.listen(3000, () => console.log("Server runs on port 3000"))