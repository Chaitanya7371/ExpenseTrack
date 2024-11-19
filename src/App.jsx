import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Expensepage from './pages/Expensepage'
import Incomepage from './pages/Incomepage'
import Homepage from './pages/Homepage'
import Layout from './pages/Layout'

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Homepage/>}></Route>
            <Route path="/expense" element={<Expensepage/>}></Route>
            <Route path="/income" element={<Incomepage/>}></Route>
          </Route>
        </Routes>
    </div>
  )
}

export default App