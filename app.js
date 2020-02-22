const express = require('express');
const expressLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
 

const app = express();

//Passport config
require('./config/passport')(passport);

//DB config
const db = require('./config/keys').MongoURI;

//Connect to Mongodb
mongoose.connect(db,{useNewUrlParser: true})
    .then( ()=>console.log('MongoDB connected....'))
    .catch(err => console.log(err));

// Ejs
app.use(expressLayout);
app.set('view engine', 'ejs');
        
//Body Parser
app.use(express.urlencoded({ extended:false}));

// Express Session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    
}));

//Passport Midleware
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

//Global var
app.use((req, res, next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();

});

app.use(express.static('public'));
//Routes
app.use('/',require('./routes/index'));
app.use('/user',require('./routes/user'));
app.use('/assets',express.static('assets'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));


