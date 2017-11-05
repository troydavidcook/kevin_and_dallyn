const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

var {User} = require('./models/user')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render('index');
});







const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server up and running on ${port}`);
});