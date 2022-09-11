import React from "react";
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar 
            className="post__avatar"
            alt="{username}"
            src="/static/images/avatar/1.jpg"
        />      
        <h3>Username</h3>
      </div>
      
      <img className="post__image" src="https://i1.wp.com/popbee.com/image/2020/06/spongebob-squarepants-gay-nickelodeon-pride-month-teaser.jpg" />
    
      <h4 className="post__text"><strong>Username</strong> caption</h4>

    </div>
  )
}

export default Post