import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import BoardMega from './BoardMega';
import ScoreBoardMega from './ScoreBoardMega';
import {motion} from 'framer-motion'
import './TicTacToeMega.css'

function TicTacToeMega() {

  const [board, setBoard] = useState(Array(25).fill(null));
  const [playerX, setPlayerX] = useState(false);
  const [scores, setScores] = useState({xScore: 0, oScore: 0});
  const [disable, setDsable] = useState(false);
  const [winnerLine, setWinnerLine] = useState({
    winner: {
      indexes: []
    }
  })

  const COMBOS = [
    //! Row
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    //! Column
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    //! Diagnol
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]
  ]

  const clickHandler = (squareIndex) => {
    const updatedBoard = board.map((val, idx) => {
      if (idx === squareIndex) {
        return playerX === true ? 'O' : 'X';
      } else {
        return val;
      }
    })
    const winnerIs = checkWinner(updatedBoard)
    if (winnerIs) {
      if (winnerIs === 'O') {
        let {oScore} = scores;
        oScore += 1;
        setScores({...scores, oScore})
      } else {
        let {xScore} = scores;
        xScore += 1
        setScores({...scores, xScore})
      }
    }
    setBoard(updatedBoard)
    setPlayerX(!playerX)
  }

  const checkWinner = (board) => {
    for (let combo = 0; combo < COMBOS.length; combo++) {
      const [a, b, c, d, e] = COMBOS[combo]
      if (board[a] && board[a] === board[b] && board[a] === board[c] && board[a] === board[d] && board[a] === board[e]) {
        winnerLine.winner.indexes = COMBOS[combo];
        setDsable(!disable);
        return board[a]
      }
    }
  }

  const playAgain = () => {
    setDsable(false)
    setPlayerX(false)
    setBoard(Array(25).fill(null))
    setWinnerLine({winner: {indexes: []}})
  }

  const reset = () => {
    setDsable(false);
    setPlayerX(false);
    setBoard(Array(25).fill(null))
    setScores({oScore: 0, xScore: 0})
    setWinnerLine({winner: {indexes: []}})
  }

  const disabled = disable ? true : false;
  return (
    <motion.div className='container-mega'
    initial = {{opacity: 0}}
    animate = {{opacity: 1, transition: {delay: 0.2}}}
    >
      <Link to='/' className='home-button-mega'>Home</Link>
      <BoardMega board={board} winnerLine={winnerLine.winner.indexes} disabled={disabled} onClick={clickHandler}/>
      <div className="status-box">
        <ScoreBoardMega scores={scores} playerX={playerX}/>
        <div className="buttons-box-mega">
          <button className="play-again" onClick={playAgain}>Play Again</button>
          <button className="reset" onClick={reset}>Reset</button>
        </div>
      </div>
    </motion.div>
  )
}

export default TicTacToeMega