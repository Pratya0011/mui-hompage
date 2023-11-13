import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Content from './Component/Content'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Header/>
      </header>
      <section>
        <Content/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
