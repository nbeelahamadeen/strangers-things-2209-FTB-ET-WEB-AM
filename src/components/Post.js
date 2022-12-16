import React, {Fragment} from "react";


const Post = (props) => {
    // Set initial state for the posts
    const {posts, setPosts} = props;
    
    // Fetch the posts when the component is mounted
    if(!posts){
        return <main></main>
    }
    const { title, description, price, location, messages } = posts;
    return (  <main>  
       <div>
        {
            posts.length ? 
            
            posts.map( post => {
                return(
                    <div key={post._id}>
                    <h2 >
                        {  post.title }
                    </h2>
                    <h3>From: {post.author.username}</h3>
                    <h3>Description:{post.description}</h3> 
                    <h3>Price: {post.price}</h3>
                    <h3>Location: {post.location}</h3> 
                    
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