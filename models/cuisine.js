const mongoose=require('mongoose');

const CuisineSchema= new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        unique: true,
        dropDups: true, 
        set: value=> value.trim().replace(/\s+/g, " ").toLowerCase(),
        validate: [
            {
                validator: async function(value) {
                    const count=await this.model('Cuisine')
                    .countDocuments({name: value});
                    return !count;
                }, 
            message: props=> `${props.value} exists. Try adding a different cuisine.`
        }
        ]
    }
    }, {
        timestamps: true
});

CuisineSchema.methods.getFoods= function () {
    return mongoose.model('Food').find({
        cuisine: this._id
    });
}

module.exports= mongoose.model('Cuisine', CuisineSchema);