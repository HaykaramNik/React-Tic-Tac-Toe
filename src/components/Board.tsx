import { useState } from 'react';
import styles from './Board.module.scss';
import Square from './Square';
import calculateWinner from '../utils/calculateWinner';

interface Props {
  readonly xIsNext: boolean;
  squares: Array<string | null>;
  readonly onPlay: any;
}

function Board(props: Props) {
  const { xIsNext, squares, onPlay } = props;

  function handleClick(i: number): void {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares: Array<string | null> = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className={styles.boardRow}>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        <Square value={squares[9]} onSquareClick={() => handleClick(9)} />
      </div>
    </>
  );
}

export default Board;
