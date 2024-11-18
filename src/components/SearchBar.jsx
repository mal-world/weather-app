import React, { useState } from 'react'
import './Searchbar.css';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        if (city.trim()) {
            onSearch(city);
            setCity('');
        }else {
            alert("Please enter the city name");
        }
    };

  return (
    <div className='container'>
        <input 
        className='input'
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder='City name'
        />
        <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;