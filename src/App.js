import { useState } from 'react';
import CardList from './components/cardList';
import Form from './components/form';

import './App.css';

const App = (props) => {

  const [profiles, setProfiles] = useState([])

  const addNewProfile = (profileInfo) => {
    setProfiles(() => [...profiles, profileInfo]);
  }

  return (
    <div>
      <div className="header">{props.title}</div>
      <Form onSubmitForm = {addNewProfile}/>
      <CardList 
        profiles = {profiles}
      />
    </div>
  );
}

export default App;
