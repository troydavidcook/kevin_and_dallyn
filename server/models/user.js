const bcrypt = require("bcrypt");

const db = require("../config/database");

const User = {}


User.find = () => {
  return db.manyOrNone(`
    SELECT * FROM users;
    `)
}

User.findByEmail = (email) => {
  return db.oneOrNone(`
      SELECT * FROM users
      WHERE email = $1
  `, email);
}

User.create = (user) => {
  // User info is already created at this point, via the body
  user.password = bcrypt.hashSync(user.password, 10);
  
  return db.one(`
    INSERT INTO users
    (email, password)
    VALUES ($1, $2)
    RETURNING *
  `, [user.email, user.password]);
}



module.exports = User;
