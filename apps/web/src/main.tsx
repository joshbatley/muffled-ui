import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {MuffledUI} from "@muffled-ui/react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MuffledUI theme="dark">
      <App />
    </MuffledUI>
  </StrictMode>,
)
