import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './UserCard.css'
import { UserCard } from './usercard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserCard />
  </StrictMode>,
)
