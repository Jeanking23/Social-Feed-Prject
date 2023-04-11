import { useState } from 'react';
import AppForm from './Components/AppForm/AppForm';
import AppPost from './Components/AppPost/AppPost';
import './App.css';

function App() {
    const [posts, setPosts] = useState([]);

    function handlePostSubmit(post) {
        setPosts([post, ...posts]);
    }

    function handlePostLike(id) {
        const updatedPosts = posts.map((post) =>
            post.id === id ? {...post, likes: post.likes + 1 } : post
        );
        setPosts(updatedPosts);
    }

    function handlePostDislike(id) {
        const updatedPosts = posts.map((post) =>
            post.id === id ? {...post, dislikes: post.dislikes + 1 } : post
        );
        setPosts(updatedPosts);
    }

    return ( <
        div className = "App" >
        <
        div className = "App-header" >
        <
        h3 style = {
            { margin: '26px' }
        } > Social Feed < /h3> < /
        div > <
        div className = "App-body" >
        <
        div className = "App-form" >
        <
        AppForm onSubmit = { handlePostSubmit }
        /> < /
        div > <
        div className = "App-post" > {
            posts.map((post) => ( <
                AppPost key = { post.id }
                post = { post }
                onLike = { handlePostLike }
                onDislike = { handlePostDislike }
                />
            ))
        } <
        /div> < /
        div > <
        /div>
    );
}

export default App;