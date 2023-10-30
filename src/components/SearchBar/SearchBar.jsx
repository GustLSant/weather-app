import React from 'react'
import axios from 'axios'
import './SearchBar.css'
import { DataContext } from '../DataContext'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineLoading } from 'react-icons/ai'

function SearchBar(){
    const { data, setData, setCity, getIconId } = React.useContext(DataContext)
    const [input, setInput] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)
    const inputRef = React.useRef(null)

    function handleInputChange(event){
        setInput(event.target.value)
    }

    function handleKeyDown(event){
        if(event.key === 'Enter'){
            event.preventDefault()
            handleSubmit()
        }
    }

    async function handleSubmit(){
        if(input.length == 0){
            return
        }

        setIsLoading(true)

        // Requisicao da API
        try{
            const optionsLocation = {
                method: 'GET',
                url: 'https://weather338.p.rapidapi.com/locations/search',
                params: {
                  query: input,
                  language: 'en-US'
                },
                headers: {
                  'X-RapidAPI-Key': '8bf3649e88mshfabf99f3093337ep1e5824jsn16a8485724f0',
                  'X-RapidAPI-Host': 'weather338.p.rapidapi.com'
                }
            }

            const responseLocation = await axios.request(optionsLocation)
            setCity(responseLocation.data.location.city[0])
            //console.log('response do GET location: ', responseLocation.data)
            
            const _latitude = responseLocation.data.location.latitude[0]
            const _longitude = responseLocation.data.location.longitude[0]
            const optionsForecast = {
                method: 'GET',
                url: 'https://weather338.p.rapidapi.com/weather/forecast',
                params: {
                  date: getCurrentDate(),
                  latitude: _latitude,
                  longitude: _longitude,
                  language: 'en-US',
                  units: 'm'
                },
                headers: {
                  'X-RapidAPI-Key': '8bf3649e88mshfabf99f3093337ep1e5824jsn16a8485724f0',
                  'X-RapidAPI-Host': 'weather338.p.rapidapi.com'
                }
            }
            
            const responseForecast = await axios.request(optionsForecast)
            console.log('response do GET forecast: ', responseForecast.data)

            const currentWeatherObj = responseForecast.data['v3-wx-observations-current']
            const forecastHourlyObj = responseForecast.data['v3-wx-forecast-hourly-10day']
            console.log('currentWeatherOBJ: ', currentWeatherObj)
            console.log('responseForecast["v3-wx-forecast-daily-15day"].dayOfWeek: ', responseForecast.data['v3-wx-forecast-daily-15day'].dayOfWeek)

            setData(
                {
                    ...data,
                    status: 'ok',
                    dayOfWeek: currentWeatherObj.dayOfWeek,
                    dayOrNight: currentWeatherObj.dayOrNight,
                    temp: currentWeatherObj.temperature,
                    tempFeel: currentWeatherObj.temperatureFeelsLike,
                    tempMax: currentWeatherObj.temperatureMax24Hour,
                    tempMin: currentWeatherObj.temperatureMin24Hour,
                    cloudCover: forecastHourlyObj.cloudCover[0],
                    precipChance: forecastHourlyObj.precipChance[0],
                    currentPrecip: currentWeatherObj.precip1Hour,
                    humidity: currentWeatherObj.relativeHumidity,
                    description: currentWeatherObj.wxPhraseMedium,
                    hour: getHourFromAPI(currentWeatherObj.validTimeLocal),
                    date: getDateFromAPI(currentWeatherObj.validTimeLocal),
                    iconId: getIconId(currentWeatherObj.dayOrNight, currentWeatherObj.precip1Hour, forecastHourlyObj.cloudCover[0]),
                    forecastDaysOfWeek: [...responseForecast.data['v3-wx-forecast-daily-15day'].dayOfWeek],
                    forecastMaxTemperatures: [...responseForecast.data['v3-wx-forecast-daily-15day'].calendarDayTemperatureMax],
                    forecastMinTemperatures: [...responseForecast.data['v3-wx-forecast-daily-15day'].calendarDayTemperatureMin],
                    forecastPrecips: [...responseForecast.data['v3-wx-forecast-daily-15day'].qpf],
                    forecastDescriptions: [...responseForecast.data['v3-wx-forecast-daily-15day'].narrative]
                }
            )
        }
        catch(error){
            console.error('Error on handleSubmit: ', error)
            setData({
                ...data,
                status: 'error'
            })
            setIsLoading(false)
        }
        finally{
            setIsLoading(false)
        }
       
        inputRef.current.blur()
    }


    function getCurrentDate(){ // retorna a data atual (no formato exigido pela API) de acordo com o pc onde ocorreu a requisicao
        const dateObj = new Date()
        const year = dateObj.getFullYear()
        const month = String(dateObj.getMonth()+1).padStart(2, '0') // a contagem do mes comeca no 0
        const day = String(dateObj.getDate()).padStart(2, '0')

        return `${year}${month}${day}`   // retorno: '20200622'
    }

    function getDateFromAPI(_validTime){ // entrada: 2023-10-25T16:20:27-0300
        const rawDate = _validTime.split('T')[0] // fica 2023-10-25
        const elements = rawDate.split('-')
        
        const day = String(elements[2]).padStart(2, '0')
        const month = String(elements[1]).padStart(2, '0')
        const year = String(elements[0])
        
        return `${day}/${month}/${year}`
    }

    function getHourFromAPI(_validTime){ // entrada: 2023-10-25T16:20:27-0300
        const rawHour = _validTime.split('T')[1] // fica 16:20:27-0300
        const elements = rawHour.split('-')[0].split(':')
        
        const hour = String(elements[0]).padStart(2, '0')
        const minutes = String(elements[1]).padStart(2, '0')
        
        return `${hour}:${minutes}`
    }


    return(
        <div className="search-bar glass-panel">
            <CiSearch size={'1.5em'} onClick={handleSubmit} />
            <textarea name="search-input" id="search-input" placeholder="City name" rows={1} ref={inputRef} value={input} onKeyDown={handleKeyDown} onChange={handleInputChange}></textarea>
            <AiOutlineLoading style={(isLoading)?{opacity:'100%'}:{opacity:'0%'}} size={'1.5em'} className='loading-icon' />
        </div>
    );
}

export default SearchBar;