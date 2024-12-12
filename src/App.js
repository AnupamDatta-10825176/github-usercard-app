import { Component } from 'react';
import CardList from './components/cardList';
import Form from './components/form';

import './App.css';

const testData = []

class App extends Component {

  state = {
    profiles: testData,
  }

  addNewProfile = (profileInfo) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileInfo]
    }))
  }

  render(){
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmitForm = {this.addNewProfile}/>
        <CardList 
          profiles = {this.state.profiles}
        />
      </div>
    );
  }
}

export default App;
