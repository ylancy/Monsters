import React, { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/cardlist/cardlist';
import SearchBox from './components/searchbox/searchbox';
import { getData } from './components/fetch';
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string
}

function App() {
  const [searchFeild, setSearchFeild] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(resp => resp.json())
    //   .then(monsters => setMonsters(monsters))
    const fetchMonsters = async () => {
      const monsters = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(monsters);
    }
    fetchMonsters();
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchFeild);
    })
    setFilterMonsters(filteredMonsters)
  }, [searchFeild, monsters])

  const searchHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchFeild(event.target.value.toLowerCase())
  }

  return (
    <div className='tc'>
      <h1 className='f1'>MonstersFriends</h1>
      <SearchBox className='pa3 ba b--green bg-lightest-blue' placeholder='search monster' searchHandler={searchHandler} />
      <CardList monsters={filteredMonsters} />

    </div>
  );
}

export default App;
