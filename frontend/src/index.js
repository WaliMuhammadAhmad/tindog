import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import Details from "./pages/Details";
import UserPanel from "./pages/UserPanel";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path:'/shop',
    element: <Shop />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path:'/about',
    element: <About />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path:'/signin',
    element: <SignIn />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path:'/signup',
    element: <SignUp />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path:'/checkout',
    element: <Checkout />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path:'/details',
    element: <Details />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path:'/userpanel',
    element: <UserPanel />,
    errorElement: <div>404 Not Found</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals(console.log());