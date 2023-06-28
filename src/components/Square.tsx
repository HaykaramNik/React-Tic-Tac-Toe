import styles from './Square.module.scss'

interface Props {
  readonly value: string | null;
  readonly onSquareClick: any
}

function Square(props: Props) {
  const {value, onSquareClick} = props;

  return <button className={styles.button} onClick={onSquareClick}>{value}</button>;
}

export default Square;
