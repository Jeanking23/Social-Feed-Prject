import React from 'react';

function Post({ post, onLike, onDislike }) {
    const handleLike = () => onLike(post.id);
    const handleDislike = () => onDislike(post.id);

    return ( <
        div className = "post" >
        <
        div className = "post-header" >
        <
        h2 > { post.name } < /h2> <
        /div> <
        div className = "post-body" >
        <
        p > { post.text } < /p> <
        /div> <
        div className = "post-actions" >
        <
        button onClick = { handleLike } > Like({ post.likes }) < /button> <
        button onClick = { handleDislike } > Dislike({ post.dislikes }) < /button> <
        /div> <
        /div>
    );
}

export default Post;