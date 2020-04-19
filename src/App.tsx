import React from 'react'
import 'App.css'
import MyVideo from 'components/MyVideo'
import Room from './components/UseRoom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyVideo></MyVideo>
        <Room></Room>
      </header>
    </div>
  )
}

export default App
