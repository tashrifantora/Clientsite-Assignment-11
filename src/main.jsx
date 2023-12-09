import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root/Root';

import AddBlog from './Pages/AddBlog/AddBlog'
import FeaturBlogs from './Pages/FeacturBlogs/FeatureBlogs'
import Wishlist from './Pages/Wishlist/Wishlist'
import NotFound from './Pages/NotFound/NotFound'
import Home from './Pages/Home/Home/Home.Jsx';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Authentication/Privider/AuthProvider';
import AllBlogs from './Pages/AllBlogs/AllBlogs/AllBlogs';
import BlogDetails from './Pages/AllBlogs/BlogDetails/BlogDetails';
import UpdateBlog from './Pages/UpdateBlog/UpdateBlog';
import Comments from './Pages/AllBlogs/Comments/Comments'; import PrivateRoute from './Authentication/PrivateRoute/PrivateRoute'






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/addblog',
        element: <AddBlog></AddBlog>,
      },
      {
        path: '/allblogs',
        element: <AllBlogs></AllBlogs>,
        loader: () => fetch('https://endless-exploration-server.vercel.app/blogs')
      },
      {
        path: '/blog-details/:id',
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`https://endless-exploration-server.vercel.app/blog-details/${params.id}`)
      },
      {
        path: '/comments',
        element: <Comments></Comments>,
        loader: () => fetch('https://endless-exploration-server.vercel.app/comments')
      },
      {
        path: '/wishlist/:id',
        element: <Wishlist></Wishlist>,
        loader: () => fetch('https://endless-exploration-server.vercel.app/wishlist')
      },
      {
        path: '/wishlist',
        element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>,
        loader: () => fetch('https://endless-exploration-server.vercel.app/wishlist')
      },
      {
        path: '/featuredblog',
        element: <PrivateRoute>
          <FeaturBlogs></FeaturBlogs>
        </PrivateRoute>,
        loader: () => fetch('https://endless-exploration-server.vercel.app/blogs')
      },
      {
        path: '/update-blog/:id',
        element: <PrivateRoute>
          <UpdateBlog></UpdateBlog>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://endless-exploration-server.vercel.app/blog-details/${params.id}`)
      },
      {
        path: '/update-blog',
        element: <PrivateRoute>
          <UpdateBlog></UpdateBlog>
        </PrivateRoute>,
        loader: () => fetch('https://endless-exploration-server.vercel.app/blog-details')
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=''>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>,
)
