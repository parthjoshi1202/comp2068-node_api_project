const Food=require('../models/food');

exports.index= async(request, response, next) => {
    try {
        const foods=await Food.find().populate('cuisine');

        response.status(200).json(foods);
    } catch (error) {
        next(error);
    }
};

exports.show= async(request, response, next) => {
    try {
        const { id } = request.params;
        const food= await Food.findById(id).populate('cuisine');
        
        response.status(200).json(food);
    } catch (error) {
        next(error);
    }
};

exports.create= async(request, response, next) => {
    try {
        const {
            name,
            description,
            cuisine
        } = request.body;

        const food = await Food.create({
            name,
            description,
            cuisine
        });

        response.status(200).json({
            message: "Dish was created successfully",
            status: "success",
            food
        });
    } catch (error) {
        next(error);
    }
};

exports.update= async(request, response, next) => {
    try {
        const {
            id,
            name,
            description,
            cuisine
        } = request.body;

        await Food.findOneAndUpdate({ _id:id }, {
            id,
            name,
            description,
            cuisine
        });

        const food=await Food.findById(id);

        response.status(200).json({
            message: "Dish was updated successfully",
            status: "success",
            food
        });

    } catch (error) {
        next(error);
    }
};

exports.destroy= async(request, response, next) => {
    try {
        const { id } = request.body;

        await Food.findOneAndDelete({ _id: id });

        response.status(200).json({
            message: "Dish was deleted successfully",
            status: "success"
        });

    } catch (error) {
        next(error);
    }
};
