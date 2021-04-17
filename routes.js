module.exports=router=> {
    require('./routes/cuisines')(router);
    require('./routes/foods')(router);
    require('./routes/food_users')(router);
    require('./routes/sessions')(router);

    return router;
};