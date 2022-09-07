import React, {useState} from 'react'
import {motion} from 'framer-motion'
import Modal from './Modal/Modal'
import './Home.css'

export default function Home() {

  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true)
  }

  const closeModalHandler = () => {
    setOpenModal(false)
  }

  return (
    <motion.div className='home-container'
    initial = {{opacity: 0}}
    animate = {{opacity: 1, transition: {delay: 0.2}}}
    >
      {
        openModal ? <Modal closeModalHandler={closeModalHandler}/> : null
      }
      <div className='general-title-box'>
        <div className="tic-tac-toe-title">
          <div className='first-title-box'>
          <h3 className='first-title'>Tic</h3>
        </div>
          <div className='second-title-box'>
          <h3 className='second-title'>Tac-Toe</h3>
        </div>
        </div>
        <div className='third-title-box'>
          <h3 className="third-title">By Aram Zadoyan</h3>
        </div>
      </div>
      <div className="buttons-box">
        <button className="play-button" onClick={openModalHandler}>Play</button>
      </div>
    </motion.div>
  )
}
