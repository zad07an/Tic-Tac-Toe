import React from 'react'
import { useState } from 'react'
import './TicTacToeMega.css'
import './MegaResponsive.css'

export default function SquareMega({value, onClick, disabled, isWinnerLine}) {

  const style = value === 'X' ? 'square-mega x-mega' : 'square-mega o-mega'

  return (
    <button className={`${style} ${isWinnerLine ? 'winner' : null}`} onClick={onClick} disabled={disabled}>{value}</button>
  )
}
