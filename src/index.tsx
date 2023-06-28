import ReactDOM from 'react-dom/client';
import Game from './Game';
import './styles.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Game />);
