import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/Homepage.jsx";
import Write from "./routes/Write.jsx";
import LoginPage from "./routes/LoginPage.jsx";
import RegisterPage from "./routes/RegisterPage.jsx";
import PostListPage from "./routes/PostListPage.jsx";
import SinglePostPage from "./routes/SinglePostPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { ClerkProvider } from "@clerk/react";

// Ensure that the publishable key is available
const PUBlISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Throw an error if the publishable key is missing
if (!PUBlISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// Define the routes for the application
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },

      {
        path: "/posts",
        element: <PostListPage />,
      },

      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
      // {
      //   path: "/post/:slug",
      //   element: <SinglePostPage />,
      // },
      {
        path: "/write",
        element: <Write />,
      },

      {
        path: "/login",
        element: <LoginPage />,
      },

      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBlISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
);
