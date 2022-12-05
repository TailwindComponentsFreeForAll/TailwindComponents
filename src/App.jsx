import { useState } from 'react'
import './App.css'
import HorizontalNavBar from '../components/Navbar/HorizontalNavbar'
import SimpleNavbar from '../components/Navbar/SimpleNavbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SimpleNavbar />
    </div>
  )
}

export default App
