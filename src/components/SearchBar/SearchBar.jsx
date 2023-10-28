import React from 'react';
import './SearchBar.css'
import { DataContext } from '../DataContext'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineLoading } from 'react-icons/ai'

function SearchBar(){
    const { data, setData, setCity } = React.useContext(DataContext)
    const [input, setInput] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)
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
        if(input.length == 0){
            return
        }

        setIsLoading(true)

        // fetch

        const dateObj = new Date()
        setData(
            {
                ...data,
                hour: dateObj.getHours() + ':' + dateObj.getMinutes(),
                date: dateObj.getDate() + '/' + (1+dateObj.getMonth()) + '/' + dateObj.getFullYear(),
            }
        )
        setCity(input)
        inputRef.current.blur()
    }


    return(
        <div className="search-bar glass-panel">
            <CiSearch size={'1.5em'} onClick={handleSubmit} />
            <textarea name="search-input" id="search-input" placeholder="City name" rows={1} ref={inputRef} value={input} onChange={handleInputChange} onKeyDown={handleKeyDown}></textarea>
            {/* <input type="textarea" placeholder="City name" name="search-input" id="" ref={inputRef} value={input} onChange={handleInputChange} onKeyDown={handleKeyDown} /> */}
            <AiOutlineLoading style={(isLoading)?{opacity:'100%'}:{opacity:'0%'}} size={'1.5em'} className='loading-icon' />
        </div>
    );
}

export default SearchBar;