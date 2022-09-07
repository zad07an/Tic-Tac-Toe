import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import BoardNormal from './BoardNormal';
import ScoreBoardNormal from './ScoreBoardNormal';
import {motion} from 'framer-motion'
import './TicTacToeNormal.css'
import './NormalResponsive.css'

function TicTacToeNormal() {

  const [board, setBoard] = useState(Array(9).fill(null));
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
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //! Column
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //! Diagnol
    [0, 4, 8],
    [2, 4, 6]
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
      const [a, b, c] = COMBOS[combo]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        winnerLine.winner.indexes = COMBOS[combo];
        setDsable(!disable);
        return board[a]
      }
    }
  }

  const playAgain = () => {
    setDsable(false)
    setPlayerX(false)
    setBoard(Array(9).fill(null))
    setWinnerLine({winner: {indexes: []}})
  }

  const reset = () => {
    setDsable(false);
    setPlayerX(false);
    setBoard(Array(9).fill(null))
    setScores({oScore: 0, xScore: 0})
    setWinnerLine({winner: {indexes: []}})
  }

  const disabled = disable ? true : false;
  return (
    <motion.div className='container-normal'
    initial = {{opacity: 0}}
    animate = {{opacity: 1, transition: {delay: 0.2}}}
    >
      <Link to='/' className="home-button-normal">Home</Link>
      <BoardNormal board={board} winnerLine={winnerLine.winner.indexes} disabled={disabled} onClick={clickHandler}/>
      <div className="status-box">
        <ScoreBoardNormal scores={scores} playerX={playerX}/>
        <div className="buttons-box-normal">
          <button className="play-again" onClick={playAgain}>Play Again</button>
          <button className="reset" onClick={reset}>Reset</button>
        </div>
      </div>
    </motion.div>
  )
}

export default TicTacToeNormal
