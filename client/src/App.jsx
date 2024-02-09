import React, { useEffect, useState } from 'react';
import { BsSearch } from "react-icons/bs";

import './App.css';
import data from './data.json';

function App() {
  const [searchPhrase, setSearchPhrase] = useState(null);
  
  const searchArray = (searchPhrase !== null && searchPhrase !== '') && data.filter(c => c.english.toLowerCase().startsWith(searchPhrase.toLowerCase()));
  
  useEffect(() => {
    if(searchPhrase === '') {
      setSearchPhrase(null);
    }
  },[searchPhrase]);
  return (
    <div>
      <div className='input'>
        <input onChange={(e) => setSearchPhrase(e.target.value)}/>
        <div className='icon_search'>
          <BsSearch size={"18px"} color='#9b9696'/>
        </div>
      </div>
      <div className='search_block'>
        {
          searchArray && searchArray.map(value => 
            <div key={value.id}>{value.english} {value.ukraine}</div>
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
                onClick={() => setSearchPhrase(data.english)}
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
