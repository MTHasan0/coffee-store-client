import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Users from './Components/Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee/')
  },
  {
    path: "add-coffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "update-coffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: '/sign-in',
    element: <SignIn></SignIn>
  },
  {
    path: '/sign-up',
    element: <SignUp></SignUp>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: ()=> fetch('http://localhost:5000/user')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
