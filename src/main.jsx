import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="137982787040-3a60qbkva39958snqpd6l4cfdqjmvk03.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
)
