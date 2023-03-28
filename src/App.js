import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useStateValue();

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      // setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("👨‍🦰", user);

        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
    }

  }, []);


  return (
    // BEM
    <div className='app'>
      {token ? <Player /> : <Login />}

    </div>
  );
}

export default App;
