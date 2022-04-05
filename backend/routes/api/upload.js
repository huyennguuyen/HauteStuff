const router = require("express").Router();
const asyncHandler = require('express-async-handler');
const db = require("../../db/models");
const user = require("../../db/models/user");
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

// const validateUpload = [
//     check('imageUrl')
//         .exists({ checkFalsy: true })
//         .isURL()
//         .withMessage('Please provide a valid url'),
//     handleValidationErrors
// ]


router.get('/home', asyncHandler(async(req, res, next) => {
    const photos = await db.Photo.findAll({
        limit: 10
    })

    return res.json(photos)
}))

router.post('/new', asyncHandler(async(req, res, next) => {
   const {userId, albumId, imageUrl, description} = req.body

   const photos= db.Photo.build({
    userId,
    imageUrl,
    description
   })

   await photos.save()

   //console.log(photos)

//    res.redirect(`/photos/${photos.id}`)

   return res.json(photos)

}))

router.get("/:id", asyncHandler(async(req, res, next) => {
    const id = parseInt(req.params.id, 10)
    const photos = await db.Photo.findByPk(id, {
        include: db.User
    })

    return res.json(photos)

}))

module.exports = router;


