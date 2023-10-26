import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Display } from './components/Display'

function App() {  

  return (
    <>
      <h1>Calculadora</h1>
      <br />
      <Display />
      <br />
      <Button numero={1}></Button>
      <Button numero={2}></Button>
      <Button numero={3}></Button>
      <Button numero='-'></Button>      
      <br />
      <Button numero={4}></Button>
      <Button numero={5}></Button>
      <Button numero={6}></Button>
      <Button numero='+'></Button>
      <br />
      <Button numero={7}></Button>
      <Button numero={8}></Button>
      <Button numero={9}></Button>
      <Button numero={'*'}></Button>
      <br />
      <Button numero={'M'}></Button>
      <Button numero={0}></Button>
      <Button numero={'/'}></Button>
      <Button numero={'='}></Button>
    </>
  )
}

export default App
