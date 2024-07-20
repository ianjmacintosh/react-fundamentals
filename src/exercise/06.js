// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const submitButtonRef = React.useRef()
  const [error, setError] = React.useState()

  const handleSubmit = event => {
    event.preventDefault()

    onSubmitUsername(inputRef.current.value)
  }

  const handleChange = event => {
    let value = event.target.value
    const isValid = value === value.toLowerCase()

    if (!isValid) {
      setError('Username must be lower case')
      submitButtonRef.current.disabled = true
    } else {
      setError(null)
      submitButtonRef.current.disabled = false
    }
  }

  //   💰 This one's a little more tricky, so here are a few things you need to do to make this work:

  // Create a handleChange function that accepts the change event and uses event.target.value to get the value of the input. Remember this event will be triggered on the input, not the form.
  // Use the value of the input to determine whether there's an error. There's an error if the user typed any upper-case characters. You can check this really easily via const isValid = value === value.toLowerCase()
  // If there's an error, set the error state to 'Username must be lower case'. (💰 here's how you do that: setError(isValid ? null : 'Username must be lower case')) and disable the submit button.
  // Finally, display the error in an element

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="usernameInput"
          ref={inputRef}
          onChange={handleChange}
        />
      </div>
      {error ? <p>{error}</p> : ''}
      <button type="submit" ref={submitButtonRef}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
