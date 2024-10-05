import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import App from './App.tsx'
import About from './pages/About.tsx'
import 'bootstrap/dist/css/bootstrap.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes here for additional pages */}
      </Routes>
    </Router>
  </StrictMode>,
)
