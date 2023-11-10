import './App.css'
// Step 1: import useState
// Step 5: import useEffect
import { useState, useEffect } from 'react'

function App() {
  // Step 2: create a state variable
  const [text, setText] = useState('Hello World')
  // Step 10: create another state variable
  const [boxText, setBoxText] = useState('')

  function handleClick() {
    // Step 3: update the state variable
    setText('User has clicked the button')
  }

  // Step 6: add useEffect
  useEffect(() => {
    // Step 7: add code that runs when the component mounts
    console.log('Component has mounted')
    setBoxText("boxes")
    // Step 8: add code that runs when the component unmounts
    return () => {
      console.log('Component has unmounted')
    }
  }, [])

  // Step 9: add code that runs when the state variable changes
  useEffect(() => {
    console.log('Text has changed')
    // Step 11: update the state variable

    if (text === 'Hello World') {
      setBoxText("boxes")
    } else {
      setBoxText("boxes clicked")
    }
  }, [text])

  return (
    <>
      <h1 className="header-text">React App</h1>
      {/* Step 4: add text, say this is helpful since you can just refer directly to the variable */}
      <p>{text}</p>
      <div className='flex-container'>
        {/* Step 10: showing changes using useEffect on a state */}
        <div>{boxText}</div>
        <div>{boxText}</div>
        <div>{boxText}</div>
      </div>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
