const express = require('express');

const router = express.Router();


//Welcome Page
router.get('/welcome', (req,res)=> res.render('welcome'));

//dashboard page

router.get('/dashboard', (req,res)=> res.render('dashboard'));

module.exports = router;