const User=require("../models/food_user");

exports.create= async (request, response, next) => {
    try {
        const { name, email, password } = request.body;

        const user = await User.register({
            name,
            email
        }, password);
        
        response.status(200)
        .json({
            message: "User registered successfully",
            user
        });
        
    } catch(error) {
        next(error);
    }
};