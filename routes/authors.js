const express = require('express');
const router = express.Router();
const author = require('../models/author');

// ALL
router.get('/', async (req, res) => {
    
    try {
        
        const users = await author.find({});
        console.log('users ' + users[0].name)
        res.send(users)
    } catch (error) {
        console.log(error)
    }
    // res.render('authors/index', users);
});
//new
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new author() });
});
//create
router.post('/', (req, res) => {
    res.send('create')   
});




module.exports = router;
