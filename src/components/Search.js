import React, { useState } from 'react';

const Search = (props) => {

    const [input, setInput] = useState('');

    const inputHandler = (event) => {
        setInput(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        props.setPokemonName(input);
        setInput('');
    }
    
  return (
    <form className='search' onSubmit={submitHandler}>
    <label>
    Search Pokemon
    <input
        value={input}
        onChange={inputHandler}
        placeholder='Enter Name of Pokemon...'
    />
    </label>
    <button>GO!</button>
    </form>
  );
};

export default Search;