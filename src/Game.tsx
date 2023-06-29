import Board from './components/Board';
import History from './components/History';
import { useState } from 'react';
import styles from './Game.module.scss';

function Game() {
  const [xIsNext, setXIsNext]: [boolean, Function] = useState(true);
  const [history, setHistory]: [(string | null)[][], Function] = useState([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove]: [number, Function] = useState(0);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares: Array<string | null>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory([...history, nextSquares]);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  return (
    <div className={styles.game}>
      <div className={styles.game__board}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={styles.game__info}>
        <History history={history} move={currentMove} jumpTo={jumpTo} />
      </div>
    </div>
  );
}

export default Game;
