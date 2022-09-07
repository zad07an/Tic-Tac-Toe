import React from 'react'
import { useState } from 'react'
import './TicTacToeMega.css'

export default function SquareMega({value, onClick, disabled, isWinnerLine}) {

  const style = value === 'X' ? 'square-mega x' : 'square-mega o'

  return (
    <button className={`${style} ${isWinnerLine ? 'winner' : null}`} onClick={onClick} disabled={disabled}>{value}</button>
  )
}
