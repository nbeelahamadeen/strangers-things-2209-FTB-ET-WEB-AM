import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const exchangeTokenForUser = props.exchangeTokenForUser;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {user} = props;
//   const [user, setUser] = useState({});
  const navigate = useNavigate(); 


  const login = (ev) => {
    ev.preventDefault();
    console.log('login');
    fetch(
      'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-AM/users/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        if (!result.success) {
          throw result.error;
        }
        const token = result.data.token;
        window.localStorage.setItem('token', token);
        exchangeTokenForUser();
        navigate('/posts');
      })
      .catch((err) => console.log(err));
  };

  const logout = ()=> {
    window.localStorage.removeItem('token');
    setUser({});
  } 

  

  return (
    <div>
    {
        user._id ? <div>Welcome { user.username } <button onClick={ logout }>Logout</button></div> : null
      }
      {
        !user._id ? (
            <div>
                <form className='displayLoginForm' onSubmit={login}>
                <input
                placeholder="username"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
                />
                <input
                placeholder="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                />
                <button disabled={!username || !password}>Login</button>
                </form>
            </div>) : null
        }
        </div>  
  );
};

export default Login;