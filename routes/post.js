const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const Category = mongoose.model("Category");

router.get("/posts", (req, res) => {
  Post.find()
    .populate("category", "_id name")
    .then((post) => {
      res.json({ post });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/new-post", (req, res) => {
  const { title, description, imgUrl, category } = req.body;

  if (!title || !description || !imgUrl || !category) {
    res.json({ err: "All fields are required." });
  }

  Category.findOne({ _id: category.id })
    .then((cat) => {
      res.json({ cat });
    })
    .catch((err) => {
      console.log(err);
    });

  const post = new Post({
    title,
    description,
    imgUrl,
    category,
  });

  post
    .save()
    .then(() => {
      res.json({ msg: "Post Created" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
