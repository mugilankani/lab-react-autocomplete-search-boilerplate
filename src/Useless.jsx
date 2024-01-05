import React, { useState, useEffect } from 'react';
import data from './data/countryData.json';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const onChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setValue(searchTerm);

    if (searchTerm === '') {
      setShowDropdown(false);
    } else {
      const filtered = data
        .filter((item) => item.name.toLowerCase().startsWith(searchTerm))
      setFilteredData(filtered);
      setShowDropdown(true);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Escape') {
      console.log(e.key)
      setShowDropdown(false);
    }
  };

  return (
    <div className="App">
      <div>
        <div>
          <input
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={handleKey}
          />
          <button onClick={() => setShowDropdown(!showDropdown)}>Search</button>
        </div>
        <div style={{ display: showDropdown ? 'block' : 'none' }}>
          {filteredData.map((item) => (
            <div key={item.name}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;