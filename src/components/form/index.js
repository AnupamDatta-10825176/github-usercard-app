import { useState } from 'react';
import axios from 'axios';

import './form.css';

const Form = (props) => {

    const [username, setUsername] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // call github api for user details
        const res = await axios.get(`https://api.github.com/users/${username}`);

        // pass the username to add it to test data
        props.onSubmitForm(res.data);

        // clear input field once form is submitted
        setUsername('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='GitHub username'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
            />
            <button type='submit'>Add Card</button>
        </form>
    );
}

export default Form;
