import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import BookRide from './Pages/BookRide'
import HostRide from './Pages/HostRide'
// import { useMoralis } from "react-moralis"

function App() {
  // const { isWeb3Enabled, chainId } = useMoralis()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='bookRide' element={<BookRide />} />
          <Route path='hostRide' element={<HostRide />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
