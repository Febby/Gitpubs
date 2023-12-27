import React from 'react'

function SearchResult({data, searchPerformed}){
    if (!data && searchPerformed) {
        return <div className="p-4 mt-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
        <span className="font-large">Sorry!</span> No result to display, try searching again.
      </div>;
    } else if (!searchPerformed) {
        return null; 
    }
    return(
        <div id="container" className="mt-10 flex justify-center">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 mt-5 h-24 mb-3 rounded-full shadow-lg" src={data.avatar_url} alt={`${data.name}'s avatar`}/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data.name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{data.login}</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                    {data.html_url && (
                        <a href={data.html_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Profile</a>
                    )}
                    {data.blog && (
                        <a href={data.blog} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Website</a>
                    )}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SearchResult;