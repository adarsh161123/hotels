const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/person.js');

passport.use(
  new LocalStrategy(async(username, password, done) => {
    try {
      const user = await Person.findOne({ username: username,password: password });
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      const ispasswordValid = user.password === password ? true : false;
        if (ispasswordValid) {
        return done(null, user);
      }else {
        return done(null, false, { message: "Incorrect password" });
      }
    } catch (err) {
      return done(err);
    }
  })
);  

module.exports = passport;