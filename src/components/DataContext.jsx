import React from "react"
import PropTypes from 'prop-types'

import {
    WiDaySunny,              // day-clear-sky
    WiDaySunnyOvercast,      // day-partly-cloudy
    WiDayCloudy,             // day-mostly-cloudy
    WiCloudy,                // day-cloudy
    WiDayShowers,            // day-raining

    WiNightClear,            // night-clear-sky
    WiNightAltPartlyCloudy,  // night-partly-cloudy
    WiNightAltCloudy,        // night-mostly-cloudy
    //WiCloudy,              // night-cloudy                (ta comentado pq ja foi declarado)
    WiNightAltShowers,       // night-raining
} from 'react-icons/wi'


export const DataContext = React.createContext()

export const DataProvider = ({children}) => {
    const [data, setData] = React.useState(
        {
            status: 'ok',
            dayOfWeek: 'Twesday',
            hour: '15:35',          // definido por codigo
            dayOrNight: 'D',
            date: '21/10/2023',     // definido por codigo
            temp: '38',
            tempFeel: '39',
            tempMax: '42',
            tempMin: '37',
            cloudCover: '65',
            precipChance: '10',
            currentPrecip: '0',
            humidity: '50',
            description: 'Mostly Cloudy',
            iconId: 5               // definido por codigo
        }
    )


    function getIconId(_dayOrNight, _currentPrecip, _cloudCover){
        let result = 0
        console.log('parametros passados para getIconId: ', _dayOrNight, _currentPrecip, _cloudCover)

        if(_dayOrNight === 'D'){
            if(_currentPrecip == 0){
                if(_cloudCover <= 25){
                    result = 0
                }
                else if(_cloudCover <= 50){
                    result = 1
                }
                else if(_cloudCover <= 75){
                    result = 2
                }
                else{
                    result = 3
                }
            }
            else{
              result = 4
            }
        }
        else{
            if(_currentPrecip == 0){
                if(_cloudCover <= 25){
                    result = 5
                }
                else if(_cloudCover <= 50){
                    result = 6
                }
                else if(_cloudCover <= 75){
                    result = 7
                }
                else{
                    result = 8
                }
            }
            else{
                result = 9
            }
        }

        console.log('funcao getId() rodou e retornou: ', result)
        return result
    }
    

    const bgImagesSources = {
        dayClearSky: 'day-clear-sky.jpg',                // iconID: 0
        dayPartlyCloudy: 'day-partially-cloudy.jpg',     // iconID: 1
        dayMostlyCloudy: 'day-mostly-cloudy.jpg',        // iconID: 2
        dayCloudy: 'day-cloudy.jpg',                     // iconID: 3
        dayRaining: 'day-raining.jpg',                   // iconID: 4

        nightClearSky: 'night-clear-sky-left.jpg',       // iconID: 5
        nightPartlyCloudy: 'night-partly-cloudy.jpg',    // iconID: 6
        nightMostlyCloudy: 'night-mostly-cloudy.jpg',    // iconID: 7
        nightCloudy: 'night-mostly-cloudy.jpg',          // iconID: 8
        nightRaining: 'night-raining-2.jpg',             // iconID: 9
    }

    const weatherIcons = {
        dayClearSky: WiDaySunny,              // iconID: 0
        dayPartlyCloudy: WiDaySunnyOvercast,  // iconID: 1
        dayMostlyCloudy: WiDayCloudy,         // iconID: 2
        dayCloudy: WiCloudy,                  // iconID: 3
        dayRaining: WiDayShowers,             // iconID: 4

        nightClearSky: WiDaySunny,            // iconID: 5
        nightPartlyCloudy: WiDaySunny,        // iconID: 6
        nightMostlyCloudy: WiDaySunny,        // iconID: 7
        nightCloudy: WiDaySunny,              // iconID: 8
        nightRaining: WiDaySunny,             // iconID: 9
    }

    const [city, setCity] = React.useState('Diamond City')


    return(
        <DataContext.Provider value={{data, setData, getIconId, city, setCity, weatherIcons, bgImagesSources}}>
            {children}
        </DataContext.Provider>
    )
}

DataProvider.propTypes = {
    children: PropTypes.object,
}