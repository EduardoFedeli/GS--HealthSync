import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import App from './App'
import Home from './routes/Home/home'
import Error from './routes/Error/error'
import Logout from './routes/Logout/logout'
import Sobre from './routes/Sobre/sobre'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/logout",
      element: <Logout />
    },
    {
      path: "/sobre",
      element: <Sobre />
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