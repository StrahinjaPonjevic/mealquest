import { useState } from 'react'
import NavBar from './components/navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <h1>HELLO</h1>
      
    </>
  )
}

export default App
