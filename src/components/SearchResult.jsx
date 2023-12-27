import React from 'react'

function SearchResult({data}){
    if (!data) {
        return <div id="container" className="mt-10">No results to display</div>;
    }
    return(
        <div id="container" className="mt-10">
        <div className="user-info">
            <img src={data.avatar_url} alt={`${data.name}'s avatar`} className="user-avatar"/>
            <div className="user-details">
                <h3 className="user-name">{data.name}</h3>
                <p className="user-bio">{data.bio}</p>
                {/* Other user details you want to display */}
            </div>
        </div>
    </div>

    )
}

export default SearchResult;