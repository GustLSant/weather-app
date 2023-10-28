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
    const {data, city} = React.useContext(DataContext)

    return(
        <div className="main-panel">
            <div className='main-panel__header'>
                <p className="app-name">Weather App</p>
                <SearchBar />
            </div>
            
            <div className='main-panel__div-infos'>
                <p>{data.dayOfWeek}, {data.date} <small>(dd/mm/yyyy)</small></p>
                <p>{data.hour} h</p>
                <p className="main-panel__hightlight">{city}</p>
                <div className="main-div-infos__div-temp">
                    <p>{data.temp}°C</p> <WiDayCloudy size={'1.5em'}/>
                </div>
                <p>Feels like: {data.tempFeel}°C</p>
                <p className="main-panel__hightlight">{data.description}</p>
            </div>
        </div>
    );
}

export default MainPanel;