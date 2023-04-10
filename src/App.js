import { useState } from 'react';
import './Components/AppForm/AppForm'


function App() {
    const [postValue, setPostValue] = useState('');

    function handlePostChange(event) {
        setPostValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(postValue);
        // do something with postValue
    }
    return ( <
        div className = "App" >
        <
        div className = "App-header" >
        <
        h3 style = {
            { "margin": "26px" } } > Social Feed < /h3> <
        /div> <
        div className = "App-body" >
        <
        div className = "App-form" >

        <
        /div> <
        div className = "App-post" >

        <
        /div> <
        /div> <
        /div>
    );
}

export default App;