import React from "react";

const ViewMessages = ({ user ,postId, token }) => {



if(!user._id){
    return <div></div>;
}
  return (
    
    <div className="displayMessages">
      <h2 className="messageTitle">Messages</h2>
      <ul>
        {
            user.messages.length ? 
            user.messages.map((message) => (
          <div className="message" key={message._id}>

            <h3>From user :{message.fromUser.username}</h3>
            <h3 className="messageBottom">Message :{message.content}</h3>
            </div>
        ))
        :   <div>
            <h2>You dont have any messages</h2>
            </div>}
      </ul>
    </div>
  );
};

export default ViewMessages;
