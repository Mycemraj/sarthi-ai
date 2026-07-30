import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.tsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Technology from './pages/Technology.jsx'
import Sustainability from './pages/Sustainability.jsx'
import Sectors from './pages/Sectors.jsx'
import Contact from './pages/Contact.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<App />}>
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="technology" element={<Technology />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="sectors" element={<Sectors />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
