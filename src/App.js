import React, {  useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify'


function App() {
  const [token, setToken] = useState(null);

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      setToken(_token)
    }

    console.log(' I HAVE A TOKEN -->', token);
  }, [])


  return (
    // BEM
    <div className='app'>
      <Login />
    </div>
  );
}

export default App;
