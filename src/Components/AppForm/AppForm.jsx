import React, { useState } from 'react';
import Post from './Post';


const AppFor = (props) => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [posts, setPosts] = useState(data.posts);

    const handleNameChange = e => setName(e.target.value);
    const handleTextChange = e => setText(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            name,
            text,
            likes: 0,
            dislikes: 0,
        };
        setPosts([newPost, ...posts]);
        setName('');
        setText('');
    };

    const handleLike = id => {
        const updatedPosts = posts.map(post => {
            if (post.id === id) {
                return {...post, likes: post.likes + 1 };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    const handleDislike = id => {
        const updatedPosts = posts.map(post => {
            if (post.id === id) {
                return {...post, dislikes: post.dislikes + 1 };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    return ( <
        div className = "social-feed" >
        <
        h1 > My Social Feed < /h1> <
        form onSubmit = { handleSubmit } >
        <
        label >
        Name:
        <
        input type = "text"
        value = { name }
        onChange = { handleNameChange }
        /> < /
        label > <
        label >
        Text:
        <
        textarea value = { text }
        onChange = { handleTextChange }
        /> < /
        label > <
        button type = "submit" > Post < /button> < /
        form > {
            posts.map(post => ( <
                Post key = { post.id }
                post = { post }
                onLike = { handleLike }
                onDislike = { handleDislike }
                />
            ))
        } <
        /div>
    );
}

export default AppForm;