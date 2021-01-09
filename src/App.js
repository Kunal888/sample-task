import React, { useState } from 'react';
import './App.css';
import Home from './components/Home'

function App() {

  const [loggedin, setLoggedin] = useState(false)

  function handleOnSubmit(e) {
    e.preventDefault()
    setLoggedin(true)
  }

  return (
    <div className="App">
      {!loggedin && (
        <div id="login">
            <h2>Log in</h2>
            <form id="login-form" action="/home" autoComplete="off" onSubmit={handleOnSubmit}>
                <div id="auth">
                    <button type="submit" id="facebook-auth">Facebook</button>
                    <button type="submit" id="google-auth">Google</button>    
                </div>    
                <form id="form" autoComplete="off" onSubmit={handleOnSubmit}>
                    <span>or log in with mail</span>
                    <input type="text" id="email" placeholder="Your Email" required />
                    <input type="password" id="password" placeholder="Password" required />
                    <button type="submit" id="submit">Login</button>
                    <a href=".">Forgot your password?</a>
                </form>
            </form>
        </div>
      )}
      {loggedin && <Home />}
    </div>
  );
}

export default App;
