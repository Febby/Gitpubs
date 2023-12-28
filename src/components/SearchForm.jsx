import React, {useState} from 'react';

function SearchForm({ onSearch,onReset }){

    const [username, setUsername] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        onSearch(username);
        setUsername('');

    }

    return(
    <form className="w-full max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mt-10 flex">
        <input
          type="text"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
          className="
            form-input
            block
            w-full
            py-2
            px-3
            border border-gray-300
            rounded-md
            shadow-sm
            focus:outline-none
            focus:shadow-outline-blue
            focus:border-blue-300
            transition
            duration-150
          "
          name="username"
          id="gp-username"
          required
        />
        <button
          className="
            ml-2
            py-2
            px-3
            border border-gray-300
            rounded-md
            text-sm
            leading-4
            font-medium
            text-gray-700
            hover:text-gray-500
            focus:outline-none
            focus:border-blue-300
            focus:shadow-outline-blue
            active:bg-gray-50
            active:text-gray-800
            transition
            duration-150
            ease-in-out
          "
          type="submit"
        >
          Search User
        </button>
        <button
            onClick={() => {
              setUsername('');
              onReset();
            }}
          className="
            ml-2
            py-2
            px-3
            border border-red-300
            rounded-md
            text-sm
            leading-4
            font-medium
            text-red-500
            bg-black-200
            hover:text-gray-500
            focus:outline-none
            focus:border-blue-300
            focus:shadow-outline-blue
            active:bg-gray-50
            active:text-white-800
            transition
            duration-150
            ease-in-out
          "
          type="submit"
        >
          Reset
        </button>
      </div>
    </form>
    )
}

export default SearchForm