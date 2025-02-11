const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//CREATE POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json({ "Post saved": savedPost });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        console.log("Post updated");
        res.status(201).json({ "Updated post": updatedPost });
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("Can only update your own post");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    console.log("Post found");
    if (post.username === req.body.username) {
      try {
        console.log(post.username);
        await Post.findByIdAndDelete(req.params.id);
        console.log("Post updated");
        res.status(200).json("Post deleted!");
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("Can only delete your own post");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({ "Post found": post });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if(username){
        posts = await Post.find({username})
    }
    else if(catName){
        posts = await Post.find({categories: {
            $in: [catName]
        }})
    } else {
        posts = await Post.find()
    }
    res.status(200).json({"Posts": posts})
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
