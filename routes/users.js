const express = require('express')
const router = express.Router()  //router.get() works exactly the same as app.get(), but this way we can nest it inside of a parent router


router.get('/', (req, res, next) => {
    res.send("User list")
})

router.get('/new', (req, res, next) => {  //static routes should be above dynamic ones
    res.send("New user")    
})

router.post('/', (req, res, next) => {
    res.send('Create user')
})

router.get('/:userId', (req, res, next) => {
    const id = req.params.userId
    res.send(`Get user with id ${id}`)
})

router.put('/:userId', (req, res, next) => {
    const id = req.params.userId
    res.send(`Update ${id}`)
})

router.delete('/:userId', (req, res, next) => {
    const id = req.params.userId
    res.send(`Delete id ${id}`)
})


module.exports = router