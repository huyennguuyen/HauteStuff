const router = require("express").Router();
const asyncHandler = require('express-async-handler');
const db = require("../../db/models");


router.get("/all", asyncHandler(async(req, res) => {
    // console.log("THIS IS ID------------------------", id)
    const users = await db.User.findAll()

    // console.log("THIS IS ALL USERS-----------", users)

    // console.log("THIS IS USER BACKEND-----------------------------------", user)
    return res.json(users)

}))


module.exports = router;
