const router = require("express").Router();
const asyncHandler = require('express-async-handler');
const db = require("../../db/models");
const user = require("../../db/models/user");
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateUpload = [
    check('imageUrl')
        .exists({ checkFalsy: true })
        .isURL()
        .withMessage('Please provide a valid url'),
    handleValidationErrors
]


router.get('/home', asyncHandler(async(req, res, next) => {
    const photos = await db.Photo.findAll()
    return res.json(photos)
}))

router.post('/', validateUpload, asyncHandler(async(req, res, next) => {
   const {imageUrl, description} = req.body

   const photos= await db.Photo.create({
    imageUrl,
    description
   })

   res.redirect(`/photos/${photos.id}`)

}))


module.exports = router;


