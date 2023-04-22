import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Layout from './components/Layout'

// import { useMoralis } from "react-moralis"

function App() {
  // const { isWeb3Enabled, chainId } = useMoralis()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
