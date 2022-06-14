const router = require("express").Router();
const asyncHandler = require('express-async-handler');
const db = require("../../db/models");
const user = require("../../db/models/user");
const {
    singleMulterUpload,
    singlePublicFileUpload,
    multipleMulterUpload,
    multiplePublicFileUpload,
  } = require("../../awsS3");

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

router.post('/new',singleMulterUpload("image"), asyncHandler(async(req, res, next) => {
   const {userId, albumId, description} = req.body
   //imageUrl was in req.body
   const imageUrl = await singlePublicFileUpload(req.file);

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


router.put("/:id/edit", singleMulterUpload("image"), asyncHandler(async(req, res, next) => {
    const {userId, description} = req.body

    const imageUrl = await singlePublicFileUpload(req.file);

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



router.post('/:id/comments', asyncHandler(async(req, res) => {


    const {userId, imageId, comment} = req.body

    const postComment = await db.Comment.create({
        userId,
        imageId, 
        comment
    })

    
    // const postComment= db.Comment.build({
    //     userId,
    //    imageId,
    //    comment
    // })
    
    // await postComment.save()
    
    return res.json(postComment)
   
}))


router.get('/:id/comments', asyncHandler(async(req, res) => {

    const id = parseInt(req.params.id, 10)
    // const specificPhoto = await db.Photo.findByPk(id)

    const comments = await db.Comment.findAll({
        where: {
            imageId: id
        }
    })


    return res.json(comments)


}))

module.exports = router;


