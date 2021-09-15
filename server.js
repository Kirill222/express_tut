const express = require('express')

const app = express()

//setting a view engine - ejs, another one could be PUG
app.set('view engine', 'ejs')

app.get('/', (req, res, next) => {
    res.render('index')  //when using view engine, the defaul falder or these files is "views/"
})

app.listen(3000, () => console.log("Server runs on port 3000"))