import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10)

  const addValue = () => {
    if(counter >= 20) {
      setCounter(counter)
      alert("value cant be increased now")
    }else{
    setCounter(counter+1)
    }
  }

  const removeValue = () => {
      if (counter <= 0) {
        setCounter(counter)
        alert("value cant be decreased now ")
  }else {
    setCounter(counter -1)
  }
  }

  return (
    <>
    <h1>Hello World</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Increase Value {counter}</button>
    <button onClick={removeValue}>Decrease Value {counter}</button>
    </>
  )
}

export default App
