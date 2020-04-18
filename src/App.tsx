import React from 'react'
import 'App.css'
import MyVideo from 'components/MyVideo'
import RemoteVideoList from './components/RemoteVideoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyVideo></MyVideo>
        <RemoteVideoList></RemoteVideoList>
      </header>
    </div>
  )
}

export default App
