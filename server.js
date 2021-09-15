const express = require('express')

const app = express()

//setting a view engine - ejs, another one could be PUG
app.set('view engine', 'ejs')

app.get('/', (req, res, next) => {
    res.render('index', {engine: "ejs"}) //Sending variables
})

app.listen(3000, () => console.log("Server runs on port 3000"))