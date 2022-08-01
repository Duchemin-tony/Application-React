import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route path='/survey/:questionNumber' element={<Survey />}></Route>
    </Routes>
  </BrowserRouter>,
)
