import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Destination from './components/Destination'
import Booking from './components/Booking'
import Selects from './components/Selects'
import View from './components/View'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar is outside Routes so it's always visible */}
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Destination />
            <Booking />
            <Selects />
            <View />
          </>
        } />
        <Route path="/destination" element={<Destination />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/selects" element={<Selects />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App