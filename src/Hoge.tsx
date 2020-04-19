import React, { useState } from 'react'
import { Button } from '@material-ui/core'

let firstRender = true

function RenderFunctionComponent() {
  const [firstName, setFirstName] = useState('hoge')
  const [lastName, setLastName] = useState('Yardley')

  if (firstRender) {
    setFirstName('oda')
    firstRender = false
  }

  return (
    <div>
      <p>{firstName}</p>
      <Button onClick={() => setFirstName('Fred')}>Fred</Button>
      <Button onClick={() => setLastName('hoge')}>hoge</Button>
      <p>{lastName}</p>
    </div>
  )
}

export default RenderFunctionComponent
