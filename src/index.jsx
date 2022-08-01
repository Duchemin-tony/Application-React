import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route path='/survey/:questionNumber' element={<Survey />}></Route>
      <Route path='/results' element={<Results />}></Route>
      <Route path='/freelances' element={<Freelances />}></Route>
      <Route path='*' element={<Error />}></Route>
    </Routes>
  </BrowserRouter>,
)
