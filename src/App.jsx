import React,{ useState } from 'react'
import SearchForm from './components/SearchForm'
import SearchResult from './components/SearchResult'
import axios from 'axios';

import './App.css'

function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

const handleSearch = async(username) =>{
  setIsLoading(true);
  setSearchPerformed(true);
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    setSearchResults(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    setSearchResults(null);
  } finally {
    setIsLoading(false);
  }

}

const resetSearch = () => {
  setSearchResults(null);
  setSearchPerformed(false);
  setIsLoading(false);
};

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
        <SearchForm onSearch={handleSearch} onReset={resetSearch}/>
        {isLoading ? (
          <div className="mt-10 px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>


        ) : (
          <SearchResult data={searchResults} searchPerformed={searchPerformed}/>
        )}
      
    </>
  )
}

export default App
