import React, { useState } from 'react';

const DeletePostButton = ({ postId, token, isAuthor }) =>{

const deletePost  = (postId, token) =>{
    fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-AM/posts/5e8d1bd48829fb0017d2233b', {
  method: "DELETE",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}).then((response) => response.json())
  .then((result) => {
    console.log(result);
  })
  .catch(console.error);
};
return isAuthor ? (
    <button onClick={() => deletePost(postId, token)}>Delete Post</button>
  ) : null;
};

export default DeletePostButton;