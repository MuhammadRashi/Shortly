import { useState } from 'react'
import { Layout } from './components/Layout'
import { NavBar } from './components/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Layout/> */}
     <NavBar/>
    </>
  )
}

export default App
