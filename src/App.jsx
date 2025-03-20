import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Destination from './components/Destination'
import Booking from './components/Booking'
import Selects from './components/Selects'
import View from './components/View'
function App() {
  return (
    <>
    <div id='home'>

    <Navbar/>
    </div>
    <Header/>
    <div id='destination'>

    <Destination/>
    </div>
    <div id='book'>

    <Booking/>
    </div>
    <div id='travel'>
    <Selects/>
    </div>
    <div id='view'>

    <View/>
    </div>
    </>
  )
}

export default App
