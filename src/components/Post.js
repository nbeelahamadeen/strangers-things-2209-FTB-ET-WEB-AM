import React, {Fragment} from "react";
import {default as DeletePostButton} from "./DeletePost";


const Post = (props) => {
    // Set initial state for the posts
    const {posts, token} = props;
    
    // Fetch the posts when the component is mounted
    if(!posts){
        return <main></main>
    }
    return (  <main>  
       <div>
       <h1>Posts</h1>
        {
            posts.length ? 
            
            posts.map( post => {
                return(
                    <div className='displayPosts' key={post._id}>
                    {post.isAuthor ? (<DeletePostButton postId={post._id} token={token} />
                    ) : null}
                    <h2 > {  post.title } </h2>
                    <h3>From: { post.author.username } </h3>
                    <h3>Description:{ post.description } </h3> 
                    <h3>Price: { post.price } </h3>
                    <h3>Location: { post.location } </h3>
                    <h3>Will deliver: { post.willDeliver ? "Yes" : "No" }</h3>                    
                    </div>
                )
            })
            : null
        }  
        
         
        </div>
        </main>
    )
}
  export default Post;