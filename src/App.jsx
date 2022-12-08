import { useState } from 'react'
import './App.css'
import Clima from './components/Clima'
import Contador from './components/Contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Trabajo Final Johny Giraldo</h1>
    <div className="App" id="principal">
      <Contador/>
      <Clima/>
    </div>
    </>
  )
}

export default App
