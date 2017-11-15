const User = require('../../models/user');
const bcrypt = require("bcrypt");
const controller = {}

controller.login = (req, res) => {
    res.render('/engagement')
  }

  controller.process_login = (req, res) => {
    //Step 1: User enters email and password
    //Step 2: Retrieve user from DB based on email address
    //Step 3: Compare user-entered password with DB password

    User.findByEmail(req.body.user.email)
    .then((user) => {
        if (user) {
            if (req.body.user.password === user.password) {
                //Password matches! Good to go.

                //Set user to session to be used throughout the site
                req.session.user = user;
                req.session.isAuthenticated = true;
                //Redirect to protected page only for logged in users
                res.render("/engagement");
            } else {
                //Password does not match :(
                res.redirect("index");
            }
        }
    })
    .catch((err) => {
        res.send('error here', err);
    });
}


module.exports = controller
