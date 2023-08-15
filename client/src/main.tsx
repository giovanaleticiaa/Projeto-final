import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './templates/Home.tsx'
import Login from './templates/Login.tsx'
import NotFound from './templates/NotFound.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './templates/SignUp.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/signup' element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
