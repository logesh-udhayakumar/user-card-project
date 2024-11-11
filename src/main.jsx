import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './usercard/UserCard.css'
import { UserCard } from './usercard/usercard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserCard />
  </StrictMode>,
)
