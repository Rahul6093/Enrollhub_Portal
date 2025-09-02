import { createRoot } from 'react-dom/client'
// import { useState } from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'
import 'preline';
import { Mainpage } from './components/mainpage';
import { Student } from './components/Student/Student'
import { Teacher } from './components/Student/Teacher'
import { Course } from './components/Student/Course';
import { About } from './components/about';
import { Admin } from './components/admin';

const Homepage = () => {
  return(
    <>
    <div className='4xl:container bg-gray-100 text-black' >
      <Outlet/>
    </div>
    </>
  )
}

const router = createBrowserRouter([
{
  path: '/',
  element: <Homepage />,
  children: [
    {
      index: true,
      element: <Mainpage />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'student',
      element: <Student />,
      children: [
        {
          path: 'course/:serviceName',
          element: <Course />
        }
      ]
    },
    {
      path: 'teacher',
      element: <Teacher />
    },
    {
      path: 'admin',
      element: <Admin/>
    }
  ]
}

])

createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>
  
)