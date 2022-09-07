import React from 'react'
import { useState } from 'react'
import './TicTacToeNormal.css'
import './NormalResponsive.css'

export default function SquareNormal({value, onClick, disabled, isWinnerLine}) {

  const style = value === 'X' ? 'square-normal x-normal' : 'square-normal o-normal'

  return (
    <button className={`${style} ${isWinnerLine ? 'winner' : null}`} onClick={onClick} disabled={disabled}>{value}</button>
  )
}