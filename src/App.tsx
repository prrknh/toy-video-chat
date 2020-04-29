import React from 'react'
import 'App.css'
import LocalVideo from 'components/LocalVideo'
import RemoteVideoList from './components/RemoteVideoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LocalVideo></LocalVideo>
        <RemoteVideoList></RemoteVideoList>
      </header>
    </div>
  )
}

export default App
