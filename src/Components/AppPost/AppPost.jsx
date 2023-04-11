import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';



function Post({ post, onLike, onDislike }) {
    const handleLike = () => onLike(post.id);
    const handleDislike = () => onDislike(post.id);

    return ( 
      <div className = "post" >
        <div className = "post-header" >
        <h2 > { post.name } </h2> 
        </div> 
          <div className = "post-body" >
        <p> { post.text } </p> 
           </div> 
             <div className = "post-actions" >
        <button onClick = { handleLike } > < FontAwesomeIcon icon = { faThumbsUp }/> ({post.likes})</button>
        <button onClick = { handleDislike } > < FontAwesomeIcon icon = {faThumbsDown} / > ({ post.dislikes }) </button> 
        </div> 
        </div>
    );
}

export default Post;