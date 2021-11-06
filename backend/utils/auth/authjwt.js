const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const boom = require("@hapi/boom");

const UsersServices = require("../../services/users");
const { config } = require("../../config/index");

passport.use(
  new Strategy(
    {
      secretOrKey: config.authJwkSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async function (tokenPayload, done) {
      const usersService = new UsersServices();

      try {
        const user = await usersService.getUser({ email: tokenPayload.email });
        if (!user) {
          return done(boom.unauthorized(), false);
        }
        delete user.password;
        done(null, { ...user, scopes: tokenPayload.scopes });
      } catch (err) {
        return done(err);
      }
    }
  )
);
