const passport=require("passport");
const jwt= require("jsonwebtoken");

exports.authenticate = (request, response, next) => {
    try {
        passport.authenticate('local', (error, user) => {
            if(error || !user) return next(error);

            request.login(user, { session: false}, async err => {
                if(err) return next(err);

                const body = { _id: user.id, email: user.email };
                const token = jwt.sign({ user: body }, "secret");

                return response.status(200).json({ token });
            });
        })(request, response, next);
     }
    catch(error) {
        next(error);
    }
};