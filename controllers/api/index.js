const router = require('express').Router();
const userRoutes = require('./user-routes');
const loginRoute = require('./login-route');
const logoutRoute = require('./logout-route');
const commentRoute = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/login', loginRoute);
router.use('/logout', logoutRoute);
router.use('/comment', commentRoute);

module.exports = router;
