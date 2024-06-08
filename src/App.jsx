import { useState } from 'react'  
import Registration from './pages/registration'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

function App() { 

  const router = createBrowserRouter(
      createRoutesFromElements(
          <Route>
            <Route path='/' element={<Registration/>}></Route>
          </Route>
      )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
