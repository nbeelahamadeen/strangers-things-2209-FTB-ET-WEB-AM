import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link} from 'react-router-dom';

import{
  Post,
  //Login,
  Register,
} from './components/index.js';

const App = () => {
  // Set initial state for the posts
  const [posts, setPosts] = useState([]);

  const getPosts = async ()=> {
    await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts')
    .then(response => response.json())
    .then(posts => {
      setPosts(posts.data.posts);
      console.log(posts)
    });
  }
  // Fetch the posts when the component is mounted
  useEffect(() => {
    getPosts();
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
        <Route path='/posts' element={<div className='displayPosts'><Post posts={posts} setPosts={setPosts} /></div>} />
        <Route path='/login' element={<div>Login</div>} />
        <Route path='/register' element={<div><Register/></div>} />
      </Routes>
    </div>
  );
};


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
