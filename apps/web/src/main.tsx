import ReactDOM from 'react-dom/client';
import { App } from './App';
import { MuffledUI } from '@muffled-ui/react';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <MuffledUI>
      <App />
    </MuffledUI>
  </StrictMode>,
);
