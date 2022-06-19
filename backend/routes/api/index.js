const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const photosRouter = require("./upload.js")
const commentsRouter = require('./comments.js')
const allUsersRouter = require("./allUsers.js")

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/photos', photosRouter)

router.use('/comments', commentsRouter)

router.use('/allUsers', allUsersRouter)


router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });

 

module.exports = router;