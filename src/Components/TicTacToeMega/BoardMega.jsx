import React from 'react'
import SquareMega from './SquareMega'
import './TicTacToeMega.css'
import './MegaResponsive.css'

export default function BoardMega({board, onClick, disabled, winnerLine}) {

  return (
    <div className='board-mega'>
      {
        board.map((value, idx) => {
          const isWinnerLine = winnerLine.includes(idx)
          return <SquareMega key={idx} isWinnerLine={isWinnerLine} disabled={disabled} value={value} onClick={() => value === null && onClick(idx)}/>
        })
      }
    </div>
  )
}
