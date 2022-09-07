import React from 'react'
import { useState } from 'react'
import './TicTacToeNormal.css'

export default function SquareNormal({value, onClick, disabled, isWinnerLine}) {

  const style = value === 'X' ? 'square-normal x' : 'square-normal o'

  return (
    <button className={`${style} ${isWinnerLine ? 'winner' : null}`} onClick={onClick} disabled={disabled}>{value}</button>
  )
}