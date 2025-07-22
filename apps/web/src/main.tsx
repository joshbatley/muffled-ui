import ReactDOM from 'react-dom/client';
import { App } from './App';
import { muffledUI } from '@muffled-ui/react';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <muffledUI>
      <App />
    </muffledUI>
  </StrictMode>,
);
