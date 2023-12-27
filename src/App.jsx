import { useState } from 'react'
import SearchForm from './components/SearchForm'
import SearchResult from './components/SearchResult'
import './App.css'

function App() {
 

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
        <SearchForm/>
        <SearchResult/>
      
    </>
  )
}

export default App
