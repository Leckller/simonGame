import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ProviderGame from './Context/ProviderGame.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ProviderGame>
      <App />
    </ProviderGame>
  </BrowserRouter>,
);
