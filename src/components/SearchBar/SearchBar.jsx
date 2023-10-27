import React from 'react';
import './SearchBar.css'
import { DataContext } from '../DataContext'
import { CiSearch } from 'react-icons/ci'

function SearchBar(){
    const { data, setData, setCity } = React.useContext(DataContext)
    const [input, setInput] = React.useState('')
    const inputRef = React.useRef(null)

    function handleInputChange(event){
        setInput(event.target.value)
    }

    function handleKeyDown(event){
        if(event.key === 'Enter'){
            handleSubmit()
        }
    }

    function handleSubmit(){
        const dateObj = new Date()
        setData(
            {
                ...data,
                hour: dateObj.getHours() + ':' + dateObj.getMinutes(),
                date: dateObj.getDate() + '/' + (1+dateObj.getMonth()) + '/' + dateObj.getFullYear(),
            }
        )
        setCity(input)
    }


    return(
        <div className="search-bar glass-panel">
            <CiSearch size={'1.5em'} onClick={handleSubmit} />
            <input type="text" name="search-input" id="search-input" ref={inputRef} value={input} onChange={handleInputChange} onKeyDown={handleKeyDown} />
        </div>
    );
}

export default SearchBar;