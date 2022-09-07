import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import TicTacToeMega from './Components/TicTacToeMega/TicTacToeMega';
import TicTacToeNormal from './Components/TicTacToeNormal/TicTacToeNormal';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Footer';
import './App.css'

function App() {

  return (
    <div className='container'>
      <AnimatePresence>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tic-tac-toe-mega' element={<TicTacToeMega/>} />
          <Route path='/tic-tac-toe-normal' element={<TicTacToeNormal/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
