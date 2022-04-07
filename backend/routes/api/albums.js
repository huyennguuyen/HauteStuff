const router = require("express").Router();
const asyncHandler = require('express-async-handler');
const db = require("../../db/models");
const user = require("../../db/models/user");
const { check } = require('express-validator');

router.get('/', asyncHandler(async(req, res, next) => {
    const albums = await db.Album.findAll({
        include: db.Photo
    })

    const photos = await db.albums.Photo.findAll()

    return res.json(photos)
}))

router.post('/new', asyncHandler(async(req, res, next) => {
   const {userId, albumId, imageUrl, description} = req.body

   const photos= db.Album.build({
    userId,
    title,
   })

   await photos.save()

   //console.log(photos)

//    res.redirect(`/photos/${photos.id}`)

   return res.json(photos)

}))

// router.get("/:id", asyncHandler(async(req, res, next) => {
//     const id = parseInt(req.params.id, 10)
//     const photos = await db.Photo.findByPk(id, {
//         include: db.User
//     })

//     return res.json(photos)

// }))


// router.delete("/:id", asyncHandler(async(req, res) => {

//     const id = parseInt(req.params.id, 10)
//     const photo = await db.Photo.findByPk(id)

//     await photo.destroy();

//     return res.json(id)
// }))

module.exports = router;
