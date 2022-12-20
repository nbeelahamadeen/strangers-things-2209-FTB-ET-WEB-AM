import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link} from 'react-router-dom';

import{
  Post,
  Login,
  Register,
} from './components/index.js';

const App = () => {
  // Set initial state for the posts, login and register
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  /// get posts and display function
  const getPosts = async ()=> {
    await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts')
    .then(response => response.json())
    .then(posts => {
      setPosts(posts.data.posts);
      console.log(posts)
    });
  }

  const isLoggedIn = ()=> {
    user._id ? <div>Welcome { user.username } <button onClick={ logout }>Logout</button></div> : null
  }

  //swap token for user
  const exchangeTokenForUser = ()=> {
    const token = window.localStorage.getItem('token');
    if(token){
      fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-AM/users/me', {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ token }` 
        },
      })
      .then(response => response.json())
      .then(result => {
        const user = result.data;
        console.log(user);
        setUser(user);
      })
      .catch(err => console.log(err));
    }
  };
  // Fetch the posts when the component is mounted
  useEffect(() => {
    getPosts();
    exchangeTokenForUser();
    isLoggedIn();
  }, []);


  return (
    <div>
      <h1 className='title'>Strangers Things</h1>
      <nav className='links'>
        <Link to='/posts'>Posts ({posts.length})</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </nav>
      <Routes>
        <Route path='/posts' element={<div ><Post posts={posts} setPosts={setPosts} isLoggedIn={ isLoggedIn }/></div>} />
        <Route path='/login' element={<div><Login exchangeTokenForUser = { exchangeTokenForUser } user = { user } setUser ={ setUser}/></div>} />
        <Route path='/register' element={<div><Register exchangeTokenForUser = {exchangeTokenForUser}/></div>} />
      </Routes>
    </div>
  );
};


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
