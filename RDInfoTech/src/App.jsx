import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import Login from './components/Login'
import Verification from './components/Home/Verification'
import OurFranchise from './components/Home/OurFranchise'
import FranchiseForm from './components/Home/FranchiseForm'
import AboutUs from './components/Home/AboutUs'
import ContactUs from './components/Home/ContactUs'
import OurCourses from './components/Home/OurCourses'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/franchise" element={<OurFranchise />} />
          <Route path="/franchise-application" element={<FranchiseForm />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/our-courses" element={<OurCourses />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
