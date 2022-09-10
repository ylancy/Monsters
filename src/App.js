import React, { useState, useEffect } from 'react';
import CardList from './components/cardlist/cardlist';
import './App.css';

function App() {
  const [searchFeild, setSearchFeild] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(monsters => setMonsters(monsters))
  }, []);

  const searchHandler = (event) => {
    setSearchFeild(event.target.value)
  }
  console.log(searchFeild)

  return (
    <div className='tc'>
      <h1 className='f1'>MonstersFriends</h1>
      <div>
        <input className='pa3 ba b--green bg-lightest-blue' type='text' name='searchbox' placeholder='search monster' onChange={searchHandler} />
      </div>
      <CardList monsters={monsters} searchFeild={searchFeild} />

    </div>
  );
}

export default App;
