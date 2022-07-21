import * as React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
    </div>
  )
}

export default App
