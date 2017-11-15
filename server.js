const express = require('express');
const path = require('path');
const passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const logger = require('morgan');
const app = express();

require("dotenv").config();

app.set('view engine', 'ejs');



app.use(express.static(path.join(__dirname, "public")));

// app.use(session({
//     secret: process.env.SECRET_KEY,
//     resave: false,
//     saveUninitialized: true,
//     store: new MongoStore({
//         url: process.env.MONGODB_URI || "mongodb://localhost:27017/sessions"
//     })
// }));


// app.use(express.static("public"));
// app.use(session({ secret: process.env.SECRET_KEY }));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(passport.initialize());
// app.use(passport.session());

passport.use(new LocalStrategy(
    function(email, password, done) {
      User.findOne({ email:email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.get('/',
// passport.authenticate('local'),
// function(req, res) {
//   // If this function gets called, authentication was successful.
//   // `req.user` contains the authenticated user.
//   if (req.user.email === user.email) {
//     res.redirect('/engagement');
//   }
// });

// app.get('/engagement',
// passport.authenticate('local', { successRedirect: '/engagement',
//                                  failureRedirect: '/' 
//                                 }));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/engagement', (req, res) => {
    res.render('engagement');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server up and running on ${port}`);
});
