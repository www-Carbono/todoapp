import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='flex justify-center gap-5'>
      <h1>TODO</h1>
      <img src={reactLogo} alt="" />
      
    </header>
    </>
  )
}

export default App
