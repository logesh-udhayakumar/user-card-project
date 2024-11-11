import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './usercard/UserCard.css'
// import { UserCard } from './usercard/usercard'
import { QrCode } from './qrcode/QrCode'
import './qrcode/QrCode.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UserCard /> */}
    <QrCode/>
  </StrictMode>,
)
