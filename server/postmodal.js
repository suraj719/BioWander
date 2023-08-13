const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  name:String,
  title:String,
  description:String,
  image:String,
  comments:[{
    comment:String,
    commentBy:String
}],
});

module.exports = mongoose.model("post", PostSchema);
