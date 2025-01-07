import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
=======
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <App/>
>>>>>>> 8932159f88639663baf93d5c0d25b4a35ad6d8c5
)
