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
        limit: 50
    })

    return res.json(photos)
}))

router.post('/new', asyncHandler(async(req, res, next) => {
   const {userId, albumId, imageUrl, description} = req.body

   const photos= db.Photo.build({
    userId,
    albumId,
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
        include: [db.User, {model: db.Comment, include: db.User}]
    })

    return res.json(photos)

}))


router.put("/:id/edit", asyncHandler(async(req, res, next) => {
    const {userId, imageUrl, description} = req.body

    const id = parseInt(req.params.id, 10)

    const photo = await db.Photo.findByPk(id)

    const updatePhotos= await photo.update({
     userId,
     imageUrl,
     description
    })
 
    
 
    //console.log(photos)
 
 //    res.redirect(`/photos/${photos.id}`)
 
    return res.json(updatePhotos)
   
}))

router.delete("/:id", asyncHandler(async(req, res) => {

    const id = parseInt(req.params.id, 10)
    const photo = await db.Photo.findByPk(id)

    await photo.destroy();

    return res.json(id)
}))

// router.get('/comments', asyncHandler(async(req, res, next) => {
//     const albums = await db.Comment.findAll({
//         include: db.Photo
//     })

//     return res.json(photos)
// }))


router.post('/:id/comments', asyncHandler(async(req, res) => {

    console.log("hello")

    const {userId, imageId, comment} = req.body

    const postComment = await db.Comment.create({
        userId,
        imageId, 
        comment
    })

    return res.json({postComment})

   
}))

module.exports = router;


