const express = require("express")
const { getAllPosts, creatPost, updatePost, getPost } = require("./postcontroller")

const router = express.Router()

router.route('/posts').get(getAllPosts).post(creatPost)
router.route('/posts/:id').get(getPost).put(updatePost)
module.exports = router