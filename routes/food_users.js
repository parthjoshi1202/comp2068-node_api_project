const { create } = require("../controllers/food_users");

module.exports= router => {
    router.post("/users", create);
    return router;
};