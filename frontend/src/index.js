import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import BlogPage from './pages/BlogPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/blog/:id",
    element: <BlogPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
