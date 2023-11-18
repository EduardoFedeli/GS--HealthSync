import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import App from './App'
import Login from './routes/Login/login'
import Error from './routes/Error/error'
import Logout from './routes/Logout/logout'
import Menu from './menu'
import Home from './routes/Home/home'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/logout",
      element: <Logout />
    },
    {
      path: "/menu",
      element: <Menu />
    },
    {
      path: "/antiga",
      element: <Navigate to="/" />
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)