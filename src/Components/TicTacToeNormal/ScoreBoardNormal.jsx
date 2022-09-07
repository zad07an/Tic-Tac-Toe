import React from 'react'
import './TicTacToeNormal.css'
import './NormalResponsive.css'

export default function ScoreBoardNormal({scores, playerX}) {
  const {xScore, oScore} = scores;

  return (
    <div className="score-board-container">
        <div className="score-board-title-box">
          <h2 className='score-board-title'>Score</h2>
        </div>
      <div className='score-board'>
        <div className='scores'>
          <span className={`score-x ${playerX && 'inactive'}`}>X - {xScore}</span>
          <span className={`score-o ${!playerX && 'inactive'}`}>O - {oScore}</span>
        </div>
      </div>
    </div>
  )
}
