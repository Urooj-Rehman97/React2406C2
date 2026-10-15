import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router';
import HomeComponent from './Home Component/HomeComponent';
import Layout from './Layout';
import Loop from './Loop/Loop';
import CourseComponent from './CourseComponent';
import ReactBootstrap from './ReactBootstrap';
import UseStateHook from './Hooks/useStateHook';
import UseRefHook from './Hooks/UseRefHook';
import UseEffectHook from './Hooks/UseEffectHook';
import FormHandling from './FormHandling/FormHandling';
import FormValidation from './FormValidation/FormValidation';

function App(){
  const router = createBrowserRouter([
    {
      // path: "/",
      // // element: <div>Hello World</div>,
      // Component: HomeComponent
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          Component: HomeComponent
        },
        {
          path: "/loop",
          Component: Loop
        },
        {
          path: "/course",
          Component: CourseComponent
        },
        {
          path: "/reactbootstrap",
          Component: ReactBootstrap
        },
        {
          path: "/usestate",
          Component: UseStateHook
        },
        {
          path: "/useref",
          Component: UseRefHook
        },
        {
          path: "/useeffect",
          Component: UseEffectHook
        },
        {
          path: "/form",
          Component: FormHandling
        },
        {
          path: "/validation",
          Component: FormValidation
        }
      ]
    },
  ]);
  return <RouterProvider router={router} />
}

export default App