const db = require("../../db/models");
const router = require("express").Router();
const asyncHandler = require('express-async-handler');

router.delete("/:id", asyncHandler(async(req, res) => {
    
    const id = parseInt(req.params.id, 10)

    //console.log("this is the id", id)

    const comment = await db.Comment.findByPk(id)

       // console.log(comment)

    await comment.destroy();

    return res.json(id)
}))

router.put("/:id/edit", asyncHandler(async(req, res) => {

    const {userId, comment} = req.body

    // console.log("THIS IS UPDATE BACKEND-----", req.body)

    // const imageUrl = await singlePublicFileUpload(req.file);

    // console.log("THIS IS IMAGEURL backend-----", imageUrl)
    // console.log("THIS IS REQ.FILE------", req.file)

    const id = parseInt(req.params.id, 10)

    const oneComment = await db.Comment.findByPk(id)


        const updateComment= await oneComment.update({
         userId,
         comment
        })

        // console.log("THIS IS RES JSON COMMENTS------------". res.json(updateComment))

        return res.json(updateComment)

        


}))


module.exports = router;

