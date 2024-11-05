import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UserCard } from './usercard/usercard'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <UserCard />
  </StrictMode>,
)
