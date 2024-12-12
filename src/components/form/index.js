import { Component } from 'react';
import axios from 'axios';

import './form.css';

class Form extends  Component {

    state = {
        username: '',
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        
        // call github api for user details
        const res = await axios.get(`https://api.github.com/users/${this.state.username}`);

        // pass the username to add it to test data
        this.props.onSubmitForm(res.data);

        // clear input field once form is submitted
        this.setState({username: ''});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder='GitHub username'
                    value={this.state.username}
                    onChange={(event) => this.setState({username: event.target.value})}
                    required
                />
                <button type='submit'>Add Card</button>
            </form>
        );
    }
}

export default Form;
