import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import About from '../../pages/About'
import Banner from '../Banner'
import Footer from '../Footer'
import Header from '../Header'
import Home from '../../pages/Home'
import Navigation from '../Navigation'
import './App.css'

function App() {
  const headerBanner = {
    calloutIcon: 'FireIcon',
    description: `Find your next favorite in this pipin' - hot batch of fresh games.`,
    cta: {
      url: '/#banner',
      title: 'New releases ',
    },
    closeIcon: 'XMarkIcon',
  }
  const location = useLocation()

  return (
    <>
      <Banner {...headerBanner} />
      <Navigation />
      {/* initial={false} */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
