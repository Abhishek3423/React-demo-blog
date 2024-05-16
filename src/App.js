import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './features/Home';
import RootLayout from './ui/RootLayout';
import About from './features/About';
import Contact from './features/Contact';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> }
    ]
  },
  { path: '*', element: <div>404 Page Not Found</div> }
]);
const App = () => {

  return <RouterProvider router={router} />
}

export default App