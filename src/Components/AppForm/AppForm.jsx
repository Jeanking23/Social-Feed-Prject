import React, { useState } from 'react';
import AppPost from '../AppPost/AppPost'
import data from './data.json';
import './AppForm.css'


const AppForm = (props) => {
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
            div className = "form-container" >
            <
            form onSubmit = { handleSubmit } >
            <
            label className = 'name-btn' >
            <
            p > Name < /p> <
            input type = "text"
            value = { name }
            onChange = { handleNameChange }
            className = 'name' / >
            <
            /label>

            <
            label className = 'text-btn' >
            <
            p > Post < /p>  <
            textarea value = { text }
            onChange = { handleTextChange }
            className = '' / >
            <
            /label> <
            button type = "submit"
            class = "btn btn-primary" > Create < /button>  <
            /form> <
            /div>{
            posts.map(post => ( <
                AppPost key = { post.id }
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