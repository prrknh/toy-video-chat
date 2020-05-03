import React, { createRef, useState } from 'react'
import { Button, Grid, TextField } from '@material-ui/core'
import useReactRouter from 'use-react-router'

export const Home = () => {
  const { history } = useReactRouter()
  const inputRef = createRef<HTMLInputElement>()
  const [isInvalid, setIsInvalid] = useState(false)

  const join = () => {
    if (!inputRef.current) return
    if (inputRef.current.value === '') {
      setIsInvalid((current) => !current)
      return
    }
    history.push('/room?' + inputRef.current.value)
  }
  const change = () => {
    if (!inputRef.current) return
    if (inputRef.current.value !== '' && isInvalid) {
      setIsInvalid((current) => !current)
    }
  }

  return (
    <Grid container justify="center" alignItems="center">
      <TextField
        onChange={change}
        error={isInvalid}
        name="input"
        inputRef={inputRef}
        required
        label="roomID"
        variant="outlined"
      />
      <Button variant="contained" size="large" onClick={join}>
        Join
      </Button>
    </Grid>
  )
}
