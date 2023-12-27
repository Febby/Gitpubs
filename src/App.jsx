import React,{ useState } from 'react'
import SearchForm from './components/SearchForm'
import SearchResult from './components/SearchResult'
import axios from 'axios';

import './App.css'

function App() {
  const [searchResults, setSearchResults] = useState(null);

const handleSearch = async(username) =>{
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    setSearchResults(response.data);
  } catch (error) {
    console.error("Error fetching data:", error)
  }

}


  return (
    <>
      <div>
      <h2
      className="
        pt-5
        text-center
        mt-5
        text-5xl
        leading-9
        font-extrabold
        text-gray-900
      "
    >
      GitPub
    </h2>
    <h3 className="pt-9 text-center mt-5 leading-8 font-extrabold text-gray-900">
      Search a Github User
    </h3>
      </div>  
        <SearchForm onSearch={handleSearch}/>
        <SearchResult data={searchResults}/>
      
    </>
  )
}

export default App
