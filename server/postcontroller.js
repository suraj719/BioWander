const Post = require("./postmodal")

const getAllPosts = async (req,res) => {
    try {
        const posts = await Post.find({})
        res.status(200).json({posts})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const creatPost = async (req,res) => {
    const {title,name,description,image} = req.body;
    const totald = {
        title:title,
        name:name,
        description:description,
        image:image,
    }
    try {
        const response = await Post.create(totald)
        // await Post.create({image:base64});
        res.status(201).json({response})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const updatePost = async (req,res) => {
    // const comment = {
    //     answer: req.body.answer,
    //     answeredBy: req.body.answeredBy,
    // }
try {
    const {id:postid} = req.params
    const post = await Post.findByIdAndUpdate(postid,{
        $push:{comments:req.body}
    },{
        new:true
    })
    res.status(200).json({post})
} catch(error) {
    res.status(500).json({ msg:error})
}
}

const getPost = async (req,res) => {
    try {
        const {id:id} = req.params;
        const post= await Post.findOne({_id:id})
        if(!post) {
            return res.status(404).json({msg:`no posts found with id ${id}`})
        }
        res.status(200).json({post})
    } catch (error) {
        res.status(500).json({ msg:error})
    }
}
module.exports = {
    getAllPosts,
    creatPost,
    updatePost,
    getPost,
}