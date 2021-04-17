const mongoose=require('mongoose');

const FoodSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        dropDups:true,
        set: value => value.trim().replace(/\s+/g, " ").toLowerCase(),
        validate: [
        {
          validator: async function (value) {
            const count = await this.model('Food')
            .countDocuments({ name: value });
            return !count;
          },
          message: props => `${props.value} exists. Please try a different dish.`
        }
      ]
    }, 

    description: {
      type: String,
      required: true
    },

    cuisine: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Cuisine'
    }
  },
  {
    timestamps: true
});

module.exports=mongoose.model('Food', FoodSchema);