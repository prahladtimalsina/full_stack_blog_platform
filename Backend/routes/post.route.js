import express from "express";
import { createPost, deletePost, getPostBySlug, getPosts } from "../controllers/post.controller.js";

const router = express.Router();



router.get("/getposts" , getPosts);
router.get("/getposts/:slug" , getPostBySlug);
router.post("/createpost", createPost);
router.delete("/deletepost/:id", deletePost);

export default router;  