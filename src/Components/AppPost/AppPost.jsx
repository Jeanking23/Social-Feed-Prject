import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

function Post({ post, onLike, onDislike }) {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    const handleLike = () => {
        onLike(post.id);
        setIsLiked(true);
        setIsDisliked(false);
    };

    const handleDislike = () => {
        onDislike(post.id);
        setIsLiked(false);
        setIsDisliked(true);
    };

    const likeBtnClass = isLiked ? "liked" : "";
    const dislikeBtnClass = isDisliked ? "disliked" : "";

    return ( <
        div className = "post" >
        <
        div className = "post-header" >
        <
        h2 > { post.name } < /h2> < /
        div > <
        div className = "post-body" >
        <
        p > { post.text } < /p> < /
        div > <
        div className = "post-actions" >
        <
        button className = { `like-btn ${likeBtnClass}` }
        onClick = { handleLike } >
        <
        FontAwesomeIcon icon = { faThumbsUp }
        />
        ({ post.likes }) <
        /button> <
        button className = { `dislike-btn ${dislikeBtnClass}` }
        onClick = { handleDislike } >
        <
        FontAwesomeIcon icon = { faThumbsDown }
        />
        ({ post.dislikes }) <
        /button> < /
        div > <
        /div>
    );
}

export default Post;