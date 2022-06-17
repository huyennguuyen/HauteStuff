const express = require('express')
const asyncHandler = require('express-async-handler');

const db = require("../../db/models");
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const {
  singleMulterUpload,
  singlePublicFileUpload,
  multipleMulterUpload,
  multiplePublicFileUpload,
} = require("../../awsS3");
const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
  ];

router.get("/:id", asyncHandler(async(req, res) => {
    const id = parseInt(req.params.id, 10)
    console.log("THIS IS ID------------------------", id)
    const user = await db.User.findByPk(id)

    // console.log("THIS IS USER BACKEND-----------------------------------", user)
    return res.json(user)

}))

router.put("/:id/edit", asyncHandler(async(req, res, next) => {
  const {firstName, lastName, username, about} = req.body

  console.log("THIS IS UPDATE BACKEND-----", req.body)

  // const imageUrl = await singlePublicFileUpload(req.file);

  // console.log("THIS IS IMAGEURL backend-----", imageUrl)
  // console.log("THIS IS REQ.FILE------", req.file)

  const id = parseInt(req.params.id, 10)

  const user = await db.User.findByPk(id)

    // const profileUrl = await singlePublicFileUpload(req.file);

    // const bannerUrl = await singlePublicFileUpload(req.file);

      const updateUser= await user.update({
          firstName,
          lastName,
          username,
          about,
          // bannerUrl,
          // profileUrl
         })
 
         return res.json(updateUser)
  

  //console.log(photos)

//    res.redirect(`/photos/${photos.id}`)

  // return res.json(updatePhotos)
 
}))


router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { email, password, username, lastName, firstName } = req.body;
      const user = await User.signup({ email, username, lastName, firstName, password });
  
      await setTokenCookie(res, user);
  
      return res.json({
        user
      });
    })
  );
  

module.exports = router;