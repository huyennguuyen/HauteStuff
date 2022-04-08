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

module.exports = router;

