const {
    index, show, create, update, destroy
} = require('../controllers/cuisines');
const passport=require('passport');

module.exports = router => {
    router.get('/cuisines', index);
    router.get('/cuisines/:id', show);
    router.post('/cuisines', passport.authenticate('jwt', { session: false }) ,create);
    router.put('/cuisines', passport.authenticate('jwt', { session: false }) , update);
    router.delete('/cuisines', passport.authenticate('jwt', { session: false }) ,destroy);
};