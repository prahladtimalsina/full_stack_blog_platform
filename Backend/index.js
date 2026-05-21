//create express application

import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import DBconnection from "./lib/DBconnection.js";
import webhookRouter from "./routes/webhook.route.js";
import { clerkMiddleware, getAuth, requireAuth } from '@clerk/express'


const app = express(); //create an instance of express application
app.use(clerkMiddleware()); //use the Clerk middleware for authentication
app.use("/webhooks", webhookRouter); //use the webhook route for the /webhooks endpoint

app.use(express.json()); //middleware to parse the request body as json

//console.log(process.env.test); //after nodejs 18 we can directly access the environment variables without using dotenv package .  node --env-file .env index.js


// app.get("/protect-route", (req, res) => {
//   const {userId} = req.auth; 
  
//   if (!userId) {
//     res.status(401).json({ message: "Unauthorized" }); 
//   }
//   res.status(200).json({ message: "Protected route accessed successfully", userId }); 

// });

//we can also use the clerk middleware to protect the route like this
//we ca use requireauth() middleware to protect the route and getAuth() middleware to get the user details from the token
// app.get("/protected-route", requireAuth(), (req, res) => {
//   res.status(200).json({ message: "Protected route accessed successfully" }); 
// });


app.use("/api/v1/users", userRouter); //use the user route for the /api/v1/users endpoint
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/comments", commentRouter);

// app.get("/test-auth", async (req, res) => {
//   const auth = await req.auth();

//   res.json(auth);
// });

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });








app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Something went wrong!",
    stack: err.stack,
    status: err.status || 500,
  });
});

app.listen(3000, () => {
  DBconnection(); //connect to the database
  console.log("Server is running on port 3000");
});
