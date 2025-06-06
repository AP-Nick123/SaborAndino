import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Dashboard from './components/admin/Dashborad'
import Paneladmin from "./components/admin/paneladmin.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Paneladmin/>
    </>
  )
}

export default App
