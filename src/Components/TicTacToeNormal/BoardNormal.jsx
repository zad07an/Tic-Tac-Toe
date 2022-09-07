import React from 'react'
import SquareNormal from './SquareNormal'
import './TicTacToeNormal.css'

export default function BoardNormal({board, onClick, disabled, winnerLine}) {

  return (
    <div className='board-normal'>
      {
        board.map((value, idx) => {
          const isWinnerLine = winnerLine.includes(idx)
          return <SquareNormal key={idx} isWinnerLine={isWinnerLine} disabled={disabled} value={value} onClick={() => value === null && onClick(idx)}/>
        })
      }
    </div>
  )
}
