const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const SECRET_KEY = process.env.SECRET_KEY || 'default_secret_key';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY
};

//Funktion för att validera JWT
passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
  if (jwt_payload) {
    return done(null, jwt_payload);
  } else {
    return done(null, false);
  }
}));

module.exports = passport;