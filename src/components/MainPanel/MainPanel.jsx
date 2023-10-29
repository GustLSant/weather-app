import React from 'react'
import { DataContext } from '../DataContext'
import SearchBar from '../SearchBar/SearchBar'
import './MainPanel.css'

import {
    WiDaySunny,          // ensolarado
    WiDaySunnyOvercast,  // partly nublado
    WiDayCloudy,         // mostly cloudy
    WiCloudy,            // cloudy
    WiDayShowers,        // rain
    WiDayStormShowers,   // tempestade chovendo
} from 'react-icons/wi'


function MainPanel(){
    const {data, city, weatherIcons} = React.useContext(DataContext)
    const Icon = Object.values(weatherIcons)[data.iconId] // pra renderizar como um component react, tem q comecar com letra maiuscula
    console.log(Object.values(weatherIcons))
    console.log(data.iconId)

    return(
        <div className="main-panel">
            <div className='main-panel__header'>
                <p className="app-name">Weather App</p>
                <SearchBar />
            </div>
            
            <p className='help-text'>Type your city&lsquo;s name in the search bar above and press Enter.</p>

            <div className='main-panel__div-infos'>
                <p>{data.dayOfWeek}, {data.date} <small>(dd/mm/yyyy)</small></p>
                <p>{data.hour} h</p>
                <p className="main-panel__hightlight">{city}</p>
                <div className="main-div-infos__div-temp">
                    <p>{data.temp}°C</p> {<Icon size={'1.5em'} />}
                </div>
                <p>Feels like: {data.tempFeel}°C</p>
                <p className="main-panel__hightlight">{data.description}</p>
            </div>
        </div>
    );
}

export default MainPanel;