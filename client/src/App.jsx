import React, { useEffect, useState } from 'react';
import { BsSearch } from "react-icons/bs";

import './App.css';
import data from './data.json';

function App() {
  const [searchPhrase, setSearchPhrase] = useState(null);
  const [choosePhrase, setChoosePhrase] = useState(null);
  
  const searchArray = (searchPhrase && searchPhrase !== '') && data.filter(c => c.english.toLowerCase().startsWith(searchPhrase.toLowerCase()));
  const choosePhraseArray = choosePhrase && data.filter(c => c.english.toLowerCase().startsWith(choosePhrase.toLowerCase()));
  
  useEffect(() => {
    if(searchPhrase === '') {
      setSearchPhrase(null);
    }
  },[searchPhrase]);
  return (
    <div>
      <div className='input'>
        <input 
          onChange={(e) => {
            setSearchPhrase(e.target.value);
            setChoosePhrase(null);
          }} 
          value={searchPhrase}
        />
        <div className='icon_search'>
          <BsSearch size={"18px"} color='#9b9696'/>
        </div>
      </div>
      <div className='search_block'>
        {
          searchArray ? 
            searchArray.map(value => 
              <div key={value.id}>
                <span className='span_english'>
                  {value.english}
                </span> 
                <span className='span_translate'>
                  {value.ukraine}
                </span>
              </div>
            )
          :
            choosePhraseArray && choosePhraseArray.map(value => 
              <div key={value.id}>
                <span className='span_english'>
                  {value.english}
                </span> 
                <span className='span_translate'>
                  {value.ukraine}
                </span>
              </div>
            )
        }
      </div>
      <h2>English phrases:</h2>
      <div className='div_wrap_english_phrases'>
        {
          data.map(data =>
            data.english !== '' && 
              <div 
                key={data.id} className='div_english_phrases'
                onClick={() => {
                  setChoosePhrase(data.english);
                  setSearchPhrase('');
                }}
                >
                {data.english}
              </div>
          )
        }
      </div>
      
    </div>
  );
}

export default App;
