import Post from "../models/post.model.js";
import User from "../models/user.model.js";

// !before express 5 we used to wrap the async functions in a try catch block to handle the errors but with express 5 we can directly use async functions without wrapping them in a try catch block as express 5 will automatically catch the errors and pass them to the error handling middleware.
export const getPosts = async (req, res) => {
  const posts = await Post.find(); // *fetch all the posts from the database
  res.status(200).send(posts); //?send the fetched posts as a response
};

export const getPostBySlug = async (req, res) => {
  const { slug } = req.params; //get the slug from the request parameters

  const post = await Post.findOne({ slug }); //fetch the post with the given slug from the database
  res.status(200).send(post);
};






// export const createPost = async (req, res) => {
//   try {
//     const { userId } = await req.auth();

//     const user = await User.findOne({ clerkUserId: userId });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     console.log("BODY:", req.body);

//     const post = await Post.create({
//       user: user._id,
//       ...req.body,
//     });

//     return res.status(201).json(post);
//   } catch (error) {
//     console.log("CREATE POST ERROR:", error);

//     return res.status(500).json({
//       message: error.message,
//       code: error.code,
//       name: error.name,
//     });
//   }
// };

export const createPost = async (req, res) => {

  // console.log(req.headers);

  const auth = await req.auth();
const clerkUserId = auth.userId;
 
// console.log(clerkUserId);
// console.log(auth);
 

  if (!clerkUserId) {
    return res.status(401).json({message: "Unauthorized access!"}); //if the user is not authenticated, send an unauthorized response
  }
  const user = await User.findOne({ clerkUserId }); //fetch the user with the given clerk user id from the database

  if (!user) {
    return res.status(404).json({ message: "User not found" }); //if the user is not found, send a not found response
  }

  const newPost = new Post({ user: user._id, ...req.body }); //create a new post using the request body
  const post = await newPost.save(); //save the new post to the database
  res.status(200).json(post); //send the created post as a response
};


export const updatePost = async (req, res) => {
  const { id } = req.params; //get the id from the request parameters
  const post = await Post.findByIdAndUpdate(id, req.body, { new: true }); //update the post with the given id in the database and return the updated post
  res.status(200).json(post); //send the updated post as a response
};

export const deletePost = async (req, res) => {
  const auth = await req.auth();
const clerkUserId = auth.userId;

  if (!clerkUserId) {
    return res.status(401).json({ message: "Unauthorized" }); //if the user is not authenticated, send an unauthorized response
  }
  const user = await User.findOne({ clerkUserId }); //fetch the user with the given clerk user id from the database

  if (!user) {
    return res.status(404).json({ message: "User not found" }); //if the user is not found, send a not found response
  }

  const post = await Post.findByIdAndDelete({
    _id: req.params.id, //get the id from the request parameters
    user: user._id, //get the user id from the fetched user
  }); //delete the post with the given id from the database

  if(!deletedPost) {
    return res.status(403).json("Post not found or you are not authorized to delete this post"); 
  }
  res.status(200).json({ message: "Post deleted successfully" });
};
