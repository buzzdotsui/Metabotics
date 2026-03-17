import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Technology from './pages/Technology'
import Applications from './pages/Applications'
import Research from './pages/Research'
import About from './pages/About'
import Contact from './pages/Contact'
import SteelAndFoundries from './pages/SteelAndFoundries'
import HeatTreatment from './pages/HeatTreatment'
import MiningAndMaterials from './pages/MiningAndMaterials'
import EnergyIntensive from './pages/EnergyIntensive'
import ArticlePage from './pages/ArticlePage'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/applications/steel-and-foundries" element={<SteelAndFoundries />} />
          <Route path="/applications/heat-treatment" element={<HeatTreatment />} />
          <Route path="/applications/mining-and-materials" element={<MiningAndMaterials />} />
          <Route path="/applications/energy-intensive" element={<EnergyIntensive />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:slug" element={<ArticlePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
