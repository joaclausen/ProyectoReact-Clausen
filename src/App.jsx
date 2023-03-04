import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './app.module.css'
import Navbar from './components/Navbar'
import Main from './components/main'

function App() {

  return (
    <nav className={styles.container}>
      <Navbar/>
      <Main/>
    </nav>
  )

}

export default App
