const express = require('express')
const router = express.Router()  //router.get() works exactly the same as app.get(), but this way we can nest it inside of a parent router


router.get('/', (req, res, next) => {
    res.send("User list")
})

router.get('/new', (req, res, next) => {
    res.send("New user")    
})

module.exports = router