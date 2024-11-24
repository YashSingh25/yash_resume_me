import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import About_me from './components/About_me'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      
      <About_me />
    </>
  )
}

export default App
