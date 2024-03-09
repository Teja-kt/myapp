import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (name === 'john' && password === '1234') {
      setLoginStatus('Success');
    } else {
      setLoginStatus('Fail');
    }
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>{loginStatus}</p>
    </div>
  );
}

export default App;
