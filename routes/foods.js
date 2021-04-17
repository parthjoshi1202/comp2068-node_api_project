const {
    index, show, create, update, destroy
} = require('../controllers/foods');
const passport=require('passport');

module.exports = router => {
    router.get('/foods', index);
    router.get('/foods/:id', show);
    router.post('/foods', passport.authenticate('jwt', { session: false }) ,create);
    router.put('/foods', passport.authenticate('jwt', { session: false }), update);
    router.delete('/foods', passport.authenticate('jwt', { session: false }), destroy);
};