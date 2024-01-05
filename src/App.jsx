import { useState } from 'react'
import './App.css'
import Data from "./resources/countryData.json"

function App() {
  const [value , setValue ] = useState('')
  const [filterData ,setFilterData] = useState([])
  const [showDropDown ,setShowDropDown ] = useState(false)
  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setValue(searchTerm)
  
  if(searchTerm === ""){
    setShowDropDown(false)
  }
  else{
    const filteredData = Data.filter((item) => item.name.toLowerCase().startsWith(searchTerm))
    setFilterData(filteredData)
    setShowDropDown(true)
  }
}
  const handleKey = (e) => {
    if(e.key == "Escape"){
      console.log(e.key)
      setShowDropDown(false)
    }
  } 

  return (
    <div>
      <div>
        <h1>Search</h1>
      </div>
      <div>
        <input type="text" value={value} onKeyDown={handleKey} onChange={handleChange} />
        <button onClick={() => setShowDropDown(!showDropDown)}>Search</button>

      </div>
      <div style={{display : showDropDown ? 'block' : 'none'}}>
    {
      filterData.map((item) => (
        <div key={item.name}>
          {item.name}
        </div>
      ))
    }
      </div>

      
    </div>
  )
}

export default App;
