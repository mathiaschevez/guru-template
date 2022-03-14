import React from 'react'
import './App.css'
import { Navbar } from './components'
import { Header } from './containers'

const App = () => {
  return (
    <div className='App'>
      <div className='header'>
        <div className='header__bg'>
          <Navbar />
          <Header />
        </div>
      </div>
    </div>
  )
}

export default App