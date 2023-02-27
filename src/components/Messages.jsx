import React from "react";

const Messages = (props) => {
  const messages = props.user?.data?.messages;
  return (
    <div>
      {messages && messages.length ? messages.map((message) => {
        return (
            <div key={message._id} className="solo-message">
                <h2>{message.content}</h2>
                <b>Message from: {message.fromUser.username}</b>
                <p>Regarding this post: {message.post.title}</p>
            </div>
        )
        
      }) : <p>Your inbox is empty.</p>}
    
    </div>
  );
};
export default Messages;


