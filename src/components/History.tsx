interface Props {
  history: (string | null)[][];
  readonly move: number;
  jumpTo: (move: number) => void;
}

function History(props: Props) {
  const { history, move, jumpTo } = props;

  return (
    <ol>
      {history.map((squares: Array<string | null>, move: number) => {
        let description;
        if (move > 0) {
          description = 'Go to move #' + move;
        } else {
          description = 'Go to game start';
        }
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      })}
    </ol>
  );
}

export default History;
