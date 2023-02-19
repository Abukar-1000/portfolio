import React from 'react';
import './App.css';
import MyFooter from './comp/footer';
import Head from './comp/headSec';
import NavBar from './comp/navbar';
import Portfolio from './comp/portfolio';
import Assesment from './projects/assesment';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio/>
  },
  {
    path: "/interviewQuestions",
    element: <Assesment/>
  }
])


function App() {
  return (
    <>
      <NavBar />
      <Head/>
      <RouterProvider router={router}/>
      <MyFooter />
    </>
  );
}

export default App;
