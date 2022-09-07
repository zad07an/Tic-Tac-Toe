import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/all'
import {motion} from 'framer-motion'
import './Modal.css'

export default function Modal({closeModalHandler}) {

  return (
    <motion.div className='modal-container'
    initial = {{opacity: 0}}
    animate = {{opacity: 1, transition: {delay: 0.2}}}
    >
      <motion.div className="modal-box"
      initial = {{y: -300}}
      animate = {{ y: 0, transition: {delay: 0.2}}}
      exit = {{opacity: 0}}
      >
        <button className="close-modal-button" onClick={closeModalHandler}>
          <FaTimes className='close-modal-icon'/>
        </button>
        <div className="text-box">
          <h3 className='text'>Choose Mode</h3>
        </div>
        <div className="buttons-box-modal">
          <Link to='/tic-tac-toe-mega' className="mega-button">Mega Mode</Link>
          <Link to='/tic-tac-toe-normal' className="normal-button">Normal Mode</Link>
        </div>
      </motion.div>
    </motion.div>
  )
}
