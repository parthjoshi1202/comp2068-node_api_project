const mongoose=require("mongoose");
const passportLocalMongoose=require("passport-local-mongoose");

const Food_UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique:true,
        dropDups: true
    }
});

Food_UserSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
});

module.exports=mongoose.model("Food_User", Food_UserSchema);